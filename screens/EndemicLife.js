/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Image,
    Platform,
    SafeAreaView,
    SectionList,
    Switch,
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {endemicLife} from '../database'
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        paddingLeft: 2,
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

export class EndemicLifeItem extends React.PureComponent {
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

        let locations = null;
        if (this.props.item.locations !== undefined) {
            locations = <Text style={[globalStyles.subtitle, themeText]}>{
                this.props.item.locations.map(function (location, index) {
                    if (index === 0)
                        return " " + location.name;
                    else
                        return ", " + location.name;
                })
            }</Text>;
        }

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('EndemicLifeDetail', {
                item: this.props.item,
                parent: this,
                theme: this.props.theme
            })} content={<View style={{flex: 1, flexDirection: 'row', opacity: this.state.obtainedOpacity}}>
            <Image source={this.props.item.icon} style={{
                width: 50,
                height: 50,
                margin: 10,
                marginTop: 16,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 4, flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>{this.props.item.name}</Text>
                    {locations}
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
        let value = await AsyncStorage.getItem("EndemicLife" + this.props.item.name);
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
                this.setState({obtained: true, obtainedOpacity: 0.3})
                await AsyncStorage.setItem("EndemicLife" + item.name, 'true');
            } else {
                this.setState({obtained: false, obtainedOpacity: 1})
                await AsyncStorage.setItem("EndemicLife" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class EndemicLifeScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-endemic-life').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'EndemicLife', theme: navigation.state.params.theme})} content={
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
                <SectionList
                    sections={endemicLife}
                    renderItem={({item}) =>
                        <EndemicLifeItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    }
                    renderSectionHeader={({section}) => <View>
                        <Text style={[globalStyles.sectionHeader, themeText]}>{section.title}</Text>
                    </View>}
                    keyExtractor={(item, index) => index}
                />
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/6763090144', 'ca-app-pub-9242567842673294/8068604043');
        } else {
            return null;
        }
    }
}