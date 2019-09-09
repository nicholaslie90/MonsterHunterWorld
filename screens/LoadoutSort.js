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

class SortItem extends React.PureComponent {
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
        if (this.props.value === this.props.sortOrder) {
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
            this.props.updateWeapons(this.props.value);
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

export default class LoadoutSortScreen extends React.PureComponent {
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
            title: I18n.t('ui-sort').Translation,
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
                        <SortItem name={'Smithy Tree (Default)'} value={'SmithyTree'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Attack (High to Low)'} value={'AttackHighToLow'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/weapons/icon_attack.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Attack (Low to High)'} value={'AttackLowToHigh'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/weapons/icon_attack.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Fire (High to Low)'} value={'FireHighToLow'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/general/icon_fire.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Fire (Low to High)'} value={'FireLowToHigh'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/general/icon_fire.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Water (High to Low)'} value={'WaterHighToLow'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/general/icon_water.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Water (Low to High)'} value={'WaterLowToHigh'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/general/icon_water.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Thunder (High to Low)'} value={'ThunderHighToLow'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/general/icon_thunder.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Thunder (Low to High)'} value={'ThunderLowToHigh'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/general/icon_thunder.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Ice (High to Low)'} value={'IceHighToLow'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/general/icon_ice.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Ice (Low to High)'} value={'IceLowToHigh'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/general/icon_ice.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Dragon (High to Low)'} value={'DragonHighToLow'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/general/icon_dragon.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'Dragon (Low to High)'} value={'DragonLowToHigh'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/general/icon_dragon.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'None (High to Low)'} value={'NoneHighToLow'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/weapons/icon_element.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                        <SortItem name={'None (Low to High)'} value={'NoneLowToHigh'} sortOrder={params.sortOrder}
                                  navigation={this.props.navigation}
                                  updateWeapons={params.updateWeapons}
                                  icon={require('./../assets/weapons/icon_element.png')}
                                  theme={this.props.navigation.state.params.theme}/>
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        )
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/3435163732', 'ca-app-pub-9242567842673294/4147988917');
        } else {
            return null;
        }
    }
}