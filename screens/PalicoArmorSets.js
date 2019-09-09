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
import {palicoArmorSets} from '../database'
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        padding: 10
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class PalicoArmorSetItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            crafted: false,
            craftedOpacity: 1,
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

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('PalicoArmorSetDetail', {
                item: this.props.item,
                parent: this,
                theme: this.props.theme
            })} content={<View style={{
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
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    opacity: this.state.completedOpacity,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={[styles.item, themeText, {flex: 7}]}>{this.props.item.name}</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Switch
                            onValueChange={(value) => this._toggleCrafted(value, this.props.item)}
                            value={this.state.crafted}
                            thumbColor={themeSwitch}

                            trackColor='grey'
tintColor='grey'
                            style={{marginRight: 10}}/>
                    </View>
                </View>


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
                                <Text style={[globalStyles.subtitle, themeText]}>Def: {this.props.item.totalDefense}</Text>
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
                                <Text style={[globalStyles.subtitle, themeText]}>Fire
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
                                <Text style={[globalStyles.subtitle, themeText]}>Water
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
                                <Text style={[globalStyles.subtitle, themeText]}>Thunder
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
                                <Text style={[globalStyles.subtitle, themeText]}>Ice
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
                                <Text style={[globalStyles.subtitle, themeText]}>Dragon
                                    Def: {this.props.item.totalDragonDefense}</Text>
                            </View>
                        </View>
                    </View>

                </View>

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
        let value = await AsyncStorage.getItem("PalicoArmorSet" + this.props.item.name);
        if (this._isMounted) {
            this.setState({
                crafted: (value !== null && value === 'true'),
                craftedOpacity: (value !== null && value === 'true') ? 0.5 : 1
            });
        }
    }

    async _toggleCrafted(value, item) {
        if (value) {
            this.setState({crafted: true, craftedOpacity: 0.5});
            await
                AsyncStorage.setItem("PalicoArmorSet" + item.name, 'true');
        } else {
            this.setState({crafted: false, craftedOpacity: 1});
            await
                AsyncStorage.setItem("PalicoArmorSet" + item.name, 'false');
        }
    }
}

export default class PalicoArmorSetsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-palico-armor-sets').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'PalicoArmorSets', theme: navigation.state.params.theme})} content={
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

        let sortedPalicoArmorSets = _.orderBy(palicoArmorSets, ['name'], ['asc']);

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <FlatList
                    data={sortedPalicoArmorSets}
                    renderItem={({item}) => <PalicoArmorSetItem item={item} navigation={this.props.navigation}
                                                                theme={this.props.navigation.state.params.theme}/>}
                    keyExtractor={(item, index) => item.name}
                />
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/7387395739', 'ca-app-pub-9242567842673294/9658277067');
        } else {
            return null;
        }
    }
}