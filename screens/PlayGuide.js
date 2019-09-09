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
    SafeAreaView, SectionList,
    Switch,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import globalStyles from '../styles';
import {IndicatorViewPager, PagerTitleIndicator} from 'rn-viewpager';
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";
import {tipList} from "../database-play-guide";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class PlayGuideItem extends React.PureComponent {
    render() {
        //Theme
        let themeText = null;
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        return <MHWTouchable content={
            <View style={{
                flex: 1,
                flexDirection: 'column',
                padding: 10,
            }}>
                <Text style={[globalStyles.item, themeText]}>{I18n.t(this.props.item.name).Translation}</Text>
                <Text style={[globalStyles.subtitle, themeText]}>{I18n.t(this.props.item.description).Translation}</Text>
            </View>
        }/>
    }
}

export default class PlayGuideScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-play-guide').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {theme: navigation.state.params.theme})}
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
        let themeSeparator = '#f5f5f5';
        let themeCrafted = '#b3e5fc';
        let themeSwitch = 'black';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeSeparator = 'white';
                themeCrafted = null;
                themeSwitch = 'white';
            }
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <IndicatorViewPager
                    style={{flex: 1, flexDirection: 'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View>
                        <SectionList
                            sections={tipList}
                            renderItem={({item}) =>
                                <PlayGuideItem item={item} navigation={this.props.navigation}
                                               theme={this.props.navigation.state.params.theme}/>
                            }
                            renderSectionHeader={({section}) => <View>
                                <Text style={globalStyles.sectionHeader}>{section.title}</Text>
                            </View>}
                            keyExtractor={(item, index) => index}
                        />
                    </View>
                </IndicatorViewPager>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/3276835966', 'ca-app-pub-9242567842673294/5028901334');
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
                itemStyle={{width: windowWidth / 1}}
                selectedItemStyle={{width: windowWidth / 1}}
                selectedItemTextStyle={globalStyles.tabIndicatorSelectedText}
                selectedBorderStyle={globalStyles.tabSelectedBorderStyle}
                titles={[I18n.t('play-guide-tip-list').Translation]}
            />
        )
    }
}