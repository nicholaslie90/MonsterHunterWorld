/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage, FlatList, Image, Platform, SafeAreaView, StyleSheet, Text, View
} from "react-native";
import globalStyles from '../styles'
import {craftingList} from '../database'
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        paddingLeft: 6,
        paddingTop: 10,
        paddingRight: 10
    },
    navImage: {
        width: 50,
        height: 50,
        margin: 5
    },
});

const InAppBilling = require("react-native-billing");

export class CraftingListItem extends React.PureComponent {
    render() {
        //Theme
        let themeText = null;
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        return <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={this.props.item.productIcon} style={{
                width: 50,
                height: 50,
                margin: 10,
                marginTop: 16,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            <View style={{flex: 1, flexDirection: 'column', paddingTop: 4}}>
                <Text style={[styles.item, themeText]}>{this.props.item.productName}</Text>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    {/*Item 1*/}
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={this.props.item.item1Icon} style={{
                            width: 20,
                            height: 20,
                            margin: 4,
                            alignItems: 'center'
                        }}/>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={[globalStyles.subtitle, themeText]}>{this.props.item.item1Name}</Text>
                        </View>
                    </View>

                    {/*Item 2*/}
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={this.props.item.item2Icon} style={{
                            width: 20,
                            height: 20,
                            margin: 4,
                            alignItems: 'center'
                        }}/>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={[globalStyles.subtitle, themeText]}>{this.props.item.item2Name}</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    }
}

export default class CraftingListScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8193481100', 'ca-app-pub-9242567842673294/2784487778');
        } else {
            return null;
        }
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-crafting-list').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'CraftingList', theme: navigation.state.params.theme})} content={
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
                    data={craftingList}
                    renderItem={({item}) => <CraftingListItem item={item} theme={this.props.navigation.state.params.theme}/>}
                    keyExtractor={(item) => item.id}
                />

                {this._renderAds()}
            </SafeAreaView>
        );
    }
}