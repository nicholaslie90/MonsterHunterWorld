/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    Switch,
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from '../styles';
import {arenaQuests} from '../database';
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class ArenaQuestItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            completed: false,
            completedOpacity: 1
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

        return <MHWTouchable onPress={()=> this.props.navigation.navigate('ArenaQuestDetail', navigationObject)} content={
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
                    <Text style={[styles.item, themeText, {marginLeft: 2}]}>{I18n.t(this.props.item.translationKey).Translation}</Text>
                    <Text style={[globalStyles.subtitle, themeText]}>{I18n.t('quest-client').Translation}{I18n.t(this.props.item.client).Translation}</Text>
                    <Text style={[globalStyles.subtitle, themeText]}>{I18n.t(this.props.item.objective).Translation}
                        - {this.props.item.rewardMoney}z
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
        let value = await AsyncStorage.getItem("ArenaQuest" + this.props.item.name);
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
                    AsyncStorage.setItem("ArenaQuest" + item.name, 'true');
            } else {
                this.setState({completed: false, completedOpacity: 1})
                await
                    AsyncStorage.setItem("ArenaQuest" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class ArenaQuestsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-arena-quests').Translation,
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
    }

    render() {
        //Theme
        let themeBackground = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
            }
        }

        let sortedArenaQuests = _.orderBy(arenaQuests, ['name'], ['asc']);

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <FlatList
                    data={sortedArenaQuests}
                    renderItem={({item}) => <ArenaQuestItem item={item} navigation={this.props.navigation}
                                                            theme={this.props.navigation.state.params.theme}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/9544522262', 'ca-app-pub-9242567842673294/7873162927');
        } else {
            return null;
        }
    }
}