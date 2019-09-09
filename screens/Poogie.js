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
    SafeAreaView, ScrollView, SectionList, StyleSheet,
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
import PhotoView from 'react-native-photo-view';
import {poogieCostumes} from "../database-poogie";

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

export class PoogieItem extends React.PureComponent {
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

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('PoogieDetail', {
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
                    <Text style={[styles.item, themeText]}>{I18n.t(this.props.item.translationKey).Translation}</Text>
                    <Text style={[globalStyles.subtitle, themeText]}>{I18n.t(this.props.item.howToGet).Translation}</Text>
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
        let value = await AsyncStorage.getItem("Poogie" + this.props.item.name);
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
                await AsyncStorage.setItem("Poogie" + item.name, 'true');
            } else {
                this.setState({obtained: false, obtainedOpacity: 1});
                await AsyncStorage.setItem("Poogie" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class PoogieScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-poogie').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'Poogie', theme: navigation.state.params.theme})}
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
                        <FlatList
                            data={poogieCostumes}
                            renderItem={({item}) =>
                                <PoogieItem item={item} navigation={this.props.navigation}
                                            theme={this.props.navigation.state.params.theme}/>
                            }
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <ScrollView style={{paddingLeft: 10, paddingRight: 10}}>
                            <Text style={[globalStyles.heading1, themeText]}>{I18n.t('poogie-about-poogie').Translation}</Text>
                            <Image source={require('../assets/poogie/about-poogie.jpg')} style={{height: 200, width: 330, margin: 10}}
                                   resizeMode={'contain'}/>
                            <Text style={themeText}>{I18n.t('poogie-about-poogie-text').Translation}</Text>

                            <Text style={[globalStyles.heading1, themeText]}>{I18n.t('poogie-petting-poogie').Translation}</Text>
                            <Image source={require('../assets/poogie/petting-poogie.jpg')} style={{height: 200, width: 330, margin: 10}}
                                   resizeMode={'contain'}/>
                            <Text style={themeText}>{I18n.t('poogie-petting-poogie-text').Translation}</Text>

                            <Text style={[globalStyles.heading1, themeText]}>{I18n.t('poogie-using-poogie').Translation}</Text>
                            <Image source={require('../assets/poogie/using-poogie.jpg')} style={{height: 200, width: 330, margin: 10}}
                                   resizeMode={'contain'}/>
                            <Text style={themeText}>{I18n.t('poogie-using-poogie-text').Translation}</Text>

                            <Text style={[globalStyles.heading1, themeText]}>{I18n.t('poogie-dig-sites').Translation}</Text>
                            <PhotoView
                                source={require('../assets/poogie/poogie-dig-sites.jpg')}
                                minimumZoomScale={1}
                                maximumZoomScale={3}
                                androidScaleType="fitCenter"
                                style={{width: Dimensions.get('window').width - 40, height: 250}}/>
                            <Text style={themeText}>{I18n.t('poogie-dig-sites-text').Translation}</Text>
                        </ScrollView>
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
                itemStyle={{width: windowWidth / 2}}
                selectedItemStyle={{width: windowWidth / 2}}
                selectedItemTextStyle={globalStyles.tabIndicatorSelectedText}
                selectedBorderStyle={globalStyles.tabSelectedBorderStyle}
                titles={[I18n.t('poogie-costumes').Translation, I18n.t('poogie-how-to').Translation]}
            />
        )
    }
}