/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage, Image, Platform, SafeAreaView, SectionList, Switch, StyleSheet, Text,
    View
} from "react-native";
import globalStyles from '../styles';
import {kinsectTrees} from '../database';
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        fontSize: 18,
        height: 44,
    },
});

const InAppBilling = require("react-native-billing");

export class KinsectTreeItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            crafted: false,
            craftedOpacity: 1
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

        let item = this.props.item;

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('KinsectDetail', {
                item: item,
                parent: this,
                theme: this.props.theme
            })} content={<View style={{flex: 1, flexDirection: 'row', opacity: this.state.craftedOpacity}}>
            <Image source={item.icon} style={{
                width: 50,
                height: 50,
                margin: 10,
                marginTop: 16,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            <View style={{flex: 1, flexDirection: 'column', paddingTop: 4}}>
                <Text style={[styles.item, themeText]}>{item.name}</Text>

                <View style={{flex: 1, flexDirection: 'row'}}>

                    <View style={{flex: 4, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column', paddingTop: 4}}>
                            {/*Attack Type*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/kinsects/icon_attack_type.png')}
                                       style={{
                                           width: 20,
                                           height: 20,
                                           margin: 4,
                                           alignItems: 'center'
                                       }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text style={[globalStyles.subtitle, themeText]}>{item.attackType}</Text>
                                </View>
                            </View>

                            {/*Dust Effect*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/kinsects/icon_dust_effect.png')}
                                       style={{
                                           width: 20,
                                           height: 20,
                                           margin: 4,
                                           alignItems: 'center'
                                       }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text style={[globalStyles.subtitle, themeText]}>{item.dustEffect}</Text>
                                </View>
                            </View>

                            {/*Element*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/kinsects/icon_element.png')}
                                       style={{
                                           width: 20,
                                           height: 20,
                                           margin: 4,
                                           alignItems: 'center'
                                       }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text style={[globalStyles.subtitle, themeText]}>{item.element}</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{flex: 1, flexDirection: 'column', paddingTop: 4}}>
                            {/*Power*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/kinsects/icon_power.png')}
                                       style={{
                                           width: 20,
                                           height: 20,
                                           margin: 4,
                                           alignItems: 'center'
                                       }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text style={[globalStyles.subtitle, themeText]}>Lv {item.power}</Text>
                                </View>
                            </View>

                            {/*Speed*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/kinsects/icon_speed.png')} style={{
                                    width: 20,
                                    height: 20,
                                    margin: 4,
                                    alignItems: 'center'
                                }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text style={[globalStyles.subtitle, themeText]}>Lv {item.speed}</Text>
                                </View>
                            </View>

                            {/*Heal*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/kinsects/icon_heal.png')}
                                       style={{
                                           width: 20,
                                           height: 20,
                                           margin: 4,
                                           alignItems: 'center'
                                       }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text style={[globalStyles.subtitle, themeText]}>Lv {item.heal}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Switch
                        onValueChange={(value) => this._toggleCrafted(value, this.props.item)}
                        thumbColor={themeSwitch}

                        trackColor='grey'
tintColor='grey'
                        value={this.state.crafted}
                        style={{flex: 1}}/>

                </View>

            </View>
        </View>}/>
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
        let value = await AsyncStorage.getItem("Kinsect" + this.props.item.name);
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
                this.setState({crafted: true, craftedOpacity: 0.5});
                await AsyncStorage.setItem("Kinsect" + item.name, 'true');
            } else {
                this.setState({crafted: false, craftedOpacity: 1.0});
                await AsyncStorage.setItem("Kinsect" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class KinsectTreesScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-kinsect-trees').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'KinsectTrees', theme: navigation.state.params.theme})} content={
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
                    sections={kinsectTrees}
                    renderItem={({item}) => <KinsectTreeItem item={item} navigation={this.props.navigation}
                                                             theme={this.props.navigation.state.params.theme}/>
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
            return makeAdMob('ca-app-pub-9242567842673294/2785610289', 'ca-app-pub-9242567842673294/4257351547');
        } else {
            return null;
        }
    }

}