/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage, Image, Linking, Platform, SafeAreaView, ScrollView, SectionList, Switch, StyleSheet, Text,
    View, Dimensions
} from "react-native";
import globalStyles from '../styles';
import {criticalBounties, kinsectTrees} from '../database';
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";
import {IndicatorViewPager, PagerTitleIndicator} from "rn-viewpager";

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

export class CriticalBountyItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            completed: false,
            completedOpacity: 1,
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

        return <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    opacity: this.state.completedOpacity,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{flex: 5, flexDirection: 'column'}}>
                        <Text style={[globalStyles.item, themeText]}>{I18n.t(item.translationKey).Translation}</Text>
                        <Text style={[globalStyles.subtitle, themeText]}>{I18n.t(item.tips).Translation}</Text>
                    </View>
                    <Switch
                        onValueChange={(value) => this._toggleCompleted(value, item)}
                        value={this.state.completed}
                        thumbColor={themeSwitch}

                        trackColor='grey'
tintColor='grey'
                        style={{flex: 1}}/>
                </View>
            </View>
        </View>
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
        let value = await AsyncStorage.getItem("CriticalBounties" + this.props.item.name);
        if (this._isMounted) {
            this.setState({
                completed: (value !== null && value === 'true'),
                completedOpacity: (value !== null && value === 'true') ? 0.3 : 1
            });
        }
    }

    async _toggleCompleted(value, item) {
        try {
            if (value) {
                this.setState({
                    completed: true,
                    completedOpacity: 0.3
                });
                await
                    AsyncStorage.setItem("CriticalBounties" + item.name, 'true');
            } else {
                this.setState({
                    completed: false,
                    completedOpacity: 1
                });
                await
                    AsyncStorage.setItem("CriticalBounties" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class CriticalBountiesScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-critical-bounties').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'CriticalBounties', theme: navigation.state.params.theme})}
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
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
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
                            sections={criticalBounties}
                            renderItem={({item}) => <CriticalBountyItem item={item} navigation={this.props.navigation}
                                                                        theme={this.props.navigation.state.params.theme}/>
                            }
                            renderSectionHeader={({section}) => <View>
                                <Text style={[globalStyles.sectionHeader, themeText]}>{section.title}</Text>
                            </View>}
                            keyExtractor={(item, index) => index}
                        />
                    </View>
                    <View>
                        <ScrollView style={{paddingLeft: 10, paddingRight: 10}}>
                            <Text style={[globalStyles.heading1, themeText]}>{I18n.t('critical-bounties-important').Translation}</Text>
                            <Text style={themeText}>{I18n.t('critical-bounties-important-notes').Translation}</Text>

                            <Text style={[globalStyles.heading1, themeText]}>{I18n.t('critical-bounties-requirements').Translation}</Text>
                            <Text style={themeText}>{I18n.t('critical-bounties-requirements-notes').Translation}</Text>

                            <Text style={[globalStyles.heading1, themeText]}>{I18n.t('critical-bounties-source').Translation}</Text>
                            <Text style={[{color: 'lightblue'}]}
                                  onPress={() => Linking.openURL('https://www.reddit.com/r/MonsterHunter/comments/8czx6f/mhworld_a_complete_critical_bounties_guide/')}>
                                https://www.reddit.com/r/MonsterHunter/comments/8czx6f/mhworld_a_complete_critical_bounties_guide/</Text>
                        </ScrollView>
                    </View>
                </IndicatorViewPager>
                {this._renderAds()}
            </SafeAreaView>

        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/1138513355', 'ca-app-pub-9242567842673294/2615246554');
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
                titles={[I18n.t('critical-bounties-quests').Translation, I18n.t('critical-bounties-notes').Translation]}
            />
        )
    }
}