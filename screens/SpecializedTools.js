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
import globalStyles from '../styles'
import {mantles, smokers} from '../database'
import {IndicatorViewPager, PagerTitleIndicator} from 'rn-viewpager';
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

export class SpecializedToolItem extends React.PureComponent {
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

        let craftedSwitch = <Switch
            onValueChange={(value) => this._toggleObtained(value, this.props.item)}
            value={this.state.obtained}
            thumbColor={themeSwitch}

            trackColor='grey'
tintColor='grey'
            style={{flex: 1}}/>;
        if (this.props.noSwitch !== undefined){
            craftedSwitch = null;
        }
        return <View style={{flex: 1, flexDirection: 'row'}}>
                <Image source={this.props.item.icon} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    marginRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    opacity: this.state.obtainedOpacity,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingRight: 10
                }}>
                    <View style={{flex: 5, flexDirection: 'column', paddingTop: 4}}>
                        <Text style={[styles.item, themeText]}>{this.props.item.name}</Text>
                        <Text style={[globalStyles.subtitle, themeText, {paddingLeft: 10, paddingRight: 10}]}>Effect
                            Duration: {this.props.item.effectDuration}, Recharge
                            Time: {this.props.item.rechargeTime}</Text>
                        <Text style={[globalStyles.subtitle, themeText, {
                            paddingLeft: 10,
                            paddingRight: 10
                        }]}>{this.props.item.description}</Text>
                        <Text style={[globalStyles.subtitle, themeText, {paddingLeft: 10, paddingRight: 10}]}>How to
                            get: {this.props.item.howToGet}</Text>
                    </View>
                    {craftedSwitch}
                </View>
            </View>;
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillReceiveProps() {        this._setItemState();    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async _setItemState() {
        let value = await AsyncStorage.getItem("SpecializedTools" + this.props.item.name);

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
                    AsyncStorage.setItem("SpecializedTools" + item.name, 'true');
            } else {
                this.setState({
                    obtained: false,
                    obtainedOpacity: 1
                });
                await
                    AsyncStorage.setItem("SpecializedTools" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class SpecializedToolsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-specialized-tools').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'SpecializedTools', theme: navigation.state.params.theme})} content={
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

        let sortedMantles = _.orderBy(mantles, ['name'], ['asc']);
        let sortedSmokers = _.orderBy(smokers, ['name'], ['asc']);

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <IndicatorViewPager
                    style={{flex: 1, flexDirection: 'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View>
                        <FlatList
                            data={sortedMantles}
                            renderItem={({item}) => <SpecializedToolItem item={item}
                                                                         navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedSmokers}
                            renderItem={({item}) => <SpecializedToolItem item={item}
                                                                         navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>}
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
            return makeAdMob('ca-app-pub-9242567842673294/1855303468', 'ca-app-pub-9242567842673294/1902650949');
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
                itemStyle={{width: windowWidth / 2}}
                selectedItemStyle={{width: windowWidth / 2}}
                selectedItemTextStyle={globalStyles.tabIndicatorSelectedText}
                selectedBorderStyle={globalStyles.tabSelectedBorderStyle}
                titles={['Mantles', 'Smokers']}
            />
        )
    }
}