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
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from '../styles';
import {IndicatorViewPager, PagerTitleIndicator} from 'rn-viewpager';
import {canteenMeats, canteenFish, canteenVeggies, canteenDrinks, canteenSkills} from '../database';
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

export class CanteenItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            obtained: false,
            obtainedOpacity: 1
        };
        this._isMounted = false;
    }

    componentWillMount(){
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

        let description = null;
        if (this.props.item.description !== undefined) {
            description = <Text style={[globalStyles.subtitle, themeText]}>{this.props.item.description}</Text>;
        }

        let notes = null;
        if (this.props.item.notes !== undefined) {
            notes = <Text style={[globalStyles.subtitle, themeText]}>How to Get: {this.props.item.notes}</Text>;
        }

        let quest = null;
        if (this.props.item.quest !== undefined) {
            quest = <Text style={[globalStyles.subtitle, themeText]}>Quest: {this.props.item.quest}</Text>;
        }

        return <View style={{
            flex: 1,
            flexDirection: 'row',
            margin: 10,
            opacity: this.state.obtainedOpacity,
            alignItems: 'center'
        }}>
            <View>
                <Image source={this.props.item.foodIcon} style={{
                    width: 30,
                    height: 30,
                    margin: 10,
                    marginTop: 14,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <Image source={this.props.item.icon} style={{
                    width: 20,
                    height: 20,
                    marginTop: 3,
                    marginLeft: 0,
                    position: 'absolute',
                }}/>
            </View>
            <View style={{flex: 5, flexDirection: 'column', paddingTop: 4}}>
                <Text style={[styles.item, themeText]}>{this.props.item.name}</Text>
                {description}
                {notes}
                {quest}
            </View>
            <Switch
                onValueChange={(value) => this._toggleCompleted(value, this.props.item)}
                value={this.state.obtained}
                thumbColor={themeSwitch}

                trackColor='grey'
tintColor='grey'
                style={{flex: 1}}/>
        </View>
    }

    componentDidMount(){
        this._isMounted = true;
    }

    componentWillReceiveProps() {        this._setItemState();    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    async _setItemState() {
        let value = await AsyncStorage.getItem("Canteen" + this.props.item.name);
        if (this._isMounted){
            this.setState({
                obtained: (value !== null && value === 'true'),
                obtainedOpacity: (value !== null && value === 'true') ? 0.3 : 1
            });
        }
    }

    async _toggleCompleted(value, item) {
        try {
            if (value) {
                this.setState({obtained: true, obtainedOpacity: 0.3})
                await
                    AsyncStorage.setItem("Canteen" + item.name, 'true');
            } else {
                this.setState({obtained: false, obtainedOpacity: 1})
                await
                    AsyncStorage.setItem("Canteen" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export class CanteenSkillItem extends React.PureComponent {
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

        let activationSource = null;
        if (this.props.item.activationSource !== undefined){
            activationSource = <Text style={[globalStyles.subtitle, themeText]}>Activation Source: x{this.props.item.activationSource}</Text>;
        }
        return <View style={{
            flex: 1,
            flexDirection: 'row',
            margin: 10,
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
                <Text style={[styles.item, themeText, {marginLeft: 2}]}>{this.props.item.name}</Text>
                <Text style={[globalStyles.subtitle, themeText]}>Type: {this.props.item.type}</Text>
                <Text style={[globalStyles.subtitle, themeText]}>{this.props.item.description}</Text>
                {activationSource}
            </View>
        </View>
    }
}

export default class CanteenScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-canteen').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'Canteen', theme: navigation.state.params.theme})} content={
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
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
            }
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <IndicatorViewPager
                    style={{flex: 1, flexDirection: 'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View>
                        <FlatList
                            data={canteenMeats}
                            renderItem={({item}) => <CanteenItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={canteenFish}
                            renderItem={({item}) => <CanteenItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={canteenVeggies}
                            renderItem={({item}) => <CanteenItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={canteenDrinks}
                            renderItem={({item}) => <CanteenItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={canteenSkills}
                            renderItem={({item}) => <CanteenSkillItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </IndicatorViewPager>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/2504646862', 'ca-app-pub-9242567842673294/6284749081');
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
                titles={['Meats', 'Fish', 'Veggies', 'Drinks', 'Skills']}
            />
        )
    }
}