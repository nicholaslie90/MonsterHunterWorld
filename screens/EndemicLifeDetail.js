/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Button,
    Image,
    Linking,
    Platform,
    SafeAreaView,
    ScrollView,
    Switch,
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        marginTop: 10,
    },
    textContainer: {
        flexDirection: 'row',
        height: 30,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    rowLabelText: {
        color: "#0B1219",
        fontSize: 16.0,
    },
});

export default class EndemicLifeDetailScreen extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            obtained: false,
            showAds: true
        };

        this._isMounted = false;
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.item.name : 'Endemic Life Detail',
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

        this._getObtainedValue(this.props.navigation.state.params.item);
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

        const {params} = this.props.navigation.state;

        let description = null;
        if (params.item.description !== undefined) {
            description = <View><View
                style={{borderTopColor: '#f5f5f5', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0}}/>
                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 3,
                    marginBottom: 10
                }}/>

                <Text style={themeText}>{I18n.t(params.item.description).Translation}</Text>

                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 10
                }}/>
                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 3
                }}/>
            </View>;
        }

        let tips = null;
        let tipsHeader = null;
        if (params.item.tips !== undefined) {
            tipsHeader = <Text style={[globalStyles.heading1, themeText]}>Tips</Text>;
            tips = <Text style={themeText}>{params.item.tips}</Text>
        }

        let howToCapture = null;
        let howToCaptureHeader = null;
        if (params.item.howToCapture !== undefined) {
            howToCaptureHeader = <Text style={[globalStyles.heading1, themeText]}>How to Capture</Text>;
            howToCapture = <Text style={themeText}>{params.item.howToCapture}</Text>
        }

        let housePlacing = null;
        let housePlacingHeader = null;
        if (params.item.housePlacing !== undefined) {
            housePlacingHeader = <Text style={[globalStyles.heading1, themeText]}>House Placing</Text>;
            housePlacing = <Text style={themeText}>{params.item.housePlacing}</Text>
        }

        let notes = null;
        let notesHeader = null;
        if (params.item.notes !== undefined) {
            notesHeader = <Text style={[globalStyles.heading1, themeText]}>Notes</Text>;
            notes = <Text style={themeText}>{params.item.notes}</Text>
        }

        let youTube= <View>
            <Text style={[globalStyles.heading1, themeText]}>Related YouTube Videos</Text>
            <Button
                onPress={() => {
                    Linking.openURL('https://www.youtube.com/results?search_query=' + params.item.name + '+monster+hunter+world');
                }}
                title="Search on YouTube"
                color="#F80016"
                accessibilityLabel="Search on YouTube"
            />
        </View>;


        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <ScrollView>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: themeCrafted,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                        <View style={styles.leftContainer}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Image source={require('../assets/general/icon_completed.png')}
                                       style={{
                                           alignItems: 'flex-start',
                                           width: 20,
                                           height: 20,
                                           marginTop: 10,
                                           marginRight: 10
                                       }}/>
                                <Text style={[globalStyles.heading2, themeText]}>Obtained?</Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                            <Switch
                                onValueChange={(value) => this._toggleObtained(value, params.item)}
                                thumbColor={themeSwitch}
trackColor='grey'
tintColor='grey'
                                value={this.state.obtained}/>
                        </View>
                    </View>

                    <Image source={params.item.icon} style={{height: 200, width: 330, margin: 20}}
                           resizeMode={'contain'}/>

                    <View style={{flex: 1, flexDirection: 'column', padding: 20}}>

                        {description}

                        <Text style={[globalStyles.heading1, themeText]}>Location</Text>
                        {
                            params.item.locations.map(function (location) {
                                return <View key={`${location.name}`} style={{marginTop: 10}}>
                                    <Text style={themeText}>Location Name: {location.name}</Text>
                                    <Text style={themeText}>Sectors: {location.sectors}</Text>
                                </View>;
                            })
                        }



                        {howToCaptureHeader}
                        {howToCapture}

                        {tipsHeader}
                        {tips}

                        {housePlacingHeader}
                        {housePlacing}

                        {notesHeader}
                        {notes}

                        {youTube}
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        );
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async _getObtainedValue(item) {
        try {
            let value = await AsyncStorage.getItem("EndemicLife" + item.name);
            this.setState({
                obtained: (value !== null && value === 'true')
            });
        } catch (error) {
            // Error retrieving data
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/5580148212', 'ca-app-pub-9242567842673294/1620004947');
        } else {
            return null;
        }
    }

    async _toggleObtained(value, item) {
        this.setState({obtained: value});
        try {
            if (value) {
                await AsyncStorage.setItem("EndemicLife" + item.name, 'true');

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();
            } else {
                await AsyncStorage.setItem("EndemicLife" + item.name, 'false');

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();
            }

        } catch (error) {
        }
    }
}