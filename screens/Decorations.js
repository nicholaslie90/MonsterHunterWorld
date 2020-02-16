/**
 * Created by nicholaslie on 18/02/18.
 */

import React, { Component } from 'react';
import {
    AsyncStorage, Dimensions, FlatList, Image, Platform, SafeAreaView, Switch, StyleSheet, Text,
    View
} from "react-native";
import globalStyles from '../styles'
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager';
import { skills, decorationsJewel1, decorationsJewel2, decorationsJewel3, decorationsJewel4 } from '../database'
import { makeAdMob, productIdRemoveAds, returnRarityColor } from "../utility";
import I18n from '../i18n/i18n'
import { SkillItem } from "./Skills";
import { MHWTouchable } from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        paddingLeft: 6,
        paddingTop: 10,
        paddingRight: 10
    },
    navImage: {
        width: 50,
        height: 50,
        margin: 5
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class DecorationItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            crafted: false,
            craftedOpacity: 1,
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

        let skillText = this.props.item.skill + ' (1 pts)';

        let skill = null;
        let skillItem = _.find(skills, { name: this.props.item.skill });
        if (skillItem !== undefined) {
            skill = <SkillItem item={skillItem}
                navigation={this.props.navigation}
                level={'1'} theme={this.props.theme} />
        }

        let rarityText = null;
        if (this.props.item.rarity !== undefined){
            rarityText = I18n.t('ui-rarity').Translation + ': ' + this.props.item.rarity;
        }

        //Drop Rates
        let mysteriousDropRate = null;
        if (this.props.item.mysteriousDropRate !== undefined) {
            mysteriousDropRate = <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={require('./../assets/decorations/mysterious-feystone.png')} style={{
                    width: 20,
                    height: 20,
                    margin: 4,
                    alignItems: 'center'
                }} />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text
                        style={[globalStyles.subtitle, themeText]}>{I18n.t('ui-mysterious').Translation}: {this.props.item.mysteriousDropRate}%</Text>
                </View>
            </View>
        }

        let gleamingDropRate = null;
        if (this.props.item.gleamingDropRate !== undefined) {
            gleamingDropRate = <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={require('./../assets/decorations/gleaming-feystone.png')} style={{
                    width: 20,
                    height: 20,
                    margin: 4,
                    alignItems: 'center'
                }} />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text
                        style={[globalStyles.subtitle, themeText]}>{I18n.t('ui-gleaming').Translation}: {this.props.item.gleamingDropRate}%</Text>
                </View>
            </View>
        }

        let wornDropRate = null;
        if (this.props.item.wornDropRate !== undefined) {
            wornDropRate = <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={require('./../assets/decorations/worn-feystone.png')} style={{
                    width: 20,
                    height: 20,
                    margin: 4,
                    alignItems: 'center'
                }} />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text
                        style={[globalStyles.subtitle, themeText]}>{I18n.t('ui-worn').Translation}: {this.props.item.wornDropRate}%</Text>
                </View>
            </View>
        }

        let warpedDropRate = null;
        if (this.props.item.warpedDropRate !== undefined) {
            warpedDropRate = <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={require('./../assets/decorations/warped-feystone.png')} style={{
                    width: 20,
                    height: 20,
                    margin: 4,
                    alignItems: 'center'
                }} />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text
                        style={[globalStyles.subtitle, themeText]}>{I18n.t('ui-warped').Translation}: {this.props.item.warpedDropRate}%</Text>
                </View>
            </View>
        }

        return <View style={{ flex: 1, flexDirection: 'row', opacity: this.state.craftedOpacity }}>
            <Image source={this.props.item.icon} style={{
                width: 25,
                height: 25,
                margin: 10,
                marginTop: 15,
                justifyContent: 'center',
                alignItems: 'center',
                resizeMode: 'contain',
            }} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <Text style={[styles.item, themeText]}>{this.props.item.name}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={[globalStyles.subtitle, themeText, { paddingLeft: 6 }]}>{skillText}</Text>
                            <Text style={[globalStyles.subtitle, themeText, {color: returnRarityColor(this.props.item.rarity)}]}>{rarityText}</Text>
                        </View>
                    </View>
                    <Switch
                        onValueChange={(value) => this._toggleCrafted(value, this.props.item)}
                        thumbColor={themeSwitch}

                        trackColor='grey'
tintColor='grey'
                        value={this.state.crafted}
                        style={{ flex: 1, alignSelf: 'flex-end', marginTop: 10 }} />
                </View>
                {mysteriousDropRate}
                {gleamingDropRate}
                {wornDropRate}
                {warpedDropRate}
                {skill}
            </View>
        </View>;
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillReceiveProps() { this._setItemState(); }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async _setItemState() {
        let value = await AsyncStorage.getItem("Decoration" + this.props.item.name);
        if (this._isMounted) {
            this.setState({
                crafted: (value !== null && value === 'true'),
                craftedOpacity: (value !== null && value === 'true') ? 0.5 : 1
            });
        }
    }

    async _toggleCrafted(value, item) {
        try {
            if (value) {
                this.setState({ crafted: true, craftedOpacity: 0.5 });
                await AsyncStorage.setItem("Decoration" + item.name, 'true');
            } else {
                this.setState({ crafted: false, craftedOpacity: 1 });
                await AsyncStorage.setItem("Decoration" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class DecorationsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { showAds: true };
    }

    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: I18n.t('home-decorations').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', { scope: 'Decorations', theme: navigation.state.params.theme })} content={
                    <Image source={require('../assets/general/icon_search.png')} style={globalStyles.navSearch} />
                } />
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

        let sortedJewel1 = _.orderBy(decorationsJewel1, ['name'], ['asc']);
        let sortedJewel2 = _.orderBy(decorationsJewel2, ['name'], ['asc']);
        let sortedJewel3 = _.orderBy(decorationsJewel3, ['name'], ['asc']);
        let sortedJewel4 = _.orderBy(decorationsJewel4, ['name'], ['asc']);

        return (
            <SafeAreaView style={[{ flex: 1 }, themeBackground]}>
                <IndicatorViewPager
                    style={{ flex: 1, flexDirection: 'column-reverse' }}
                    indicator={this._renderTitleIndicator()}
                >
                    <View>
                        <FlatList
                            data={sortedJewel1}
                            renderItem={({ item }) => <DecorationItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedJewel2}
                            renderItem={({ item }) => <DecorationItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedJewel3}
                            renderItem={({ item }) => <DecorationItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedJewel4}
                            renderItem={({ item }) => <DecorationItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                </IndicatorViewPager>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/4968102258', 'ca-app-pub-9242567842673294/8799231785');
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
                itemStyle={{ width: windowWidth / 4 }}
                selectedItemStyle={{ width: windowWidth / 4 }}
                selectedItemTextStyle={globalStyles.tabIndicatorSelectedText}
                selectedBorderStyle={globalStyles.tabSelectedBorderStyle}
                titles={['Jewel 1', 'Jewel 2', 'Jewel 3', 'Jewel 4']}
            />
        )
    }
}