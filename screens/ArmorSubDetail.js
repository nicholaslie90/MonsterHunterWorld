/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react'
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
} from "react-native"
import globalStyles from '../styles';
import * as database from '../database';
import {MonsterMaterialItem} from './MonsterMaterials';
import {makeAdMob, productIdRemoveAds, returnRarityColor, returnSlot} from "../utility";
import {SkillItem} from "./Skills";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable"

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
let armorSetFound;

export default class ArmorSubDetailScreen extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            showAds: true,
            crafted: false,
        };

        this._isMounted = false;
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        let wishlist = null;
        if (params.showWishlist) {
            if (params.inWishlist) {
                wishlist = <MHWTouchable onPress={() => params.toggleWishlist()}
                                         content={<Image source={require('../assets/general/icon_wishlist_filled.png')}
                                                         style={globalStyles.navSearch}/>}/>;
            } else {
                wishlist = <MHWTouchable onPress={() => params.toggleWishlist()}
                                         content={<Image source={require('../assets/general/icon_wishlist.png')}
                                                         style={globalStyles.navSearch}/>}/>;
            }
        }

        return {
            title: params ? params.item.name : 'Armor Sub Detail',
            headerRight: (
                <View style={{flex: 1, flexDirection: 'row'}}>
                    {wishlist}
                    <MHWTouchable onPress={() => navigation.navigate('Search', {theme: navigation.state.params.theme})} content={
                        <Image source={require('../assets/general/icon_search.png')} style={globalStyles.navSearch}/>
                    }/>
                </View>
            ),
        };
    };

    async componentWillMount() {
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

        this._getCraftedValue(this.props.navigation.state.params.item)
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

        let slots = null;
        if (params.item.slots !== undefined) {
            let slotsArray = params.item.slots.split(' ');
            let slotImageStyle = {
                width: 20,
                height: 20,
                marginLeft: 10,
                resizeMode: 'contain'
            };
            slots = <View style={{flex: 1, flexDirection: 'row'}}>
                <Image source={returnSlot(slotsArray[0])} style={slotImageStyle}/>
                <Image source={returnSlot(slotsArray[1])} style={slotImageStyle}/>
                <Image source={returnSlot(slotsArray[2])} style={slotImageStyle}/>
            </View>
        }

        //Check for description
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

                <Text style={themeText}>{I18n.t(params.item.description).Translation}</Text>

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

        let howToGet = null;
        let howToGetHeader = null;
        if (params.item.howToGet !== undefined){
            howToGetHeader = <Text style={[globalStyles.heading2, themeText]}>How to Get</Text>;
            howToGet = <View style={{flexDirection: 'column', paddingTop: 20}}>
                {howToGetHeader}
                <Text style={themeText}>{I18n.t(params.item.howToGet).Translation}</Text>
            </View>
        }

        let skillText = null;
        let skillHeader = null;
        if (params.item.skills !== undefined) {
            skillHeader = <Text style={[globalStyles.heading2, themeText]}>Skills</Text>;
            skillText = params.item.skills.map((skill, index) => {
                let skillObject = _.find(database.skills, {'name': skill.name});
                return <SkillItem
                    key={skillObject.name}
                    item={skillObject}
                    navigation={this.props.navigation}
                    level={skill.level}
                    theme={this.props.navigation.state.params.theme}/>;
            })
        }

        let materials = null;
        let materialsHeader = null;
        if (params.item.materials !== undefined) {
            materialsHeader = <Text style={[globalStyles.heading2, themeText]}>Materials</Text>;
            materials = params.item.materials.map((material, index) => {
                let materialObject = _.find(database.monsterMaterials, {'name': material.name});

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

        let cost = null;
        if (params.item.cost !== undefined) {
            cost = <View style={[styles.textContainer, {marginBottom: 20}]}>
                <View style={styles.leftContainer}>
                    <Text style={[{textAlign: 'left'}, themeText, globalStyles.heading2]}>Cost</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText, globalStyles.heading2]}>{params.item.cost}z</Text>
                </View>
            </View>;
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
                                           marginRight: 10
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
                                value={this.state.crafted}
                                style={{marginTop: 4}}/>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'column', paddingLeft: 20, paddingTop: 20, paddingRight: 20}}>

                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image source={params.item.iconMale}
                                   resizeMode={'contain'}
                                   style={{width: 175, height: 175}}/>
                            <Image source={params.item.iconFemale}
                                   resizeMode={'contain'}
                                   style={{width: 175, height: 175}}/>
                        </View>

                        {/*Level - Rarity*/}
                        <View style={[styles.textContainer, {marginTop: 10}]}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Text style={[{textAlign: 'left'}, themeText]}>Level {params.item.level}</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={{
                                    color: returnRarityColor(params.item.rarity),
                                    textAlign: 'right'
                                }}>Rarity {params.item.rarity}</Text>
                            </View>
                        </View>

                        {/*Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_defense.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text
                                        style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Defense</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.defense}</Text>
                            </View>
                        </View>

                        {/*Slots*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_slots.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Slots</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                {slots}
                            </View>
                        </View>

                        {/*Fire Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_fire.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Vs.
                                        Fire</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.vsFire}</Text>
                            </View>
                        </View>

                        {/*Water Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_water.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Vs.
                                        Water</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.vsWater}</Text>
                            </View>
                        </View>

                        {/*Thunder Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_thunder.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Vs.
                                        Thunder</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.vsThunder}</Text>
                            </View>
                        </View>

                        {/*Ice Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_ice.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Vs.
                                        Ice</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.vsIce}</Text>
                            </View>
                        </View>

                        {/*Dragon Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_dragon.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Vs.
                                        Dragon</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.vsDragon}</Text>
                            </View>
                        </View>

                        {/*Description*/}
                        {description}

                        {/*How to Get*/}
                        {howToGet}

                        {/*Skills*/}
                        <View style={{paddingTop: 20}}>
                            {skillHeader}
                            {skillText}
                        </View>

                        {/*Materials*/}
                        <View style={{paddingTop: 20}}>
                            {materialsHeader}
                            {materials}
                        </View>

                        {/*Cost*/}
                        {cost}

                    </View>

                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        );
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;

        if (Platform.OS === 'android') {
            InAppBilling.close();
        }
    }

    async _getCraftedValue(item) {
        try {
            let value = await AsyncStorage.getItem("ArmorComponent" + item.name);
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

                //Find the armor set for this component
                let armors = _.concat(database.lowRankArmors, database.highRankArmors);
                _.forEach(armors, (armorSet) => {
                    if (armorSet.head !== undefined) {
                        if (armorSet.head.name === item.name) {
                            armorSetFound = armorSet;
                            return false;
                        }
                    }
                    if (armorSet.upperBody !== undefined) {
                        if (armorSet.upperBody.name === item.name) {
                            armorSetFound = armorSet;
                            return false;
                        }
                    }
                    if (armorSet.hands !== undefined) {
                        if (armorSet.hands.name === item.name) {
                            armorSetFound = armorSet;
                            return false;
                        }
                    }
                    if (armorSet.lowerBody !== undefined) {
                        if (armorSet.lowerBody.name === item.name) {
                            armorSetFound = armorSet;
                            return false;
                        }
                    }
                    if (armorSet.legs !== undefined) {
                        if (armorSet.legs.name === item.name) {
                            armorSetFound = armorSet;
                            return false;
                        }
                    }
                });

                //See if the item is in wishlist
                let value = await AsyncStorage.getItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'ArmorComponent' + '~' + armorSetFound.name);
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
            return makeAdMob('ca-app-pub-9242567842673294/5263923210', 'ca-app-pub-9242567842673294/6667892467');
        } else {
            return null;
        }
    }

    async _setItemState() {
        let value = await AsyncStorage.getItem("ArmorComponent" + this.props.item.name);
        if (this._isMounted) {
            this.setState({
                crafted: (value !== null && value === 'true'),
                craftedOpacity: (value !== null && value === 'true') ? 0.5 : 1
            });
        }
    }

    async _toggleCrafted(value, item) {
        this.setState({crafted: value})
        try {
            if (value) {
                await AsyncStorage.setItem("ArmorComponent" + item.name, 'true');
                await AsyncStorage.removeItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'ArmorComponent' + '~' + armorSetFound.name);

                if (this.props.navigation.state.params.parent !== undefined) {
                    this.props.navigation.state.params.parent._setItemState();
                }

                this.props.navigation.setParams({
                    showWishlist: false,
                });

                if (this.props.navigation.state.params.wishlist !== undefined) {
                    this.props.navigation.state.params.wishlist._refreshData();
                }
            } else {
                await AsyncStorage.setItem("ArmorComponent" + item.name, 'false');

                if (this.props.navigation.state.params.parent !== undefined) {
                    this.props.navigation.state.params.parent._setItemState();
                }

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
            AsyncStorage.removeItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'ArmorComponent' + '~' + armorSetFound.name);
        } else {
            if (Platform.OS === 'android') {
                ToastAndroid.show('Added to wishlist.', ToastAndroid.SHORT);
            }
            AsyncStorage.setItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'ArmorComponent' + '~' + armorSetFound.name, 'true');
        }

        if (this.props.navigation.state.params.wishlist !== undefined) {
            this.props.navigation.state.params.wishlist._refreshData();
        }
    }
}