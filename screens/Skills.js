/**
 * Created by nicholaslie on 18/02/18.
 */

import React, { Component } from 'react';
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
import { skills } from '../database'
import { makeAdMob, productIdRemoveAds } from "../utility";
import I18n from '../i18n/i18n';
import { MHWTouchable } from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        padding: 10,
        paddingLeft: 0
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class SkillItem extends React.PureComponent {
    render() {
        //Theme
        let themeText = null;
        let themeBorder = 'black';
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
                themeBorder = '#9F9F9F';
            }
        }

        let item = this.props.item;
        let level = null;
        let skillLevelBoxes = null;
        if (this.props.level !== undefined) {
            level = <Text style={styles.item}> Lv. {this.props.level}</Text>;

            if (this.props.item != null) {
                let skillBoxes = [];
                for (let index = 0; index < this.props.level; index++) {
                    if (index === 0) {
                        skillBoxes.push(<View key={index} style={{ width: 8, height: 8, marginRight: 4, marginLeft: 12, borderColor: '#896D2F', backgroundColor: '#C8AD59', borderWidth: 1 }}></View>)
                    } else {
                        skillBoxes.push(<View key={index} style={{ width: 8, height: 8, marginRight: 4, borderColor: '#896D2F', backgroundColor: '#C8AD59', borderWidth: 1 }}></View>)
                    }

                }
                for (let index = this.props.level; index < this.props.item.maxLevel; index++) {
                    skillBoxes.push(<View key={index} style={{ width: 8, height: 8, marginRight: 4, backgroundColor: 'rgba(52, 52, 52, 0.0)', borderColor: themeBorder, borderWidth: 1 }}></View>)
                }
                skillLevelBoxes = <View style={{ flexDirection: 'row' }}>
                    {skillBoxes}
                </View>;
            }
        }

        let levels = null;
        if (item !== undefined && item.levels !== undefined){
            levels = <Text style={[globalStyles.subtitle, themeText, { padding: 10 }]}>{
                Object.keys(item.levels).map((key) => {
                    let bold = [globalStyles.subtitle, { fontWeight: 'bold' }];
                    if (level !== null && parseInt(key) <= parseInt(this.props.level)) {
                        return <Text key={item.levels[key]}
                                     style={[bold, themeText]}>{key}: {I18n.t(item.levels[key]).Translation}{"\n"}</Text>;
                    } else {
                        return <Text key={item.levels[key]}
                                     style={[globalStyles.subtitle, themeText]}>{key}: {I18n.t(item.levels[key]).Translation}{"\n"}</Text>;
                    }
                })
            }
            </Text>;
        }

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('SkillDetail', {
                skill: item,
                theme: this.props.theme
            })} content={<View style={{ flex: 1, flexDirection: 'row' }}>
                <Image source={item.icon} style={{ width: 50, height: 50, margin: 20 }} />
                <View style={{ flex: 1, flexDirection: 'column', paddingTop: 4 }}>
                    <Text style={[styles.item, themeText]}>{I18n.t(item.translationKey).Translation}{level}</Text>
                    {skillLevelBoxes}
                    <Text style={[globalStyles.subtitle, themeText, { padding: 10 }]}>{I18n.t(item.description).Translation}</Text>
                    {levels}
                </View>
            </View>} />;
    }
}

export default class SkillsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { showAds: true };
    }

    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: I18n.t('home-skills').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', { scope: 'Skills', theme: navigation.state.params.theme })} content={
                    <Image source={require('../assets/general/icon_search.png')} style={globalStyles.navSearch} />
                } />
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

        let sortedSkills = _.orderBy(skills, ['name'], ['asc']);

        return (
            <SafeAreaView style={[{ flex: 1 }, themeBackground]}>
                <FlatList
                    data={sortedSkills}
                    renderItem={({ item }) => <SkillItem item={item} navigation={this.props.navigation}
                        theme={this.props.navigation.state.params.theme} />
                    }
                    keyExtractor={(item, index) => item.name}
                />
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/4907793433', 'ca-app-pub-9242567842673294/5897736271');
        } else {
            return null;
        }
    }
}