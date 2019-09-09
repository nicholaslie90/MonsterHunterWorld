/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage, FlatList, Image, Platform, SafeAreaView, ScrollView, Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {ArmorComponent} from './ArmorDetail'
import {DecorationItem} from './Decorations'
import {CharmItem} from './Charms'
import * as database from '../database'
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {ArmorItem} from "./Armors";
import {WeaponItem} from "./WeaponDetail";
import {MHWTouchable} from "../components/MHWTouchable";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export default class SkillDetailScreen extends React.PureComponent {
    state = {
        showAds: true
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.skill.name : 'Skill Detail',
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'Skills', theme: navigation.state.params.theme})} content={
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
    }

    render() {
        const {params} = this.props.navigation.state;

        //Theme
        let themeBackground = null;
        let themeText = null;
        let themeCrafted = '#b3e5fc';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeCrafted = null;
            }
        }

        //Find weapons which have this skil
        let weaponsArray = [];
        let weaponsHeader = null;
        let weapons = null;
        _.forEach(database.greatSwordTree, function (greatSword) {
            _.forEach(greatSword.data, (greatSwordData) => {
                if (greatSwordData.skills !== undefined){
                   let skillFound = _.find(greatSwordData.skills, {name: params.skill.name});
                   if (skillFound !== undefined){
                       weaponsArray.push(greatSwordData);
                   }
                }
            });
        });
        _.forEach(database.longSwordTree, function (longSword) {
            _.forEach(longSword.data, (longSwordData) => {
                if (longSwordData.skills !== undefined){
                    let skillFound = _.find(longSwordData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(longSwordData);
                    }
                }
            });
        });
        _.forEach(database.swordAndShieldTree, function (swordAndShield) {
            _.forEach(swordAndShield.data, (swordAndShieldData) => {
                if (swordAndShieldData.skills !== undefined){
                    let skillFound = _.find(swordAndShieldData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(swordAndShieldData);
                    }
                }
            });
        });
        _.forEach(database.dualBladesTree, function (dualBlades) {
            _.forEach(dualBlades.data, (dualBladesData) => {
                if (dualBladesData.skills !== undefined){
                    let skillFound = _.find(dualBladesData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(dualBladesData);
                    }
                }
            });
        });
        _.forEach(database.hammerTree, function (hammer) {
            _.forEach(hammer.data, (hammerData) => {
                if (hammerData.skills !== undefined){
                    let skillFound = _.find(hammerData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(hammerData);
                    }
                }
            });
        });
        _.forEach(database.huntingHornTree, function (huntingHorn) {
            _.forEach(huntingHorn.data, (huntingHornData) => {
                if (huntingHornData.skills !== undefined){
                    let skillFound = _.find(huntingHornData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(huntingHornData);
                    }
                }
            });
        });
        _.forEach(database.lanceTree, function (lance) {
            _.forEach(lance.data, (lanceData) => {
                if (lanceData.skills !== undefined){
                    let skillFound = _.find(lanceData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(lanceData);
                    }
                }
            });
        });
        _.forEach(database.gunlanceTree, function (gunlance) {
            _.forEach(gunlance.data, (gunlanceData) => {
                if (gunlanceData.skills !== undefined){
                    let skillFound = _.find(gunlanceData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(gunlanceData);
                    }
                }
            });
        });
        _.forEach(database.switchAxeTree, function (switchAxe) {
            _.forEach(switchAxe.data, (switchAxeData) => {
                if (switchAxeData.skills !== undefined){
                    let skillFound = _.find(switchAxeData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(switchAxeData);
                    }
                }
            });
        });
        _.forEach(database.chargeBladeTree, function (chargeBlade) {
            _.forEach(chargeBlade.data, (chargeBladeData) => {
                if (chargeBladeData.skills !== undefined){
                    let skillFound = _.find(chargeBladeData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(chargeBladeData);
                    }
                }
            });
        });
        _.forEach(database.insectGlaiveTree, function (insectGlaive) {
            _.forEach(insectGlaive.data, (insectGlaiveData) => {
                if (insectGlaiveData.skills !== undefined){
                    let skillFound = _.find(insectGlaiveData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(insectGlaiveData);
                    }
                }
            });
        });
        _.forEach(database.lightBowgunTree, function (lightBowgun) {
            _.forEach(lightBowgun.data, (lightBowgunData) => {
                if (lightBowgunData.skills !== undefined){
                    let skillFound = _.find(lightBowgunData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(lightBowgunData);
                    }
                }
            });
        });
        _.forEach(database.heavyBowgunTree, function (heavyBowgun) {
            _.forEach(heavyBowgun.data, (heavyBowgunData) => {
                if (heavyBowgunData.skills !== undefined){
                    let skillFound = _.find(heavyBowgunData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(heavyBowgunData);
                    }
                }
            });
        });
        _.forEach(database.bowTree, function (bow) {
            _.forEach(bow.data, (bowData) => {
                if (bowData.skills !== undefined){
                    let skillFound = _.find(bowData.skills, {name: params.skill.name});
                    if (skillFound !== undefined){
                        weaponsArray.push(bowData);
                    }
                }
            });
        });
        if (weaponsArray.length > 0){
            weaponsHeader = <Text style={[globalStyles.heading1, themeText]}>Weapons</Text>;
            weapons = <FlatList
                data={weaponsArray}
                renderItem={({item}) => <WeaponItem item={item} navigation={this.props.navigation}
                                                        theme={this.props.navigation.state.params.theme}/>}
                keyExtractor={(item, index) => item.name}
            />;
        }

        //Find armor sets which have this bonus skill
        let armorSetsArray = [];
        let armorSetsHeader = null;
        let armorSets = null;

        //Find armors which has this skill
        let armorsArray = [];
        let armorHeader = null;
        let armors = null;
        _.forEach(database.lowRankArmors, (armorSet) => {
            if (armorSet.head !== undefined) {
                this._findSkillAndPushToArray(armorSet.head, params.skill.name, armorsArray);
            }
            if (armorSet.upperBody !== undefined) {
                this._findSkillAndPushToArray(armorSet.upperBody, params.skill.name, armorsArray);
            }
            if (armorSet.hands !== undefined) {
                this._findSkillAndPushToArray(armorSet.hands, params.skill.name, armorsArray);
            }
            if (armorSet.lowerBody !== undefined) {
                this._findSkillAndPushToArray(armorSet.lowerBody, params.skill.name, armorsArray);
            }
            if (armorSet.legs !== undefined) {
                this._findSkillAndPushToArray(armorSet.legs, params.skill.name, armorsArray);
            }

            if (armorSet.setBonusSkills !== undefined) {
                _.find(armorSet.setBonusSkills, (skill) => {
                    if (skill !== undefined && skill.name === params.skill.name) {
                        armorSetsArray.push(armorSet);
                    }
                });
            }
        });
        _.forEach(database.highRankArmors, (armorSet) => {
            if (armorSet.head !== undefined) {
                this._findSkillAndPushToArray(armorSet.head, params.skill.name, armorsArray);
            }
            if (armorSet.upperBody !== undefined) {
                this._findSkillAndPushToArray(armorSet.upperBody, params.skill.name, armorsArray);
            }
            if (armorSet.hands !== undefined) {
                this._findSkillAndPushToArray(armorSet.hands, params.skill.name, armorsArray);
            }
            if (armorSet.lowerBody !== undefined) {
                this._findSkillAndPushToArray(armorSet.lowerBody, params.skill.name, armorsArray);
            }
            if (armorSet.legs !== undefined) {
                this._findSkillAndPushToArray(armorSet.legs, params.skill.name, armorsArray);
            }

            if (armorSet.setBonusSkills !== undefined) {
                _.find(armorSet.setBonusSkills, (skill) => {
                    if (skill !== undefined && skill.name === params.skill.name) {
                        armorSetsArray.push(armorSet);
                    }
                });
            }
        });

        if (armorsArray.length > 0) {
            armorHeader = <Text style={[globalStyles.heading1, themeText]}>Armors</Text>;
            armors = <FlatList
                data={armorsArray}
                renderItem={({item}) => <ArmorComponent item={item} navigation={this.props.navigation}
                                                        theme={this.props.navigation.state.params.theme}/>}
                keyExtractor={(item, index) => item.name}
            />;
        }

        if (armorSetsArray.length > 0){
            armorSetsHeader = <Text style={[globalStyles.heading1, themeText]}>Armor Sets</Text>;
            armorSets = <FlatList
                data={armorSetsArray}
                renderItem={({item}) => <ArmorItem item={item} navigation={this.props.navigation}
                                                        theme={this.props.navigation.state.params.theme}/>}
                keyExtractor={(item, index) => item.name}
            />;
        }

        //Find decorations which has this skill
        let decorationsArray = [];
        let decorationsHeader = null;
        let decorations = null;
        _.result(_.find(database.decorationsJewel1, function (decoration) {
            if (decoration.skill === params.skill.name) {
                decorationsArray.push(decoration);
            }
        }));
        _.result(_.find(database.decorationsJewel2, function (decoration) {
            if (decoration.skill === params.skill.name) {
                decorationsArray.push(decoration);
            }
        }));
        _.result(_.find(database.decorationsJewel3, function (decoration) {
            if (decoration.skill === params.skill.name) {
                decorationsArray.push(decoration);
            }
        }));
        if (decorationsArray.length > 0) {
            decorationsHeader = <Text style={[globalStyles.heading1, themeText]}>Decorations</Text>
            decorations = <FlatList
                data={decorationsArray}
                renderItem={({item}) => <DecorationItem item={item} navigation={this.props.navigation}
                                                        theme={this.props.navigation.state.params.theme}/>}
                keyExtractor={(item, index) => item.name}
            />;
        }

        //Find charms which has this skill
        let charmsArray = [];
        let charmsHeader = null;
        let charmsRender = null;
        _.result(_.find(database.charms, function (charm) {
            _.find(charm.skills, function (charmSkill) {
                if (charmSkill === params.skill.name) {
                    charmsArray.push(charm);
                }
            });
        }));
        if (charmsArray.length > 0) {
            charmsHeader = <Text style={[globalStyles.heading1, themeText]}>Charms</Text>;
            charmsRender = <FlatList
                data={charmsArray}
                renderItem={({item}) => <CharmItem item={item} navigation={this.props.navigation}
                                                   theme={this.props.navigation.state.params.theme}/>}
                keyExtractor={(item, index) => item.name}
            />;
        }

        //Check for notes
        let notes = null;
        let notesHeader = null;
        if (params.skill.notes !== undefined) {
            notesHeader = <Text style={[globalStyles.heading1, themeText]}>Notes</Text>
            notes = <Text style={themeText}>{params.skill.notes}</Text>
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <ScrollView>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                        <Image source={params.skill.icon}
                               style={{width: 100, height: 100}}
                               resizeMode={'contain'}/>
                    </View>

                    <View style={{flex: 1, flexDirection: 'column', padding: 20}}>
                        <Text style={[globalStyles.heading1, themeText]}>{I18n.t(params.skill.translationKey).Translation}</Text>
                        <Text style={[{padding: 10}, themeText]}>{I18n.t(params.skill.description).Translation}</Text>
                        <Text style={[globalStyles.heading1, themeText]}>Levels</Text>
                        <Text style={[{padding: 10}, themeText]}>{
                            Object.keys(params.skill.levels).map(function (key) {
                                return <Text key={params.skill.levels[key]}
                                             style={themeText}>Level {key}: {I18n.t(params.skill.levels[key]).Translation}{"\n"}</Text>;
                            })
                        }
                        </Text>

                        {notesHeader}
                        {notes}

                        {weaponsHeader}
                        {weapons}

                        {armorSetsHeader}
                        {armorSets}

                        {armorHeader}
                        {armors}

                        {decorationsHeader}
                        {decorations}

                        {charmsHeader}
                        {charmsRender}
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        );
    }

    _findSkillAndPushToArray(armorComponent, skillName, arrayToPush) {
        if (armorComponent.skills !== undefined) {
            _.find(armorComponent.skills, (skill) => {
                if (skill !== undefined && skill.name === skillName) {
                    arrayToPush.push(armorComponent);
                }
            });
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8480206933', 'ca-app-pub-9242567842673294/4720385973');
        } else {
            return null;
        }
    }
}