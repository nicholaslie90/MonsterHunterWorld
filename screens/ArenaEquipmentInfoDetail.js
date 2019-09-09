/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react'
import {
    AsyncStorage,
    Dimensions,
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native"
import globalStyles from '../styles';
import {IndicatorViewPager, PagerTitleIndicator} from 'rn-viewpager';
import * as database from '../database';
import {makeAdMob, productIdRemoveAds, returnRarityColor, returnSlot} from "../utility";
import I18n from '../i18n/i18n';
import {Item} from "./Items";
import {SpecializedToolItem} from "./SpecializedTools";
import {WeaponItem} from "./WeaponDetail";
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    imageStyle: {
        width: 50,
        height: 50,
        margin: 4,
        marginRight: 10,
        resizeMode: 'contain'
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
});
let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export default class ArenaEquipmentInfoDetailScreen extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            showAds: true
        };
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.item.weapon : 'Arena Quest Detail',
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {theme: navigation.state.params.theme})} content={
                    <Image source={require('../assets/general/icon_search.png')} style={globalStyles.navSearch}/>} />
            ),
        };
    };

    async componentWillMount() {
        let stateObject = {};
        let isPurchased = await AsyncStorage.getItem('removeAdfs');
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
        let themeCompleted = '#b3e5fc';
        let themeSwitch = 'black';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeCompleted = null;
                themeSwitch = 'white';
            }
        }

        //Check for weapon
        let weapon = null;
        if (params.item.weapon !== undefined) {
            let weapons = _.concat(database.greatSwordTree, database.longSwordTree, database.swordAndShieldTree, database.dualBladesTree, database.hammerTree, database.huntingHornTree, database.lanceTree, database.gunlanceTree, database.switchAxeTree, database.chargeBladeTree, database.insectGlaiveTree, database.lightBowgunTree, database.heavyBowgunTree, database.bowTree);
            _.forEach(weapons, (weaponClass) => {
                _.forEach(weaponClass, (weaponTreeInDatabase) => {
                    _.forEach(weaponTreeInDatabase, (weaponInDatabase) => {
                        if (weaponInDatabase.name === params.item.weapon) {
                            weapon = <WeaponItem item={weaponInDatabase} navigation={this.props.navigation} noSwitch theme={this.props.navigation.state.params.theme}/>

                            // weaponComponent = weaponInDatabase;
                            return false;
                        }
                    });
                })
            });
        }

        //Check for upperBody
        let upperBody = null;
        if (params.item.upperBody !== undefined) {
            upperBody = this._returnArmorComponent(params.item.upperBody);
        }

        //Check for hands
        let hands = null;
        if (params.item.hands !== undefined) {
            hands = this._returnArmorComponent(params.item.hands);
        }

        //Check for lowerBody
        let lowerBody = null;
        if (params.item.lowerBody !== undefined) {
            lowerBody = this._returnArmorComponent(params.item.lowerBody);
        }

        //Check for legs
        let legs = null;
        if (params.item.legs !== undefined) {
            legs = this._returnArmorComponent(params.item.legs);
        }

        //Check for charms
        let charm = null;
        if (params.item.charm !== undefined) {
            let charmInDatabase = _.find(database.charms, {name: params.item.charm});
            if (charmInDatabase !== undefined) {
                charm = <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={charmInDatabase.icon} style={{
                        width: 50,
                        height: 50,
                        margin: 10,
                        marginTop: 16,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}/>
                    <View style={{flex: 1, flexDirection: 'column', marginTop: 10}}>
                        <Text style={[globalStyles.heading2, themeText]}>{charmInDatabase.name}</Text>
                        <Text style={[globalStyles.subtitle, themeText]}>{
                            charmInDatabase.skills.map((skill, index) => {
                                if (index === 0)
                                    return skill + ' Lv.' + charmInDatabase.level;
                                else
                                    return ", " + skill + ' Lv.' + charmInDatabase.level;
                            })
                        }</Text>
                    </View>
                </View>
            }
        }

        //Check for specialized tool 1
        let specializedTool1 = null;
        if (params.item.specializedTool1 !== undefined) {
            specializedTool1 = this._returnSpecializedTool(params.item.specializedTool1);
        }

        //Check for specialized tool 2
        let specializedTool2 = null;
        if (params.item.specializedTool2 !== undefined) {
            specializedTool2 = this._returnSpecializedTool(params.item.specializedTool2);
        }

        let items = [];
        if (params.item.items !== undefined) {
            _.forEach(params.item.items, (item) => {
                let itemInDatabase = _.find(database.items, {name: item.name});
                if (itemInDatabase !== undefined) {
                    items.push({item: itemInDatabase, quantity: item.quantity});
                }
            })
        }

        let ammo = null;
        if (params.item.ammo !== undefined) {
            let ammoArray = [];
            _.forEach(params.item.ammo, (item) => {
                let itemInDatabase = _.find(database.items, {name: item.name});
                if (itemInDatabase !== undefined) {
                    ammoArray.push({item: itemInDatabase, quantity: item.quantity});
                }
            })

            ammo = <View style={{paddingBottom: 20}}><FlatList
                data={ammoArray}
                renderItem={({item}) => <Item key={item.item.name} item={item.item} quantity={item.quantity}/>}
                keyExtractor={(item) => item.item.name}
            /></View>
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <IndicatorViewPager
                    style={{flex: 1, flexDirection: 'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View style={{paddingBottom: 20}}>
                        <ScrollView>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                {weapon}
                                {upperBody}
                                {hands}
                                {lowerBody}
                                {legs}
                                {charm}
                                {specializedTool1}
                                {specializedTool2}
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <FlatList
                            data={items}
                            renderItem={({item}) => <Item key={item.item.name} item={item.item}
                                                          quantity={item.quantity} theme={this.props.navigation.state.params.theme}/>}
                            keyExtractor={(item) => item.item.name}
                        />
                    </View>
                    {ammo}
                </IndicatorViewPager>
                {this._renderAds()}
            </SafeAreaView>
        )
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8847777449', 'ca-app-pub-9242567842673294/5278789170');
        } else {
            return null;
        }
    }

    _renderTitleIndicator() {
        const windowWidth = Dimensions.get('window').width;

        let tabs = ['Equipment', 'Items'];
        if (this.props.navigation.state.params.item.ammo !== undefined) {
            tabs.push('Ammo');
        }

        return (
            <PagerTitleIndicator
                style={globalStyles.tabIndicatorContainer}
                trackScroll={true}
                itemTextStyle={globalStyles.tabIndicatorText}
                itemStyle={{width: windowWidth / tabs.length}}
                selectedItemStyle={{width: windowWidth / tabs.length}}
                selectedItemTextStyle={globalStyles.tabIndicatorSelectedText}
                selectedBorderStyle={globalStyles.tabSelectedBorderStyle}
                titles={tabs}
            />
        )
    }

    _returnArmorComponent(armor, armorSpec) {
        //Theme
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        let armorComponent;

        let armors = _.concat(database.lowRankArmors, database.highRankArmors);
        _.forEach(armors, (armorSet) => {
            if (armorSet.head !== undefined && armorSet.head.name === armor.name) {
                armorComponent = armorSet.head;
                return false;
            }
            else if (armorSet.upperBody !== undefined && armorSet.upperBody.name === armor.name) {
                armorComponent = armorSet.upperBody;
                return false;
            } else if (armorSet.hands !== undefined && armorSet.hands.name === armor.name) {
                armorComponent = armorSet.hands;
                return false;
            } else if (armorSet.lowerBody !== undefined && armorSet.lowerBody.name === armor.name) {
                armorComponent = armorSet.lowerBody;
                return false;
            } else if (armorSet.legs !== undefined && armorSet.legs.name === armor.name) {
                armorComponent = armorSet.legs;
                return false;
            }
        });


        if (armorComponent !== undefined) {
            let icon = null;
            if (armorComponent.iconMale !== null) {
                icon = armorComponent.iconMale;
            } else if (armorComponent.iconFemale !== null) {
                icon = armorComponent.iconFemale;
            }

            let skills = null;
            if (armorComponent.skills !== undefined) {
                skills = armorComponent.skills.map((skill, index) => {
                    let skillObject = _.find(database.skills, {name: skill.name});
                    let skillImage = null;
                    if (skillObject !== undefined) {
                        skillImage = <Image source={skillObject.icon} style={{
                            width: 20,
                            height: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}/>;
                    }
                    return <View key={`${skill.name}`} style={{flexDirection: 'row'}}>
                        {skillImage}
                        <Text style={[{textAlign: 'left'}, themeText]}> {skill.name} Lv. {skill.level}</Text>
                    </View>;
                })
            }

            let slots = null;
            if (armorComponent.slots !== undefined) {
                let slotsArray = armorComponent.slots.split(' ');
                let slotImageStyle = {
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    marginTop: 2,
                    resizeMode: 'contain'
                };
                slots = <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={returnSlot(slotsArray[0])} style={slotImageStyle}/>
                    <Image source={returnSlot(slotsArray[1])} style={slotImageStyle}/>
                    <Image source={returnSlot(slotsArray[2])} style={slotImageStyle}/>
                </View>
            }

            return <View style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 20,
                marginLeft: 10,
                marginRight: 10,
            }}>
                <View style={{flexDirection: 'column', marginRight: 10}}>
                    <View style={{width: 50, height: 50, paddingRight: 10}}>
                        <Image source={armorComponent.iconMale} style={{
                            width: 50,
                            height: 50,
                            marginTop: 16,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}/>
                        <Image source={require('../assets/general/icon_male.png')} style={{
                            width: 20,
                            height: 20,
                            marginTop: 50,
                            marginLeft: 35,
                            position: 'absolute',
                        }}/>
                    </View>
                    <View style={{width: 50, height: 50}}>
                        <Image source={armorComponent.iconFemale} style={{
                            width: 50,
                            height: 50,
                            marginTop: 16,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}/>
                        <Image source={require('../assets/general/icon_female.png')} style={{
                            width: 20,
                            height: 20,
                            marginTop: 50,
                            marginLeft: 35,
                            position: 'absolute',
                        }}/>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[globalStyles.heading2, themeText, {flex: 7}]}>{I18n.t(armorComponent.translationKey).Translation}</Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={styles.leftContainer}>
                            <Text style={themeText}>Level: {armor.level}</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={[{
                                color: returnRarityColor(armor.rarity),
                            }, themeText]}>Rarity: {armor.rarity}</Text>
                        </View>
                    </View>

                    {slots}

                    <View style={{flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            {/*Defense*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/general/icon_defense.png')} style={{
                                    width: 20,
                                    height: 20,
                                    margin: 4,
                                    alignItems: 'center'
                                }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-defense').Translation}{armor.defense}</Text>
                                </View>
                            </View>

                            {/*Vs. Fire*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/general/icon_fire.png')} style={{
                                    width: 20,
                                    height: 20,
                                    margin: 4,
                                    alignItems: 'center'
                                }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-fire-defense').Translation}{armor.vsFire}</Text>
                                </View>
                            </View>

                            {/*Vs. Water*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/general/icon_water.png')}
                                       style={{
                                           width: 20,
                                           height: 20,
                                           margin: 4,
                                           alignItems: 'center'
                                       }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-water-defense').Translation}{armor.vsWater}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{flex: 1, flexDirection: 'column'}}>
                            {/*Vs. Thunder*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/general/icon_thunder.png')}
                                       style={{
                                           width: 20,
                                           height: 20,
                                           margin: 4,
                                           alignItems: 'center'
                                       }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-thunder-defense').Translation}{armor.vsThunder}</Text>
                                </View>
                            </View>

                            {/*Vs. Ice*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/general/icon_ice.png')} style={{
                                    width: 20,
                                    height: 20,
                                    margin: 4,
                                    alignItems: 'center'
                                }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-ice-defense').Translation}{armor.vsIce}</Text>
                                </View>
                            </View>

                            {/*Vs. Dragon*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/general/icon_dragon.png')}
                                       style={{
                                           width: 20,
                                           height: 20,
                                           margin: 4,
                                           alignItems: 'center'
                                       }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-dragon-defense').Translation}{armor.vsDragon}</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    {skills}

                </View>
            </View>
        } else {
            return null;
        }
    }

    _returnSpecializedTool(specializedToolName) {
        let specializedTools = _.concat(database.smokers, database.mantles);
        let specializedTool = _.find(specializedTools, {name: specializedToolName});
        if (specializedTool !== undefined) {
            return <SpecializedToolItem item={specializedTool} noSwitch theme={this.props.navigation.state.params.theme}/>;
        } else {
            return null;
        }

    }
}