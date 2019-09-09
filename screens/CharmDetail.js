/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    Switch,
    StyleSheet,
    Text,
    ToastAndroid,
    View
} from "react-native";
import globalStyles from '../styles'
import {skills, monsterMaterials} from '../database';
import {makeAdMob, productIdRemoveAds, returnRarityColor} from "../utility";
import {MonsterMaterialItem} from "./MonsterMaterials";
import {SkillItem} from "./Skills";
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        marginTop: 10,
    },
    textContainer: {
        flexDirection: 'row',
        height: 30,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    rowLabelText: {
        color: "#0B1219",
        fontSize: 16.0,
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export default class CharmDetailScreen extends React.PureComponent {
    state = {
        crafted: false,
        showAds: true
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        let wishlist = null;
        if (params.showWishlist) {
            if (params.inWishlist) {
                wishlist = <MHWTouchable onPress={() => params.toggleWishlist()} content={
                    <Image source={require('../assets/general/icon_wishlist_filled.png')}
                           style={globalStyles.navSearch}/>
                }/>;
            } else {
                wishlist = <MHWTouchable onPress={() => params.toggleWishlist()} content={
                    <Image source={require('../assets/general/icon_wishlist.png')} style={globalStyles.navSearch}/>
                }/>;
            }
        }

        return {
            title: params ? params.item.name : 'Charm Detail',
            headerRight: (
                <View style={{flex: 1, flexDirection: 'row'}}>
                    {wishlist}
                    <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'Charms', theme: navigation.state.params.theme})} content={
                        <Image source={require('../assets/general/icon_search.png')} style={globalStyles.navSearch}/>
                    }/>
                </View>
            ),
        };
    };

    async componentWillMount() {
        this._getCraftedValue(this.props.navigation.state.params.item);

        let stateObject = {};
        let isPurchased = await AsyncStorage.getItem('removeAds');
        if (isPurchased === 'true') {
            stateObject['showAds'] = false;
        } else {
            stateObject['showAds'] = true;

            //Check if user has purchased Remove Ads
            if (Platform.OS === 'android') {
                await InAppBilling.close();
                try {
                    await InAppBilling.open();
                    let isPurchased = await InAppBilling.isPurchased(productIdRemoveAds);
                    if (isPurchased) {
                        await AsyncStorage.setItem('removeAds', 'true');
                        stateObject['showAds'] = false;
                    } else {
                        stateObject['showAds'] = true;
                    }
                } finally {
                    await InAppBilling.close();
                }
            }
        }

        this.setState(stateObject);
    }

    render() {
        const {params} = this.props.navigation.state;

        //Theme
        let themeBackground = null;
        let themeText = null;
        let themeSeparator = '#f5f5f5';
        let themeCrafted = '#b3e5fc';
        let themeSwitch = 'black';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeSeparator = 'white';
                themeCrafted = null;
                themeSwitch = 'white';
            }
        }

        let description = null;
        if (params.item.description !== undefined) {
            description = <View><View
                style={{borderTopColor: themeSeparator, borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0}}/>
                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 3,
                    marginBottom: 10
                }}/>

                <Text style={themeText}>{params.item.description}</Text>

                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 10
                }}/>
                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 3
                }}/>
            </View>;
        }

        let skillText = null;
        if (params.item.skills !== undefined) {
            skillText = params.item.skills.map((skill, index) => {
                let skillObject = _.find(skills, {'name': skill});
                if (skillObject !== undefined) {
                    return <SkillItem
                        key={skillObject.name}
                        item={skillObject}
                        navigation={this.props.navigation}
                        level={params.item.level}
                        theme={this.props.navigation.state.params.theme}/>;
                } else {
                    return null;
                }
            })
        }

        let materials = null;
        let hasMaterial = false;
        if (params.item.materials !== undefined) {
            materials = params.item.materials.map((material, index) => {
                let materialObject = _.find(monsterMaterials, {'name': material.name});

                if (materialObject !== undefined) {
                    return <MonsterMaterialItem key={`${material.name}`} item={materialObject}
                                                navigation={this.props.navigation} quantity={material.quantity}
                                                theme={this.props.navigation.state.params.theme}/>
                }
                else {
                    return <View key={`${material.name}`} style={styles.textContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={[{textAlign: 'left'}, themeText]}> {material.name}</Text>
                        </View>

                        <View style={styles.rightContainer}>
                            <Text style={[{textAlign: 'right'}, themeText]}> x {material.quantity}</Text>
                        </View>
                    </View>;
                }
            })
        }
        let materialHeading = null;
        if (hasMaterial) {
            materialHeading = <Text style={[globalStyles.heading1, themeText]}>Required Materials</Text>;
        }

        let cost = null;
        if (params.item.cost !== undefined) {
            cost = <View style={[styles.textContainer, {marginBottom: 20}]}>
                <View style={styles.leftContainer}>
                    <Text style={[globalStyles.heading1, themeText, {textAlign: 'left'}]}>Cost</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[globalStyles.heading1, themeText, {textAlign: 'right'}]}>{params.item.cost}z</Text>
                </View>
            </View>;
        }

        let notes = null;
        if (params.item.notes !== undefined) {
            notes = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading1, themeText]}>Notes</Text>
                <Text style={themeText}>{params.item.notes}</Text>
            </View>
        }


        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <ScrollView>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: themeCrafted,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                        <View style={styles.leftContainer}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Image source={require('../assets/general/icon_crafted.png')}
                                       style={{
                                           alignItems: 'flex-start',
                                           width: 20,
                                           height: 20,
                                           marginTop: 10,
                                           marginRight: 16
                                       }}/>
                                <Text style={[globalStyles.heading2, themeText]}>Crafted?</Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                            <Switch
                                onValueChange={(value) => this._toggleCrafted(value, params.item)}
                                thumbColor={themeSwitch}
trackColor='grey'
tintColor='grey'
                                value={this.state.crafted}/>
                        </View>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={params.item.icon} style={{
                            width: 150, height: 150
                        }} resizeMode={'contain'}/>
                    </View>

                    <View style={{flex: 1, flexDirection: 'column', padding: 20}}>

                        {/*Upgrade Lv and Rarity*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <Text style={[{textAlign: 'left'}, themeText]}>Upgrade Lv {params.item.upgradeLv}</Text>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={{textAlign: 'right', color: returnRarityColor(params.item.rarity)}}>Rarity {params.item.rarity}</Text>
                            </View>
                        </View>

                        {description}

                        <Text style={[globalStyles.heading1, themeText]}>Skill</Text>
                        {skillText}


                        {/*Materials*/}
                        {materialHeading}
                        {materials}

                        {/*Cost*/}
                        {cost}

                        {/*Notes*/}
                        {notes}
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        );
    }

    async _getCraftedValue(item) {
        try {
            let value = await AsyncStorage.getItem("Charm" + item.name);
            let isCrafted = (value !== null && value === 'true');
            this.setState({
                crafted: isCrafted
            });

            if (isCrafted) {
                this.props.navigation.setParams({
                    showWishlist: false,
                    toggleWishlist: this._toggleWishlist,
                });
            } else {
                this.props.navigation.setParams({
                    showWishlist: true,
                    toggleWishlist: this._toggleWishlist,
                });

                //See if the item is in wishlist
                let value = await AsyncStorage.getItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'Charm' + '~' + this.props.navigation.state.params.item.name);
                if (value === 'true') {
                    this.props.navigation.setParams({inWishlist: true});
                } else {
                    this.props.navigation.setParams({inWishlist: false});
                }
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/1249662177', 'ca-app-pub-9242567842673294/4780095727');
        } else {
            return null;
        }
    }

    async _toggleCrafted(value, item) {
        this.setState({crafted: value})
        try {
            if (value) {
                await AsyncStorage.setItem("Charm" + item.name, 'true');
                await AsyncStorage.removeItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'Charm' + '~' + this.props.navigation.state.params.item.name);

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();

                this.props.navigation.setParams({
                    showWishlist: false,
                });

                if (this.props.navigation.state.params.wishlist !== undefined) {
                    this.props.navigation.state.params.wishlist._refreshData();
                }
            } else {
                await AsyncStorage.setItem("Charm" + item.name, 'false');

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();

                this.props.navigation.setParams({
                    showWishlist: true,
                });
            }

        } catch (error) {
        }
    }

    _toggleWishlist = () => {
        let currentValue = this.props.navigation.state.params.inWishlist;

        if (currentValue === undefined) {
            currentValue = false;
        }

        this.props.navigation.setParams({
            inWishlist: !currentValue
        });

        if (currentValue) {
            if (Platform.OS === 'android') {
                ToastAndroid.show('Removed from wishlist.', ToastAndroid.SHORT);
            }
            AsyncStorage.removeItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'Charm' + '~' + this.props.navigation.state.params.item.name);
        } else {
            if (Platform.OS === 'android') {
                ToastAndroid.show('Added to wishlist.', ToastAndroid.SHORT);
            }
            AsyncStorage.setItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'Charm' + '~' + this.props.navigation.state.params.item.name, 'true');
        }

        if (this.props.navigation.state.params.wishlist !== undefined) {
            this.props.navigation.state.params.wishlist._refreshData();
        }
    }
}