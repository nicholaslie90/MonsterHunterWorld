/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Linking,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {makeAdMob, productIdRemoveAds} from '../utility'
import I18n from '../i18n/i18n';

const InAppBilling = require("react-native-billing");

export default class AboutScreen extends React.PureComponent {
    state = {
        showAds: true,
        coffeePurchased: false,
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-about').Translation,
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
                <ScrollView>
                    <View style={{alignItems: 'center', justifyContent: 'center', paddingBottom: 20}}>
                        <Text style={[{textAlign: 'center', lineHeight: 30, padding: 20}, themeText]}>Hi everyone!
                            Hopefully you enjoy this app as
                            much as I do developing the app! I love playing Monster Hunter: World and I
                            thought I should try making a reference app for this great game! {"\n\n"}

                            Hopefully this app can help you guys. Got any questions or feedback? Or notice
                            anything
                            wrong? Use the button below to drop me an email. I'll try writing back to
                            you. My PSN account is: nicholaslie. I go by the name of voxfleuret in Monster
                            Hunter:
                            World. {"\n\n"}

                            This guide based on the following:
                            - http://monsterhunter.wikia.com
                            {"\n"}
                            - https://monsterhunterworld.wiki.fextralife.com
                            {"\n"}
                            - https://mhworld.kiranico.com
                            {"\n"}
                            - Monster Hunter: World Game itself
                            {"\n"}{"\n"}

                            Special Contributors:
                            {"\n"}
                            - DerMotze
                            - Kenny Todd

                            {"\n"}{"\n"}

                            Language Contributors:
                            {"\n"}
                            - Chinese (Simplified): LiYe, eArth終極, Eric, Alex, Nathan, Reese, Zhenglei Jiang
                            {"\n"}
                            - Chinese (Traditional): Light Wan
                            {"\n"}
                            - Español: Pavel G. Medina Gomez, Erik Montero, Adrián GB, Spix, Yerko, Ricardo N.L, Daniel Gonzalez, Edwards O. R, Johan Eduardo, Adam, Bastian Aguirre, Ernesto Sabalza, Nuevos Sentimientos, Jefferson Herrera
                            {"\n"}
                            - French: Kimitsu, Ludovic TUTIN, Jules Dorsit, Loris Scalisi, Jeremy (Pinpin), Sidh, Manu, Garlayn Toji, Thomas Ramphort, Eliot Mousset, Gabriel Suhas Guerin
                            {"\n"}
                            - German (Deutsch): DerMotze, Alex, Justus, Jan Kowal, Nicolai Culino, Kevin Brandt, Jan
                            Graf, Pascal Langenbrunner, Domingo Ivaniv, Pasquale Falcone, Hubert Sproski, Tino Langenberg
                            {"\n"}
                            - Italian: Luca Zanni, Alessandro Troia, Daniel Pellegrini, Ludovico, Nicolò Migliorati, Angelo Franciamore, Leonardo Catanzaro, Francesco Limonta, Valerio, Jacopo
                            {"\n"}
                            - Japanese: Fábio
                            {"\n"}
                            - Korean: 박윤재 (Albert)
                            {"\n"}
                            - Português BR: Marcio Silveira, Carlos, Renan Moreira, Darwin
                            {"\n"}
                            - Português EU: Ulisses
                            {"\n"}
                            - Thai: Ratchanon, Kritsana

                            {"\n\n"}

                            I need help in translating the app into various languages. If you're willing to help me,
                            scroll down to the bottom of this page to find the translation files. =)

                            {"\n"}{"\n"}
                            Built with ❤️ using React Native, from Jakarta,
                            Indonesia.

                            {"\n\n"}
                            ==REPORTING BUGS AND CRASHES==
                            {"\n"}
                            If you encountered any app crashes/incorrect/missing data, feel free to email me directly
                            via the About section in the app, I'll try to address them as soon as I can. If it's a
                            crash, it would be great if you can also provide me the steps on how to reproduce the crash
                            consistently, this will help me a lot in troubleshooting and fixing the app. :)

                            {"\n\n"}
                            ==CONTRIBUTING TO THE APP==
                            {"\n"}
                            If you have any additional data that you would like to contribute to help improve the app,
                            send me in-game screenshots and send it via email / PSN. If it's a weapon, it would be
                            helpful to include all "orange tab" screenshots as they contain more information about a
                            weapon. If it's light/heavy bowgun, also take a screenshot of the ammo/capacity. Be sure
                            remove all equipments first before taking a screenshot as they may interfere with the weapon
                            stats (for example, Free Element skill may mess up the Element stats of a weapon).

                            {"\n\n"}

                            ==DISCLAIMER==
                            {"\n"}
                            This is a personally-developed, unofficial app. The content in this app is not affiliated
                            with, endorsed, sponsored, or specifically approved by any company. This app is mainly for
                            reference purposes and dedicated to all MHW fans.

                            {"\n\n"}

                            All logos/images/names are copyright of their perspective owners. The images used within the
                            app are not endorsed by any of the perspective owners, and the images are used simply for
                            aesthetic purposes.

                            {"\n\n"}

                            Monster Hunter: World is trademark of Capcom Co., Ltd, 2018. All rights reserved.
                        </Text>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={[themeText, {textAlign: 'center'}]}>==LINK TO TRANSLATION FILES==</Text>
                            <Text style={[{color: 'lightblue', textAlign: 'center', lineHeight: 30}]}
                                  onPress={() => Linking.openURL('https://bit.ly/MHWTranslations')}>Link (https://bit.ly/MHWTranslations)</Text>
                        </View>
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8315881988', 'ca-app-pub-9242567842673294/5394355156');
        } else {
            return null;
        }
    }
}