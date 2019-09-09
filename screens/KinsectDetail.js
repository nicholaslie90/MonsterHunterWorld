/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    Switch,
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {makeAdMob, productIdRemoveAds} from "../utility";
import * as database from '../database'
import {MonsterMaterialItem} from "./MonsterMaterials";
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

export default class KinsectDetailScreen extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            crafted: false,
            showAds: true,
        };
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.item.name : 'Kinsect Detail',
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {
                    scope: 'KinsectTrees',
                    theme: navigation.state.params.theme
                })} content={
                    <Image source={require('../assets/general/icon_search.png')} style={globalStyles.navSearch}/>
                }/>
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

        this._getCraftedValue(this.props.navigation.state.params.item);
    }

    render() {
        const {params} = this.props.navigation.state;

        //Theme
        let themeBackground = null;
        let themeText = null;
        let themeCrafted = '#b3e5fc';
        let themeSwitch = 'black';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeCrafted = null;
                themeSwitch = 'white';
            }
        }

        let materials = null;
        let hasMaterial = false;
        if (params.item.materials !== undefined) {
            hasMaterial = true;
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
        let materialHeading = null;
        if (hasMaterial) {
            materialHeading = <Text style={[globalStyles.heading1, themeText]}>Required Materials</Text>;
        }

        let cost = null;
        if (params.item.cost !== undefined) {
            cost = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <Text style={[{textAlign: 'left'}, globalStyles.heading2, themeText]}>Cost</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, globalStyles.heading2, themeText]}>{params.item.cost}z</Text>
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
                                <Image source={require('../assets/general/icon_completed.png')}
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
                                value={this.state.crafted}/>
                        </View>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={params.item.icon} style={Dimensions.get('window').width} resizeMode={'contain'}/>
                    </View>

                    <View style={{flex: 1, flexDirection: 'column', padding: 20}}>

                        {/*Rarity*/}
                        <View style={styles.rightContainer}>
                            <Text style={[{textAlign: 'right'}, themeText]}>Rarity: {params.item.rarity}</Text>
                        </View>

                        {/*Attack Type*/}
                        <View style={[styles.textContainer, {marginTop: 10}]}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/kinsects/icon_attack_type.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Attack
                                        Type</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.attackType}</Text>
                            </View>
                        </View>

                        {/*Dust Effect*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/kinsects/icon_dust_effect.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Dust
                                        Effect</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.dustEffect}</Text>
                            </View>
                        </View>

                        {/*Element*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/kinsects/icon_element.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text
                                        style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Element</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.element}</Text>
                            </View>
                        </View>

                        {/*Power*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/kinsects/icon_power.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Power</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>Lv {params.item.power}</Text>
                            </View>
                        </View>

                        {/*Speed*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/kinsects/icon_speed.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Speed</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>Lv {params.item.speed}</Text>
                            </View>
                        </View>

                        {/*Heal*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/kinsects/icon_heal.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Heal</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>Lv {params.item.heal}</Text>
                            </View>
                        </View>

                        {/*Materials*/}
                        {materialHeading}
                        {materials}

                        {/*Cost*/}
                        {cost}
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        );
    }

    async _getCraftedValue(item) {
        try {
            let value = await AsyncStorage.getItem("Kinsect" + item.name);
            this.setState({
                crafted: (value !== null && value === 'true')
            });
        } catch (error) {
            // Error retrieving data
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8761304776', 'ca-app-pub-9242567842673294/7251605579');
        } else {
            return null;
        }
    }

    async _toggleCrafted(value, item) {
        this.setState({crafted: value})
        try {
            if (value) {
                await AsyncStorage.setItem("Kinsect" + item.name, 'true');

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();
            } else {
                await AsyncStorage.setItem("Kinsect" + item.name, 'false');

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();
            }

        } catch (error) {
        }
    }
}