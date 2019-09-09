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
import {smallMonsters, largeMonsters} from '../database';
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
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

export default class QuestDetailScreen extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            completed: false,
            showAds: true
        };
    }

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

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.item.name : 'Quest Detail',
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'Quests', theme: navigation.state.params.theme})} content={
                    <Image source={require('../assets/general/icon_search.png')} style={globalStyles.navSearch}/>
                }/>
            ),
        };
    };

    render() {
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

        const {params} = this.props.navigation.state;

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
                monsterObject = _.find(smallMonsters, {'name': targetMonster});
                if (monsterObject === undefined) {
                    monsterObject = _.find(largeMonsters, {'name': targetMonster});
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

                let monsterObject = _.find(smallMonsters, {'name': targetMonster});
                if (monsterObject === undefined) {
                    monsterObject = _.find(largeMonsters, {'name': targetMonster});
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

        //Check for Other Monsters
        let otherMonsters = null;
        let otherMonstersHeader = null;
        if (params.item.otherMonsters !== undefined) {
            otherMonstersHeader = <Text style={[globalStyles.heading1, themeText]}>{I18n.t('quest-other-monsters').Translation}</Text>;

            let otherMonstersArray = [];
            otherMonsters = params.item.otherMonsters.map((otherMonster, index) => {
                let existingMonsterInArray = null;

                let monsterObject = _.find(smallMonsters, {'name': otherMonster});
                if (monsterObject === undefined) {
                    monsterObject = _.find(largeMonsters, {'name': otherMonster});
                }

                if (monsterObject !== undefined) {
                    if (otherMonstersArray.length > 0) {
                        existingMonsterInArray = _.find(otherMonstersArray, {name: monsterObject.name});
                        if (existingMonsterInArray === null) {
                            otherMonstersArray.push(monsterObject);
                        }
                    } else {
                        otherMonstersArray.push(monsterObject);
                    }
                }

                if (existingMonsterInArray === null && monsterObject !== undefined) {
                    return <MonsterItem key={`${monsterObject.name + index}`} item={monsterObject}
                                        navigation={params.navigation} theme={this.props.navigation.state.params.theme}/>
                } else {
                    return null;
                }

            })
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

        //Check for Notable Rewards
        let notableRewards = null;
        let notableRewardsHeader = null;
        if (params.item.notableRewards !== undefined) {
            notableRewardsHeader = <Text style={[globalStyles.heading1, themeText]}>{I18n.t('quest-notable-rewards').Translation}</Text>;
            notableRewards = <Text style={themeText}>{I18n.t(params.item.notableRewards).Translation}</Text>;
        }

        //Check for Tips
        let tips = null;
        let tipsHeader = null;
        if (params.item.tips !== undefined) {
            tipsHeader = <Text style={[globalStyles.heading1, themeText]}>{I18n.t('quest-tips').Translation}</Text>;
            tips = <Text style={themeText}>{I18n.t(params.item.tips).Translation}</Text>;
        }

        //Check for Notes
        let notes = null;
        let notesHeader = null;
        if (params.item.notes !== undefined) {
            notesHeader = <Text style={[globalStyles.heading1, themeText]}>{I18n.t('quest-notes').Translation}</Text>;
            notes = <Text style={themeText}>{I18n.t(params.item.notes).Translation}</Text>;
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
                            <Text style={themeText}>{I18n.t(params.item.type).Translation}: {I18n.t(params.item.objective).Translation}</Text>

                            {/*Target Monsters*/}
                            {targetMonstersHeader}
                            {targetMonsters}

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

                            {/*Notable Rewards*/}
                            {notableRewardsHeader}
                            {notableRewards}

                            {/*Tips*/}
                            {tipsHeader}
                            {tips}

                            {/*Notes*/}
                            {notesHeader}
                            {notes}

                            {/*Description*/}
                            {descriptionHeader}
                            {client}
                            {description}

                            {/*Other Monsters*/}
                            {otherMonstersHeader}
                            {otherMonsters}
                        </View>
                    </View>

                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        )
    }

    async _getCompletedValue(item) {
        try {
            let value = await AsyncStorage.getItem("Quest" + item.name);
            this.setState({
                completed: (value !== null && value === 'true')
            });
        } catch (error) {
            // Error retrieving data
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/2143945018', 'ca-app-pub-9242567842673294/5499540208');
        } else {
            return null;
        }
    }

    async _toggleCompleted(value, item) {
        this.setState({completed: value});
        try {
            if (value) {
                await AsyncStorage.setItem("Quest" + item.name, 'true');
                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();
            } else {
                await AsyncStorage.setItem("Quest" + item.name, 'false');

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();
            }

        } catch (error) {
        }
    }
}