/**
 * Created by nicholaslie on 18/02/18.
 */

import React, { Component } from 'react';
import {
    AsyncStorage,
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import * as database from '../database'
import {
    calculateSetBonusSkillMap,
    calculateSkill,
    makeAdMob,
    productIdRemoveAds,
    returnWeaponElement
} from '../utility';
import I18n from '../i18n/i18n';
import { MHWTouchable } from "../components/MHWTouchable";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        marginTop: 10,
    },
});

export class LoadoutItem extends React.PureComponent {
    render() {
        //Theme
        let themeText = null;
        let themeBorder = 'black';
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
                themeBorder = '#9F9F9F';
            }
        }

        let totalSkills = [];
        let setBonusSkillMap = new Map();

        let split = this.props.item.split('~');

        // console.log('loadoutName: ' + params.loadoutName);
        // console.log('weapon: ' + params.weapon.name);
        // console.log('head: ' + params.head.name);
        // console.log('upperBody: ' + params.upperBody.name);
        // console.log('hands: ' + params.hands.name);
        // console.log('lowerBody: ' + params.lowerBody.name);
        // console.log('legs: ' + params.legs.name);
        // console.log('charm: ' + params.charm.name);
        // console.log('smoker: ' + params.smoker.name);
        // console.log('mantle: ' + params.mantle.name);

        let item = {};

        _.forEach(split, (token) => {
            if (_.startsWith(token, 'name')) {
                let nameArray = token.split(':');
                if (nameArray.length > 0) {
                    item.loadoutName = nameArray[1];
                }
            }
            else if (_.startsWith(token, 'weaponDecoration1')) {
                let weaponDecoration1Array = token.split(':');
                if (weaponDecoration1Array.length > 0) {
                    item.weaponDecoration1 = weaponDecoration1Array[1];
                }
            }
            else if (_.startsWith(token, 'weaponDecoration2')) {
                let weaponDecoration2Array = token.split(':');
                if (weaponDecoration2Array.length > 0) {
                    item.weaponDecoration2 = weaponDecoration2Array[1];
                }
            }
            else if (_.startsWith(token, 'weaponDecoration3')) {
                let weaponDecoration3Array = token.split(':');
                if (weaponDecoration3Array.length > 0) {
                    item.weaponDecoration3 = weaponDecoration3Array[1];
                }
            }
            else if (_.startsWith(token, 'weapon')) {
                let weaponArray = token.split(':');
                if (weaponArray.length > 0) {
                    item.weapon = weaponArray[1];
                }
            }
            else if (_.startsWith(token, 'headDecoration1')) {
                let headDecoration1Array = token.split(':');
                if (headDecoration1Array.length > 0) {
                    item.headDecoration1 = headDecoration1Array[1];
                }
            }
            else if (_.startsWith(token, 'headDecoration2')) {
                let headDecoration2Array = token.split(':');
                if (headDecoration2Array.length > 0) {
                    item.headDecoration2 = headDecoration2Array[1];
                }
            }
            else if (_.startsWith(token, 'headDecoration3')) {
                let headDecoration3Array = token.split(':');
                if (headDecoration3Array.length > 0) {
                    item.headDecoration3 = headDecoration3Array[1];
                }
            }
            else if (_.startsWith(token, 'head')) {
                let headArray = token.split(':');
                if (headArray.length > 0) {
                    item.head = headArray[1];
                }
            }
            else if (_.startsWith(token, 'upperBodyDecoration1')) {
                let upperBodyDecoration1Array = token.split(':');
                if (upperBodyDecoration1Array.length > 0) {
                    item.upperBodyDecoration1 = upperBodyDecoration1Array[1];
                }
            }
            else if (_.startsWith(token, 'upperBodyDecoration2')) {
                let upperBodyDecoration2Array = token.split(':');
                if (upperBodyDecoration2Array.length > 0) {
                    item.upperBodyDecoration2 = upperBodyDecoration2Array[1];
                }
            }
            else if (_.startsWith(token, 'upperBodyDecoration3')) {
                let upperBodyDecoration3Array = token.split(':');
                if (upperBodyDecoration3Array.length > 0) {
                    item.upperBodyDecoration3 = upperBodyDecoration3Array[1];
                }
            }
            else if (_.startsWith(token, 'upperBody')) {
                let upperBodyArray = token.split(':');
                if (upperBodyArray.length > 0) {
                    item.upperBody = upperBodyArray[1];
                }
            }
            else if (_.startsWith(token, 'handsDecoration1')) {
                let handsDecoration1Array = token.split(':');
                if (handsDecoration1Array.length > 0) {
                    item.handsDecoration1 = handsDecoration1Array[1];
                }
            }
            else if (_.startsWith(token, 'handsDecoration2')) {
                let handsDecoration2Array = token.split(':');
                if (handsDecoration2Array.length > 0) {
                    item.handsDecoration2 = handsDecoration2Array[1];
                }
            }
            else if (_.startsWith(token, 'handsDecoration3')) {
                let handsDecoration3Array = token.split(':');
                if (handsDecoration3Array.length > 0) {
                    item.handsDecoration3 = handsDecoration3Array[1];
                }
            }
            else if (_.startsWith(token, 'hands')) {
                let handsArray = token.split(':');
                if (handsArray.length > 0) {
                    item.hands = handsArray[1];
                }
            }
            else if (_.startsWith(token, 'lowerBodyDecoration1')) {
                let lowerBodyDecoration1Array = token.split(':');
                if (lowerBodyDecoration1Array.length > 0) {
                    item.lowerBodyDecoration1 = lowerBodyDecoration1Array[1];
                }
            }
            else if (_.startsWith(token, 'lowerBodyDecoration2')) {
                let lowerBodyDecoration2Array = token.split(':');
                if (lowerBodyDecoration2Array.length > 0) {
                    item.lowerBodyDecoration2 = lowerBodyDecoration2Array[1];
                }
            }
            else if (_.startsWith(token, 'lowerBodyDecoration3')) {
                let lowerBodyDecoration3Array = token.split(':');
                if (lowerBodyDecoration3Array.length > 0) {
                    item.lowerBodyDecoration3 = lowerBodyDecoration3Array[1];
                }
            }
            else if (_.startsWith(token, 'lowerBody')) {
                let lowerBodyArray = token.split(':');
                if (lowerBodyArray.length > 0) {
                    item.lowerBody = lowerBodyArray[1];
                }
            }
            else if (_.startsWith(token, 'legsDecoration1')) {
                let legsDecoration1Array = token.split(':');
                if (legsDecoration1Array.length > 0) {
                    item.legsDecoration1 = legsDecoration1Array[1];
                }
            }
            else if (_.startsWith(token, 'legsDecoration2')) {
                let legsDecoration2Array = token.split(':');
                if (legsDecoration2Array.length > 0) {
                    item.legsDecoration2 = legsDecoration2Array[1];
                }
            }
            else if (_.startsWith(token, 'legsDecoration3')) {
                let legsDecoration3Array = token.split(':');
                if (legsDecoration3Array.length > 0) {
                    item.legsDecoration3 = legsDecoration3Array[1];
                }
            }
            else if (_.startsWith(token, 'legs')) {
                let legsArray = token.split(':');
                if (legsArray.length > 0) {
                    item.legs = legsArray[1];
                }
            }
            else if (_.startsWith(token, 'charm')) {
                let charmArray = token.split(':');
                if (charmArray.length > 0) {
                    item.charm = charmArray[1];
                }
            } else if (_.startsWith(token, 'specializedTool1')) {
                let specializedTool1Array = token.split(':');
                if (specializedTool1Array.length > 0) {
                    item.specializedTool1 = specializedTool1Array[1];
                }
            } else if (_.startsWith(token, 'specializedTool2')) {
                let specializedTool2Array = token.split(':');
                if (specializedTool2Array.length > 0) {
                    item.specializedTool2 = specializedTool2Array[1];
                }
            }
        });

        //Prepare decorations database
        let decorations = _.concat(database.decorationsJewel1, database.decorationsJewel2, database.decorationsJewel3);


        //Evaluate weapon
        let weapon = null;
        let weaponComponent;
        let weaponDecoration1 = null;
        let weaponDecoration2 = null;
        let weaponDecoration3 = null;
        if (item.weaponDecoration1 !== undefined) {
            let decoration = _.find(decorations, { name: item.weaponDecoration1 });
            if (decoration !== undefined) {
                weaponDecoration1 = this._returnDecoration(decoration);
                calculateSkill(decoration, totalSkills, decoration.level);
            }
        }
        if (item.weaponDecoration2 !== undefined) {
            let decoration = _.find(decorations, { name: item.weaponDecoration2 });
            if (decoration !== undefined) {
                weaponDecoration2 = this._returnDecoration(decoration);
                calculateSkill(decoration, totalSkills, decoration.level);
            }
        }
        if (item.weaponDecoration3 !== undefined) {
            let decoration = _.find(decorations, { name: item.weaponDecoration3 });
            if (decoration !== undefined) {
                weaponDecoration3 = this._returnDecoration(decoration);
                calculateSkill(decoration, totalSkills, decoration.level);
            }
        }
        if (item.weapon !== undefined) {
            let weapons = _.concat(database.greatSwordTree, database.longSwordTree, database.swordAndShieldTree, database.dualBladesTree, database.hammerTree, database.huntingHornTree, database.lanceTree, database.gunlanceTree, database.switchAxeTree, database.chargeBladeTree, database.insectGlaiveTree, database.lightBowgunTree, database.heavyBowgunTree, database.bowTree);
            _.forEach(weapons, (weaponClass) => {
                _.forEach(weaponClass, (weaponTreeInDatabase) => {
                    _.forEach(weaponTreeInDatabase, (weaponInDatabase) => {
                        if (weaponInDatabase.name === item.weapon) {
                            let imageViewStyle = {};
                            if (weaponInDatabase.icon === null) {
                                imageViewStyle = { width: 20, height: 20, margin: 4 };
                            }

                            calculateSkill(weaponInDatabase, totalSkills);

                            weapon = <View key={`${weaponInDatabase.name}`} style={{ flexDirection: 'column' }}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <View style={imageViewStyle}>
                                        <Image source={weaponInDatabase.icon}
                                            style={{ width: 20, height: 20, margin: 4, resizeMode: 'contain' }} />
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <Text style={[globalStyles.subtitle, themeText]}>{weaponInDatabase.name}</Text>
                                    </View>
                                </View>
                                {weaponDecoration1}
                                {weaponDecoration2}
                                {weaponDecoration3}
                            </View>;

                            weaponComponent = weaponInDatabase;
                            return false;
                        }
                    });
                })
            });
        }


        //Evaluate armors
        let armors = _.concat(database.lowRankArmors, database.highRankArmors, database.masterRankArmors);
        let head = null;
        let headComponent;
        let upperBody = null;
        let upperBodyComponent;
        let hands = null;
        let handsComponent;
        let lowerBody = null;
        let lowerBodyComponent;
        let legs = null;
        let legsComponent;
        armors.map((armorSet) => {
            if (armorSet.head !== undefined && item.head !== undefined && armorSet.head.name === item.head) {
                head = this._returnArmorComponent(
                    armorSet.head,
                    'head',
                    item,
                    decorations,
                    totalSkills,
                    setBonusSkillMap);
                headComponent = armorSet.head;
            }

            if (armorSet.upperBody !== undefined && item.upperBody !== undefined && armorSet.upperBody.name === item.upperBody) {
                upperBody = this._returnArmorComponent(
                    armorSet.upperBody,
                    'upperBody',
                    item,
                    decorations,
                    totalSkills,
                    setBonusSkillMap);
                upperBodyComponent = armorSet.upperBody;
            }

            if (armorSet.hands !== undefined && item.hands !== undefined && armorSet.hands.name === item.hands) {
                hands = this._returnArmorComponent(
                    armorSet.hands,
                    'hands',
                    item,
                    decorations,
                    totalSkills,
                    setBonusSkillMap);
                handsComponent = armorSet.hands;
            }

            if (armorSet.lowerBody !== undefined && item.lowerBody !== undefined && armorSet.lowerBody.name === item.lowerBody) {
                lowerBody = this._returnArmorComponent(
                    armorSet.lowerBody,
                    'lowerBody',
                    item,
                    decorations,
                    totalSkills,
                    setBonusSkillMap);
                lowerBodyComponent = armorSet.lowerBody;
            }

            if (armorSet.legs !== undefined && item.legs !== undefined && armorSet.legs.name === item.legs) {
                legs = this._returnArmorComponent(
                    armorSet.legs,
                    'legs',
                    item,
                    decorations,
                    totalSkills,
                    setBonusSkillMap);
                legsComponent = armorSet.legs;
            }
        });
        // _.forEach(armors, (armorSet) => {
        //     if (armorSet.head !== undefined && item.head !== undefined && armorSet.head.name === item.head) {
        //         head = this._returnArmorComponent(armorSet.head, 'head', item, decorations, totalSkills, setBonusSkillMap);
        //         headComponent = armorSet.head;
        //     }
        //
        //     if (armorSet.upperBody !== undefined && item.upperBody !== undefined && armorSet.upperBody.name === item.upperBody) {
        //         upperBody = this._returnArmorComponent(armorSet.upperBody, 'upperBody', item, decorations, totalSkills, setBonusSkillMap);
        //         upperBodyComponent = armorSet.upperBody;
        //     }
        //
        //     if (armorSet.hands !== undefined && item.hands !== undefined && armorSet.hands.name === item.hands) {
        //         hands = this._returnArmorComponent(armorSet.hands, 'hands', item, decorations, totalSkills, setBonusSkillMap);
        //         handsComponent = armorSet.hands;
        //     }
        //
        //     if (armorSet.lowerBody !== undefined && item.lowerBody !== undefined && armorSet.lowerBody.name === item.lowerBody) {
        //         lowerBody = this._returnArmorComponent(armorSet.lowerBody, 'lowerBody', item, decorations, totalSkills, setBonusSkillMap);
        //         lowerBodyComponent = armorSet.lowerBody;
        //     }
        //
        //     if (armorSet.legs !== undefined && item.legs !== undefined && armorSet.legs.name === item.legs) {
        //         legs = this._returnArmorComponent(armorSet.legs, 'legs', item, decorations, totalSkills);
        //         legsComponent = armorSet.legs;
        //     }
        // });

        //Evalute charms
        let charm = null;
        _.find(database.charms, (charmInDatabase) => {
            if (charmInDatabase.name === item.charm) {
                charm = <View key={`${charmInDatabase.name}`}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Image source={charmInDatabase.icon} style={{ width: 20, height: 20, margin: 4 }} />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={[globalStyles.subtitle, themeText]}>{charmInDatabase.name}</Text>
                    </View>
                </View>;
                calculateSkill(charmInDatabase, totalSkills, parseInt(charmInDatabase.level));
                return false;
            }
        });

        //Evaluate specialized tool 1
        let specializedTools = _.concat(database.mantles, database.smokers);
        let specializedTool1 = null;
        _.find(specializedTools, (specializedToolInDatabase) => {
            if (specializedToolInDatabase.name === item.specializedTool2) {
                specializedTool1 = <View key={`${specializedToolInDatabase.name}`}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Image source={specializedToolInDatabase.icon} style={{ width: 20, height: 20, margin: 4 }} />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={[globalStyles.subtitle, themeText]}>{specializedToolInDatabase.name}</Text>
                    </View>
                </View>;
                return false;
            }
        });

        //Evaluate specialized tool 2
        let specializedTool2 = null;
        _.find(specializedTools, (specializedToolInDatabase) => {
            if (specializedToolInDatabase.name === item.specializedTool1) {
                specializedTool2 = <View key={`${specializedToolInDatabase.name}`}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Image source={specializedToolInDatabase.icon} style={{ width: 20, height: 20, margin: 4 }} />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={[globalStyles.subtitle, themeText]}>{specializedToolInDatabase.name}</Text>
                    </View>
                </View>;
                return false;
            }
        });

        //Evaluate stats
        let totalAttack = 0;
        let weaponElement = null;
        let weaponAffinity = null;
        let weaponElderseal = null;
        let affinityColor = {};
        if (weaponComponent !== undefined) {
            //Attack
            totalAttack += parseInt(weaponComponent.attack);

            //Element
            weaponElement = <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                <Image source={returnWeaponElement(weaponComponent.element)}
                    style={{ width: 20, height: 20 }} />
                <Text style={[globalStyles.subtitle, themeText]}>{weaponComponent.element}</Text>
            </View>;

            //Affinity
            weaponAffinity = weaponComponent.affinity;
            if (weaponComponent.affinity !== undefined) {
                if (this.props.navigation.state.params.theme !== undefined && this.props.navigation.state.params.theme === 'Dark') {
                    affinityColor = globalStyles.textDark;
                }
            }
            let affinityArray = weaponComponent.affinity.split('-');
            if (affinityArray.length > 0 && affinityArray[1] !== undefined) {
                affinityColor = { color: 'red' };
            }

            //Elderseal
            if (weaponComponent.elderseal !== undefined) {
                weaponElderseal = <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                    <Image source={require('../assets/weapons/icon_elderseal.png')}
                        style={{ width: 20, height: 20 }} />
                    <Text style={[globalStyles.subtitle, themeText]}>{weaponComponent.elderseal}</Text>
                </View>;
            }
        }

        let totalDefense = 0;
        let totalFireDefense = 0;
        let totalWaterDefense = 0;
        let totalThunderDefense = 0;
        let totalIceDefense = 0;
        let totalDragonDefense = 0;
        if (headComponent !== undefined) {
            totalDefense += parseInt(headComponent.defense);
            totalFireDefense += parseInt(headComponent.vsFire);
            totalWaterDefense += parseInt(headComponent.vsWater);
            totalThunderDefense += parseInt(headComponent.vsThunder);
            totalIceDefense += parseInt(headComponent.vsIce);
            totalDragonDefense += parseInt(headComponent.vsDragon);
        }
        if (upperBodyComponent !== undefined) {
            totalDefense += parseInt(upperBodyComponent.defense);
            totalFireDefense += parseInt(upperBodyComponent.vsFire);
            totalWaterDefense += parseInt(upperBodyComponent.vsWater);
            totalThunderDefense += parseInt(upperBodyComponent.vsThunder);
            totalIceDefense += parseInt(upperBodyComponent.vsIce);
            totalDragonDefense += parseInt(upperBodyComponent.vsDragon);
        }
        if (handsComponent !== undefined) {
            totalDefense += parseInt(handsComponent.defense);
            totalFireDefense += parseInt(handsComponent.vsFire);
            totalWaterDefense += parseInt(handsComponent.vsWater);
            totalThunderDefense += parseInt(handsComponent.vsThunder);
            totalIceDefense += parseInt(handsComponent.vsIce);
            totalDragonDefense += parseInt(handsComponent.vsDragon);
        }
        if (lowerBodyComponent !== undefined) {
            totalDefense += parseInt(lowerBodyComponent.defense);
            totalFireDefense += parseInt(lowerBodyComponent.vsFire);
            totalWaterDefense += parseInt(lowerBodyComponent.vsWater);
            totalThunderDefense += parseInt(lowerBodyComponent.vsThunder);
            totalIceDefense += parseInt(lowerBodyComponent.vsIce);
            totalDragonDefense += parseInt(lowerBodyComponent.vsDragon);
        }
        if (legsComponent !== undefined) {
            totalDefense += parseInt(legsComponent.defense);
            totalFireDefense += parseInt(legsComponent.vsFire);
            totalWaterDefense += parseInt(legsComponent.vsWater);
            totalThunderDefense += parseInt(legsComponent.vsThunder);
            totalIceDefense += parseInt(legsComponent.vsIce);
            totalDragonDefense += parseInt(legsComponent.vsDragon);
        }
        if (weaponComponent !== undefined && weaponComponent.defenseBonus !== undefined) {
            totalDefense += parseInt(weaponComponent.defenseBonus);
        }

        //Total Skills
        let skills = null;
        if (totalSkills.length > 0) {
            //Order the gathered skill by level
            totalSkills = _.orderBy(totalSkills, data => {
                return [data.level]
            }, ['desc']);

            skills = totalSkills.map((skillObject, index) => {
                if (skillObject !== undefined) {
                    if (skillObject.skill !== undefined) {
                        let skillText = I18n.t(skillObject.skill.translationKey).Translation + ' Lv. ' + skillObject.level;

                        let skillInDatabase = _.find(database.skills, { name: skillObject.skill.name });
                        let loadoutSkills = null;
                        if (skillInDatabase != null){
                            let loadoutSkillBoxes = []
                            for (let index = 0; index < skillObject.level; index++) {
                                if (index === 0){
                                    loadoutSkillBoxes.push(<View key={index} style={{width: 8, height: 8, marginRight: 4, marginLeft: 28, marginBottom: 4, borderColor: '#896D2F', backgroundColor: '#C8AD59', borderWidth: 1}}></View>)
                                } else {
                                    loadoutSkillBoxes.push(<View key={index} style={{width: 8, height: 8, marginRight: 4, marginBottom: 4, borderColor: '#896D2F', backgroundColor: '#C8AD59', borderWidth: 1}}></View>)
                                }
                                
                            }
                            for (let index = skillObject.level; index < skillInDatabase.maxLevel; index++) {
                                loadoutSkillBoxes.push(<View key={index} style={{width: 8, height: 8, marginRight: 4, marginBottom: 4, backgroundColor: 'rgba(52, 52, 52, 0.0)', borderColor: themeBorder, borderWidth: 1}}></View>)
                            }
                            loadoutSkills = <View style={{flexDirection: 'row'}}>
                                {loadoutSkillBoxes}
                            </View>;
                        }

                        return <View key={`${skillObject.skill.name + index}`}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image source={skillObject.skill.icon} style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 4,
                                    }} />
                                    <Text style={[globalStyles.subtitle, themeText]}>{skillText}</Text>
                                </View>
                                {loadoutSkills}
                            </View>
                        </View>
                    }
                }
            });
        }

        //Evaluate set bonus
        let setBonusSkillsArray = [];
        if (setBonusSkillMap.size > 0) {
            //Gather all set bonus skills first into one array.
            let totalSetBonusSkills = [];
            database.lowRankArmors.map((armor) => {
                if (armor.setBonusSkills !== undefined) {
                    totalSetBonusSkills = _.concat(totalSetBonusSkills, armor.setBonusSkills);
                }
            });
            database.highRankArmors.map((armor) => {
                if (armor.setBonusSkills !== undefined) {
                    totalSetBonusSkills = _.concat(totalSetBonusSkills, armor.setBonusSkills);
                }
            });
            for (let [setBonusSkillName, equipmentCount] of setBonusSkillMap) {
                // console.warn(setBonusSkillName + ": " + equipmentCount);
                let setBonusSkillSplitArray = setBonusSkillName.split('~');
                let skillFound;
                if (setBonusSkillSplitArray.length === 2) {
                    skillFound = _.find(totalSetBonusSkills, (setBonusSkill) => {
                        return setBonusSkill.name === setBonusSkillSplitArray[0] &&
                            setBonusSkill.alias === setBonusSkillSplitArray[1] &&
                            parseInt(setBonusSkill.piecesRequired) <= parseInt(equipmentCount);
                    });
                    if (skillFound !== undefined) {
                        setBonusSkillsArray.push(skillFound);
                    }
                }
            }
        }

        let setBonusSkills = [];
        if (setBonusSkillsArray.length > 0) {
            setBonusSkills = setBonusSkillsArray.map((skillObject, index) => {
                if (skillObject !== undefined) {
                    let skillText = I18n.t(skillObject.nameKey).Translation;
                    return <View key={`${skillObject.name + index}`}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image source={skillObject.icon} style={{
                                width: 20,
                                height: 20,
                                marginRight: 4,
                            }} />
                            <Text style={[globalStyles.subtitle, themeText]}>{skillText}</Text>
                        </View>
                    </View>
                }
            });
        }

        let content = <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 20 }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text style={[styles.item, themeText]}>{item.loadoutName}</Text>

                <View style={{
                    borderTopColor: '#f5f5f5',
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 10
                }} />

                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{ flex: 1, flexDirection: 'column', paddingTop: 4, marginRight: 10 }}>
                        {/*Weapon Stats*/}
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {/*Attack*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('./../assets/weapons/icon_attack.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            margin: 4,
                                            marginLeft: 0,
                                            alignItems: 'center'
                                        }} />

                                    <Text
                                        style={[globalStyles.subtitle, themeText]}>{totalAttack}</Text>
                                </View>
                                {weaponElement}
                            </View>

                            {/*Affinity*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('./../assets/weapons/icon_affinity.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            margin: 4,
                                            marginLeft: 0,
                                            alignItems: 'center'
                                        }} />
                                    <Text
                                        style={[globalStyles.subtitle, affinityColor]}>{weaponAffinity}</Text>
                                </View>
                                {weaponElderseal}
                            </View>

                        </View>


                        {/*Armor Stats*/}
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
                            {/*Armor Stats - Left Column*/}
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                {/*Defense*/}
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image source={require('./../assets/general/icon_defense.png')} style={{
                                        width: 20,
                                        height: 20,
                                        margin: 4,
                                        marginLeft: 0,
                                        alignItems: 'center'
                                    }} />
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <Text style={[globalStyles.subtitle, themeText]}>{totalDefense}</Text>
                                    </View>
                                </View>

                                {/*Fire Defense*/}
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image source={require('./../assets/general/icon_fire.png')} style={{
                                        width: 20,
                                        height: 20,
                                        margin: 4,
                                        marginLeft: 0,
                                        alignItems: 'center'
                                    }} />
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <Text style={[globalStyles.subtitle, themeText]}>{totalFireDefense}</Text>
                                    </View>
                                </View>

                                {/*Water Defense*/}
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image source={require('./../assets/general/icon_water.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            margin: 4,
                                            marginLeft: 0,
                                            alignItems: 'center'
                                        }} />
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <Text style={[globalStyles.subtitle, themeText]}>{totalWaterDefense}</Text>
                                    </View>
                                </View>
                            </View>

                            {/*Armor Stats - Right Column*/}
                            <View style={{ flex: 1, flexDirection: 'column', marginRight: 20 }}>
                                {/*Thunder Defense*/}
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image source={require('./../assets/general/icon_thunder.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            margin: 4,
                                            marginLeft: 0,
                                            alignItems: 'center'
                                        }} />
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <Text
                                            style={[globalStyles.subtitle, themeText]}>{totalThunderDefense}</Text>
                                    </View>
                                </View>

                                {/*Ice Defense*/}
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image source={require('./../assets/general/icon_ice.png')} style={{
                                        width: 20,
                                        height: 20,
                                        margin: 4,
                                        marginLeft: 0,
                                        alignItems: 'center'
                                    }} />
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <Text style={[globalStyles.subtitle, themeText]}>{totalIceDefense}</Text>
                                    </View>
                                </View>

                                {/*Dragon Defense*/}
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image source={require('./../assets/general/icon_dragon.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            margin: 4,
                                            marginLeft: 0,
                                            alignItems: 'center'
                                        }} />
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <Text style={[globalStyles.subtitle, themeText]}>{totalDragonDefense}</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                        {/*Total Skills*/}
                        <View style={{ flex: 1, flexDirection: 'column', marginTop: 20 }}>
                            {setBonusSkills}
                            {skills}
                        </View>

                    </View>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                {weapon}
                {head}
                {upperBody}
                {hands}
                {lowerBody}
                {legs}
                {charm}
                {specializedTool1}
                {specializedTool2}
            </View>
        </View>;

        return <MHWTouchable onPress={() => {
            this.props.navigation.navigate('LoadoutDetail', {
                item: item,
                parent: this.props.parent,
                key: this.props.item,
                theme: this.props.navigation.state.params.theme
            })
        }} content={content} />;
    }

    _returnArmorComponent(armorComponent,
        type,
        item,
        decorations,
        totalSkills,
        setBonusSkillMap) {
        //Theme
        let themeText = null;
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        calculateSkill(armorComponent, totalSkills);
        calculateSetBonusSkillMap(armorComponent, setBonusSkillMap);

        let armorDecoration1 = null;
        let armorDecoration2 = null;
        let armorDecoration3 = null;
        if (item[type + 'Decoration1'] !== undefined) {
            let decoration = _.find(decorations, { name: item[type + 'Decoration1'] });
            if (decoration !== undefined) {
                armorDecoration1 = this._returnDecoration(decoration);
                calculateSkill(decoration, totalSkills, decoration.level);
            }
        }
        if (item[type + 'Decoration2'] !== undefined) {
            let decoration = _.find(decorations, { name: item[type + 'Decoration2'] });
            if (decoration !== undefined) {
                armorDecoration2 = this._returnDecoration(decoration);
                calculateSkill(decoration, totalSkills, decoration.level);
            }
        }
        if (item[type + 'Decoration3'] !== undefined) {
            let decoration = _.find(decorations, { name: item[type + 'Decoration3'] });
            if (decoration !== undefined) {
                armorDecoration3 = this._returnDecoration(decoration);
                calculateSkill(decoration, totalSkills, decoration.level);
            }
        }

        let icon = null;
        if (armorComponent.iconMale !== null) {
            icon = armorComponent.iconMale;
        } else if (armorComponent.iconFemale !== null) {
            icon = armorComponent.iconFemale;
        }

        return <View key={`${armorComponent.name}`} style={{ flexDirection: 'column' }}>
            <View key={`${armorComponent.name}`}
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={icon}
                    style={{ width: 20, height: 20, margin: 4, resizeMode: 'contain' }} />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={[globalStyles.subtitle, themeText]}>{armorComponent.name}</Text>
                </View>
            </View>
            {armorDecoration1}
            {armorDecoration2}
            {armorDecoration3}
        </View>
    }

    _returnDecoration(decoration) {
        //Theme
        let themeText = null;
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        return <View key={Math.random()}
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 20
            }}>
            <Image source={decoration.icon} style={{ width: 20, height: 20, margin: 4, resizeMode: 'contain' }} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text style={[globalStyles.subtitle, themeText]}>{decoration.name}</Text>
            </View>
        </View>
    }
}

export default class LoadoutsScreen extends React.PureComponent {
    state = {
        showAds: true,
        dataArray: [],
    };

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: I18n.t('home-loadouts').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('LoadoutDetail', {
                    itemState: 'new',
                    parent: params.parent,
                    theme: navigation.state.params.theme
                })} content={<Image source={require('../assets/general/icon_add.png')}
                    style={globalStyles.navSearch} />} />
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

        await this._refreshData();
    }

    render() {
        // let loadouts = [
        //     {
        //         'name': 'Nergigante',
        //         'weapon': 'Purgation\'s Atrocity',
        //         'head': 'Dragonking Eyepatch ⍺',
        //         'upperBody': 'Nergigante Mail ⍺',
        //         'hands': 'Nergigante Vambraces ⍺',
        //         'lowerBody': 'Nergigante Coil ⍺',
        //         'legs': 'Nergigante Greaves ß',
        //         'charm': 'Attack Charm III',
        //         'smoker': 'Health Booster',
        //         'mantle': 'Dragonproof Mantle',
        //     }
        // ];

        //Theme
        let themeBackground = null;
        let themeText = null;
        let loadoutsEmptyIcon = require('../assets/general/icon_loadouts_empty.png');
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                loadoutsEmptyIcon = require('../assets/general/icon_loadouts_empty_dark.png')
            }
        }

        let list = null;
        if (this.state.shouldDisplayList) {
            list = <FlatList
                data={this.state.dataArray}
                renderItem={({ item }) => <LoadoutItem item={item} navigation={this.props.navigation} parent={this}
                    theme={this.props.navigation.state.params.theme} />
                }
                keyExtractor={(item, index) => item}
            />;
        } else {
            list = <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={loadoutsEmptyIcon} style={{ width: 100, height: 100 }} />
                <Text style={[{ textAlign: 'center', lineHeight: 30, padding: 20 }, themeText]}>Your loadout is empty. Use
                    the button
                    in the top right corner to
                    add your first loadout. :)</Text>
            </View>
        }

        return (
            <SafeAreaView style={[{ flex: 1 }, themeBackground]}>
                {list}
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _refreshData = async () => {
        setTimeout(async () => {
            let keys = await AsyncStorage.getAllKeys();
            let loadouts = _.filter(keys, (key) => {
                return _.startsWith(key, 'Loadout~');
            });
            let dataSource = [];
            let shouldDisplayList = false;
            if (loadouts.length > 0) {
                _.forEach(loadouts, (loadout) => {
                    dataSource.push(loadout);
                });
                shouldDisplayList = true;
            } else {
                shouldDisplayList = false;
            }

            this.setState({
                dataArray: dataSource,
                shouldDisplayList: shouldDisplayList
            });
        }, 200);
    };

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/7305823078', 'ca-app-pub-9242567842673294/1631204119');
        } else {
            return null;
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ parent: this });
    }
}