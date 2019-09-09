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
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {monsterMaterials} from '../database'
import {makeAdMob, productIdRemoveAds, returnRarityColor} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        padding: 4,
        paddingLeft: 0,
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class MonsterMaterialItem extends React.PureComponent {
    render() {
        //Theme
        let themeText = null;
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        let itemName = this.props.item.name;
        if (this.props.quantity !== undefined) {
            itemName += ' x' + this.props.quantity;
        }

        let noMarginLeft = {};
        if (this.props.noMarginLeft !== undefined) {
            noMarginLeft = {marginLeft: 0}
        }

        let rarity = null;
        if (this.props.item.rarity !== undefined) {
            rarity = <Text style={[{
                color: returnRarityColor(this.props.item.rarity),
                flex: 2
            }, themeText]}>Rarity {this.props.item.rarity}</Text>;
        }

        let maxCapacity = null;
        if (this.props.item.maxCapacity !== undefined) {
            maxCapacity = <View style={{flex: 1, flexDirection: 'row'}}>
                <Image source={require('../assets/items/icon_capacity.png')}
                       style={{width: 20, height: 20, resizeMode: 'contain'}}/>
                <Text style={[{flex: 2}, themeText]}>{this.props.item.maxCapacity}</Text>
            </View>;
        }


        let value = null;
        if (this.props.item.value !== undefined) {
            value = <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={themeText}>Value</Text>
                <Image source={require('../assets/items/icon_zenny.png')}
                       style={{width: 20, height: 20, resizeMode: 'contain', marginLeft: 10, marginRight: 10}}/>
                <Text style={themeText}>{this.props.item.value}z</Text>
            </View>;
        }

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('MonsterMaterialDetail', {
                item: this.props.item,
                theme: this.props.navigation.state.params.theme
            })} content={<View style={{flex: 1, flexDirection: 'row', marginBottom: 20}}>
            <Image source={this.props.item.icon} style={[{
                width: 30,
                height: 30,
                margin: 10,
                marginTop: 16,
                justifyContent: 'center',
                alignItems: 'center'
            }, noMarginLeft]}/>
            <View style={{flex: 1, flexDirection: 'column', padding: 4}}>
                <Text style={[styles.item, themeText]}>{itemName}</Text>
                <Text style={[globalStyles.subtitle, themeText]}>{this.props.item.description}</Text>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    {rarity}
                    {maxCapacity}
                </View>
                {value}
            </View>
        </View>}/>;
    }
}

export default class MonsterMaterialsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-monster-materials').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'MonsterMaterials', theme: navigation.state.params.theme})} content={
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

        let sortedMonsterMaterials = _.orderBy(monsterMaterials, ['name'], ['asc']);

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <FlatList
                    data={sortedMonsterMaterials}
                    renderItem={({item}) => <MonsterMaterialItem item={item} navigation={this.props.navigation}
                                                                 theme={this.props.navigation.state.params.theme}/>
                    }
                    keyExtractor={(item, index) => item.name}
                />
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/2353636494', 'ca-app-pub-9242567842673294/2916365622');
        } else {
            return null;
        }
    }
}