/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react'
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
} from "react-native"
import globalStyles from '../styles';
import {MonsterItem} from './Monsters';
import * as database from '../database';
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
});
let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class ArenaEquipmentInfo extends React.PureComponent {
    render() {
        //Theme
        let themeText = null;
        let themeCompleted = '#b3e5fc';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
                themeCompleted = null;
            }
        }

        //Check for weapon
        let weapon = null;
        if (this.props.item.weapon !== undefined) {
            let weapons = _.concat(database.greatSwordTree, database.longSwordTree, database.swordAndShieldTree, database.dualBladesTree, database.hammerTree, database.huntingHornTree, database.lanceTree, database.gunlanceTree, database.switchAxeTree, database.chargeBladeTree, database.insectGlaiveTree, database.lightBowgunTree, database.heavyBowgunTree, database.bowTree);
            _.forEach(weapons, (weaponClass) => {
                _.forEach(weaponClass, (weaponTreeInDatabase) => {
                    _.forEach(weaponTreeInDatabase, (weaponInDatabase) => {
                        if (weaponInDatabase.name === this.props.item.weapon) {
                            weapon = <View key={`${weaponInDatabase.name}`} style={{flexDirection: 'column'}}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image source={weaponInDatabase.icon}
                                           style={{width: 20, height: 20, margin: 4, resizeMode: 'contain'}}/>
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Text style={[globalStyles.subtitle, themeText]}>{weaponInDatabase.name}</Text>
                                    </View>
                                </View>
                            </View>;

                            // weaponComponent = weaponInDatabase;
                            return false;
                        }
                    });
                })
            });
        }

        //Check for upperBody
        let upperBody = null;
        if (this.props.item.upperBody !== undefined) {
            upperBody = this._returnArmorComponent(this.props.item.upperBody.name);
        }

        //Check for hands
        let hands = null;
        if (this.props.item.hands !== undefined) {
            hands = this._returnArmorComponent(this.props.item.hands.name);
        }

        //Check for lowerBody
        let lowerBody = null;
        if (this.props.item.lowerBody !== undefined) {
            lowerBody = this._returnArmorComponent(this.props.item.lowerBody.name);
        }

        //Check for legs
        let legs = null;
        if (this.props.item.legs !== undefined) {
            legs = this._returnArmorComponent(this.props.item.legs.name);
        }

        //Check for charms
        let charm = null;
        if (this.props.item.charm !== undefined) {
            let charmInDatabase = _.find(database.charms, {name: this.props.item.charm});
            if (charmInDatabase !== undefined) {
                charm = <View key={`${charmInDatabase.name}`} style={{flexDirection: 'column'}}>
                    <View key={`${charmInDatabase.name}`}
                          style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={charmInDatabase.icon}
                               style={{width: 20, height: 20, margin: 4, resizeMode: 'contain'}}/>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={[globalStyles.subtitle, themeText]}>{charmInDatabase.name}</Text>
                        </View>
                    </View>
                </View>
            }
        }

        //Check for specialized tool 1
        let specializedTool1 = null;
        if (this.props.item.specializedTool1 !== undefined) {
            specializedTool1 = this._returnSpecializedTool(this.props.item.specializedTool1);
        }

        //Check for specialized tool 2
        let specializedTool2 = null;
        if (this.props.item.specializedTool2 !== undefined) {
            specializedTool2 = this._returnSpecializedTool(this.props.item.specializedTool2);
        }

        return <MHWTouchable onPress={() => {
            this.props.navigation.navigate('ArenaEquipmentInfoDetail', {
                item: this.props.item,
                key: this.props.item.weapon,
                theme: this.props.theme
            })
        }} content={
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                <Text style={[globalStyles.heading3, themeText, {flex: 1}]}>{this.props.item.weapon}</Text>

                <View style={{flex: 1, flexDirection: 'column'}}>
                    {weapon}
                    {upperBody}
                    {hands}
                    {lowerBody}
                    {legs}
                    {charm}
                    {specializedTool1}
                    {specializedTool2}
                </View>
            </View>
        }/>
    }

    _returnArmorComponent(armorName) {
        //Theme
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        let armorComponent;

        let armors = _.concat(database.lowRankArmors, database.highRankArmors);
        _.forEach(armors, (armorSet) => {
            if (armorSet.head !== undefined && armorSet.head.name === armorName) {
                armorComponent = armorSet.head;
                return false;
            }
            else if (armorSet.upperBody !== undefined && armorSet.upperBody.name === armorName) {
                armorComponent = armorSet.upperBody;
                return false;
            } else if (armorSet.hands !== undefined && armorSet.hands.name === armorName) {
                armorComponent = armorSet.hands;
                return false;
            } else if (armorSet.lowerBody !== undefined && armorSet.lowerBody.name === armorName) {
                armorComponent = armorSet.lowerBody;
                return false;
            } else if (armorSet.legs !== undefined && armorSet.legs.name === armorName) {
                armorComponent = armorSet.legs;
                return false;
            }
        });


        if (armorComponent !== undefined) {
            let icon = null;
            if (armorComponent.iconMale !== null) {
                icon = armorComponent.iconMale;
            } else if (armorComponent.iconFemale !== null) {
                icon = armorComponent.iconFemale;
            }

            return <View key={`${armorComponent.name}`} style={{flexDirection: 'column'}}>
                <View key={`${armorComponent.name}`}
                      style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={icon}
                           style={{width: 20, height: 20, margin: 4, resizeMode: 'contain'}}/>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={[globalStyles.subtitle, themeText]}>{armorComponent.name}</Text>
                    </View>
                </View>
            </View>
        } else {
            return null;
        }
    }

    _returnSpecializedTool(specializedToolName) {
        //Theme
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        let specializedTools = _.concat(database.smokers, database.mantles);
        let specializedTool = _.find(specializedTools, {name: specializedToolName});
        if (specializedTool !== undefined) {
            return <View key={`${specializedTool.name}`} style={{flexDirection: 'column'}}>
                <View key={`${specializedTool.name}`}
                      style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={specializedTool.icon}
                           style={{width: 20, height: 20, margin: 4, resizeMode: 'contain'}}/>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={[globalStyles.subtitle, themeText]}>{specializedTool.name}</Text>
                    </View>
                </View>
            </View>
        } else {
            return null;
        }

    }
}

export default class ArenaQuestDetailScreen extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            completed: false,
            showAds: true
        };
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.item.name : 'Arena Quest Detail',
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'ArenaQuests', theme: navigation.state.params.theme})} content={
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

        this._getCompletedValue(this.props.navigation.state.params.item);
    }

    render() {
        const {params} = this.props.navigation.state;

        //Theme
        let themeBackground = null;
        let themeText = null;
        let themeCompleted = '#b3e5fc';
        let themeSwitch = 'black';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeCompleted = null;
                themeSwitch = 'white';
            }
        }

        let stars = parseInt(params.item.level);
        if (stars <= '5') {
            stars = <Image source={require('./../assets/quests/star_blue.png')} style={{
                width: 20,
                height: 20,
                margin: 6,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
        } else {
            stars = <Image source={require('./../assets/quests/star_red.png')} style={{
                width: 20,
                height: 20,
                margin: 6,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
        }

        //Check whether quest is repeatable
        let completedSwitch = <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: themeCompleted,
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
                    <Text style={[globalStyles.heading2, themeText]}>{I18n.t('quest-completed').Translation}</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Switch
                    onValueChange={(value) => this._toggleCompleted(value, params.item)}
                    thumbColor={themeSwitch}

                    trackColor='grey'
tintColor='grey'
                    value={this.state.completed}/>
            </View>
        </View>;

        if (params.repeatable !== undefined) {
            completedSwitch = null;
        }

        //Check for Target Monsters Images
        let targetMonstersImage = null;
        let targetMonsters = null;
        let targetMonstersHeader = null;
        if (params.item.targetMonsters !== undefined) {
            targetMonstersHeader = <Text style={[globalStyles.heading1, themeText]}>{I18n.t('quest-target-monsters').Translation}</Text>;
            let monsterObject = null;
            let monsterCount = params.item.targetMonsters.length;
            targetMonstersImage = params.item.targetMonsters.map(function (targetMonster, index) {
                monsterObject = _.find(database.smallMonsters, {'name': targetMonster});
                if (monsterObject === undefined) {
                    monsterObject = _.find(database.largeMonsters, {'name': targetMonster});
                }

                if (monsterObject !== undefined) {
                    return <Image key={`${monsterObject.name + index}`} source={monsterObject.icon} style={{
                        width: Dimensions.get('window').width / (monsterCount * 2),
                        height: Dimensions.get('window').width / (monsterCount * 2),
                        margin: 8,
                        marginTop: 16,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}/>;
                }
            });

            let targetMonstersArray = [];
            targetMonsters = params.item.targetMonsters.map((targetMonster, index) => {
                let existingMonsterInArray;

                let monsterObject = _.find(database.smallMonsters, {'name': targetMonster});
                if (monsterObject === undefined) {
                    monsterObject = _.find(database.largeMonsters, {'name': targetMonster});
                }

                if (monsterObject !== undefined) {
                    if (targetMonstersArray.length > 0) {
                        existingMonsterInArray = _.find(targetMonstersArray, {name: monsterObject.name});
                        if (existingMonsterInArray === undefined) {
                            targetMonstersArray.push(monsterObject);
                            return <MonsterItem key={`${monsterObject.name + index}`} item={monsterObject}
                                                navigation={params.navigation} theme={this.props.navigation.state.params.theme}/>
                        }
                    } else {
                        targetMonstersArray.push(monsterObject);
                    }
                }

                if (existingMonsterInArray === undefined && monsterObject !== undefined) {
                    return <MonsterItem key={`${monsterObject.name + index}`} item={monsterObject}
                                        navigation={params.navigation} theme={this.props.navigation.state.params.theme}/>
                } else {
                    return null;
                }

            })
        }

        //Check for Rank
        let rank = null;
        let rankHeader = null;
        if (params.item.rank !== undefined) {
            rankHeader = <Text style={[globalStyles.heading1, themeText]}>{I18n.t('quest-rank').Translation}</Text>;
            rank = params.item.rank.map((rank, index) => {
                return <Text style={themeText} key={rank.name + index}>{rank.name}: {rank.time}</Text>
            });
        }

        //Check for Description
        let description = null;
        let descriptionHeader = null;
        if (params.item.description !== undefined) {
            descriptionHeader = <Text style={[globalStyles.heading1, themeText]}>{I18n.t('quest-description').Translation}</Text>;
            description = <Text style={themeText}>{I18n.t(params.item.description).Translation}</Text>;
        }

        //Check for Client
        let client = null;
        if (params.item.client !== undefined) {
            client = <Text style={themeText}>{I18n.t('quest-client').Translation}{I18n.t(params.item.client).Translation}</Text>;
        }

        //Check for Equipment Sets
        let equipmentInfo = null;
        let equipmentInfoHeader = null;
        if (params.item.equipmentInfo !== undefined) {
            equipmentInfoHeader = <Text style={[globalStyles.heading1, themeText]}>{I18n.t('quest-equipment-info').Translation}</Text>;
            equipmentInfo = params.item.equipmentInfo.map((equipmentInfo, index) => {
                return <ArenaEquipmentInfo key={index} item={equipmentInfo} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
            });
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <ScrollView>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        {completedSwitch}

                        <View style={{padding: 20}}>
                            <View
                                style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                {targetMonstersImage}
                            </View>

                            {/*Header*/}
                            <View style={{flex: 1, flexDirection: 'row', paddingTop: 4}}>
                                <View style={{flex: 3, alignItems: 'flex-start'}}>
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Text style={[globalStyles.heading2, themeText]}>{params.item.name}</Text>
                                        <Text style={themeText}>Reward: {params.item.rewardMoney}z, {I18n.t('quest-time').Translation}{params.item.timeLimit}
                                            {I18n.t('quest-minutes').Translation}</Text>
                                    </View>
                                </View>
                                <View style={{flex: 1, alignItems: 'flex-end'}}>
                                    <View style={{flex: 1, flexDirection: 'row', paddingTop: 4}}>
                                        <Text style={[{
                                            padding: 2,
                                            fontSize: 20,
                                        }, themeText]}>{params.item.level}</Text>
                                        {stars}
                                    </View>
                                </View>
                            </View>

                            {/*Objective*/}
                            <Text style={[globalStyles.heading1, themeText]}>{I18n.t('quest-objective').Translation}</Text>
                            <Text style={themeText}>{I18n.t(params.item.objective).Translation}</Text>

                            {/*Target Monsters*/}
                            {targetMonstersHeader}
                            {targetMonsters}

                            {/*Rank*/}
                            {rankHeader}
                            {rank}

                            {/*Conditions*/}
                            <Text style={[globalStyles.heading1, themeText]}>{I18n.t('quest-conditions').Translation}</Text>
                            <Text style={themeText}>{params.item.conditions.map(function (condition, index) {
                                if (index === params.item.conditions.length - 1)
                                    return I18n.t(condition).Translation;
                                else
                                    return I18n.t(condition).Translation + ", ";
                            })}</Text>

                            {/*Failure Conditions*/}
                            <Text style={[globalStyles.heading1, themeText]}>{I18n.t('quest-failure-conditions').Translation}</Text>
                            <Text style={themeText}>{params.item.failureConditions.map(function (failureCondition, index) {
                                if (index === params.item.failureConditions.length - 1)
                                    return I18n.t(failureCondition).Translation;
                                else
                                    return I18n.t(failureCondition).Translation + ", ";
                            })}</Text>

                            {/*Description*/}
                            {descriptionHeader}
                            {client}
                            {description}

                            {/*Sets*/}
                            {equipmentInfoHeader}
                            {equipmentInfo}
                        </View>
                    </View>

                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        )
    }

    async _getCompletedValue(item) {
        try {
            let value = await AsyncStorage.getItem("ArenaQuest" + item.name);
            this.setState({
                completed: (value !== null && value === 'true')
            });
        } catch (error) {
            // Error retrieving data
        }
    }

    async _toggleCompleted(value, item) {
        this.setState({completed: value});
        try {
            if (value) {
                await AsyncStorage.setItem("ArenaQuest" + item.name, 'true');
                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();
            } else {
                await AsyncStorage.setItem("ArenaQuest" + item.name, 'false');

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();
            }

        } catch (error) {
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/7607504503', 'ca-app-pub-9242567842673294/2564995922');
        } else {
            return null;
        }
    }
}