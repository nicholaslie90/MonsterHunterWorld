/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Dimensions,
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    Switch,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import globalStyles from '../styles';
import {IndicatorViewPager, PagerTitleIndicator} from 'rn-viewpager';
import {assignedQuests, optionalQuests, eventQuests, specialAssignmentsQuests} from '../database';
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class QuestItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            completed: false,
            completedOpacity: 1,
        };
        this._isMounted = false;
    }

    componentWillMount() {
        this._setItemState();
    }

    render() {
        //Theme
        let themeText = null;
        let themeSwitch = 'black';
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
                themeSwitch = 'white';
            }
        }

        let stars = parseInt(this.props.item.level);
        if (stars <= '5') {
            stars = <Image source={require('./../assets/quests/star_blue.png')} style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
        } else {
            stars = <Image source={require('./../assets/quests/star_red.png')} style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
        }

        let completedSwitch = <Switch
            onValueChange={(value) => this._toggleCompleted(value, this.props.item)}
            value={this.state.completed}
            thumbColor={themeSwitch}

            trackColor='grey'
tintColor='grey'
            style={{flex: 1, marginRight: 10}}/>;

        let navigationObject = {
            item: this.props.item,
            navigation: this.props.navigation,
            parent: this,
        };

        if (this.props.repeatable !== undefined) {
            completedSwitch = null;
            navigationObject.repeatable = this.props.repeatable;
        }

        navigationObject.theme = this.props.theme;

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('QuestDetail', navigationObject)} content={
            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 10,
                opacity: this.state.completedOpacity
            }}>
                <Image source={this.props.item.icon} style={{
                    width: 30,
                    height: 30,
                    margin: 10,
                    marginTop: 14,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{flex: 4, flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[globalStyles.item, themeText]}>{I18n.t(this.props.item.translationKey).Translation}</Text>
                    <Text
                        style={[globalStyles.subtitle, themeText]}>{I18n.t('quest-client').Translation}{I18n.t(this.props.item.client).Translation}</Text>
                    <Text
                        style={[globalStyles.subtitle, themeText]}>{I18n.t(this.props.item.objective).Translation} - {this.props.item.rewardMoney}z
                        - {this.props.item.timeLimit}{I18n.t('quest-minutes').Translation}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', paddingBottom: 4, paddingTop: 4}}>
                    {completedSwitch}
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={[{
                                fontSize: 18,
                            }, themeText]}>{this.props.item.level}</Text>
                            {stars}
                        </View>
                    </View>
                </View>
            </View>
        }/>
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillReceiveProps() {
        this._setItemState();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async _setItemState() {
        let value = await AsyncStorage.getItem("Quest" + this.props.item.name);
        if (this._isMounted) {
            this.setState({
                completed: (value !== null && value === 'true'),
                completedOpacity: (value !== null && value === 'true') ? 0.3 : 1
            });
        }
    }

    async _toggleCompleted(value, item) {
        try {
            if (value) {
                this.setState({completed: true, completedOpacity: 0.3})
                await
                    AsyncStorage.setItem("Quest" + item.name, 'true');
            } else {
                this.setState({completed: false, completedOpacity: 1})
                await
                    AsyncStorage.setItem("Quest" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class QuestsScreen extends React.PureComponent {
    state = {
        showAds: true,
        filterCondition: 'None'
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-quests').Translation,
            headerRight: (
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <MHWTouchable onPress={() => {
                        navigation.navigate('QuestsFilter', {
                            theme: navigation.state.params.theme,
                            filterCondition: navigation.state.params.filterCondition,
                            updateQuests: navigation.state.params.updateQuests
                        })
                    }} content={
                        <Image source={require('../assets/general/icon_filter.png')} style={globalStyles.navSearch}/>
                    }/>
                    <MHWTouchable onPress={() => navigation.navigate('Search', {
                        scope: 'Quests',
                        theme: navigation.state.params.theme
                    })} content={
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

        //Filter the quests
        let sortedAssignedQuests = _.orderBy(assignedQuests, ['level'], ['asc']);
        stateObject['assignedQuests'] = sortedAssignedQuests;

        let sortedOptionalQuests = _.orderBy(optionalQuests, ['level'], ['asc']);
        stateObject['optionalQuests'] = sortedOptionalQuests;

        let sortedSpecialAssignmentsQuests = _.orderBy(specialAssignmentsQuests, ['level'], ['asc']);
        stateObject['specialAssignments'] = sortedSpecialAssignmentsQuests;

        this.setState(stateObject);

        this.props.navigation.setParams({
            filterCondition: this.state.filterCondition,
            updateQuests: this._updateQuests
        })
    }

    render() {
        //Theme
        let themeBackground = null;
        let themeCrafted = '#b3e5fc';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeCrafted = null;
            }
        }

        // let sortedAssignedQuests = _.orderBy(assignedQuests, ['level'], ['asc']);
        // let sortedOptionalQuests = _.orderBy(optionalQuests, ['level'], ['asc']);
        // let sortedSpecialAssignmentsQuests = _.orderBy(specialAssignmentsQuests, ['level'], ['asc']);

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <IndicatorViewPager
                    style={{flex: 1, flexDirection: 'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View>
                        <FlatList
                            data={this.state.assignedQuests}
                            renderItem={({item}) => <QuestItem item={item} navigation={this.props.navigation}
                                                               theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => item.name.toString()
                            }
                        />
                    </View>
                    <View>
                        <FlatList
                            data={this.state.optionalQuests}
                            renderItem={({item}) => <QuestItem item={item} navigation={this.props.navigation}
                                                               theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => item.name.toString()
                            }
                        />
                    </View>
                    <View>
                        <FlatList
                            data={eventQuests}
                            renderItem={({item}) => <QuestItem item={item} navigation={this.props.navigation}
                                                               repeatable={true}
                                                               theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => item.name.toString()
                            }
                        />
                    </View>
                    <View>
                        <FlatList
                            data={this.state.specialAssignments}
                            renderItem={({item}) => <QuestItem item={item} navigation={this.props.navigation}
                                                               theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => item.name.toString()
                            }
                        />
                    </View>
                </IndicatorViewPager>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/2406834741', 'ca-app-pub-9242567842673294/3994886848');
        } else {
            return null;
        }
    }

    _renderTitleIndicator() {
        const windowWidth = Dimensions.get('window').width;

        return (
            <PagerTitleIndicator
                style={globalStyles.tabIndicatorContainer}
                trackScroll={true}
                itemTextStyle={globalStyles.tabIndicatorText}
                itemStyle={{width: windowWidth / 3}}
                selectedItemStyle={{width: windowWidth / 3}}
                selectedItemTextStyle={globalStyles.tabIndicatorSelectedText}
                selectedBorderStyle={globalStyles.tabSelectedBorderStyle}
                titles={['Assigned', 'Optional', 'Event', 'Special Assignments']}
            />
        )
    }

    _updateQuests = async (filterCondition) => {
        this.props.navigation.setParams({
            filterCondition: filterCondition
        });

        let stateObject = {};
        stateObject['filterCondition'] = filterCondition;
        if (filterCondition === "None") {
            let sortedAssignedQuests = _.orderBy(assignedQuests, ['level'], ['asc']);
            stateObject['assignedQuests'] = sortedAssignedQuests;

            let sortedOptionalQuests = _.orderBy(optionalQuests, ['level'], ['asc']);
            stateObject['optionalQuests'] = sortedOptionalQuests;

            let sortedSpecialAssignmentsQuests = _.orderBy(specialAssignmentsQuests, ['level'], ['asc']);
            stateObject['specialAssignments'] = sortedSpecialAssignmentsQuests;

            this.setState(stateObject);
        } else if (filterCondition === "Incomplete") {
            //Find all Completed quests
            let keys = await AsyncStorage.getAllKeys();
            let questKeys = _.filter(keys, (key) => {
                return _.startsWith(key, 'Quest');
            });

            let assignedQuestsArray = [];
            let optionalQuestsArray = [];
            let specialAssignmentQuestsArray = [];
            AsyncStorage.multiGet(questKeys, (err, stores) => {
                let questDictionaryArray = [];
                stores.map((result, i, store) => {
                    // get at each store's key/value so you can work with it
                    let key = store[i][0];
                    let value = store[i][1];
                    let questName = key.split("Quest")[1];
                    // console.warn(questName + ":" + value);
                    questDictionaryArray.push({
                        "name": questName,
                        "value": value
                    })
                });

                assignedQuestsArray = _.filter(assignedQuests, (assignedQuest) => {
                    let questFound = _.find(questDictionaryArray, {"name": assignedQuest.name});
                    if (questFound === undefined) {
                        return assignedQuest;
                    } else if (questFound !== undefined && questFound.value === "false") {
                        return assignedQuest;
                    }
                });
                assignedQuestsArray = _.orderBy(assignedQuestsArray, ['level'], ['asc']);
                stateObject['assignedQuests'] = assignedQuestsArray;

                optionalQuestsArray = _.filter(optionalQuests, (optionalQuest) => {
                    let questFound = _.find(questDictionaryArray, {"name": optionalQuest.name});
                    if (questFound === undefined) {
                        return optionalQuest;
                    } else if (questFound !== undefined && questFound.value === "false"){
                        return optionalQuest;
                    }
                });
                optionalQuestsArray = _.orderBy(optionalQuestsArray, ['level'], ['asc']);
                stateObject['optionalQuests'] = optionalQuestsArray;

                specialAssignmentQuestsArray = _.filter(specialAssignmentsQuests, (specialAssignmentQuest) => {
                    let questFound = _.find(questDictionaryArray, {"name": specialAssignmentQuest.name});
                    if (questFound === undefined) {
                        return specialAssignmentQuest;
                    } else if (questFound !== undefined && questFound.value === "false"){
                        return specialAssignmentQuest;
                    }
                });
                specialAssignmentQuestsArray = _.orderBy(specialAssignmentQuestsArray, ['level'], ['asc']);
                stateObject['specialAssignments'] = specialAssignmentQuestsArray;

                this.setState(stateObject);
            });
        } else if (filterCondition === "Completed") {
            //Find all Completed quests
            let keys = await AsyncStorage.getAllKeys();
            let questKeys = _.filter(keys, (key) => {
                return _.startsWith(key, 'Quest');
            });

            let assignedQuestsArray = [];
            let optionalQuestsArray = [];
            let specialAssignmentQuestsArray = [];
            AsyncStorage.multiGet(questKeys, (err, stores) => {
                stores.map((result, i, store) => {
                    // get at each store's key/value so you can work with it
                    let key = store[i][0];
                    let value = store[i][1];
                    let questName = key.split("Quest")[1];

                    let foundAssignedQuest = _.find(assignedQuests, {'name': questName});
                    if (foundAssignedQuest !== undefined && value === "true") {
                        assignedQuestsArray.push(foundAssignedQuest);
                    }

                    let foundOptionalQuest = _.find(optionalQuests, {'name': questName});
                    if (foundOptionalQuest !== undefined && value === "true") {
                        optionalQuestsArray.push(foundOptionalQuest);
                    }

                    let foundSpecialAssignmentQuest = _.find(specialAssignmentsQuests, {'name': questName});
                    if (foundSpecialAssignmentQuest !== undefined && value === "true") {
                        specialAssignmentQuestsArray.push(foundSpecialAssignmentQuest);
                    }
                });

                assignedQuestsArray = _.orderBy(assignedQuestsArray, ['level'], ['asc']);
                stateObject['assignedQuests'] = assignedQuestsArray;

                optionalQuestsArray = _.orderBy(optionalQuestsArray, ['level'], ['asc']);
                stateObject['optionalQuests'] = optionalQuestsArray;

                specialAssignmentQuestsArray = _.orderBy(specialAssignmentQuestsArray, ['level'], ['asc']);
                stateObject['specialAssignments'] = specialAssignmentQuestsArray;

                this.setState(stateObject);
            });
        }
    };
}