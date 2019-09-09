/**
 * Created by nicholaslie on 17/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";
import globalStyles from '../styles'

const styles = StyleSheet.create({
    navButton: {
        color: 'white',
        fontSize: 20,
    },
    navImage: {
        width: 50,
        height: 50,
        margin: 5
    },
});
const InAppBilling = require("react-native-billing");

class NavWeapon extends React.PureComponent {
    render() {
        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('WeaponDetail', {
                weaponName: this.props.name,
                theme: this.props.theme
            })} content={<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Image
                source={this.props.icon}
                style={styles.navImage}
            />
            <Text style={styles.navButton}>{this.props.name}</Text>
        </View>}/>
    }
}


export default class WeaponsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-weapons').Translation,
            headerTintColor: 'white',
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
            <SafeAreaView style={[{ flex: 1 }, themeBackground]}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#000000"
                />

                <ScrollView style={{backgroundColor: 'black'}}>
                    <NavWeapon name="Great Sword" icon={require('./../assets/weapons/icon_great_sword.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Long Sword" icon={require('./../assets/weapons/icon_long_sword.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Sword and Shield"
                               icon={require('./../assets/weapons/icon_sword_and_shield.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Dual Blades" icon={require('./../assets/weapons/icon_dual_blades.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Hammer" icon={require('./../assets/weapons/icon_hammer.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Hunting Horn" icon={require('./../assets/weapons/icon_hunting_horn.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Lance" icon={require('./../assets/weapons/icon_lance.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Gunlance" icon={require('./../assets/weapons/icon_gunlance.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Switch Axe" icon={require('./../assets/weapons/icon_switchaxe.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Charge Blade" icon={require('./../assets/weapons/icon_charge_blade.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Insect Glaive" icon={require('./../assets/weapons/icon_insect_glaive.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Light Bowgun" icon={require('./../assets/weapons/icon_light_bowgun.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Heavy Bowgun" icon={require('./../assets/weapons/icon_heavy_bowgun.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    <NavWeapon name="Bow" icon={require('./../assets/weapons/icon_bow.png')}
                               navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/7687506615', 'ca-app-pub-9242567842673294/7482280680');
        } else {
            return null;
        }
    }
}
