/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Image,
    ImageBackground,
    Platform,
    SafeAreaView,
    ScrollView,
    Switch,
    StyleSheet,
    Text,
    ToastAndroid,
    View
} from "react-native";
import {MonsterMaterialItem} from './MonsterMaterials'
import {WeaponItem} from './WeaponDetail'
import globalStyles from '../styles'
import * as database from '../database'
import {
    makeAdMob, productIdRemoveAds, returnRarityColor, returnWeaponElement, returnSlot,
} from "../utility";
import {SkillItem} from "./Skills";
import {NavigationActions} from "react-navigation";
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        paddingTop: 10,
        fontSize: 18,
        height: 44,
    },
    textContainer: {
        flexDirection: 'row',
        height: 30,
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rowLabelText: {
        color: "#0B1219",
        fontSize: 16.0,
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

class WeaponSharpnessBar extends React.PureComponent {
    render() {
        //Theme
        let themeText = null;
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        if (this.props.sharpness === '-') {
            return <Image source={require('../assets/decorations/icon_jewel_none.png')} style={{
                width: 20,
                height: 20,
                marginLeft: 10,
                resizeMode: 'contain'
            }}/>
        } else if (typeof this.props.sharpness === 'object') {
            let sharpnessBar = null;
            if (this.props.sharpness !== undefined && typeof this.props.sharpness === 'object') {
                sharpnessBar = <View style={{
                    flexDirection: 'row',
                    height: 5,
                }}>
                    <View style={{backgroundColor: '#AF3849', width: this.props.sharpness.red}}/>
                    <View style={{backgroundColor: '#D06847', width: this.props.sharpness.orange}}/>
                    <View style={{backgroundColor: '#B6A83B', width: this.props.sharpness.yellow}}/>
                    <View style={{backgroundColor: '#85AF3E', width: this.props.sharpness.green}}/>
                    <View style={{backgroundColor: '#3D53C5', width: this.props.sharpness.blue}}/>
                    <View style={{backgroundColor: '#CCD6F7', width: this.props.sharpness.white}}/>
                </View>
            }

            let sharpnessMaxBar = null;
            if (this.props.sharpnessMax !== undefined && typeof this.props.sharpnessMax === 'object') {
                sharpnessMaxBar = <View style={{
                    flexDirection: 'row',
                    height: 5,
                    marginTop: 4,
                }}>
                    <View style={{backgroundColor: '#AF3849', width: this.props.sharpnessMax.red}}/>
                    <View style={{backgroundColor: '#D06847', width: this.props.sharpnessMax.orange}}/>
                    <View style={{backgroundColor: '#B6A83B', width: this.props.sharpnessMax.yellow}}/>
                    <View style={{backgroundColor: '#85AF3E', width: this.props.sharpnessMax.green}}/>
                    <View style={{backgroundColor: '#3D53C5', width: this.props.sharpnessMax.blue}}/>
                    <View style={{backgroundColor: '#CCD6F7', width: this.props.sharpnessMax.white}}/>
                </View>
            }

            return <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                {sharpnessBar}
                {sharpnessMaxBar}
            </View>
        } else {
            return <Text style={themeText}>{this.props.sharpness}</Text>
        }
    }
}

export default class WeaponSubDetailScreen extends React.PureComponent {
    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        let wishlist = null;
        if (params.showWishlist) {
            if (params.inWishlist) {
                wishlist = <MHWTouchable onPress={() => params.toggleWishlist()}
                                         content={<Image source={require('../assets/general/icon_wishlist_filled.png')}
                                                         style={globalStyles.navSearch}/>}/>;
            } else {
                wishlist = <MHWTouchable onPress={() => params.toggleWishlist()}
                                         content={<Image source={require('../assets/general/icon_wishlist.png')}
                                                         style={globalStyles.navSearch}/>}/>;
            }
        }

        return {
            title: params ? params.item.name : 'Weapon Sub Detail',
            headerRight: (
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <MHWTouchable onPress={() => navigation.dispatch(NavigationActions.navigate({
                        routeName: 'WeaponDetail',

                        params: {
                            weaponName: params.item.type
                        },

                        action: NavigationActions.navigate({routeName: 'WeaponDetail'}),
                    }))} content={<Image source={require('../assets/general/icon_home.png')}
                                         style={globalStyles.navSearch}/>}/>
                    {wishlist}
                    <MHWTouchable onPress={() => navigation.navigate('Search', {
                        scope: 'Weapons',
                        theme: navigation.state.params.theme
                    })}
                                  content={
                                      <Image source={require('../assets/general/icon_search.png')}
                                             style={globalStyles.navSearch}/>
                                  }/>
                </View>
            ),
        };
    };

    constructor() {
        super();
        this.state = {
            crafted: false,
            showAds: true,
        };

        this._isMounted = false;
    }

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

        await this._getCraftedValue(this.props.navigation.state.params.item);
    }

    render() {
        const {params} = this.props.navigation.state;

        //Theme
        let themeBackground = null;
        let themeText = null;
        let themeSeparator = '#f5f5f5';
        let themeCrafted = '#b3e5fc';
        let themeSwitch = 'black';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeSeparator = 'white';
                themeCrafted = null;
                themeSwitch = 'white';
            }
        }

        let fromItem = null;
        let tree = null;
        //Find the correct tree for this weapon
        switch (params.item.type) {
            case 'Great Sword':
                tree = database.greatSwordTree;
                break;

            case 'Long Sword':
                tree = database.longSwordTree;
                break;

            case 'Sword and Shield':
                tree = database.swordAndShieldTree;
                break;

            case 'Dual Blades':
                tree = database.dualBladesTree;
                break;

            case 'Hammer':
                tree = database.hammerTree;
                break;

            case 'Hunting Horn':
                tree = database.huntingHornTree;
                break;

            case 'Lance':
                tree = database.lanceTree;
                break;

            case 'Gunlance':
                tree = database.gunlanceTree;
                break;

            case 'Switch Axe':
                tree = database.switchAxeTree;
                break;

            case 'Charge Blade':
                tree = database.chargeBladeTree;
                break;

            case 'Insect Glaive':
                tree = database.insectGlaiveTree;
                break;

            case 'Light Bowgun':
                tree = database.lightBowgunTree;
                break;

            case 'Heavy Bowgun':
                tree = database.heavyBowgunTree;
                break;

            case 'Bow':
                tree = database.bowTree;
                break;
        }

        let attack = params.item.attack;
        if (params.item.baseAttack !== undefined) {
            attack += ' | ' + params.item.baseAttack;
        }

        if (params.item.from !== undefined) {
            _.find(tree, (tree) => {
                let weaponFound = _.find(tree.data, {'name': params.item.from});
                if (weaponFound !== undefined) {
                    fromItem = weaponFound;
                }
            });
        }

        let fromHeading = null;
        let from = null;
        if (fromItem !== null) {
            from = <WeaponItem item={fromItem} navigation={this.props.navigation}
                               theme={this.props.navigation.state.params.theme}/>;
            fromHeading = <Text style={[globalStyles.heading1, themeText]}>From Weapon</Text>;
        }

        let upgradableToHeading = null;
        let upgradableTo = [];
        if (params.item.upgradableTo !== undefined) {
            upgradableToHeading = <Text style={[globalStyles.heading1, themeText]}>Upgradable To</Text>;
            _.forEach(params.item.upgradableTo, (weaponName) => {
                let weaponFound;
                _.find(tree, (tree) => {
                    weaponFound = _.find(tree.data, {'name': weaponName});
                    if (weaponFound !== undefined) {
                        upgradableTo.push(<WeaponItem key={weaponName} item={weaponFound}
                                                      navigation={this.props.navigation}
                                                      theme={this.props.navigation.state.params.theme}/>);
                    }
                });
            });
        }

        let elderseal = null;
        if (params.item.elderseal !== undefined) {
            elderseal = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/weapons/icon_elderseal.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{
                            alignItems: 'flex-end',
                            textAlign: 'left'
                        }, themeText]}>Elderseal</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.elderseal}</Text>
                </View>
            </View>;
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

        let description = null;
        if (params.item.description !== undefined) {
            description = <View><View
                style={{borderTopColor: '#f5f5f5', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0}}/>
                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 3,
                    marginBottom: 10
                }}/>

                <Text style={themeText}>{params.item.description}</Text>

                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 10
                }}/>
                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 3
                }}/>
            </View>;
        }

        let notes = null;
        let melodyNotesImageStyle = {
            width: 25,
            height: 25,
            margin: 10,
            marginTop: 16,
            justifyContent: 'center',
            alignItems: 'center'
        };
        if (params.item.type === 'Hunting Horn') {
            let notesArray = null;
            if (params.item.notes !== undefined) {
                notesArray = params.item.notes.split(", ");
            }
            if (notesArray !== null) {
                notes = <View style={{flexDirection: 'row'}}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../assets/weapons/icon_notes.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Notes</Text>
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>{
                            notesArray.map((note, index) => {
                                return <Image key={index}
                                              source={this._returnNote(note)}
                                              style={melodyNotesImageStyle}/>
                            })
                        }</View>
                    </View>
                </View>;
            }
        }
        let melodyEffects = null;
        let melodyEffectsHeader = null;
        if (params.item.melodyEffects !== undefined) {
            melodyEffectsHeader = <Text style={[globalStyles.heading1, themeText]}>Melody Effects</Text>
            melodyEffects = params.item.melodyEffects.map((melodyEffect, index) => {
                let melodyNotesArray = melodyEffect.notes.split(", ");
                return <View key={melodyEffect.name + index} style={{flexDirection: 'column', marginTop: 20}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={melodyEffect.icon}
                               style={globalStyles.leftImage}/>
                        <Text
                            style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>{melodyEffect.name}</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>{
                        melodyNotesArray.map((note, index) => {
                            return <Image key={note + index}
                                          source={this._returnNote(note)}
                                          style={melodyNotesImageStyle}/>
                        })
                    }</View>
                </View>;
            });
        }

        //Check for Capacity
        let capacityHeader = null;
        let capacity = null;
        let capacityScrollView = null;
        if (params.item.capacity !== undefined) {
            capacityHeader = <Text style={[globalStyles.heading1, themeText]}>Capacity</Text>;
            capacityScrollView = <ScrollView horizontal={true}>
                <View style={{flexDirection: 'row'}}>
                    {/*Capacity*/}
                    <View style={{flexDirection: 'column', marginLeft: 10, marginRight: 10}}>
                        <Text style={[{textAlign: 'center'}, themeText]}>Capacity</Text>
                        {
                            params.item.capacity.map((capacity, index) => {
                                return <Text key={index}
                                             style={[{
                                                 textAlign: 'center',
                                                 height: 20
                                             }, themeText]}>{capacity.capacity}</Text>
                            })
                        }
                    </View>
                    {/*Shot Type*/}
                    <View style={{flexDirection: 'column', marginLeft: 10, marginRight: 10}}>
                        <Text style={[{textAlign: 'center'}, themeText]}>Shot Type</Text>
                        {
                            params.item.capacity.map((capacity, index) => {
                                return <Text key={index}
                                             style={[{
                                                 textAlign: 'center',
                                                 height: 20
                                             }, themeText]}>{capacity.shotType}</Text>
                            })
                        }
                    </View>
                    {/*Reload*/}
                    <View style={{flexDirection: 'column', marginLeft: 10, marginRight: 10}}>
                        <Text style={[{textAlign: 'center'}, themeText]}>Reload</Text>
                        {
                            params.item.capacity.map((capacity, index) => {
                                return <Text key={index}
                                             style={[{
                                                 textAlign: 'center',
                                                 height: 20
                                             }, themeText]}>{capacity.reload}</Text>
                            })
                        }
                    </View>
                    {/*Special*/}
                    <View style={{flexDirection: 'column', marginLeft: 10, marginRight: 10}}>
                        <Text style={[{textAlign: 'center'}, themeText]}>Capacity</Text>
                        {
                            params.item.capacity.map((capacity, index) => {
                                return <Text key={index}
                                             style={[{
                                                 textAlign: 'center',
                                                 height: 20
                                             }, themeText]}>{capacity.special}</Text>
                            })
                        }
                    </View>
                </View>
            </ScrollView>;
            capacity = <View style={{flexDirection: 'row', marginTop: 10}}>
                {/*<Text style={[globalStyles.heading2, {marginTop: 20}]}>{hitData.name}</Text>*/}
                <View style={{flexDirection: 'column'}}>
                    <Text>Ammo</Text>
                    {
                        params.item.capacity.map((capacity, index) => {
                            return <View key={index} style={styles.leftContainer}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image source={capacity.icon}
                                           style={globalStyles.leftImage}/>
                                    <Text style={[{
                                        alignItems: 'flex-end',
                                        textAlign: 'left'
                                    }, themeText]}>{capacity.ammo}</Text>
                                </View>
                            </View>
                        })
                    }
                </View>
                {capacityScrollView}
            </View>
        }

        //Check for Skills
        let skillsHeader = null;
        let skills = null;
        if (params.item.skills !== undefined) {
            skillsHeader = <Text style={[globalStyles.heading1, themeText]}>Skills</Text>;
            skills = params.item.skills.map((skill, index) => {
                let skillObject = _.find(database.skills, {'name': skill.name});
                return <SkillItem
                    key={skillObject.name}
                    item={skillObject}
                    navigation={this.props.navigation}
                    level={skill.level}
                    theme={this.props.navigation.state.params.theme}/>;
            })
        }

        //Check for Kinsect Bonus
        let kinsectBonus = null;
        if (params.item.type === 'Insect Glaive') {
            kinsectBonus = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/weapons/icon_kinsect_bonus.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Kinsect Bonus</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.kinsectBonus}</Text>
                </View>
            </View>;
        }

        let coatings = null;
        if (params.item.type === 'Bow') {
            coatings = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <Text style={[{textAlign: 'left'}, themeText]}>Coatings</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.coatings}</Text>
                </View>
            </View>;
        }

        let customMods = null;
        if (params.item.type === 'Light Bowgun' || params.item.type === 'Heavy Bowgun') {
            customMods = <View style={styles.textContainer}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../assets/weapons/icon_custom_mods.png')}
                           style={globalStyles.leftImage}/>
                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Custom Mods</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.customMods}</Text>
                </View>
            </View>;
        }

        let specialAmmo = null;
        if (params.item.type === 'Light Bowgun' || params.item.type === 'Heavy Bowgun') {
            specialAmmo = <View style={styles.textContainer}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../assets/weapons/icon_special_ammo.png')}
                           style={globalStyles.leftImage}/>
                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Special Ammo</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.specialAmmo}</Text>
                </View>
            </View>
        }

        let phialType = null;
        if (params.item.type === 'Switch Axe' || params.item.type === 'Charge Blade') {
            phialType = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/weapons/icon_phial_type.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Phial Type</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={elementIcon} style={{width: 20, height: 20, marginRight: 4}}/>
                        <Text style={[{textAlign: 'right'}, themeText]}>{params.item.phialType}</Text>
                    </View>
                </View>
            </View>
        }

        let deviation = null;
        if (params.item.type === 'Light Bowgun' || params.item.type === 'Heavy Bowgun') {
            deviation = <View style={styles.textContainer}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../assets/weapons/icon_deviation.png')}
                           style={globalStyles.leftImage}/>
                    <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Deviation</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.deviation}</Text>
                </View>
            </View>;
        }

        let shellingType = null;
        if (params.item.type === 'Gunlance') {
            shellingType = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/weapons/icon_shelling.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Shelling Type</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <Text
                            style={[{textAlign: 'right'}, themeText]}>{params.item.shellingType}</Text>
                    </View>
                </View>
            </View>;
        }

        let shellingLevel = null;
        if (params.item.type === 'Gunlance') {
            shellingLevel = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/weapons/icon_shelling.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Shelling Level</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <Text
                            style={[{textAlign: 'right'}, themeText]}>{params.item.shellingLevel}</Text>
                    </View>
                </View>
            </View>;
        }

        let defenseBonus = null;
        if (params.item.defenseBonus !== undefined) {
            defenseBonus = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/weapons/icon_defense_bonus.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Defense
                            Bonus</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <Text
                            style={[{textAlign: 'right'}, themeText]}>{params.item.defenseBonus}</Text>
                    </View>
                </View>
            </View>;
        }

        let augmentations = null;
        if (params.item.augmentations !== undefined) {
            augmentations = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/weapons/icon_augmentations.png')}
                               style={globalStyles.leftImage}/>
                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Augmentations</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.augmentations}</Text>
                </View>
            </View>
        }

        let materials = null;
        let hasMaterial = false;
        if (params.item.materials !== undefined) {
            hasMaterial = true;
            materials = params.item.materials.map((material, index) => {
                let materialObject = _.find(database.monsterMaterials, {'name': material.name});

                if (materialObject !== undefined) {
                    return <MonsterMaterialItem key={`${material.name}`} item={materialObject}
                                                navigation={this.props.navigation} quantity={material.quantity}
                                                theme={this.props.navigation.state.params.theme}/>
                }
                else {
                    return <View key={`${material.name}`} style={styles.textContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={[{textAlign: 'left'}, themeText]}> {material.name}</Text>
                        </View>

                        <View style={styles.rightContainer}>
                            <Text style={[{textAlign: 'right'}, themeText]}> x {material.quantity}</Text>
                        </View>
                    </View>;
                }
            })
        }
        let materialHeading = null;
        if (hasMaterial) {
            materialHeading = <Text style={[globalStyles.heading1, themeText]}>Required Materials</Text>;
        }

        let cost = null;
        if (params.item.cost !== undefined) {
            cost = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <Text style={[{textAlign: 'left'}, globalStyles.heading2, themeText]}>Cost</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, globalStyles.heading2, themeText]}>{params.item.cost}z</Text>
                </View>
            </View>;
        }

        let elementIcon = returnWeaponElement(params.item.element);

        //Check whether affinity should use red color
        let affinityColor = {};
        if (params.item.affinity !== undefined) {
            if (this.props.navigation.state.params.theme !== undefined && this.props.navigation.state.params.theme === 'Dark') {
                affinityColor = globalStyles.textDark;
            }

            let affinityArray = params.item.affinity.split('-');
            if (affinityArray.length > 0 && affinityArray[1] !== undefined) {
                affinityColor = {color: 'red'};
            }
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <ScrollView>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: themeCrafted,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                        <View style={styles.leftContainer}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Image source={params.item.weaponIcon}
                                       style={{
                                           alignItems: 'flex-start',
                                           width: 20,
                                           height: 20,
                                           marginTop: 10,
                                           marginRight: 10
                                       }}/>
                                <Text style={[globalStyles.heading2, themeText]}>Crafted?</Text>
                            </View>
                        </View>
                        <View style={[styles.rightContainer, {alignItems: 'flex-end', justifyContent: 'center'}]}>
                            <Switch
                                onValueChange={(value) => this._toggleCrafted(value, params.item)}
                                thumbColor={themeSwitch}
                                trackColor='grey'
                                tintColor='grey'
                                value={this.state.crafted}
                                style={{marginTop: 6}}/>
                        </View>
                    </View>

                    <Image source={params.item.icon} style={{width: 200, height: 200, alignSelf: 'center'}}
                           resizeMode={'contain'}/>

                    <View style={{flex: 1, flexDirection: 'column', paddingLeft: 20, paddingRight: 20, paddingTop: 20}}>
                        {/*Rarity*/}
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <View style={styles.textContainer}>
                                <View style={[styles.rightContainer]}>
                                    <Text style={[{
                                        textAlign: 'right',
                                        color: returnRarityColor(params.item.rarity)
                                    }, themeText]}>Rarity: {params.item.rarity}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{flex: 1, flexDirection: 'column'}}>
                            {/*Attack*/}
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                        <Image source={require('../assets/weapons/icon_attack.png')}
                                               style={globalStyles.leftImage}/>
                                        <Text style={[{
                                            alignItems: 'flex-end',
                                            textAlign: 'left'
                                        }, themeText]}>Attack</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text style={[{textAlign: 'right'}, themeText]}>{attack}</Text>
                                </View>
                            </View>

                            {/*Sharpness*/}
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                        <Image source={require('../assets/weapons/icon_sharpness.png')}
                                               style={globalStyles.leftImage}/>
                                        <Text style={[{
                                            alignItems: 'flex-end',
                                            textAlign: 'left'
                                        }, themeText]}>Sharpness</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <WeaponSharpnessBar sharpness={params.item.sharpness}
                                                        sharpnessMax={params.item.sharpnessMax}
                                                        theme={this.props.navigation.state.params.theme}/>
                                </View>
                            </View>

                            {/*Affinity*/}
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                        <Image source={require('../assets/weapons/icon_affinity.png')}
                                               style={globalStyles.leftImage}/>
                                        <Text style={[{
                                            alignItems: 'flex-end',
                                            textAlign: 'left'
                                        }, themeText]}>Affinity</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text
                                        style={[affinityColor, themeText, {textAlign: 'right'}]}>{params.item.affinity}</Text>
                                </View>
                            </View>

                            {/*Element*/}
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                        <Image source={require('../assets/weapons/icon_element.png')}
                                               style={globalStyles.leftImage}/>
                                        <Text style={[{
                                            alignItems: 'flex-end',
                                            textAlign: 'left'
                                        }, themeText]}>Element</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Image source={elementIcon} style={{width: 20, height: 20, marginRight: 4}}/>
                                        <Text style={[{textAlign: 'right'}, themeText]}>{params.item.element}</Text>
                                    </View>
                                </View>
                            </View>

                            {/*Elderseal*/}
                            {elderseal}

                            {/*Slots*/}
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                        <Image source={require('../assets/general/icon_slots.png')}
                                               style={globalStyles.leftImage}/>
                                        <Text style={[{
                                            alignItems: 'flex-end',
                                            textAlign: 'left'
                                        }, themeText]}>Slots</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    {slots}
                                </View>
                            </View>

                            {/*Defense Bonus*/}
                            {defenseBonus}

                            {/*Deviation*/}
                            {deviation}

                            {/*Gunlance*/}
                            {shellingType}
                            {shellingLevel}

                            {/*Insect Glaive*/}
                            {kinsectBonus}

                            {/*Light Bowgun && Heavy Bowgun*/}
                            {customMods}
                            {specialAmmo}

                            {/*Bow*/}
                            {coatings}

                            {/*Switch Axe && Charge Blade*/}
                            {phialType}

                            {/*Augmentations*/}
                            {augmentations}

                            {/*Description*/}
                            {description}

                            {/*Notes*/}
                            {notes}

                            {/*Melody Effects*/}
                            {melodyEffectsHeader}
                            {melodyEffects}

                            {/*Capacity*/}
                            {capacityHeader}
                            {capacity}

                            {/*Skills*/}
                            {skillsHeader}
                            {skills}

                            {/*From*/}
                            {fromHeading}
                            {from}

                            {/*Upgradable To*/}
                            {upgradableToHeading}
                            {upgradableTo}

                            {/*Materials*/}
                            {materialHeading}
                            {materials}

                            {/*Cost*/}
                            {cost}
                        </View>
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async _getCraftedValue(item) {
        try {
            let value = await AsyncStorage.getItem("Weapon" + item.type + item.name);
            let isCrafted = (value !== null && value === 'true');
            if (this._isMounted) {
                this.setState({
                    crafted: isCrafted
                });
            }

            if (isCrafted) {
                this.props.navigation.setParams({
                    showWishlist: false,
                    toggleWishlist: this._toggleWishlist,
                });
            } else {
                this.props.navigation.setParams({
                    showWishlist: true,
                    toggleWishlist: this._toggleWishlist,
                });

                //See if the item is in wishlist
                let value = await AsyncStorage.getItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'Weapon' + '~' + this.props.navigation.state.params.item.type);
                if (value === 'true') {
                    this.props.navigation.setParams({inWishlist: true});
                } else {
                    this.props.navigation.setParams({inWishlist: false});
                }
            }

        } catch (error) {
            // Error retrieving data
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/6477817015', 'ca-app-pub-9242567842673294/2996240763');
        } else {
            return null;
        }
    }

    _returnNote(note) {
        switch (note) {
            case 'blue':
                return require('../assets/weapons/hunting_horn/melodies/icon-blue.png');
                break;

            case 'blue2':
                return require('../assets/weapons/hunting_horn/melodies/icon-blue2.png');
                break;

            case 'f':
                return require('../assets/weapons/hunting_horn/melodies/icon-f.png');
                break;

            case 'green':
                return require('../assets/weapons/hunting_horn/melodies/icon-green.png');
                break;

            case 'green2':
                return require('../assets/weapons/hunting_horn/melodies/icon-green2.png');
                break;

            case 'light blue2':
                return require('../assets/weapons/hunting_horn/melodies/icon-light-blue2.png');
                break;

            case 'orange2':
                return require('../assets/weapons/hunting_horn/melodies/icon-orange2.png');
                break;

            case 'purple':
                return require('../assets/weapons/hunting_horn/melodies/icon-purple.png');
                break;

            case 'red':
                return require('../assets/weapons/hunting_horn/melodies/icon-red.png');
                break;

            case 'white':
                return require('../assets/weapons/hunting_horn/melodies/icon-white.png');
                break;

            case 'yellow':
                return require('../assets/weapons/hunting_horn/melodies/icon-yellow.png');
                break;

            case 'yellow2':
                return require('../assets/weapons/hunting_horn/melodies/icon-yellow2.png');
                break;
        }
    }

    async _toggleCrafted(value, item) {
        this.setState({crafted: value});
        try {
            if (value) {
                await AsyncStorage.setItem("Weapon" + item.type + item.name, 'true');
                await AsyncStorage.removeItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'Weapon' + '~' + this.props.navigation.state.params.item.type);

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();

                this.props.navigation.setParams({
                    showWishlist: false,
                });

                if (this.props.navigation.state.params.wishlist !== undefined) {
                    this.props.navigation.state.params.wishlist._refreshData();
                }
            } else {
                await AsyncStorage.setItem("Weapon" + item.type + item.name, 'false');

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();

                this.props.navigation.setParams({
                    showWishlist: true,
                });
            }

        } catch (error) {
        }
    }

    _toggleWishlist = () => {
        let currentValue = this.props.navigation.state.params.inWishlist;

        if (currentValue === undefined) {
            currentValue = false;
        }

        this.props.navigation.setParams({
            inWishlist: !currentValue
        });

        if (currentValue) {
            if (Platform.OS === 'android') {
                ToastAndroid.show('Removed from wishlist.', ToastAndroid.SHORT);
            }
            else {
                alert('Removed from wishlist.');
            }
            AsyncStorage.removeItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'Weapon' + '~' + this.props.navigation.state.params.item.type);
        } else {
            if (Platform.OS === 'android') {
                ToastAndroid.show('Added to wishlist.', ToastAndroid.SHORT);
            } else {
                alert('Added to wishlist.');
            }
            AsyncStorage.setItem('Wishlist~' + this.props.navigation.state.params.item.name + '~' + 'Weapon' + '~' + this.props.navigation.state.params.item.type, 'true');
        }

        if (this.props.navigation.state.params.wishlist !== undefined) {
            this.props.navigation.state.params.wishlist._refreshData();
        }
    }

}