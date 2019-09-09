/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react'
import {
    AsyncStorage,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native"
import globalStyles from '../styles';
import * as database from '../database';
import {makeAdMob, productIdRemoveAds, returnRarityColor, returnSlot} from "../utility";
import {SkillItem} from "./Skills";
import {MHWTouchable} from "../components/MHWTouchable";

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

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export default class ArmorSetSubDetailScreen extends React.PureComponent {
    state = {
        showAds: true,
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.item.name : 'Armor Sub Detail',
            headerRight: (
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <MHWTouchable onPress={() => navigation.navigate('Search', {theme: navigation.state.params.theme})} content={
                        <Image source={require('../assets/general/icon_search.png')} style={globalStyles.navSearch}/>
                    }/>
                </View>
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
        const {params} = this.props.navigation.state;

        //Theme
        let themeBackground = null;
        let themeText = null;
        let themeCrafted = '#b3e5fc';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeCrafted = null;
            }
        }

        let slots = null;
        if (params.item.slots !== undefined) {
            let slotsArray = params.item.slots.split(' ');
            let slotImageStyle = {
                width: 20,
                height: 20,
                marginLeft: 10,
                resizeMode: 'contain'
            };
            slots = <View style={{flex: 1, flexDirection: 'row'}}>
                <Image source={returnSlot(slotsArray[0])} style={slotImageStyle}/>
                <Image source={returnSlot(slotsArray[1])} style={slotImageStyle}/>
                <Image source={returnSlot(slotsArray[2])} style={slotImageStyle}/>
            </View>
        }

        let skillText = null;
        let skillHeader = null;
        if (params.item.skills !== undefined) {
            skillHeader = <Text style={[globalStyles.heading2, themeText]}>Skills</Text>;
            skillText = params.item.skills.map((skill, index) => {
                let skillObject = _.find(database.skills, {'name': skill.name});
                return <SkillItem
                    key={skillObject.name}
                    item={skillObject}
                    navigation={this.props.navigation}
                    level={params.item.level}
                    theme={this.props.navigation.state.params.theme}/>;
            })
        }

        let cost = null;
        if (params.item.cost !== undefined) {
            cost = <View style={[styles.textContainer, {marginBottom: 20}]}>
                <View style={styles.leftContainer}>
                    <Text style={[{textAlign: 'left'},themeText, globalStyles.heading2]}>Cost</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'},themeText, globalStyles.heading2]}>{params.item.cost}z</Text>
                </View>
            </View>;
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>

                <ScrollView>

                    <View style={{flex: 1, flexDirection: 'column', paddingLeft: 20, paddingTop: 20, paddingRight: 20}}>

                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image source={params.item.iconMale}
                                   resizeMode={'contain'}
                                   style={{width: 175, height: 175}}/>
                            <Image source={params.item.iconFemale}
                                   resizeMode={'contain'}
                                   style={{width: 175, height: 175}}/>
                        </View>

                        {/*Level - Rarity*/}
                        <View style={[styles.textContainer, {marginTop: 10}]}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Text style={[{textAlign: 'left'}, themeText]}>Level {params.item.level}</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={{color: returnRarityColor(params.item.rarity), textAlign: 'right'}}>Rarity {params.item.rarity}</Text>
                            </View>
                        </View>

                        {/*Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_defense.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Defense</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.defense}</Text>
                            </View>
                        </View>

                        {/*Slots*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_slots.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Slots</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                {slots}
                            </View>
                        </View>

                        {/*Fire Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_fire.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Vs. Fire</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.vsFire}</Text>
                            </View>
                        </View>

                        {/*Water Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_water.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Vs. Water</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.vsWater}</Text>
                            </View>
                        </View>

                        {/*Thunder Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_thunder.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Vs. Thunder</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.vsThunder}</Text>
                            </View>
                        </View>

                        {/*Ice Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_ice.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Vs. Ice</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.vsIce}</Text>
                            </View>
                        </View>

                        {/*Dragon Defense*/}
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/general/icon_dragon.png')}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Vs. Dragon</Text>
                                </View>
                            </View>

                            <View style={styles.rightContainer}>
                                <Text style={[{textAlign: 'right'}, themeText]}>{params.item.vsDragon}</Text>
                            </View>
                        </View>

                        {/*Skills*/}
                        <View style={{paddingTop: 20}}>
                            {skillHeader}
                            {skillText}
                        </View>

                        {/*Cost*/}
                        {cost}

                    </View>

                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        );
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            InAppBilling.close();
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/5263923210', 'ca-app-pub-9242567842673294/9311458368');
        } else {
            return null;
        }
    }
}