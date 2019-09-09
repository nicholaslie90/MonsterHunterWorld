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
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {armorSets} from '../database'
import {makeAdMob, printAllProperties, productIdRemoveAds} from '../utility';
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class ArmorSetItem extends React.PureComponent {
    state = {
        crafted: false,
        craftedOpacity: 1
    };

    constructor() {
        super();
        this.promise = null;
    }

    componentWillMount() {
        this._setItemState();
    }

    render() {
        //Theme
        let themeText = null;
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        //Content
        let content = <View style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            opacity: this.state.craftedOpacity
        }}>
            <Image source={this.props.item.icon} style={{
                width: 50,
                height: 50,
                margin: 10,
                marginTop: 16,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            <View style={{flex: 1, flexDirection: 'column', paddingTop: 4}}>
                <Text style={[{fontSize: 18}, themeText]}>{this.props.item.name}</Text>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        {/*Defense*/}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image source={require('./../assets/general/icon_defense.png')} style={{
                                width: 20,
                                height: 20,
                                margin: 4,
                                alignItems: 'center'
                            }}/>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={[globalStyles.subtitle, themeText]}>Total Def: {this.props.item.totalDefense}</Text>
                            </View>
                        </View>

                        {/*Fire Defense*/}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image source={require('./../assets/general/icon_fire.png')} style={{
                                width: 20,
                                height: 20,
                                margin: 4,
                                alignItems: 'center'
                            }}/>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={[globalStyles.subtitle, themeText]}>Total Fire
                                    Def: {this.props.item.totalFireDefense}</Text>
                            </View>
                        </View>

                        {/*Water Defense*/}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image source={require('./../assets/general/icon_water.png')}
                                   style={{
                                       width: 20,
                                       height: 20,
                                       margin: 4,
                                       alignItems: 'center'
                                   }}/>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={[globalStyles.subtitle, themeText]}>Total Water
                                    Def: {this.props.item.totalWaterDefense}</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{flex: 1, flexDirection: 'column'}}>
                        {/*Thunder Defense*/}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image source={require('./../assets/general/icon_thunder.png')}
                                   style={{
                                       width: 20,
                                       height: 20,
                                       margin: 4,
                                       alignItems: 'center'
                                   }}/>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={[globalStyles.subtitle, themeText]}>Total Thunder
                                    Def: {this.props.item.totalThunderDefense}</Text>
                            </View>
                        </View>

                        {/*Ice Defense*/}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image source={require('./../assets/general/icon_ice.png')} style={{
                                width: 20,
                                height: 20,
                                margin: 4,
                                alignItems: 'center'
                            }}/>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={[globalStyles.subtitle, themeText]}>Total Ice
                                    Def: {this.props.item.totalIceDefense}</Text>
                            </View>
                        </View>

                        {/*Dragon Defense*/}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image source={require('./../assets/general/icon_dragon.png')}
                                   style={{
                                       width: 20,
                                       height: 20,
                                       margin: 4,
                                       alignItems: 'center'
                                   }}/>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={[globalStyles.subtitle, themeText]}>Total Dragon
                                    Def: {this.props.item.totalDragonDefense}</Text>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        </View>;

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('ArmorSetDetail', {
                parent: this,
                item: this.props.item,
                theme: this.props.theme
            })} content={content}/>

    }

    componentWillReceiveProps() {
        this._setItemState();
    }

    async _setItemState() {
        let value = await AsyncStorage.getItem("ArmorSet" + this.props.item.name);
        // console.log(this.props.item.name + ": " + value);
        printAllProperties(value);
        if (value !== null && value === 'true') {
            this.setState({
                crafted: (value !== null && value === 'true'),
                craftedOpacity: (value !== null && value === 'true') ? 0.5 : 1
            });
        }
    }
}

export default class ArmorSetsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-armor-sets').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'ArmorSets', theme: navigation.state.params.theme})} content={
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

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <FlatList
                    data={armorSets}
                    renderItem={({item}) => <ArmorSetItem item={item} navigation={this.props.navigation}
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
            return makeAdMob('ca-app-pub-9242567842673294/8123024804', 'ca-app-pub-9242567842673294/5793794499');
        } else {
            return null;
        }
    }
}