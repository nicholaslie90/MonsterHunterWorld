/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    ActionSheetIOS,
    Alert,
    AlertIOS,
    AsyncStorage,
    Dimensions,
    Image,
    Linking,
    NativeModules,
    Picker,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableHighlight,
    View
} from "react-native";
import globalStyles from '../styles'
import {makeAdMob, productIdRemoveAds, productIDDonateCoffee, iapiOS} from '../utility'
import I18n from '../i18n/i18n';
import * as StoreReview from 'react-native-store-review';
import {MHWTouchable} from "../components/MHWTouchable";
import * as firebase from 'firebase';
import prompt from 'react-native-prompt-android';

let _ = require('lodash');
const {InAppUtils} = NativeModules;
const InAppBilling = require("react-native-billing");
const firebaseConfig = {
    apiKey: "AIzaSyD7JqeleOGRSGU5yVkd2oRnDtVBT9M8seY",
    authDomain: "monster-hunter-world-56bb6.firebaseapp.com",
    databaseURL: "https://monster-hunter-world-56bb6.firebaseio.com",
    projectId: "monster-hunter-world-56bb6",
    storageBucket: "monster-hunter-world-56bb6.appspot.com",
    messagingSenderId: "1032796781621"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

let styles = StyleSheet.create({
    settingsItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    settingsImage: {
        width: 25,
        height: 25,
        marginLeft: 10,
        marginRight: 20,
        resizeMode: 'contain'
    },
    settingsContent: {
        flexDirection: 'column',
        marginRight: 20
    },
    settingsText: {
        paddingRight: 40,
        fontSize: 12
    }
});

export default class SettingsScreen extends React.PureComponent {
    state = {
        appLanguage: I18n.locale,
        showAds: true,
        coffeePurchased: false,
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-settings').Translation
        };
    };

    async componentWillMount() {
        let stateObject = {};

        let language = await AsyncStorage.getItem('language');
        if (language !== null) {
            I18n.locale = language;
            stateObject['appLanguage'] = language;
        } else {
            I18n.locale = 'en';
            stateObject['appLanguage'] = 'en';
        }

        if (I18n.locale !== 'en') {
            stateObject.showVolunteer = true;
        }

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

        let coffeeDonated = await AsyncStorage.getItem('donateCoffee');
        // console.warn(coffeeDonated);
        if (coffeeDonated === 'true') {
            stateObject['coffeePurchased'] = true;
        } else {
            stateObject['coffeePurchased'] = false;

            //Check if user has purchased Donate Coffee
            if (Platform.OS === 'android') {
                await InAppBilling.close();
                try {
                    await InAppBilling.open();
                    let isPurchased = await InAppBilling.isPurchased(productIDDonateCoffee);

                    if (isPurchased) {
                        await AsyncStorage.setItem('donateCoffee', 'true');
                        stateObject['coffeePurchased'] = true;
                    } else {
                        stateObject['coffeePurchased'] = false;
                    }
                } finally {
                    await InAppBilling.close();
                }
            }
        }

        let currentTheme = await AsyncStorage.getItem('theme');
        if (currentTheme !== null) {
            if (currentTheme === 'Dark') {
                stateObject['theme'] = I18n.t('settings-theme-dark').Translation;
            }
            if (currentTheme === 'Light') {
                stateObject['theme'] = I18n.t('settings-theme-light').Translation;
            }
        } else {
            stateObject['theme'] = I18n.t('settings-theme-light').Translation;
        }

        let quickSearch = await AsyncStorage.getItem('quickSearch');
        if (quickSearch !== null) {
            if (quickSearch === 'Off') {
                stateObject['quickSearch'] = I18n.t('settings-value-off').Translation;
            }
            if (quickSearch === 'On') {
                stateObject['quickSearch'] = I18n.t('settings-value-on').Translation;
            }
        } else {
            stateObject['quickSearch'] = I18n.t('settings-value-off').Translation;
        }

        this.setState(stateObject);
    }

    async componentWillUpdate() {
        let language = await AsyncStorage.getItem('language');
        I18n.locale = language;
    }

    render() {
        //Theme
        let themeBackground = null;
        let themeText = null;
        let iconSettingsLanguage = require('../assets/general/icon_settings_language.png');
        let iconSettingsTheme = require('../assets/general/icon_settings_theme.png');
        let iconSettingsQuickSearch = require('../assets/general/icon_settings_search_light.png');
        let iconRemoveAds = require('../assets/general/icon_settings_remove_ads.png');
        let iconCoffee = require('../assets/general/icon_settings_coffee.png');
        let iconRedeemCode = require('../assets/general/icon_settings_redeem.png');
        let iconRestorePurchase = require('../assets/general/icon_settings_restore_purchase.png');
        let iconEmail = require('../assets/general/icon_settings_email.png');
        let iconCheckForUpdates = require('../assets/general/icon_settings_update.png');
        let iconRate = require('../assets/general/icon_settings_rate.png');
        if (this.state.theme !== undefined) {
            if (this.state.theme === I18n.t('settings-theme-dark').Translation) {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                iconSettingsLanguage = require('../assets/general/icon_settings_language_dark.png');
                iconSettingsTheme = require('../assets/general/icon_settings_theme_dark.png');
                iconSettingsQuickSearch = require('../assets/general/icon_settings_search_dark.png');
                iconRemoveAds = require('../assets/general/icon_settings_remove_ads_dark.png');
                iconCoffee = require('../assets/general/icon_settings_coffee_dark.png');
                iconRedeemCode = require('../assets/general/icon_settings_redeem_dark.png');
                iconRestorePurchase = require('../assets/general/icon_settings_restore_purchase_dark.png');
                iconEmail = require('../assets/general/icon_settings_email_dark.png');
                iconCheckForUpdates = require('../assets/general/icon_settings_update_dark.png');
                iconRate = require('../assets/general/icon_settings_rate_dark.png');
            }
        }

        let volunteerText = null;
        if (this.state.showVolunteer) {
            volunteerText =
                <Text style={[styles.settingsText, themeText]}>{I18n.t('settings-language-volunteer-text').Translation}</Text>
        }

        let language = null;
        if (Platform.OS === 'android') {
            language = <View style={styles.settingsItem}>
                <Image source={iconSettingsLanguage}
                       style={styles.settingsImage}/>
                <View style={styles.settingsContent}>
                    <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-language').Translation}</Text>
                    <Picker
                        selectedValue={this.state.appLanguage}
                        style={[{height: 50, width: Dimensions.get('window').width, marginLeft: -5}, themeText]}
                        onValueChange={async (itemValue) => {
                            await AsyncStorage.setItem('language', itemValue);
                            I18n.locale = itemValue;
                            if (this.props.navigation.state.params.parentScreen !== undefined) {
                                this.props.navigation.state.params.parentScreen._updateLanguage();
                            }
                            this.setState({appLanguage: I18n.locale, showVolunteer: true})
                        }}>
                        <Picker.Item label={I18n.t('settings-language-japanese').Translation} value='jp'/>
                        <Picker.Item label={I18n.t('settings-language-english').Translation} value='en'/>
                        <Picker.Item label={I18n.t('settings-language-french').Translation} value='fr'/>
                        <Picker.Item label={I18n.t('settings-language-italian').Translation} value='it'/>
                        <Picker.Item label={I18n.t('settings-language-german').Translation} value='de'/>
                        <Picker.Item label={I18n.t('settings-language-spain').Translation} value='es'/>
                        <Picker.Item label={I18n.t('settings-language-korean').Translation} value='kr'/>
                        <Picker.Item label={I18n.t('settings-language-chinese-traditional').Translation} value='zh'/>
                        <Picker.Item label={I18n.t('settings-language-chinese-simplified').Translation} value='ch'/>
                        <Picker.Item label={I18n.t('settings-language-portuguese').Translation} value='pt'/>
                        <Picker.Item label={I18n.t('settings-language-thai').Translation} value='th'/>
                    </Picker>
                    {volunteerText}
                </View>
            </View>;
        }

        if (Platform.OS === 'ios') {
            let currentLanguage = '';
            switch (I18n.locale) {
                case 'ch':
                    currentLanguage = I18n.t('settings-language-chinese-simplified').Translation;
                    break;

                case 'de':
                    currentLanguage = I18n.t('settings-language-german').Translation;
                    break;

                case 'en':
                    currentLanguage = I18n.t('settings-language-english').Translation;
                    break;

                case 'es':
                    currentLanguage = I18n.t('settings-language-spain').Translation;
                    break;

                case 'fr':
                    currentLanguage = I18n.t('settings-language-french').Translation;
                    break;

                case 'it':
                    currentLanguage = I18n.t('settings-language-italian').Translation;
                    break;

                case 'jp':
                    currentLanguage = I18n.t('settings-language-japanese').Translation;
                    break;

                case 'kr':
                    currentLanguage = I18n.t('settings-language-korean').Translation;
                    break;

                case 'pt':
                    currentLanguage = I18n.t('settings-language-portuguese').Translation;
                    break;

                case 'th':
                    currentLanguage = I18n.t('settings-language-thai').Translation;
                    break;

                case 'zh':
                    currentLanguage = I18n.t('settings-language-chinese-traditional').Translation;
                    break;

            }
            language = <MHWTouchable onPress={async () => {
                ActionSheetIOS.showActionSheetWithOptions({
                        options: [
                            'Cancel',
                            I18n.t('settings-language-japanese').Translation,
                            I18n.t('settings-language-english').Translation,
                            I18n.t('settings-language-french').Translation,
                            I18n.t('settings-language-italian').Translation,
                            I18n.t('settings-language-german').Translation,
                            I18n.t('settings-language-spain').Translation,
                            I18n.t('settings-language-korean').Translation,
                            I18n.t('settings-language-chinese-simplified').Translation,
                            I18n.t('settings-language-chinese-traditional').Translation,
                            I18n.t('settings-language-portuguese').Translation,
                            I18n.t('settings-language-thai').Translation],
                        cancelButtonIndex: 0,
                    },
                    async (buttonIndex) => {
                        switch (buttonIndex) {
                            case 1:
                                I18n.locale = 'jp';
                                await AsyncStorage.setItem('language', 'jp');
                                break;

                            case 2:
                                I18n.locale = 'en';
                                await AsyncStorage.setItem('language', 'en');
                                break;

                            case 3:
                                I18n.locale = 'fr';
                                await AsyncStorage.setItem('language', 'fr');
                                break;

                            case 4:
                                I18n.locale = 'it';
                                await AsyncStorage.setItem('language', 'it');
                                break;

                            case 5:
                                I18n.locale = 'de';
                                await AsyncStorage.setItem('language', 'de');
                                break;

                            case 6:
                                I18n.locale = 'es';
                                await AsyncStorage.setItem('language', 'es');
                                break;

                            case 7:
                                I18n.locale = 'kr';
                                await AsyncStorage.setItem('language', 'kr');
                                break;

                            case 8:
                                I18n.locale = 'ch';
                                await AsyncStorage.setItem('language', 'ch');
                                break;

                            case 9:
                                I18n.locale = 'zh';
                                await AsyncStorage.setItem('language', 'zh');
                                break;

                            case 10:
                                I18n.locale = 'pt';
                                await AsyncStorage.setItem('language', 'pt');
                                break;

                            case 11:
                                I18n.locale = 'th';
                                await AsyncStorage.setItem('language', 'th');
                                break;
                        }

                        if (this.props.navigation.state.params.parentScreen !== undefined) {
                            this.props.navigation.state.params.parentScreen._updateLanguage();
                        }
                        this.setState({
                            appLanguage: I18n.locale,
                            showVolunteer: true
                        });

                    });
            }} content={<View style={styles.settingsItem}>
                <Image source={iconSettingsLanguage}
                       style={styles.settingsImage}/>
                <View style={styles.settingsContent}>
                    <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-language').Translation}</Text>
                    <Text style={[styles.settingsText, themeText]}>{currentLanguage}</Text>
                    {volunteerText}
                </View>
            </View>}/>
        }

        let changeTheme = null;
        if (Platform.OS === 'android') {
            changeTheme = <View style={styles.settingsItem}>
                <Image source={iconSettingsTheme}
                       style={styles.settingsImage}/>
                <View style={styles.settingsContent}>
                    <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-theme').Translation}</Text>
                    <Picker
                        selectedValue={this.state.theme}
                        style={[{height: 50, width: Dimensions.get('window').width, marginLeft: -5}, themeText]}
                        onValueChange={async (itemValue) => {
                            await AsyncStorage.setItem('theme', itemValue);
                            this.setState({theme: itemValue})
                        }}>
                        <Picker.Item label={I18n.t('settings-theme-light').Translation} value='Light'/>
                        <Picker.Item label={I18n.t('settings-theme-dark').Translation} value='Dark'/>
                    </Picker>
                </View>
            </View>;
        }

        if (Platform.OS === 'ios') {
            changeTheme = <MHWTouchable onPress={async () => {
                ActionSheetIOS.showActionSheetWithOptions({
                        options: [
                            'Cancel',
                            I18n.t('settings-theme-light').Translation,
                            I18n.t('settings-theme-dark').Translation,
                        ],
                        cancelButtonIndex: 0,
                    },
                    async (buttonIndex) => {
                        switch (buttonIndex) {
                            case 1:
                                await AsyncStorage.setItem('theme', 'Light');
                                this.setState({
                                    theme: I18n.t('settings-theme-light').Translation,
                                });
                                break;

                            case 2:
                                await AsyncStorage.setItem('theme', 'Dark');
                                this.setState({
                                    theme: I18n.t('settings-theme-dark').Translation,
                                });
                                break;
                        }
                    });
            }} content={<View style={styles.settingsItem}>
                <Image source={iconSettingsTheme}
                       style={styles.settingsImage}/>
                <View style={styles.settingsContent}>
                    <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-theme').Translation}</Text>
                    <Text style={[styles.settingsText, themeText]}>{this.state.theme}</Text>
                </View>
            </View>}/>
        }


        //Quick Search
        let quickSearch = null;
        if (Platform.OS === 'android') {
            quickSearch = <View style={styles.settingsItem}>
                <Image source={iconSettingsQuickSearch}
                       style={styles.settingsImage}/>
                <View style={styles.settingsContent}>
                    <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-quick-search').Translation}</Text>
                    <Picker
                        selectedValue={this.state.quickSearch}
                        style={[{height: 50, width: Dimensions.get('window').width, marginLeft: -5}, themeText]}
                        onValueChange={async (itemValue) => {
                            await AsyncStorage.setItem('quickSearch', itemValue);
                            this.setState({quickSearch: itemValue})
                        }}>
                        <Picker.Item label={I18n.t('settings-value-off').Translation} value='Off'/>
                        <Picker.Item label={I18n.t('settings-value-on').Translation} value='On'/>
                    </Picker>
                    <Text style={[styles.settingsText, themeText]}>{I18n.t('settings-quick-search-text').Translation}</Text>
                </View>
            </View>;
        }

        if (Platform.OS === 'ios') {
            quickSearch = <MHWTouchable onPress={async () => {
                ActionSheetIOS.showActionSheetWithOptions({
                        options: [
                            'Cancel',
                            I18n.t('settings-value-off').Translation,
                            I18n.t('settings-value-on').Translation,
                        ],
                        cancelButtonIndex: 0,
                    },
                    async (buttonIndex) => {
                        switch (buttonIndex) {
                            case 1:
                                await AsyncStorage.setItem('quickSearch', 'Off');
                                this.setState({
                                    quickSearch: I18n.t('settings-value-off').Translation,
                                });
                                break;

                            case 2:
                                await AsyncStorage.setItem('quickSearch', 'On');
                                this.setState({
                                    quickSearch: I18n.t('settings-value-on').Translation,
                                });
                                break;
                        }
                    });
            }} content={<View style={styles.settingsItem}>
                <Image source={iconSettingsQuickSearch}
                       style={styles.settingsImage}/>
                <View style={styles.settingsContent}>
                    <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-quick-search').Translation}</Text>
                    <Text style={[styles.settingsText, themeText]}>{this.state.quickSearch}</Text>
                    <Text style={[styles.settingsText, themeText]}>{I18n.t('settings-quick-search-text').Translation}</Text>
                </View>
            </View>}/>
        }

        // let upgradeLoadoutsDatabase = <TouchableHighlight underlayColor={'silver'}
        //                                                   onPress={async () => {
        //                                                       let keys = await AsyncStorage.getAllKeys();
        //                                                       let loadouts = _.filter(keys, (key) => {
        //                                                           return _.startsWith(key, 'Loadout~');
        //                                                       });
        //                                                       let counter = 0;
        //                                                       for (let i = 0; i < loadouts.length; i++) {
        //                                                           //Check for old loadout keys
        //                                                           let loadout = loadouts[i];
        //                                                           if (_.includes(loadout, "~smoker") || _.includes(loadout, "~mantle")) {
        //                                                               //Get existing loadout
        //                                                               let existingLoadout = await AsyncStorage.getItem(loadout);
        //
        //                                                               //Save the new loadout
        //                                                               let newKey = loadout.replace("~mantle", "~specializedTool1").replace("~smoker", "~specializedTool2");
        //                                                               await AsyncStorage.setItem(newKey, existingLoadout);
        //                                                               //Remove old loadout
        //                                                               await AsyncStorage.removeItem(loadout);
        //
        //                                                               counter = i + 1;
        //                                                           }
        //                                                       }
        //                                                       Alert.alert(I18n.t('settings-upgrade-successful'), counter + I18n.t('settings-loadouts-were-updated'));
        //                                                   }}>
        //     <View style={styles.settingsItem}>
        //         <Image source={require('../assets/general/icon_settings_fix.png')}
        //                style={styles.settingsImage}/>
        //         <View style={styles.settingsContent}>
        //             <Text style={globalStyles.heading3}>{I18n.t('settings-upgrade-loadouts-database')}</Text>
        //             <Text
        //                 style={styles.settingsText}>{I18n.t('settings-upgrade-loadouts-database-text')}</Text>
        //         </View>
        //     </View>
        // </TouchableHighlight>;

        let removeAds = null;
        if (this.state.showAds) {
            removeAds = <MHWTouchable onPress={() => {
                this._removeAds()
            }} content={<View style={styles.settingsItem}>
                <Image source={iconRemoveAds}
                       style={styles.settingsImage}/>
                <View style={styles.settingsContent}>
                    <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-remove-ads').Translation}</Text>
                    <Text style={[styles.settingsText, themeText]}>{I18n.t('settings-remove-ads-text').Translation}</Text>
                </View>
            </View>}/>;
        } else {
            removeAds = null;
        }

        let coffee = null;
        if (Platform.OS === 'android') {
            if (!this.state.coffeePurchased) {
                coffee = <MHWTouchable onPress={() => {
                    this._donateCoffee()
                }} content={<View style={styles.settingsItem}>
                    <Image source={iconCoffee}
                           style={styles.settingsImage}/>
                    <View style={styles.settingsContent}>
                        <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-buy-me-a-coffee').Translation}</Text>
                        <Text
                            style={[styles.settingsText, themeText]}>{I18n.t('settings-buy-me-a-coffee-text').Translation}</Text>
                    </View>
                </View>}/>;
            } else {
                coffee = null;
            }
        }


        let restorePurchase = null;
        if (Platform.OS === 'ios') {
            restorePurchase = <TouchableHighlight underlayColor={'silver'}
                                                  onPress={() => {
                                                      this._restorePurchase();
                                                  }}>
                <View style={styles.settingsItem}>
                    <Image source={iconRestorePurchase}
                           style={styles.settingsImage}/>
                    <View style={styles.settingsContent}>
                        <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-restore-purchase').Translation}</Text>
                        <Text style={[styles.settingsText, themeText]}>{I18n.t('settings-restore-purchase-text').Translation}</Text>
                    </View>
                </View>
            </TouchableHighlight>;
        } else {
            restorePurchase = <MHWTouchable onPress={() => {
                prompt(
                    'Enter Order Number',
                    'You can find your Order Number in your email when purchasing the Remove Ads in previous version of the app. The format is similar to "GPA.XXXX-XXXX-XXXX-XXXXX"',
                    [
                        {
                            text: 'Cancel', onPress: () => {
                        }, style: 'cancel'
                        },
                        {
                            text: 'OK', onPress: async (value) => {
                            if (value === null) {
                                Alert.alert(
                                    'Order Number Invalid',
                                    'Please enter a valid Order Number',
                                    [
                                        {
                                            text: 'OK', onPress: () => {
                                        }, style: 'cancel'
                                        },
                                    ],
                                    {cancelable: false}
                                )
                            } else {
                                let replaced = value.replace(".", "");
                                //Read from Firebase Database
                                firebaseApp.database().ref().child('removeAds/' + replaced).once('value').then((snapshot) => {
                                    if (snapshot.val() === null) {
                                        firebaseApp.database().ref().child('donateCoffee/' + replaced).once('value').then((snapshot) => {
                                            if (snapshot.val() === null) {
                                                Alert.alert(
                                                    'Order Number Not Found',
                                                    'Order Number not found. Restore purchase failed.',
                                                    [
                                                        {
                                                            text: 'OK', onPress: () => {
                                                        }, style: 'cancel'
                                                        },
                                                    ],
                                                    {cancelable: false}
                                                )
                                            } else if (snapshot.val() === true) {
                                                Alert.alert(
                                                    'Invalid Operation.',
                                                    'You have used this Order Number previously to restore the purchase. Send me an email if you have any trouble =)',
                                                    [
                                                        {
                                                            text: 'OK', onPress: () => {
                                                        }, style: 'cancel'
                                                        },
                                                    ],
                                                    {cancelable: false}
                                                )
                                            } else if (snapshot.val() === false) {
                                                //Update Realtime Database data
                                                let updates = {};
                                                updates[replaced] = true;
                                                firebaseApp.database().ref().child('/donateCoffee').update(updates);
                                                this._donateCoffee(true);

                                                Alert.alert(
                                                    'Restore Purchase Successful',
                                                    'Order Number found. Thanks for the coffee! =)',
                                                    [
                                                        {
                                                            text: 'OK', onPress: () => {
                                                        }, style: 'cancel'
                                                        },
                                                    ],
                                                    {cancelable: false}
                                                )
                                            }
                                        });
                                    }
                                    else if (snapshot.val() === true) {
                                        Alert.alert(
                                            'Invalid Operation.',
                                            'You have used this Order Number previously to restore the purchase. Send me an email if you have any trouble =)',
                                            [
                                                {
                                                    text: 'OK', onPress: () => {
                                                }, style: 'cancel'
                                                },
                                            ],
                                            {cancelable: false}
                                        )
                                    }
                                    else if (snapshot.val() === false) {
                                        //Update Realtime Database data
                                        let updates = {};
                                        updates[replaced] = true;
                                        firebaseApp.database().ref().child('/removeAds').update(updates);
                                        this._storeRemoveAds();

                                        Alert.alert(
                                            'Restore Purchase Successful',
                                            'Order Number found. Ads removed =)',
                                            [
                                                {
                                                    text: 'OK', onPress: () => {
                                                }, style: 'cancel'
                                                },
                                            ],
                                            {cancelable: false}
                                        )
                                    }
                                });
                            }
                        }
                        },
                    ],
                    {
                        cancelable: false,
                        placeholder: 'GPA.XXXX-XXXX-XXXX-XXXXX'
                    }
                );
            }}
                                            content={<View style={styles.settingsItem}>
                                                <Image source={iconRestorePurchase}
                                                       style={styles.settingsImage}/>
                                                <View style={styles.settingsContent}>
                                                    <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-restore-purchase').Translation}</Text>
                                                    <Text style={[styles.settingsText, themeText]}>{I18n.t('settings-restore-purchase-text').Translation}</Text>
                                                </View>
                                            </View>}/>
        }

        let redeemCode = null;
        if (Platform.OS === 'ios'){
            redeemCode = null;
            // redeemCode = <MHWTouchable onPress={()=>{
            //     AlertIOS.prompt(
            //         I18n.t('settings-redeem-code-text').Translation,
            //         null,
            //         text => {
            //             console.warn(text);
            //             if (text !== ""){
            //                 let replaced = text.toUpperCase();
            //                 firebaseApp.database().ref().child('redeemCode/' + replaced).once('value'). then((snapshot)=>{
            //                     if (snapshot.val() === null){
            //                         AlertIOS.alert(I18n.t('settings-redeem-code-failed').Translation, I18n.t('settings-redeem-code-invalid').Translation)
            //                     } else if (snapshot.val() === true) {
            //                         AlertIOS.alert(I18n.t('settings-redeem-code-failed').Translation, I18n.t('settings-redeem-code-used').Translation)
            //                     } else if (snapshot.val() === false){
            //                         let updates = {};
            //                         updates[replaced] = true;
            //                         firebaseApp.database().ref().child('/redeemCode').update(updates);
            //
            //                         AlertIOS.alert(I18n.t('settings-redeem-code-success').Translation, I18n.t('settings-redeem-code-ads').Translation)
            //                         this._storeRemoveAds();
            //                     }
            //                 });
            //
            //             }
            //         }
            //     );
            // }} content={<View style={styles.settingsItem}>
            //     <Image source={iconRedeemCode}
            //            style={styles.settingsImage}/>
            //     <View style={styles.settingsContent}>
            //         <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-redeem-code').Translation}</Text>
            //         <Text style={[styles.settingsText, themeText]}>{I18n.t('settings-redeem-code-text').Translation}</Text>
            //     </View>
            // </View>}/>
        }

        let email = <MHWTouchable onPress={() => {
                if (Platform.OS === 'android') {
                    Linking.openURL('mailto:nicholaslie90@gmail.com?subject=Monster Hunter World on Android&body=Hi Nick, My name is ... I want to ...')
                }

                if (Platform.OS === 'ios') {
                    Linking.openURL('mailto:nicholaslie90@gmail.com?subject=Monster Hunter World on iOS&body=Hi Nick, My name is ... I want to ...')
                }
            }} content={<View style={styles.settingsItem}>
                <Image source={iconEmail}
                       style={styles.settingsImage}/>
                <View style={styles.settingsContent}>
                    <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-send-me-an-email').Translation}</Text>
                    <Text style={[styles.settingsText, themeText]}>{I18n.t('settings-send-me-an-email-text').Translation}</Text>
                </View>
            </View>}/>;

        let store = null;
        if (Platform.OS === 'android') {
            store = I18n.t('settings-play-store').Translation;
        }
        if (Platform.OS === 'ios') {
            store = I18n.t('settings-app-store').Translation;
        }

        let checkForUpdates =
            <MHWTouchable onPress={() => {
                if (Platform.OS === 'android') {
                    Linking.openURL('https://play.google.com/store/apps/details?id=nicholaslie.mhwguidewiki')
                }
                if (Platform.OS === 'ios') {
                    Linking.openURL('https://itunes.apple.com/app/mhw-guide-wiki-companion/id1350447353');
                }
            }} content={<View style={styles.settingsItem}>
                <Image source={iconCheckForUpdates}
                       style={styles.settingsImage}/>
                <View style={styles.settingsContent}>
                    <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-check-for-updates').Translation}</Text>
                    <Text
                        style={[styles.settingsText, themeText]}>{I18n.t('settings-check-for-updates-text').Translation}{store}.</Text>
                </View>
            </View>}/>
        ;

        let joinDiscord =
            <MHWTouchable onPress={() => {
                Linking.openURL('https://discord.gg/xAyk9NJ')
            }} content={<View style={styles.settingsItem}>
                <Image source={require('../assets/general/icon_settings_discord.png')}
                       style={styles.settingsImage}/>
                <View style={styles.settingsContent}>
                    <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-join-discord').Translation}</Text>
                    <Text style={[styles.settingsText, themeText]}>{I18n.t('settings-join-discord-text').Translation}.</Text>
                </View>
            </View>}/>;

        let rateApp = null;
        if (Platform.OS === 'ios') {
            rateApp = <TouchableHighlight underlayColor={'silver'}
                                          onPress={() => {
                                              if (StoreReview.isAvailable) {
                                                  StoreReview.requestReview();
                                                  AsyncStorage.setItem('isReviewed', 'true');
                                              }
                                          }}>
                <View style={styles.settingsItem}>
                    <Image source={iconRate}
                           style={styles.settingsImage}/>
                    <View style={styles.settingsContent}>
                        <Text style={[globalStyles.heading3, themeText]}>{I18n.t('settings-rate-app').Translation}</Text>
                        <Text style={[styles.settingsText, themeText]}>{I18n.t('settings-rate-app-text').Translation}.</Text>
                    </View>
                </View>
            </TouchableHighlight>;
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <ScrollView>
                    {language}
                    {changeTheme}
                    {quickSearch}
                    {/*{upgradeLoadoutsDatabase}*/}
                    {removeAds}
                    {restorePurchase}
                    {redeemCode}
                    {coffee}
                    {email}
                    {checkForUpdates}
                    {joinDiscord}
                    {rateApp}
                </ScrollView>
                {
                    this._renderAds()
                }
            </SafeAreaView>

        );
    }

    // componentWillMount() {
    //     console.log(this.state.language);
    //     if (this.state.language !== undefined) {
    //         I18n.locale = this.state.language;
    //     } else {
    //         I18n.locale = 'en';
    //     }
    // }

    async _donateCoffee(skipInAppBilling = false) {
        if (Platform.OS === 'android') {
            if (!skipInAppBilling){
                await InAppBilling.close();

                InAppBilling.open()
                    .then(() => InAppBilling.purchase(productIDDonateCoffee))
                    .then(details => {
                        if (details.purchaseState === 'PurchasedSuccessfully') {
                            ToastAndroid.show('Thanks for the coffee!', ToastAndroid.LONG);
                            AsyncStorage.setItem('donateCoffee', 'true');
                            this.setState({coffeePurchased: true})
                        } else {
                            this.setState({coffeePurchased: false})
                        }
                        // console.warn("You purchased: ", details);
                        return InAppBilling.close();
                    })
                    .catch(err => {
                        // console.warn(err);
                    });
            } else {
                AsyncStorage.setItem('donateCoffee', 'true');
                this.setState({coffeePurchased: true})
            }
        }
    }

    async _removeAds() {
        if (Platform.OS === 'android') {
            await InAppBilling.close();

            InAppBilling.open()
                .then(() => InAppBilling.purchase(productIdRemoveAds))
                .then(details => {
                    if (details.purchaseState === 'PurchasedSuccessfully') {
                        ToastAndroid.show('Thanks for purchasing!', ToastAndroid.LONG);
                        this._storeRemoveAds();
                        this.setState({showAds: false})
                    } else {
                        this.setState({showAds: true})
                    }
                    // console.warn("You purchased: ", details);
                    return InAppBilling.close();
                })
                .catch(err => {
                    // console.warn(err);
                });
        }

        if (Platform.OS === 'ios') {
            InAppUtils.loadProducts(iapiOS, (error, products) => {
                if (products.length > 0) {
                    //In-app purchases found
                    InAppUtils.canMakePayments((canMakePayments) => {
                        if (!canMakePayments) {
                            Alert.alert('Not Allowed', 'This device is not allowed to make purchases. Please check restrictions on the device.');
                        } else {
                            InAppUtils.purchaseProduct(products[0].identifier, (error, response) => {
                                // NOTE for v3.0: User can cancel the payment which will be available as error object here.
                                if (response && response.productIdentifier) {
                                    Alert.alert('Thanks for purchasing!', 'Thanks for purchasing! Your Transaction ID is ' + response.transactionIdentifier);
                                    this._storeRemoveAds();
                                }
                            });
                        }
                    })
                }
            });
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/2917823215', 'ca-app-pub-9242567842673294/7538121008');
        } else {
            return null;
        }
    }

    _restorePurchase() {
        InAppUtils.restorePurchases((error, response) => {
            if (error) {
                Alert.alert('iTunes Error', 'Could not connect to iTunes Store.');
            } else {
                if (response.length === 0) {
                    Alert.alert('No Purchases Found', "We didn't find any purchases to restore.");
                    return;
                }

                response.forEach((purchase) => {
                    if (purchase.productIdentifier === iapiOS) {
                        // Handle purchased product.
                        Alert.alert('Previous Purchase Found!', 'Removed ads from the app :)');
                        this._storeRemoveAds();
                    }
                });
            }
        });
    }

    async _storeRemoveAds() {
        await AsyncStorage.setItem('removeAds', 'true');
        this.setState({showAds: false});
    }
}