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
    SafeAreaView, ScrollView, StyleSheet,
    Switch,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import globalStyles from '../styles';
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";
import {layeredArmors} from "../database-layered-armors";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        paddingLeft: 2,
        paddingRight: 10
    },
    navImage: {
        width: 50,
        height: 50,
        margin: 5
    },
});

export class LayeredArmorItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            obtained: false,
            obtainedOpacity: 1
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

        //How to Get
        let howToGet = null;
        if (this.props.item.howToGet !== undefined){
            howToGet = <Text style={[globalStyles.subtitle, themeText]}>{I18n.t(this.props.item.howToGet).Translation}</Text>;
        }

        //Head
        let head = null;
        let headImage = null;
        if (this.props.item.color !== undefined){
            switch (this.props.item.color){
                case "green":
                    headImage = require('./../assets/layered_armors/helm-green.png');
                    break;
                case "purple":
                    headImage = require('./../assets/layered_armors/helm-purple.png');
                    break;
            }
        }
        if (this.props.item.head !== undefined){
            head = <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={headImage} style={{
                    width: 20,
                    height: 20,
                    margin: 4,
                    alignItems: 'center'
                }}/>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text
                        style={[globalStyles.subtitle, themeText]}>{I18n.t(this.props.item.head.translationKey).Translation}</Text>
                </View>
            </View>
        }

        //Upper Body
        let upperBody = null;
        let upperBodyImage = null;
        if (this.props.item.color !== undefined){
            switch (this.props.item.color){
                case "green":
                    upperBodyImage = require('./../assets/layered_armors/chest-green.png');
                    break;
                case "purple":
                    upperBodyImage = require('./../assets/layered_armors/chest-purple.png');
                    break;
            }
        }
        if (this.props.item.upperBody !== undefined){
            upperBody = <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={upperBodyImage} style={{
                    width: 20,
                    height: 20,
                    margin: 4,
                    alignItems: 'center'
                }}/>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text
                        style={[globalStyles.subtitle, themeText]}>{I18n.t(this.props.item.upperBody.translationKey).Translation}</Text>
                </View>
            </View>
        }

        //Hands
        let hands = null;
        let handsImage = null;
        if (this.props.item.color !== undefined){
            switch (this.props.item.color){
                case "green":
                    handsImage = require('./../assets/layered_armors/arms-green.png');
                    break;
                case "purple":
                    handsImage = require('./../assets/layered_armors/arms-purple.png');
                    break;
            }
        }
        if (this.props.item.hands !== undefined){
            hands = <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={handsImage} style={{
                    width: 20,
                    height: 20,
                    margin: 4,
                    alignItems: 'center'
                }}/>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text
                        style={[globalStyles.subtitle, themeText]}>{I18n.t(this.props.item.hands.translationKey).Translation}</Text>
                </View>
            </View>
        }

        //Lower Body
        let lowerBody = null;
        let lowerBodyImage = null;
        if (this.props.item.color !== undefined){
            switch (this.props.item.color){
                case "green":
                    lowerBodyImage = require('./../assets/layered_armors/torso-green.png');
                    break;
                case "purple":
                    lowerBodyImage = require('./../assets/layered_armors/torso-purple.png');
                    break;
            }
        }
        if (this.props.item.lowerBody !== undefined){
            lowerBody = <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={lowerBodyImage} style={{
                    width: 20,
                    height: 20,
                    margin: 4,
                    alignItems: 'center'
                }}/>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text
                        style={[globalStyles.subtitle, themeText]}>{I18n.t(this.props.item.lowerBody.translationKey).Translation}</Text>
                </View>
            </View>
        }

        //Legs
        let legs = null;
        let legsImage = null;
        if (this.props.item.color !== undefined){
            switch (this.props.item.color){
                case "green":
                    legsImage = require('./../assets/layered_armors/legs-green.png');
                    break;
                case "purple":
                    legsImage = require('./../assets/layered_armors/legs-purple.png');
                    break;
            }
        }
        if (this.props.item.legs !== undefined){
            legs = <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={legsImage} style={{
                    width: 20,
                    height: 20,
                    margin: 4,
                    alignItems: 'center'
                }}/>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text
                        style={[globalStyles.subtitle, themeText]}>{I18n.t(this.props.item.legs.translationKey).Translation}</Text>
                </View>
            </View>
        }

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('LayeredArmorDetail', {
                item: this.props.item,
                parent: this,
                theme: this.props.theme
            })} content={<View style={{flex: 1, flexDirection: 'row', opacity: this.state.obtainedOpacity, marginBottom: 10}}>
            <Image source={this.props.item.icon} style={{
                width: 50,
                height: 50,
                margin: 10,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 4, flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>{I18n.t(this.props.item.translationKey).Translation}</Text>
                    {howToGet}
                    {head}
                    {upperBody}
                    {hands}
                    {lowerBody}
                    {legs}
                </View>

                <Switch
                    onValueChange={(value) => this._toggleObtained(value, this.props.item)}
                    thumbColor={themeSwitch}
                    trackColor='grey'
                    tintColor='grey'
                    value={this.state.obtained}
                    style={{flex: 1}}/>
            </View>
        </View>}/>;
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
        let value = await AsyncStorage.getItem("LayeredArmor" + this.props.item.name);
        if (this._isMounted) {
            this.setState({
                obtained: (value !== null && value === 'true'),
                obtainedOpacity: (value !== null && value === 'true') ? 0.3 : 1
            });
        }
    }

    async _toggleObtained(value, item) {
        this.setState({obtained: value});
        try {
            if (value) {
                this.setState({obtained: true, obtainedOpacity: 0.3});
                await AsyncStorage.setItem("LayeredArmor" + item.name, 'true');
            } else {
                this.setState({obtained: false, obtainedOpacity: 1});
                await AsyncStorage.setItem("LayeredArmor" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class LayeredArmors extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-layered-armors').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'LayeredArmors', theme: navigation.state.params.theme})}
                              content={
                                  <Image source={require('../assets/general/icon_search.png')}
                                         style={globalStyles.navSearch}/>
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
        let themeCrafted = '#b3e5fc';
        let themeSwitch = 'black';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeCrafted = null;
                themeSwitch = 'white';
            }
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <FlatList
                    data={layeredArmors}
                    renderItem={({item}) =>
                        <LayeredArmorItem item={item} navigation={this.props.navigation}
                                          theme={this.props.navigation.state.params.theme}/>
                    }
                    keyExtractor={(item, index) => item.name}
                />
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/9297229076', 'ca-app-pub-9242567842673294/9010697738');
        } else {
            return null;
        }
    }
}