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
import globalStyles from '../styles'
import {palicoGadgets} from '../database'
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        padding: 10,
        paddingLeft: 0,
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class PalicoGadgetItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            obtained: false,
            obtainedOpacity: 1,
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

        let item = this.props.item;

        return <View style={{flex: 1, flexDirection: 'row', opacity: this.state.obtainedOpacity,}}>
            <Image source={item.icon} style={{width: 50, height: 50, margin: 10}} />
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight: 10
            }}>
                <View style={{flex: 5, flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>{item.name}</Text>
                    <Text style={[globalStyles.subtitle, themeText, {padding: 10}]}>Max Proficiency
                        Level: {item.maxProficiency}</Text>
                    <Text style={[globalStyles.subtitle, themeText, {padding: 10}]}>Effect: {item.effects}</Text>
                    <Text style={[globalStyles.subtitle, themeText, {padding: 10}]}>How to Get: {item.howToGet}</Text>
                </View>
                <Switch
                    onValueChange={(value) => this._toggleObtained(value, item)}
                    value={this.state.obtained}
                    thumbColor={themeSwitch}

                    trackColor='grey'
tintColor='grey'
                    style={{flex: 1}}/>
            </View>
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
        let value = await AsyncStorage.getItem("PalicoGadgets" + this.props.item.name);
        if (this._isMounted) {
            this.setState({
                obtained: (value !== null && value === 'true'),
                obtainedOpacity: (value !== null && value === 'true') ? 0.3 : 1
            });
        }
    }

    async _toggleObtained(value, item) {
        try {
            if (value) {
                this.setState({
                    obtained: true,
                    obtainedOpacity: 0.3
                });
                await
                    AsyncStorage.setItem("PalicoGadgets" + item.name, 'true');
            } else {
                this.setState({
                    obtained: false,
                    obtainedOpacity: 1
                });
                await
                    AsyncStorage.setItem("PalicoGadgets" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class PalicoGadgetsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-palico-gadgets').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'PalicoGadgets', theme: navigation.state.params.theme})} content={
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

        let sortedPalicoGadgets = _.orderBy(palicoGadgets, ['name'], ['asc']);

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <FlatList
                    data={sortedPalicoGadgets}
                    renderItem={({item}) => <PalicoGadgetItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    }
                    keyExtractor={(item, index) => item.name}
                />
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/9348297989', 'ca-app-pub-9242567842673294/5882683586');
        } else {
            return null;
        }
    }
}