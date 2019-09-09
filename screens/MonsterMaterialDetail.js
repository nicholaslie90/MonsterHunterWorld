/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Button,
    FlatList, Image,
    Linking,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {ArmorComponent} from './ArmorDetail';
import {WeaponItem} from './WeaponDetail';
import {PalicoItem} from './PalicoEquipment';
import * as database from '../database';
import {makeAdMob, productIdRemoveAds} from "../utility";
import {MonsterItem} from "./Monsters";
import {CharmItem} from "./Charms";
import {ArmorSetItem} from "./ArmorSets";
import {MHWTouchable} from "../components/MHWTouchable";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export default class MonsterMaterialDetailScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};

        this._isMounted = false;
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.item.name : 'Monster Material Detail',
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
        const {params} = this.props.navigation.state;

        //Theme
        let themeBackground = null;
        let themeText = null;
        let themeSwitch = 'black';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeSwitch = 'white';
            }
        }

        let howToGet = null;
        if (params.item.howToGet !== undefined) {
            howToGet = <View style={{flexDirection: 'column'}}>
                <Text style={[globalStyles.heading1, themeText]}>How To Get</Text>
                <Text style={themeText}>{params.item.howToGet}</Text>
            </View>;
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

        let monsters = [];
        let monsterList = null;
        this._checkMonsters(database.smallMonsters, params.item.name, monsters);
        this._checkMonsters(database.largeMonsters, params.item.name, monsters);
        if (monsters.length > 0) {
            monsterList = <View><Text style={[globalStyles.heading1, themeText]}>Monsters</Text>
                <FlatList
                    data={monsters}
                    renderItem={({item, index}) => {
                        return <MonsterItem key={item.name} item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    }}
                    keyExtractor={(item, index) => item.name}
                /></View>;
        }

        let craftableArmorSets = [];
        let armorSets = null;
        _.forEach(database.armorSets, (armorSet) => {
            let matchingArmorSet = _.find(armorSet.materials, {name: params.item.name});
            if (matchingArmorSet !== undefined) {
                craftableArmorSets.push(armorSet);
            }
        });
        if (craftableArmorSets.length > 0) {
            armorSets = <View><Text style={[globalStyles.heading1, themeText]}>Craftable Armor Sets</Text>
                <FlatList
                    data={craftableArmorSets}
                    renderItem={({item}) => <ArmorSetItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    }
                    keyExtractor={(item, index) => item.name}
                /></View>;
        }

        let craftableArmorComponents = [];
        let armorComponents = null;
        this._checkArmors(database.lowRankArmors, params.item.name, craftableArmorComponents);
        this._checkArmors(database.highRankArmors, params.item.name, craftableArmorComponents);
        if (craftableArmorComponents.length > 0) {
            armorComponents = <View><Text style={[globalStyles.heading1, themeText]}>Craftable Armor Components</Text>
                <FlatList
                    data={craftableArmorComponents}
                    renderItem={({item}) => <ArmorComponent item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    }
                    keyExtractor={(item, index) => item.name}
                /></View>;
        }

        let craftableWeapons = [];
        let weapons = null;
        this._checkWeapons(database.greatSwordTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.longSwordTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.swordAndShieldTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.dualBladesTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.hammerTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.huntingHornTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.lanceTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.gunlanceTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.switchAxeTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.chargeBladeTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.insectGlaiveTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.lightBowgunTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.heavyBowgunTree, params.item.name, craftableWeapons);
        this._checkWeapons(database.bowTree, params.item.name, craftableWeapons);
        if (craftableWeapons.length > 0) {
            weapons = <View><Text style={[globalStyles.heading1, themeText]}>Craftable Weapons</Text>
                <FlatList
                    data={craftableWeapons}
                    renderItem={({item}) => <WeaponItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    }
                    keyExtractor={(item, index) => item.name}
                /></View>;
        }

        let craftableCharms = [];
        let charms = null;
        _.forEach(database.charms, (charm) => {
            _.forEach(charm.materials, (material) => {
                if (material.name === params.item.name) {
                    craftableCharms.push(charm);
                }
            });
        });
        if (craftableCharms.length > 0) {
            charms = <View><Text style={[globalStyles.heading1, themeText]}>Craftable Charms</Text>
                <FlatList
                    data={craftableCharms}
                    renderItem={({item}) => <CharmItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    }
                    keyExtractor={(item, index) => item.name}
                /></View>;
        }

        let craftablePalicoEquipments = [];
        this._checkPalicoEquipment(database.lowRankPalicoArmors, params.item.name, craftablePalicoEquipments);
        this._checkPalicoEquipment(database.highRankPalicoArmors, params.item.name, craftablePalicoEquipments);
        let palicoEquipments = null;
        if (craftablePalicoEquipments.length > 0) {
            palicoEquipments = <View><Text style={[globalStyles.heading1, themeText]}>Craftable Palico Equipment</Text>
                <FlatList
                    data={craftablePalicoEquipments}
                    renderItem={(item) => <PalicoItem item={item.item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>}
                    keyExtractor={(item, index) => item.name}
                /></View>;
        }


        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <ScrollView>

                    <View style={{flex: 1, flexDirection: 'column', padding: 20}}>
                        {howToGet}
                        {youTube}
                        {monsterList}
                        {armorSets}
                        {armorComponents}
                        {weapons}
                        {charms}
                        {palicoEquipments}
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        );
    }

    componentDidMount() {
        this._isMounted = true;
    }

    _checkArmors(items, name, array) {
        _.forEach(items, (item) => {
            {
                if (item.head !== undefined) {
                    let headComponent = _.find(item.head.materials, {name: name});
                    if (headComponent !== undefined) {
                        array.push(item.head);
                    }
                }

                if (item.upperBody !== undefined) {
                    let upperBodyComponent = _.find(item.upperBody.materials, {name: name});
                    if (upperBodyComponent !== undefined) {
                        array.push(item.upperBody);
                    }
                }

                if (item.hands !== undefined) {
                    let handComponent = _.find(item.hands.materials, {name: name});
                    if (handComponent !== undefined) {
                        array.push(item.hands);
                    }
                }

                if (item.lowerBody !== undefined) {
                    let lowerBodyComponent = _.find(item.lowerBody.materials, {name: name});
                    if (lowerBodyComponent !== undefined) {
                        array.push(item.lowerBody);
                    }
                }

                if (item.legs !== undefined) {
                    let legComponent = _.find(item.legs.materials, {name: name});
                    if (legComponent !== undefined) {
                        array.push(item.legs);
                    }
                }
            }
        });
    }

    _checkMonsters(items, name, array) {
        _.forEach(items, (monster) => {
            _.forEach(monster.loot, (loot) => {
                if (loot.lowRank !== undefined) {
                    let monsterContainsLoot = _.find(loot.lowRank, {name: name});
                    if (monsterContainsLoot !== undefined) {
                        let existingItem = _.find(array, {name: monster.name});
                        if (existingItem === undefined)
                            array.push(monster);
                    }
                }

                if (loot.highRank !== undefined) {
                    let monsterContainsLoot = _.find(loot.highRank, {name: name});
                    if (monsterContainsLoot !== undefined) {
                        let existingItem = _.find(array, {name: monster.name});
                        if (existingItem === undefined)
                            array.push(monster);
                    }
                }
            });
        })
    }

    _checkPalicoEquipment(palicoEquipments, name, array) {
        _.forEach(palicoEquipments, (palicoEquipment) => {
            let weaponMaterial;
            if (palicoEquipment.weapon !== undefined) {
                weaponMaterial = _.find(palicoEquipment.weapon.materials, {name: name});
            }

            let headMaterial;
            if (palicoEquipment.head !== undefined) {
                headMaterial = _.find(palicoEquipment.head.materials, {name: name});
            }

            let bodyMaterial;
            if (palicoEquipment.body !== undefined) {
                bodyMaterial = _.find(palicoEquipment.body.materials, {name: name});
            }

            if (weaponMaterial !== undefined || headMaterial !== undefined || bodyMaterial !== undefined) {
                array.push(palicoEquipment);
            }
        });
    }

    _checkWeapons(weaponTree, name, array) {
        _.forEach(weaponTree, (tree) => {
            _.forEach(tree.data, function (data) {
                let materialFound = _.find(data.materials, {name: name});
                if (materialFound !== undefined) {
                    array.push(data);
                }
            });
        });
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/2453708843', 'ca-app-pub-9242567842673294/1862288341');
        } else {
            return null;
        }
    }
}