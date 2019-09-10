/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Button,
    Dimensions,
    FlatList,
    Image,
    Linking,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {largeMonsters} from '../database'
import {makeAdMob, productIdRemoveAds, returnWeaponElement} from "../utility";
import {MonsterMaterialItem} from "./MonsterMaterials";
import {QuestItem} from "./Quests";
import {monsterMaterials, assignedQuests, optionalQuests, specialAssignmentsQuests, eventQuests} from "../database";
import PhotoView from 'react-native-photo-view';
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        marginTop: 10,
    },
    textContainer: {
        flexDirection: 'row',
    },
    leftContainer: {
        flex: 4,
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

export class MonsterLootComponent extends React.PureComponent {
    render() {
        //Theme
        let themeText = null;
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }
        let item = this.props.item;

        return item.map((item, index) => {
            let materialObject = _.find(monsterMaterials, {'name': item.name});
            if (materialObject !== undefined) {
                return <View key={`${item.name + index}`}
                             style={{flex: 1, flexDirection: 'column', marginTop: 20}}>
                    <MonsterMaterialItem key={`${item.name}`} item={materialObject}
                                         navigation={this.props.navigation} noMarginLeft theme={this.props.theme}/>
                    <View>{item.statistics.map((item, index) => {
                        let actionQuantity = item.action + " ( x" + item.quantity + ")";
                        return <View key={`${item.action + index}`} style={{marginTop: 6}}>
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Text
                                            style={[{
                                                alignItems: 'flex-end',
                                                textAlign: 'left'
                                            }, themeText]}>{actionQuantity}</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text
                                        style={[{textAlign: 'right'}, themeText]}>{item.percentage}%</Text>
                                </View>
                            </View>
                        </View>
                    })}</View>
                </View>;
            }
            else {
                return <View key={`${item.name}`}
                             style={{flex: 1, flexDirection: 'column', marginTop: 6, marginBottom: 6}}>
                    <Text style={[{fontSize: 18, padding: 4}, themeText]}>{item.name}</Text>
                    <View>{item.statistics.map((item, index) => {
                        return <View key={`${item.action}`}>
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Text
                                            style={[{
                                                alignItems: 'flex-end',
                                                textAlign: 'left'
                                            }, themeText]}>{item.action}
                                            (x{item.quantity})</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text
                                        style={[{textAlign: 'right'}, themeText]}>{item.percentage}%</Text>
                                </View>
                            </View>
                        </View>
                    })}</View>
                </View>;
            }
        });
    }
}

class MonsterLowRankLootComponent extends React.PureComponent {
    render() {
        return this.props.items.map((item, index) => {
            if (item.lowRank !== undefined) {
                return <MonsterLootComponent key={item.name + index} item={item.lowRank}
                                             navigation={this.props.navigation} theme={this.props.theme}/>
            }
        });
    }
}

class MonsterHighRankLootComponent extends React.PureComponent {
    render() {
        return this.props.items.map((item, index) => {
            if (item.highRank !== undefined) {
                return <MonsterLootComponent key={item.name + index} item={item.highRank}
                                             navigation={this.props.navigation} theme={this.props.theme}/>
            }
        });
    }
}

export default class MonsterDetailScreen extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            showAds: true,
            miniatureCrown: false,
            giantCrown: false,
            showCrown: false
        };

        this._isMounted = false;
    }


    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? I18n.t(params.item.translationKey).Translation : 'Monster Detail',
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'Monsters', theme: navigation.state.params.theme})}
                              content={
                                  <Image source={require('../assets/general/icon_search.png')}
                                         style={globalStyles.navSearch}/>
                              }/>
            ),
        };
    };

    async componentWillMount() {
        let stateObject = {};
        await this._getCrownValue(this.props.navigation.state.params.item);

        let largeMonster = _.find(largeMonsters, {name: this.props.navigation.state.params.item.name});
        if (largeMonster !== undefined) {
            stateObject['showCrown'] = true;
        }

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
        let themeSwitch = 'black';
        let themeCrown = '#b3e5fc';
        let themeSeparator = '#f5f5f5'
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeSwitch = 'white';
                themeCrown = null;
                themeSeparator = 'white';
            }
        }

        //Check for crown
        let crown = null;
        if (this.state.showCrown) {
            crown = <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: themeCrown,
                padding: 20,
                alignItems: 'center'
            }}>
                {/*Miniature Crown*/}
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../assets/general/icon_miniature_crown.png')}
                                   style={{
                                       alignItems: 'flex-start',
                                       width: 20,
                                       height: 20,
                                       marginRight: 10
                                   }}/>
                            <Text style={[{fontSize: 20}, themeText]}>Miniature Crown</Text>
                        </View>
                    </View>
                    <View style={[styles.rightContainer, {alignItems: 'center'}]}>
                        <Switch
                            onValueChange={(value) => this._toggleCrown(value, params.item, 'Miniature')}
                            thumbColor={themeSwitch}

                            trackColor='grey'
tintColor='grey'
                            value={this.state.miniatureCrown}/>
                    </View>
                </View>

                {/*Giant Crown*/}
                <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../assets/general/icon_giant_crown.png')}
                                   style={{
                                       alignItems: 'flex-start',
                                       width: 20,
                                       height: 20,
                                       marginRight: 10
                                   }}/>
                            <Text style={[{fontSize: 20}, themeText]}>Giant Crown</Text>
                        </View>
                    </View>
                    <View style={[styles.rightContainer, {alignItems: 'center'}]}>
                        <Switch
                            onValueChange={(value) => this._toggleCrown(value, params.item, 'Giant')}
                            thumbColor={themeSwitch}

                            trackColor='grey'
tintColor='grey'
                            value={this.state.giantCrown}/>
                    </View>
                </View>
            </View>
        }

        //Check for Base HP
        let baseHP = null;
        if (params.item.baseHP !== undefined) {
            baseHP = <Text style={themeText}>Base HP: {params.item.baseHP}</Text>;
        }

        //Check for Capture
        let capture = null;
        if (params.item.captureHP !== undefined) {
            capture = <Text style={themeText}>Capture at: {params.item.captureHP}</Text>;
        }

        //Check for Earplugs
        let earplugs = null;
        if (params.item.earplugs !== undefined) {
            earplugs = <Text style={themeText}>Earplugs Level: {params.item.earplugs}</Text>
        }

        //Check for Behavior
        let behavior = null;
        let behaviorHeader = null;
        if (params.item.behavior !== undefined) {
            behaviorHeader = <Text style={[globalStyles.heading1, themeText]}>Behavior</Text>
            behavior = <Text style={themeText}>{params.item.behavior}</Text>
        }

        //Check for Characteristics
        let characteristics = null;
        if (params.item.characteristics !== undefined) {
            characteristics = <View><View
                style={{borderTopColor: themeSeparator, borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0}}/>
                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 3,
                    marginBottom: 10
                }}/>

                <Text style={themeText}>{I18n.t(params.item.characteristics).Translation}</Text>

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
            </View>
        }

        //Check for Useful Information
        let usefulInformation = null;
        let usefulInformationHeader = null;
        if (params.item.usefulInformation !== undefined) {
            usefulInformationHeader = <Text style={[globalStyles.heading1, themeText]}>Useful Information</Text>
            usefulInformation = <Text style={themeText}>{I18n.t(params.item.usefulInformation).Translation}</Text>
        }

        //Check for Tempered
        let tempered = null;
        if (params.item.temperedThreatLevel !== undefined) {
            tempered = <Text style={themeText}>Tempered Threat Level: {params.item.temperedThreatLevel}</Text>
        }

        //Check for Attack Element
        let attackElement = null;
        let attackElementHeader = null;
        if (params.item.attackElement !== undefined) {
            attackElementHeader = <Text style={[globalStyles.heading1, themeText]}>Attack Element</Text>
            attackElement = params.item.attackElement.map((element, index) => {
                return <View key={index} style={styles.textContainer}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={returnWeaponElement(element.split(' ')[0])}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>{element}</Text>
                        </View>
                    </View>
                </View>
            });
        }

        //Check for Attack Ailment
        let attackAilment = null;
        if (params.item.attackAilment !== undefined) {
            attackAilment = <Text style={themeText}>Attack Ailment: {params.item.attackAilment}</Text>
        }

        //Check for Small Crown, Silver Crown and Gold Crown
        let smallCrown = null;
        let silverCrown = null;
        let goldCrown = null;
        let crownStyle = {
            width: 20,
            height: 20,
            margin: 10
        };
        if (params.item.smallCrown !== undefined) {
            smallCrown = <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/general/icon_small_crown.png')} style={crownStyle}/>
                <Text style={themeText}>{params.item.smallCrown}</Text>
            </View>
        }
        if (params.item.silverCrown !== undefined) {
            silverCrown = <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/general/icon_silver_crown.png')} style={crownStyle}/>
                <Text style={themeText}>{params.item.silverCrown}</Text>
            </View>
        }
        if (params.item.goldCrown !== undefined) {
            goldCrown = <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/general/icon_gold_crown.png')} style={crownStyle}/>
                <Text style={themeText}>{params.item.goldCrown}</Text>
            </View>
        }
        let crowns = <View style={{flexDirection: 'row', marginRight: 20}}>
            {smallCrown}
            {silverCrown}
            {goldCrown}
        </View>;

        let youTube = <View>
            <Text style={[globalStyles.heading1, themeText]}>Related YouTube Videos</Text>
            <Button
                onPress={() => {
                    Linking.openURL('https://www.youtube.com/results?search_query=' + params.item.name + '+monster+hunter+world');
                }}
                title="Search on YouTube"
                color="#F80016"
                accessibilityLabel="Search on YouTube"
            />
        </View>;

        let feystoneStreamstones = null;
        let feystoneStreamStonesHeading = null;
        if (params.item.feystoneStreamstones !== undefined){
            feystoneStreamStonesHeading = <Text style={[globalStyles.heading1, themeText]}>Feystones / Streamstones Drop Rate</Text>;
            feystoneStreamstones = params.item.feystoneStreamstones.map((feystoneStreamstone, index)=>{
                let icon = null;
                switch (feystoneStreamstone.name) {
                    case 'Mysterious Feystone':
                        icon = require('./../assets/decorations/mysterious-feystone.png');
                        break;

                    case 'Gleaming Feystone':
                        icon = require('./../assets/decorations/gleaming-feystone.png');
                        break;

                    case 'Warped Feystone':
                        icon = require('./../assets/decorations/warped-feystone.png');
                        break;

                    case 'Worn Feystone':
                        icon = require('./../assets/decorations/worn-feystone.png');
                        break;

                    case 'Warrior Streamstone':
                        icon = require('./../assets/monster_materials/warrior-streamstone.jpg');
                        break;

                    case 'Hero Streamstone':
                        icon = require('./../assets/monster_materials/hero-streamstone.jpg');
                        break;
                }

                return <View key={index}>
                    <View style={styles.textContainer}>
                        <View style={styles.leftContainer}>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={icon}
                                       style={globalStyles.leftImage}/>
                                <Text style={[{
                                    alignItems: 'flex-end',
                                    textAlign: 'left'
                                }, themeText]}>{feystoneStreamstone.name}</Text>
                            </View>
                        </View>

                        <View style={styles.rightContainer}>
                            <Text
                                style={[themeText, {textAlign: 'right'}]}>{feystoneStreamstone.chance}%</Text>
                        </View>
                    </View>
                </View>;
            })
        }

        //Check for High Rank Loot
        let highRankLoot = null;
        let highRankLootHeader = null;
        if (params.item.loot !== undefined) {
            params.item.loot.map((item, index) => {
                if (item.highRank !== undefined) {
                    highRankLootHeader = <Text style={[globalStyles.heading1, themeText]}>High-Rank Loot Chance</Text>;
                    highRankLoot =
                        <MonsterHighRankLootComponent key={item.name + index} items={params.item.loot}
                                                      navigation={this.props.navigation}
                                                      theme={this.props.navigation.state.params.theme}/>
                }
            });
        }

        //Check for Low Rank Loot
        let lowRankLoot = null;
        let lowRankLootHeader = null;
        if (params.item.loot !== undefined) {
            params.item.loot.map((item, index) => {
                if (item.lowRank !== undefined) {
                    lowRankLoot =
                        <MonsterLowRankLootComponent items={params.item.loot} navigation={this.props.navigation}
                                                     theme={this.props.navigation.state.params.theme}/>
                    lowRankLootHeader = <Text style={[globalStyles.heading1, themeText]}>Low-Rank Loot Chance</Text>;
                }
            });

        }

        //Check for Resistances
        let resistances = null;
        let resistancesHeader = null;
        if (params.item.resistances !== undefined) {
            resistancesHeader = <Text style={[globalStyles.heading1, themeText]}>Resistances</Text>
            resistances = params.item.resistances.map((resistance, index) => {
                return <View key={index} style={styles.textContainer}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={returnWeaponElement(resistance.split(' ')[0])}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>{resistance}</Text>
                        </View>
                    </View>
                </View>
            });
        }

        //Check for Weaknesses
        let weakness = null;
        let weaknessHeader = null;
        let weaknessFire = null;
        let weaknessWater = null;
        let weaknessThunder = null;
        let weaknessIce = null;
        let weaknessDragon = null;
        let weaknessPinchInstructions = null;
        if (params.item.weakness !== undefined) {
            weaknessHeader = <Text style={[globalStyles.heading1, themeText]}>Weakness</Text>;
            if (params.item.weaknessFire !== undefined) {
                weaknessFire = <View style={styles.textContainer}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/general/icon_fire.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Fire</Text>
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        {this._getStars(params.item.weaknessFire)}
                    </View>
                </View>
            }

            if (params.item.weaknessWater !== undefined) {
                weaknessWater = <View style={styles.textContainer}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/general/icon_water.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Water</Text>
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        {this._getStars(params.item.weaknessWater)}
                    </View>
                </View>
            }

            if (params.item.weaknessThunder !== undefined) {
                weaknessThunder = <View style={styles.textContainer}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/general/icon_thunder.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Thunder</Text>
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        {this._getStars(params.item.weaknessThunder)}
                    </View>
                </View>
            }

            if (params.item.weaknessIce !== undefined) {
                weaknessIce = <View style={styles.textContainer}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/general/icon_ice.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Ice</Text>
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        {this._getStars(params.item.weaknessIce)}
                    </View>
                </View>
            }

            if (params.item.weaknessDragon !== undefined) {
                weaknessDragon = <View style={styles.textContainer}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/general/icon_dragon.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Dragon</Text>
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        {this._getStars(params.item.weaknessDragon)}
                    </View>
                </View>
            }

            weaknessPinchInstructions = <Text style={[globalStyles.subtitle, themeText]}>Pinch to zoom image.</Text>;
            weakness = <PhotoView
                source={params.item.weakness}
                minimumZoomScale={1}
                maximumZoomScale={3}
                androidScaleType="fitCenter"
                style={{width: Dimensions.get('window').width - 40, height: 250}}/>;
        }

        //Check for Weakness Parentheses
        let weaknessParentheses = null;
        if (params.item.weaknessParentheses !== undefined) {
            weaknessParentheses =
                <Text style={[{alignSelf: 'flex-end'}, themeText]}>"( )" {params.item.weaknessParentheses}</Text>
        }

        //Check for Ailments
        let ailmentHeader = null;
        let ailmentPoison = null;
        let ailmentSleep = null;
        let ailmentParalysis = null;
        let ailmentBlast = null;
        let ailmentStun = null;
        if (params.item.ailmentPoison !== undefined) {
            ailmentHeader = <Text style={[globalStyles.heading1, themeText]}>Ailments</Text>;
            ailmentPoison = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={require('../assets/general/icon_poison.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Poison</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    {this._getStars(params.item.ailmentPoison)}
                </View>
            </View>
        }

        if (params.item.ailmentSleep !== undefined) {
            ailmentSleep = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={require('../assets/general/icon_sleep.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Sleep</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    {this._getStars(params.item.ailmentSleep)}
                </View>
            </View>
        }

        if (params.item.ailmentParalysis !== undefined) {
            ailmentParalysis = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={require('../assets/general/icon_paralysis.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Paralysis</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    {this._getStars(params.item.ailmentParalysis)}
                </View>
            </View>
        }

        if (params.item.ailmentBlast !== undefined) {
            ailmentBlast = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={require('../assets/general/icon_blast.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Blast</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    {this._getStars(params.item.ailmentBlast)}
                </View>
            </View>
        }

        if (params.item.ailmentStun !== undefined) {
            ailmentStun = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={require('../assets/general/icon_stun.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Stun</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    {this._getStars(params.item.ailmentStun)}
                </View>
            </View>
        }

        //Check for highRankRewards
        let highRankRewards = null;
        let highRankRewardsHeader = null;
        let highRankRewardsPinchInstructions = null;
        if (params.item.highRankRewards !== undefined) {
            highRankRewardsHeader = <Text style={[globalStyles.heading1, themeText]}>High-rank Rewards</Text>
            highRankRewards = <PhotoView
                source={params.item.highRankRewards}
                minimumZoomScale={1}
                maximumZoomScale={3}
                androidScaleType="fitCenter"
                style={{width: Dimensions.get('window').width - 40, height: 250}}/>;
            highRankRewardsPinchInstructions =
                <Text style={[globalStyles.subtitle, themeText]}>Pinch to zoom image.</Text>;
        }


        //Check for Notes
        let notes = null;
        let notesHeader = null;
        if (params.item.notes !== undefined) {
            notesHeader = <Text style={[globalStyles.heading1, themeText]}>Notes</Text>;
            notes = <Text style={themeText}>{params.item.notes}</Text>
        }

        //Check for related Quests
        let quests = null;
        let questsHeader = null;
        let questsArray = [];
        let combinedQuests = _.concat(assignedQuests, optionalQuests, specialAssignmentsQuests, eventQuests);
        _.forEach(combinedQuests, (quest) => {
            _.forEach(quest.targetMonsters, (targetMonster) => {
                if (targetMonster === params.item.name) {
                    questsArray.push(quest);
                }
            });
        });
        if (questsArray.length > 0) {
            questsHeader = <Text style={[globalStyles.heading1, themeText]}>Quests</Text>;
            quests = questsArray.map((quest, index) => {
                return <QuestItem key={quest.name + index} item={quest} navigation={this.props.navigation}
                                  theme={this.props.navigation.state.params.theme}/>;
            })
        }

        //Check for Crown Chance
        let giantCrown = null;
        let miniatureCrown = null;
        let crownChanceHeader = null;
        if (params.item.giantCrown !== undefined || params.item.miniatureCrown !== undefined) {
            crownChanceHeader = <Text style={[globalStyles.heading1, themeText]}>Crown Chance</Text>
        }
        if (params.item.giantCrown !== undefined) {
            let giantCrownQuests = [];
            params.item.giantCrown.map((quest) => {
                let questFound = _.find(combinedQuests, {name: quest});
                if (questFound !== undefined) {
                    giantCrownQuests.push(questFound);
                }
            });
            giantCrown = <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/general/icon_giant_crown.png')}
                           style={[globalStyles.leftImage, {marginTop: 6}]}/>
                    <Text style={[globalStyles.heading3, themeText, {alignItems: 'flex-end', textAlign: 'left'}]}>Giant
                        Crown</Text>
                </View>
                <FlatList
                    data={giantCrownQuests}
                    renderItem={({item}) => <QuestItem key={item.name} item={item} navigation={this.props.navigation}
                                                       theme={this.props.navigation.state.params.theme}/>}
                    keyExtractor={(item, index) => item.name}
                />
            </View>;
        }
        if (params.item.miniatureCrown !== undefined) {
            let miniatureCrownQuests = [];
            params.item.miniatureCrown.map((quest) => {
                let questFound = _.find(combinedQuests, {name: quest});
                if (questFound !== undefined) {
                    miniatureCrownQuests.push(questFound);
                }
            });
            miniatureCrown = <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/general/icon_miniature_crown.png')}
                           style={[globalStyles.leftImage, {marginTop: 6}]}/>
                    <Text style={[globalStyles.heading3, themeText, {alignItems: 'flex-end', textAlign: 'left'}]}>Miniature
                        Crown</Text>
                </View>
                <FlatList
                    data={miniatureCrownQuests}
                    renderItem={({item}) => <QuestItem key={item.name} item={item} navigation={this.props.navigation}
                                                       theme={this.props.navigation.state.params.theme}/>}
                    keyExtractor={(item, index) => item.name}
                />
            </View>;
        }

        //Check for Hit Data
        let hitDataHeader = null;
        let hitDataRender = null;
        let hitDataScrollView = null;
        if (params.item.hitData !== undefined) {
            hitDataHeader = <Text style={[globalStyles.heading1, themeText]}>Hit Data</Text>;
            hitDataScrollView = <ScrollView horizontal={true}>
                {
                    params.item.hitData.map((hitData, index) => {
                        return <View key={index} style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingLeft: 10,
                            paddingRight: 10
                        }}>
                            <Text style={[{textAlign: 'center'}, themeText]}>{hitData.name}</Text>
                            {
                                hitData.hit.map((hit, index) => {
                                    return <Text key={index}
                                                 style={[{
                                                     height: 20,
                                                     textAlign: 'center'
                                                 }, themeText]}>{hit.value}</Text>
                                })
                            }
                        </View>
                    })
                }
            </ScrollView>;
            hitDataRender = <View style={{flexDirection: 'row', marginTop: 10}}>
                {/*<Text style={[globalStyles.heading2, {marginTop: 20}]}>{hitData.name}</Text>*/}
                <View style={{flexDirection: 'column'}}>
                    {/*This is intentional*/}
                    <Text> </Text>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/weapons/icon_great_sword.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Sever</Text>
                        </View>
                    </View>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/weapons/icon_hammer.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Blunt</Text>
                        </View>
                    </View>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/weapons/icon_light_bowgun.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Shot</Text>
                        </View>
                    </View>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/general/icon_fire.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Fire</Text>
                        </View>
                    </View>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/general/icon_water.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Water</Text>
                        </View>
                    </View>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/general/icon_thunder.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Thunder</Text>
                        </View>
                    </View>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/general/icon_ice.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Ice</Text>
                        </View>
                    </View>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/general/icon_dragon.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Dragon</Text>
                        </View>
                    </View>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/general/icon_stun.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Stun</Text>
                        </View>
                    </View>
                </View>
                {hitDataScrollView}
            </View>
        }

        //Check for Flinch / Wound / Sever
        let flinchWoundSever = null;
        let flinchWoundSeverHeading = null;
        let flinchWoundSeverScrollView = null;
        if (params.item.flinchWoundSever !== undefined) {
            flinchWoundSeverHeading = <Text style={[globalStyles.heading1, themeText]}>Flinch / Wound / Sever</Text>;

            let woundHint = null;
            flinchWoundSeverScrollView = <ScrollView horizontal={true}>
                {
                    params.item.flinchWoundSever.map((flinchWoundSever, index) => {
                        if (_.endsWith(flinchWoundSever.wound, '*')) {
                            woundHint =
                                <Text style={[globalStyles.subtitle, themeText, {marginTop: 10}]}>* (Monster must be at
                                    least {flinchWoundSever.woundCondition}% HP to
                                    wound this body part.)</Text>
                        }

                        let flinch = ' ';
                        if (flinchWoundSever.flinch !== undefined) {
                            flinch = flinchWoundSever.flinch;
                        }

                        let wound = ' ';
                        if (flinchWoundSever.wound !== undefined) {
                            wound = flinchWoundSever.wound;
                        }

                        let sever = ' ';
                        if (flinchWoundSever.sever !== undefined) {
                            sever = flinchWoundSever.sever;
                        }

                        return <View key={index} style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingLeft: 10,
                            paddingRight: 10
                        }}>
                            <Text style={[{textAlign: 'center'}, themeText]}>{flinchWoundSever.name}</Text>
                            <Text style={themeText}>{flinch}</Text>
                            <Text style={themeText}>{wound}</Text>
                            <Text style={themeText}>{sever}</Text>
                        </View>
                    })
                }
            </ScrollView>;


            flinchWoundSever = <View style={{flexDirection: 'column', marginTop: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column'}}>
                        {/*This is intentional*/}
                        <Text> </Text>
                        <Text style={themeText}>Flinch</Text>
                        <Text style={themeText}>Wound</Text>
                        <Text style={themeText}>Sever</Text>
                    </View>
                    {flinchWoundSeverScrollView}
                </View>
                {woundHint}
            </View>
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <ScrollView>

                    {crown}

                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={params.item.photo} style={[Dimensions.get('window').width, {margin: 20}]}
                           resizeMode={'contain'}/>
                    </View>

                    {crowns}

                    <View style={{padding: 20, paddingTop: 0}}>

                        {characteristics}

                        <Text style={[globalStyles.heading1, themeText]}>Stats</Text>
                        <Text style={themeText}>Type: {params.item.type}</Text>
                        {baseHP}
                        {capture}
                        {earplugs}
                        {tempered}
                        {attackElementHeader}
                        {attackElement}
                        {attackAilment}
                        <Text style={themeText}>Found in: {
                            params.item.location.map((location, index) => {
                                if (index === 0)
                                    return location;
                                else
                                    return ", " + location;
                            })
                        }
                        </Text>

                        {/*Resistances*/}
                        {resistancesHeader}
                        {resistances}

                        {/*Weakness*/}
                        {weaknessHeader}
                        {weaknessFire}
                        {weaknessWater}
                        {weaknessThunder}
                        {weaknessIce}
                        {weaknessDragon}
                        {weaknessParentheses}

                        {/*Ailments*/}
                        {ailmentHeader}
                        {ailmentPoison}
                        {ailmentSleep}
                        {ailmentParalysis}
                        {ailmentBlast}
                        {ailmentStun}

                        {weakness}
                        {weaknessPinchInstructions}

                        {behaviorHeader}
                        {behavior}

                        {usefulInformationHeader}
                        {usefulInformation}

                        {crownChanceHeader}
                        {giantCrown}
                        {miniatureCrown}

                        {feystoneStreamStonesHeading}
                        {feystoneStreamstones}

                        {youTube}

                        {highRankRewardsHeader}
                        {highRankRewards}
                        {highRankRewardsPinchInstructions}

                        {highRankLootHeader}
                        {highRankLoot}

                        {lowRankLootHeader}
                        {lowRankLoot}

                        {questsHeader}
                        {quests}

                        {notesHeader}
                        {notes}

                        {hitDataHeader}
                        {hitDataRender}

                        {flinchWoundSeverHeading}
                        {flinchWoundSever}
                    </View>
                </ScrollView>
                {
                    this._renderAds()
                }
            </SafeAreaView>
        );
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async _getCrownValue(item) {
        try {
            let miniatureCrownValue = await AsyncStorage.getItem("MiniatureCrown" + item.name);
            let miniatureCrownObtained = (miniatureCrownValue !== null && miniatureCrownValue === 'true');
            let giantCrownValue = await AsyncStorage.getItem("GiantCrown" + item.name);
            let giantCrownObtained = (giantCrownValue !== null && giantCrownValue === 'true');

            this.setState({
                miniatureCrown: miniatureCrownObtained,
                giantCrown: giantCrownObtained
            });
        } catch (error) {
            // Error retrieving data
        }
    }

    _getStars(number) {
        let imageStyle = {
            width: 14,
            height: 14,
        };

        //Theme
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        if (number.length > 1) {
            let numberArray = number.split(" ");
            let previousNumber = numberArray[0];
            let nextNumber = numberArray[1].replace("(", "").replace(")", "");
            return <View
                style={[styles.rightContainer, {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}]}>
                {this._getStars(previousNumber)}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={[{marginLeft: 10}, themeText]}>(</Text>
                    {this._getStars(nextNumber)}
                    <Text style={themeText}>)</Text>
                </View>
            </View>
        } else {
            if (number === '0') {
                return <Image source={require('../assets/general/icon_zero.png')} style={imageStyle}/>
            } else if (number === '1') {
                return <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
            } else if (number === '2') {
                return <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                </View>
            } else if (number === '3') {
                return <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                </View>
            } else if (number === '4') {
                return <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                </View>
            } else if (number === '5') {
                return <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle}/>
                </View>
            }
            return <Text style={themeText}>{number}</Text>;
        }

        return <Text style={themeText}>{number}</Text>;
    }

    async _toggleCrown(value, item, crownType) {
        if (crownType === 'Miniature') {
            this.setState({miniatureCrown: value});
            await AsyncStorage.setItem("MiniatureCrown" + item.name, value ? 'true' : 'false');
        }
        if (crownType === 'Giant') {
            this.setState({giantCrown: value});
            await AsyncStorage.setItem("GiantCrown" + item.name, value ? 'true' : 'false');
        }

        if (this.props.navigation.state.params.parent !== undefined)
            this.props.navigation.state.params.parent._setItemState();
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/1168730146', 'ca-app-pub-9242567842673294/8743407371');
        } else {
            return null;
        }
    }
}