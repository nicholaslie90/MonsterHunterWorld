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
    SectionList,
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from '../styles';
import {IndicatorViewPager, PagerTitleIndicator} from 'rn-viewpager';
import {masterRankArmors, highRankArmors, lowRankArmors, arenaArmors} from '../database';
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable"
import {ArmorComponent} from "./ArmorDetail";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class ArmorItem extends Component {
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
                <Text style={[styles.item, themeText]}>{I18n.t(this.props.item.translationKey).Translation}</Text>

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
                                <Text
                                    style={[globalStyles.subtitle, themeText]}>{I18n.t('armors-total-defense').Translation}{this.props.item.totalDefense}</Text>
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
                                <Text
                                    style={[globalStyles.subtitle, themeText]}>{I18n.t('armors-total-fire-defense').Translation}{this.props.item.totalFireDefense}</Text>
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
                                <Text
                                    style={[globalStyles.subtitle, themeText]}>{I18n.t('armors-total-water-defense').Translation}{this.props.item.totalWaterDefense}</Text>
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
                                <Text
                                    style={[globalStyles.subtitle, themeText]}>{I18n.t('armors-total-thunder-defense').Translation}{this.props.item.totalThunderDefense}</Text>
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
                                <Text
                                    style={[globalStyles.subtitle, themeText]}>{I18n.t('armors-total-ice-defense').Translation}{this.props.item.totalIceDefense}</Text>
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
                                <Text
                                    style={[globalStyles.subtitle, themeText]}>{I18n.t('armors-total-dragon-defense').Translation}{this.props.item.totalDragonDefense}</Text>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        </View>;

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('ArmorDetail', {
                parent: this,
                item: this.props.item,
                theme: this.props.theme
            })} content={content}/>
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
        let armors = _.concat(lowRankArmors, highRankArmors, masterRankArmors);
        let armorObject = _.find(armors, {name: this.props.item.name});

        let armorParts = [];
        if (armorObject.head !== undefined) {
            armorParts.push('head');
        }
        if (armorObject.upperBody !== undefined) {
            armorParts.push('upperBody');
        }
        if (armorObject.hands !== undefined) {
            armorParts.push('hands');
        }
        if (armorObject.lowerBody !== undefined) {
            armorParts.push('lowerBody');
        }
        if (armorObject.legs !== undefined) {
            armorParts.push('legs');
        }

        let isCrafted = false;
        for (let armorPart of armorParts) {
            let value = await AsyncStorage.getItem("ArmorComponent" + armorObject[armorPart].name);
            if (value === 'true') {
                isCrafted = true;
            } else if (value === 'false' || value === null) {
                isCrafted = false;
                break;
            }
        }
        if (isCrafted) {
            if (this._isMounted) {
                this.setState({
                    crafted: true,
                    craftedOpacity: 0.5
                });
            }
        } else {
            if (this._isMounted) {
                this.setState({
                    crafted: false,
                    craftedOpacity: 1
                });
            }
        }
    }
}

export default class ArmorsScreen extends React.PureComponent {
    state = {
        showAds: true
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-armors').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'Armors', theme: navigation.state.params.theme})}
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
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
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
                            data={masterRankArmors}
                            renderItem={({item}) => <ArmorItem ref="armor" item={item}
                                                               navigation={this.props.navigation}
                                                               theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => item.name + index}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={highRankArmors}
                            renderItem={({item}) => <ArmorItem ref="armor" item={item}
                                                               navigation={this.props.navigation}
                                                               theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => item.name + index}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={lowRankArmors}
                            renderItem={({item}) => <ArmorItem ref="armor" item={item}
                                                               navigation={this.props.navigation}
                                                               theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => item.name + index}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={arenaArmors}
                            renderItem={({item}) => <ArmorComponent ref="head" item={item} navigation={this.props.navigation}
                                                                    parent={this.props.navigation.state.params.parent}
                                                                    theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => item.name + index}
                        />
                    </View>
                </IndicatorViewPager>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/5052848846', 'ca-app-pub-9242567842673294/7681591233');
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
                titles={[I18n.t('armors-master-rank').Translation, I18n.t('armors-low-rank').Translation, I18n.t('armors-high-rank').Translation, I18n.t('armors-arena-items').Translation]}
            />
        )
    }
}