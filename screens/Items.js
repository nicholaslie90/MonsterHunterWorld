/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage, FlatList, Image, Platform, SafeAreaView, StyleSheet, Text, TouchableHighlight,
    View
} from "react-native";
import globalStyles from '../styles'
import {items} from '../database'
import {makeAdMob, productIdRemoveAds, returnRarityColor} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        paddingTop: 10,
        paddingRight: 10
    },
    navImage: {
        width: 50,
        height: 50,
        margin: 5
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class Item extends React.PureComponent {
    render() {
        //Theme
        let themeText = null;
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        let itemName = this.props.item.name;
        if (this.props.quantity !== undefined){
            itemName += ' x' + this.props.quantity;
        }

        return <View style={{flex: 1, flexDirection: 'row', marginBottom: 20}}>
            <Image source={this.props.item.icon} style={{
                width: 30,
                height: 30,
                margin: 10,
                marginTop: 16,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            <View style={{flex: 1, flexDirection: 'column', paddingTop: 4}}>
                <Text style={[styles.item, themeText]}>{itemName}</Text>
                <Text style={[globalStyles.subtitle, themeText]}>{this.props.item.description}</Text>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={{
                        color: returnRarityColor(this.props.item.rarity),
                        flex: 2
                    }}>Rarity {this.props.item.rarity}</Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={require('../assets/items/icon_capacity.png')}
                               style={{width: 20, height: 20, resizeMode: 'contain'}}/>
                        <Text style={[{
                            flex: 2
                        }, themeText]}>{this.props.item.maxCapacity}</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('../assets/items/icon_zenny.png')}
                           style={{width: 20, height: 20, resizeMode: 'contain', marginLeft: 10, marginRight: 10}}/>
                    <Text style={themeText}>{this.props.item.value}z</Text>
                </View>
            </View>
        </View>
    }
}

export default class ItemsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-items').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'Items', theme: navigation.state.params.theme})} content={
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

        let sortedItems = _.orderBy(items, ['name'], ['asc']);
        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <FlatList
                    data={sortedItems}
                    renderItem={({item}) => <Item item={item} theme={this.props.navigation.state.params.theme}/>}
                    keyExtractor={(item) => item.name}
                />

                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/4629099320', 'ca-app-pub-9242567842673294/2948139304');
        } else {
            return null;
        }
    }
}