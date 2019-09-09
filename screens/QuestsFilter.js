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
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

class FilterItem extends React.PureComponent {
    render() {
        //Theme
        let themeText = null;
        let themeSeparator = '#f5f5f5';
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
                themeSeparator = 'white';
            }
        }

        let selectedCheckmark = null;
        if (this.props.value === this.props.filterCondition) {
            selectedCheckmark = <Text style={[themeText, {flex: 1, fontSize: 24}]}>✓</Text>;
        }

        let icon = null;
        if (this.props.icon !== undefined){
            icon = <Image source={this.props.icon} style={{
                width: 20,
                height: 20,
                margin: 4,
                alignItems: 'center'
            }}/>
        }

        return <MHWTouchable onPress={() => {
            this.props.navigation.goBack(null);
            this.props.updateQuests(this.props.value);
        }} content={<View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{
                    flex: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20
                }}>
                    {icon}
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={themeText}>{this.props.name}</Text>
                    </View>
                </View>
                {selectedCheckmark}
            </View>
            <View style={{
                borderTopColor: themeSeparator,
                borderWidth: 0.5,
            }}/>
        </View>}/>
    }
}

export default class QuestsFilterScreen extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            completed: false,
            showAds: true,
            value: 0
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
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: I18n.t('ui-filter').Translation + " " +  I18n.t('home-quests').Translation,
        };
    };

    render() {
        //Theme
        let themeBackground = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
            }
        }

        const {params} = this.props.navigation.state;

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <ScrollView>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <FilterItem name={'None'} value={'None'} filterCondition={params.filterCondition}
                                  navigation={this.props.navigation}
                                  updateQuests={params.updateQuests}
                                  theme={this.props.navigation.state.params.theme}/>
                        <FilterItem name={'Incomplete'} value={'Incomplete'} filterCondition={params.filterCondition}
                                    navigation={this.props.navigation}
                                    updateQuests={params.updateQuests}
                                    theme={this.props.navigation.state.params.theme}/>
                        <FilterItem name={'Completed'} value={'Completed'} filterCondition={params.filterCondition}
                                  navigation={this.props.navigation}
                                  updateQuests={params.updateQuests}
                                  theme={this.props.navigation.state.params.theme}/>
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        )
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/3779099772', 'ca-app-pub-9242567842673294/4900609750');
        } else {
            return null;
        }
    }
}