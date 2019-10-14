/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    Alert,
    AsyncStorage,
    Dimensions,
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    SectionList,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    TouchableHighlight,
    View
} from "react-native";
import globalStyles from '../styles'
import * as database from '../database'
import {
    calculateSkill,
    makeAdMob,
    productIdRemoveAds,
    returnWeaponElement,
    returnSlot,
    calculateSetBonusSkillMap,
    returnRarityColor,
} from '../utility';
import {SkillItem} from "./Skills";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";
import prompt from 'react-native-prompt-android';

let totalSkills = [];
let setBonusSkillMap = new Map();
let _ = require('lodash');
const InAppBilling = require("react-native-billing");

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        marginTop: 10,
    },
});

export default class LoadoutDetailScreen extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            showAds: true,
        };
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        let deleteLoadout = null;
        let copyLoadout = null;
        if (params.itemState !== 'new') {
            let existingLoadoutName = params.loadoutName;
            //Do not show these actions if it's a new item.
            deleteLoadout = <MHWTouchable onPress={() => LoadoutDetailScreen._deleteLoadout(navigation)}
                                          content={<Image source={require('../assets/general/icon_delete_white.png')}
                                                          style={globalStyles.navSearch}/>}/>
            copyLoadout = <MHWTouchable onPress={() => {
                prompt(
                    'Copy Loadout',
                    'Enter new loadout name',
                    [
                        {
                            text: 'Cancel', onPress: () => {
                            }, style: 'cancel'
                        },
                        {
                            text: 'OK', onPress: async (value) => {
                                if (existingLoadoutName === value) {
                                    Alert.alert(
                                        'Invalid loadout name',
                                        'New loadout name cannot be the same as previous loadout name.',
                                        [
                                            {
                                                text: 'OK', onPress: () => {
                                                }, style: 'cancel'
                                            },
                                        ],
                                        {cancelable: false}
                                    )
                                } else {
                                    params.loadoutName = value;
                                    LoadoutDetailScreen._saveLoadout(navigation, true);
                                }
                            }
                        },
                    ],
                    {
                        cancelable: false,
                        placeholder: 'e.g. Nergigante'
                    }
                );
            }}
                                        content={<Image source={require('../assets/general/icon_copy.png')}
                                                        style={globalStyles.navSearch}/>}/>
        }

        let saveLoadout = <MHWTouchable onPress={() => LoadoutDetailScreen._saveLoadout(navigation)}
                                        content={<Image source={require('../assets/general/icon_save.png')}
                                                        style={globalStyles.navSearch}/>}/>

        return {
            title: 'Customize',
            headerRight: (
                <View style={{flex: 1, flexDirection: 'row'}}>
                    {copyLoadout}
                    {deleteLoadout}
                    {saveLoadout}
                </View>
            ),
        };
    };

    async componentWillMount() {
        if (this.props.navigation.state.params !== undefined) {
            let item = this.props.navigation.state.params.item;
            if (item !== undefined) {
                //Set form state
                if (item.loadoutName !== undefined) {
                    this.setState({loadoutName: item.loadoutName});
                    this.props.navigation.setParams({loadoutName: item.loadoutName});
                }

                if (item.weapon !== undefined) {
                    //Evaluate weapon
                    let weapons = _.concat(database.greatSwordTree, database.longSwordTree, database.swordAndShieldTree, database.dualBladesTree, database.hammerTree, database.huntingHornTree, database.lanceTree, database.gunlanceTree, database.switchAxeTree, database.chargeBladeTree, database.insectGlaiveTree, database.lightBowgunTree, database.heavyBowgunTree, database.bowTree);
                    _.forEach(weapons, (weaponClass) => {
                        _.forEach(weaponClass, (weaponTreeInDatabase) => {
                            _.forEach(weaponTreeInDatabase, (weaponInDatabase) => {
                                if (weaponInDatabase.name === item.weapon) {
                                    this.setState({weapon: weaponInDatabase});
                                    this.props.navigation.setParams({weapon: weaponInDatabase});
                                    return false;
                                }
                            });
                        })
                    });
                }

                let decorations = _.concat(database.decorationsJewel1, database.decorationsJewel2, database.decorationsJewel3);
                if (item.weaponDecoration1 !== undefined) {
                    let decoration = _.find(decorations, {name: item.weaponDecoration1});
                    if (decoration !== undefined) {
                        this.setState({weaponDecoration1: decoration});
                        this.props.navigation.setParams({weaponDecoration1: decoration});
                    }
                }
                if (item.weaponDecoration2 !== undefined) {
                    let decoration = _.find(decorations, {name: item.weaponDecoration2});
                    if (decoration !== undefined) {
                        this.setState({weaponDecoration2: decoration});
                        this.props.navigation.setParams({weaponDecoration2: decoration});
                    }
                }
                if (item.weaponDecoration3 !== undefined) {
                    let decoration = _.find(decorations, {name: item.weaponDecoration3});
                    if (decoration !== undefined) {
                        this.setState({weaponDecoration3: decoration});
                        this.props.navigation.setParams({weaponDecoration3: decoration});
                    }
                }

                let armors = _.concat(database.lowRankArmors, database.highRankArmors, database.masterRankArmors);
                if (item.head !== undefined) {
                    //Evaluate head
                    _.forEach(armors, (armorSet) => {
                        if (armorSet.head !== undefined && armorSet.head.name === item.head) {
                            this.setState({head: armorSet.head});
                            this.props.navigation.setParams({head: armorSet.head});
                            return false;
                        }
                    });
                }
                if (item.headDecoration1 !== undefined) {
                    let decoration = _.find(decorations, {name: item.headDecoration1});
                    if (decoration !== undefined) {
                        this.setState({headDecoration1: decoration});
                        this.props.navigation.setParams({headDecoration1: decoration});
                    }
                }
                if (item.headDecoration2 !== undefined) {
                    let decoration = _.find(decorations, {name: item.headDecoration2});
                    if (decoration !== undefined) {
                        this.setState({headDecoration2: decoration});
                        this.props.navigation.setParams({headDecoration2: decoration});
                    }
                }
                if (item.headDecoration3 !== undefined) {
                    let decoration = _.find(decorations, {name: item.headDecoration3});
                    if (decoration !== undefined) {
                        this.setState({headDecoration3: decoration});
                        this.props.navigation.setParams({headDecoration3: decoration});
                    }
                }

                if (item.upperBody !== undefined) {
                    //Evaluate upperBody
                    _.forEach(armors, (armorSet) => {
                        if (armorSet.upperBody !== undefined && armorSet.upperBody.name === item.upperBody) {
                            this.setState({upperBody: armorSet.upperBody});
                            this.props.navigation.setParams({upperBody: armorSet.upperBody});
                            return false;
                        }
                    });
                }
                if (item.upperBodyDecoration1 !== undefined) {
                    let decoration = _.find(decorations, {name: item.upperBodyDecoration1});
                    if (decoration !== undefined) {
                        this.setState({upperBodyDecoration1: decoration});
                        this.props.navigation.setParams({upperBodyDecoration1: decoration});
                    }
                }
                if (item.upperBodyDecoration2 !== undefined) {
                    let decoration = _.find(decorations, {name: item.upperBodyDecoration2});
                    if (decoration !== undefined) {
                        this.setState({upperBodyDecoration2: decoration});
                        this.props.navigation.setParams({upperBodyDecoration2: decoration});
                    }
                }
                if (item.upperBodyDecoration3 !== undefined) {
                    let decoration = _.find(decorations, {name: item.upperBodyDecoration3});
                    if (decoration !== undefined) {
                        this.setState({upperBodyDecoration3: decoration});
                        this.props.navigation.setParams({upperBodyDecoration3: decoration});
                    }
                }

                if (item.hands !== undefined) {
                    //Evaluate hands
                    _.forEach(armors, (armorSet) => {
                        if (armorSet.hands !== undefined && armorSet.hands.name === item.hands) {
                            this.setState({hands: armorSet.hands});
                            this.props.navigation.setParams({hands: armorSet.hands});
                            return false;
                        }
                    });
                }
                if (item.handsDecoration1 !== undefined) {
                    let decoration = _.find(decorations, {name: item.handsDecoration1});
                    if (decoration !== undefined) {
                        this.setState({handsDecoration1: decoration});
                        this.props.navigation.setParams({handsDecoration1: decoration});
                    }
                }
                if (item.handsDecoration2 !== undefined) {
                    let decoration = _.find(decorations, {name: item.handsDecoration2});
                    if (decoration !== undefined) {
                        this.setState({handsDecoration2: decoration});
                        this.props.navigation.setParams({handsDecoration2: decoration});
                    }
                }
                if (item.handsDecoration3 !== undefined) {
                    let decoration = _.find(decorations, {name: item.handsDecoration3});
                    if (decoration !== undefined) {
                        this.setState({handsDecoration3: decoration});
                        this.props.navigation.setParams({handsDecoration3: decoration});
                    }
                }

                if (item.lowerBody !== undefined) {
                    //Evaluate lowerBody
                    _.forEach(armors, (armorSet) => {
                        if (armorSet.lowerBody !== undefined && armorSet.lowerBody.name === item.lowerBody) {
                            this.setState({lowerBody: armorSet.lowerBody});
                            this.props.navigation.setParams({lowerBody: armorSet.lowerBody});
                            return false;
                        }
                    });
                }
                if (item.lowerBodyDecoration1 !== undefined) {
                    let decoration = _.find(decorations, {name: item.lowerBodyDecoration1});
                    if (decoration !== undefined) {
                        this.setState({lowerBodyDecoration1: decoration});
                        this.props.navigation.setParams({lowerBodyDecoration1: decoration});
                    }
                }
                if (item.lowerBodyDecoration2 !== undefined) {
                    let decoration = _.find(decorations, {name: item.lowerBodyDecoration2});
                    if (decoration !== undefined) {
                        this.setState({lowerBodyDecoration2: decoration});
                        this.props.navigation.setParams({lowerBodyDecoration2: decoration});
                    }
                }
                if (item.lowerBodyDecoration3 !== undefined) {
                    let decoration = _.find(decorations, {name: item.lowerBodyDecoration3});
                    if (decoration !== undefined) {
                        this.setState({lowerBodyDecoration3: decoration});
                        this.props.navigation.setParams({lowerBodyDecoration3: decoration});
                    }
                }

                if (item.legs !== undefined) {
                    //Evaluate legs
                    _.forEach(armors, (armorSet) => {
                        if (armorSet.legs !== undefined && armorSet.legs.name === item.legs) {
                            this.setState({legs: armorSet.legs});
                            this.props.navigation.setParams({legs: armorSet.legs});
                            return false;
                        }
                    });
                }
                if (item.legsDecoration1 !== undefined) {
                    let decoration = _.find(decorations, {name: item.legsDecoration1});
                    if (decoration !== undefined) {
                        this.setState({legsDecoration1: decoration});
                        this.props.navigation.setParams({legsDecoration1: decoration});
                    }
                }
                if (item.legsDecoration2 !== undefined) {
                    let decoration = _.find(decorations, {name: item.legsDecoration2});
                    if (decoration !== undefined) {
                        this.setState({legsDecoration2: decoration});
                        this.props.navigation.setParams({legsDecoration2: decoration});
                    }
                }
                if (item.legsDecoration3 !== undefined) {
                    let decoration = _.find(decorations, {name: item.legsDecoration3});
                    if (decoration !== undefined) {
                        this.setState({legsDecoration3: decoration});
                        this.props.navigation.setParams({legsDecoration3: decoration});
                    }
                }

                if (item.charm !== undefined) {
                    //Evalute charms
                    let charm = _.find(database.charms, {name: item.charm});
                    if (charm !== undefined) {
                        this.setState({charm: charm});
                        this.props.navigation.setParams({charm: charm});
                    }
                }

                let specializedTools = _.concat(database.mantles, database.smokers);

                if (item.specializedTool1 !== undefined) {
                    //Evaluate Specialized Tool 1
                    let specializedTool1 = _.find(specializedTools, {name: item.specializedTool1});
                    if (specializedTool1 !== undefined) {
                        this.setState({specializedTool1: specializedTool1});
                        this.props.navigation.setParams({specializedTool1: specializedTool1});
                    }
                }

                if (item.specializedTool2 !== undefined) {
                    //Evaluate Specialized Tool 2
                    let specializedTool2 = _.find(specializedTools, {name: item.specializedTool2});
                    if (specializedTool2 !== undefined) {
                        this.setState({specializedTool2: specializedTool2});
                        this.props.navigation.setParams({specializedTool2: specializedTool2});
                    }
                }
            }
        }

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
        let themePlaceholder = "black";
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themePlaceholder = "white";
            }
        }

        // let loadouts = [
        //     {
        //         'name': 'Nergigante',
        //         'weapon': 'Purgation\'s Atrocity',
        //         'head': 'Dragonking Eyepatch ⍺',
        //         'upperBody': 'Nergigante Mail ⍺',
        //         'hands': 'Nergigante Vambraces ⍺',
        //         'lowerBody': 'Nergigante Coil ⍺',
        //         'legs': 'Nergigante Greaves ß',
        //         'charm': 'Attack Charm III',
        //         'smoker': 'Health Booster',
        //         'mantle': 'Dragonproof Mantle',
        //     }
        // ];

        totalSkills = [];
        setBonusSkillMap = new Map();

        let weapon = null;
        if (this.state.weapon !== undefined) {
            let decorationSlots = null;

            let slots = null;
            if (this.state.weapon.slots !== undefined) {
                let slotsArray = this.state.weapon.slots.split(' ');
                let slotImageStyle = {
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    resizeMode: 'contain'
                };
                slots = <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={returnSlot(slotsArray[0])} style={slotImageStyle}/>
                    <Image source={returnSlot(slotsArray[1])} style={slotImageStyle}/>
                    <Image source={returnSlot(slotsArray[2])} style={slotImageStyle}/>
                </View>;

                decorationSlots = this._returnDecorationSlots(slotsArray, 'weapon');
            }

            let imageViewStyle = {};
            if (this.state.weapon.icon === null) {
                imageViewStyle = {
                    width: 50,
                    height: 50,
                    padding: 10,
                    marginRight: 20,
                };
            }

            let sharpnessBar = null;
            if (this.state.weapon.sharpness !== undefined && typeof this.state.weapon.sharpness === 'object') {
                sharpnessBar = <View style={{
                    flexDirection: 'row',
                    height: 3,
                    marginTop: 4,
                }}>
                    <View style={{backgroundColor: '#AF3849', width: this.state.weapon.sharpness.red}}/>
                    <View style={{backgroundColor: '#D06847', width: this.state.weapon.sharpness.orange}}/>
                    <View style={{backgroundColor: '#B6A83B', width: this.state.weapon.sharpness.yellow}}/>
                    <View style={{backgroundColor: '#85AF3E', width: this.state.weapon.sharpness.green}}/>
                    <View style={{backgroundColor: '#3D53C5', width: this.state.weapon.sharpness.blue}}/>
                    <View style={{backgroundColor: '#CCD6F7', width: this.state.weapon.sharpness.white}}/>
                </View>
            }

            let sharpnessMaxBar = null;
            if (this.state.weapon.sharpnessMax !== undefined && typeof this.state.weapon.sharpnessMax === 'object') {
                sharpnessMaxBar = <View style={{
                    flexDirection: 'row',
                    height: 3,
                    marginTop: 4,
                }}>
                    <View style={{backgroundColor: '#AF3849', width: this.state.weapon.sharpnessMax.red}}/>
                    <View style={{backgroundColor: '#D06847', width: this.state.weapon.sharpnessMax.orange}}/>
                    <View style={{backgroundColor: '#B6A83B', width: this.state.weapon.sharpnessMax.yellow}}/>
                    <View style={{backgroundColor: '#85AF3E', width: this.state.weapon.sharpnessMax.green}}/>
                    <View style={{backgroundColor: '#3D53C5', width: this.state.weapon.sharpnessMax.blue}}/>
                    <View style={{backgroundColor: '#CCD6F7', width: this.state.weapon.sharpnessMax.white}}/>
                </View>
            }

            let content = <View style={{flexDirection: 'row'}}>
                <View style={imageViewStyle}>
                    <Image source={this.state.weapon.icon} style={{
                        width: 50,
                        height: 50,
                        margin: 10,
                        marginTop: 16,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}/>
                </View>
                <Image source={this.state.weapon.weaponIcon} style={{
                    width: 20,
                    height: 20,
                    marginTop: 40,
                    marginLeft: 40,
                    position: 'absolute',
                }}/>
                <View style={{flexDirection: 'column', paddingTop: 4}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={[styles.item, themeText]}>{this.state.weapon.name}</Text>
                        {slots}
                    </View>
                    {sharpnessBar}
                    {sharpnessMaxBar}
                    <View style={{flexDirection: 'row'}}>
                        <Text
                            style={[globalStyles.subtitle, themeText]}>{I18n.t('ui-attack').Translation}: {this.state.weapon.attack}, </Text>
                        <Text style={[{
                            color: returnRarityColor(this.state.weapon.rarity)
                        }, globalStyles.subtitle]}>{I18n.t('ui-rarity').Translation}: {this.state.weapon.rarity}</Text>
                        <Image source={returnWeaponElement(this.state.weapon.element)}
                               style={{width: 20, height: 20, marginRight: 4}}/>
                        <Text style={[globalStyles.subtitle, themeText]}>{this.state.weapon.element}</Text>
                    </View>
                </View>
            </View>;

            weapon =
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Weapon</Text>
                    <MHWTouchable onPress={() => this._chooseWeapon()} content={content}/>
                    <View style={{flex: 1, flexDirection: 'column', marginLeft: 50}}>
                        {decorationSlots}
                    </View>
                </View>;

            //Add to total skills
            calculateSkill(this.state.weapon, totalSkills);
        } else {
            let content = <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/general/icon_select.png')} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>Select Weapon</Text>
                </View>
            </View>;

            weapon = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Weapon</Text>
                <MHWTouchable onPress={() => this._chooseWeapon()} content={content}/>
            </View>;
        }

        let head = null;
        if (this.state.head !== undefined) {
            let armorDecorationSlots = null;
            if (this.state.head.slots !== undefined) {
                let slotsArray = this.state.head.slots.split(' ');
                armorDecorationSlots = this._returnDecorationSlots(slotsArray, 'head');
            }

            head = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Head</Text>
                <MHWTouchable onPress={() => this._chooseHead()}
                              content={this._returnArmorComponent(this.state.head, 'head')}/>
                <View style={{flex: 1, flexDirection: 'column', marginLeft: 50}}>
                    {armorDecorationSlots}
                </View>
            </View>;

            //Add to total skills
            calculateSkill(this.state.head, totalSkills);

            //Check for set bonus skill
            calculateSetBonusSkillMap(this.state.head, setBonusSkillMap)
        } else {
            let content = <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/general/icon_select.png')} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>Select Head</Text>
                </View>
            </View>;

            head = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Head</Text>
                <MHWTouchable onPress={() => this._chooseHead()} content={content}/>
            </View>
        }

        let upperBody = null;
        if (this.state.upperBody !== undefined) {
            let armorDecorationSlots = null;
            if (this.state.upperBody.slots !== undefined) {
                let slotsArray = this.state.upperBody.slots.split(' ');
                armorDecorationSlots = this._returnDecorationSlots(slotsArray, 'upperBody');
            }

            upperBody = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Upper Body</Text>
                <MHWTouchable onPress={() => this._chooseUpperBody()}
                              content={this._returnArmorComponent(this.state.upperBody, 'upperBody')}/>
                <View style={{flex: 1, flexDirection: 'column', marginLeft: 50}}>
                    {armorDecorationSlots}
                </View>
            </View>;

            //Add to total skills
            calculateSkill(this.state.upperBody, totalSkills);

            //Check for set bonus skill
            calculateSetBonusSkillMap(this.state.upperBody, setBonusSkillMap)
        } else {
            let content = <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/general/icon_select.png')} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>Select Upper Body</Text>
                </View>
            </View>;

            upperBody = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Upper Body</Text>
                <MHWTouchable onPress={() => this._chooseUpperBody()} content={content}/>
            </View>
        }

        let hands = null;
        if (this.state.hands !== undefined) {
            let armorDecorationSlots = null;
            if (this.state.hands.slots !== undefined) {
                let slotsArray = this.state.hands.slots.split(' ');
                armorDecorationSlots = this._returnDecorationSlots(slotsArray, 'hands');
            }

            hands = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Hands</Text>
                <MHWTouchable onPress={() => this._chooseHands()}
                              content={this._returnArmorComponent(this.state.hands, 'hands')}/>
                <View style={{flex: 1, flexDirection: 'column', marginLeft: 50}}>
                    {armorDecorationSlots}
                </View>
            </View>;

            //Add to total skills
            calculateSkill(this.state.hands, totalSkills);

            //Check for set bonus skill
            calculateSetBonusSkillMap(this.state.hands, setBonusSkillMap)
        } else {
            let content = <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/general/icon_select.png')} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>Select Hands</Text>
                </View>
            </View>;

            hands = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Hands</Text>
                <MHWTouchable onPress={() => this._chooseHands()} content={content}/>
            </View>;
        }

        let lowerBody = null;
        if (this.state.lowerBody !== undefined) {
            let armorDecorationSlots = null;
            if (this.state.lowerBody.slots !== undefined) {
                let slotsArray = this.state.lowerBody.slots.split(' ');
                armorDecorationSlots = this._returnDecorationSlots(slotsArray, 'lowerBody');
            }

            lowerBody = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Lower Body</Text>
                <MHWTouchable onPress={() => this._chooseLowerBody()}
                              content={this._returnArmorComponent(this.state.lowerBody, 'lowerBody')}/>
                <View style={{flex: 1, flexDirection: 'column', marginLeft: 50}}>
                    {armorDecorationSlots}
                </View>
            </View>;

            //Add to total skills
            calculateSkill(this.state.lowerBody, totalSkills);

            //Check for set bonus skill
            calculateSetBonusSkillMap(this.state.lowerBody, setBonusSkillMap)
        } else {
            let content = <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/general/icon_select.png')} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>Select Lower Body</Text>
                </View>
            </View>;

            lowerBody = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Lower Body</Text>
                <MHWTouchable onPress={() => this._chooseLowerBody()} content={content}/>
            </View>
        }

        let legs = null;
        if (this.state.legs !== undefined) {
            let armorDecorationSlots = null;
            if (this.state.legs.slots !== undefined) {
                let slotsArray = this.state.legs.slots.split(' ');
                armorDecorationSlots = this._returnDecorationSlots(slotsArray, 'legs');
            }

            legs = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Legs</Text>
                <MHWTouchable onPress={() => this._chooseLegs()}
                              content={this._returnArmorComponent(this.state.legs, 'legs')}/>
                <View style={{flex: 1, flexDirection: 'column', marginLeft: 50}}>
                    {armorDecorationSlots}
                </View>
            </View>;

            //Add to total skills
            calculateSkill(this.state.legs, totalSkills);

            //Check for set bonus skill
            calculateSetBonusSkillMap(this.state.legs, setBonusSkillMap)
        } else {
            let content = <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/general/icon_select.png')} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>Select Legs</Text>
                </View>
            </View>;

            legs = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Legs</Text>
                <MHWTouchable onPress={() => this._chooseLegs()} content={content}/>
            </View>
        }

        let charm = null;
        if (this.state.charm !== undefined) {
            charm = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Charm</Text>
                <MHWTouchable onPress={() => this._chooseCharm()} content={this._returnCharm(this.state.charm)}/>
            </View>;

            //Add to total skills
            calculateSkill(this.state.charm, totalSkills, parseInt(this.state.charm.level));
        } else {
            let content = <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/general/icon_select.png')} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>Select Charm</Text>
                </View>
            </View>;

            charm = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Charm</Text>
                <MHWTouchable onPress={() => this._chooseCharm()} content={content}/>
            </View>
        }

        let specializedTool1 = null;
        if (this.state.specializedTool1 !== undefined) {
            specializedTool1 = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Specialized Tool 1</Text>
                <MHWTouchable onPress={() => this._chooseSpecializedTool(this._specializedTool1Chosen)}
                              content={this._returnSpecializedTool(this.state.specializedTool1)}/>
            </View>
        } else {
            let content = <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/general/icon_select.png')} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>Select Specialized Tool 1</Text>
                </View>
            </View>;

            specializedTool1 = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Specialized Tool 1</Text>
                <MHWTouchable onPress={() => this._chooseSpecializedTool(this._specializedTool1Chosen)}
                              content={content}/>
            </View>
        }

        let specializedTool2 = null;
        if (this.state.specializedTool2 !== undefined) {
            specializedTool2 = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Specialized Tool 2</Text>
                <MHWTouchable onPress={() => this._chooseSpecializedTool(this._specializedTool2Chosen)}
                              content={this._returnSpecializedTool(this.state.specializedTool2)}/>
            </View>
        } else {
            let content = <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/general/icon_select.png')} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[styles.item, themeText]}>Select Specialized Tool 2</Text>
                </View>
            </View>;

            specializedTool2 = <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.heading2, themeText, {marginTop: 20}]}>Specialized Tool 2</Text>
                <MHWTouchable onPress={() => this._chooseSpecializedTool(this._specializedTool2Chosen)}
                              content={content}/>
            </View>
        }

        let skills = null;
        if (totalSkills.length > 0) {
            //Order the gathered skill by level
            totalSkills = _.orderBy(totalSkills, data => {
                return [data.level]
            }, ['desc']);

            skills = totalSkills.map((skillObject, index) => {
                if (skillObject !== undefined) {
                    if (skillObject.skill !== undefined) {
                        //The structure of skill in database.charms is different
                        return <View key={`${skillObject.skill.name + index}`} style={{marginLeft: 20}}><SkillItem
                            item={skillObject.skill}
                            navigation={this.props.navigation}
                            level={skillObject.level}
                            theme={this.props.navigation.state.params.theme}/>
                        </View>
                    }
                }
            });
        } else {
            skills = <Text style={themeText}>Select equipments first.</Text>;
        }

        //Evaluate set bonus
        let setBonusSkillsArray = [];
        if (setBonusSkillMap.size > 0) {
            //Gather all set bonus skills first into one array.
            let totalSetBonusSkills = [];
            database.lowRankArmors.map((armor)=>{
                if (armor.setBonusSkills !== undefined) {
                    totalSetBonusSkills = _.concat(totalSetBonusSkills, armor.setBonusSkills);
                }
            });
            database.highRankArmors.map((armor)=>{
                if (armor.setBonusSkills !== undefined) {
                    totalSetBonusSkills = _.concat(totalSetBonusSkills, armor.setBonusSkills);
                }
            });
            database.masterRankArmors.map((armor)=>{
                if (armor.setBonusSkills !== undefined) {
                    totalSetBonusSkills = _.concat(totalSetBonusSkills, armor.setBonusSkills);
                }
            });
            for (let [setBonusSkillName, equipmentCount] of setBonusSkillMap) {
                // console.warn(setBonusSkillName + ": " + equipmentCount);
                let setBonusSkillSplitArray = setBonusSkillName.split('~');
                let skillFound;
                if (setBonusSkillSplitArray.length === 2) {
                    skillFound = _.find(totalSetBonusSkills, (setBonusSkill)=>{
                        return setBonusSkill.name === setBonusSkillSplitArray[0] &&
                            setBonusSkill.alias === setBonusSkillSplitArray[1] &&
                            parseInt(setBonusSkill.piecesRequired) <= parseInt(equipmentCount);
                    });
                    if (skillFound !== undefined){
                        setBonusSkillsArray.push(skillFound);
                    }
                }
            }
        }

        let setBonusSkills = [];
        let setBonusSkillsHeader = null;
        if (setBonusSkillsArray.length > 0) {
            setBonusSkillsHeader =
                <Text style={[globalStyles.heading1, themeText]}>{I18n.t('armor-detail-set-bonus-skills').Translation}</Text>;
            setBonusSkillsArray.map((bonusSkill) => {
                // console.warn(bonusSkill);
                let skillInDatabase = _.find(database.skills, {name: bonusSkill.name});
                if (skillInDatabase !== undefined) {
                    setBonusSkills.push(
                        <MHWTouchable key={bonusSkill.name} onPress={() =>
                            this.props.navigation.navigate('SkillDetail', {
                                skill: skillInDatabase,
                                theme: this.props.navigation.state.params.theme
                            })} content={<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={bonusSkill.icon} style={{width: 50, height: 50, margin: 20}}/>
                            <View style={{flex: 1, flexDirection: 'column', paddingTop: 4}}>
                                <Text
                                    style={[styles.item, themeText]}>{I18n.t(bonusSkill.nameKey).Translation} ({I18n.t(bonusSkill.aliasKey).Translation})</Text>
                                <Text
                                    style={[globalStyles.subtitle, themeText, {paddingTop: 10}]}>{I18n.t('armor-detail-equipped-required').Translation}: {bonusSkill.piecesRequired}</Text>
                                <Text style={[globalStyles.subtitle, themeText]}>{I18n.t(bonusSkill.description).Translation}</Text>
                            </View>
                        </View>}/>);
                }
            });
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <ScrollView>
                    <View style={{flexDirection: 'column', padding: 20}}>
                        {/*Loadout Name*/}
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={[globalStyles.heading2, themeText]}>Loadout Name</Text>
                            <TextInput
                                ref="loadoutName"
                                style={[{
                                    height: 40,
                                    borderColor: themePlaceholder,
                                    borderBottomColor: themePlaceholder,
                                    borderWidth: 1,
                                    marginTop: 10,
                                    color: themePlaceholder
                                }, themeText]}
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                placeholder='e.g. Nergigante'
                                placeholderTextColor={themePlaceholder}
                                selectionColor={themePlaceholder}
                                onChangeText={(text) => {
                                    this.props.navigation.setParams({
                                        loadoutName: text
                                    });
                                    this.setState({loadoutName: text})
                                }
                                }
                                value={this.state.loadoutName}
                            />
                        </View>

                        {/*Weapon*/}
                        {weapon}

                        {/*Head*/}
                        {head}

                        {/*UpperBody*/}
                        {upperBody}

                        {/*Hands*/}
                        {hands}

                        {/*Lower Body*/}
                        {lowerBody}

                        {/*Legs*/}
                        {legs}

                        {/*Charm*/}
                        {charm}

                        {/*Smoker*/}
                        {specializedTool1}

                        {/*Mantle*/}
                        {specializedTool2}

                        {/*Set Bonus Skills*/}
                        {setBonusSkillsHeader}
                        {setBonusSkills}

                        {/*Total Skills*/}
                        <Text style={[globalStyles.heading1, themeText]}>Total Skills</Text>
                        {skills}
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    componentDidMount() {
        this.props.navigation.setParams({refs: this.refs})
    }

    _charmChosen = (data) => {
        this.setState({charm: data});
        this.props.navigation.setParams({
            charm: data
        });
    };

    _chooseCharm() {
        this.props.navigation.navigate('LoadoutChooseCharmModal', {
            chooseCharm: this._charmChosen,
            returnCharm: this._returnCharm,
            theme: this.props.navigation.state.params.theme
        })
    }

    _chooseHands() {
        this.props.navigation.navigate('LoadoutChooseHandsModal', {
            chooseHands: this._handsChosen,
            returnArmorComponent: this._returnArmorComponent,
            theme: this.props.navigation.state.params.theme
        })
    }

    _chooseHead() {
        this.props.navigation.navigate('LoadoutChooseHeadModal', {
            chooseHead: this._headChosen,
            returnArmorComponent: this._returnArmorComponent,
            theme: this.props.navigation.state.params.theme
        });
    }

    _chooseLegs() {
        this.props.navigation.navigate('LoadoutChooseLegsModal', {
            chooseLegs: this._legsChosen,
            returnArmorComponent: this._returnArmorComponent,
            theme: this.props.navigation.state.params.theme
        })
    }

    _chooseLowerBody() {
        this.props.navigation.navigate('LoadoutChooseLowerBodyModal', {
            chooseLowerBody: this._lowerBodyChosen,
            returnArmorComponent: this._returnArmorComponent,
            theme: this.props.navigation.state.params.theme
        })
    }

    _chooseSpecializedTool(callback) {
        this.props.navigation.navigate('LoadoutChooseSpecializedToolModal', {
            chooseSpecializedTool: callback,
            returnSpecializedTool: this._returnSpecializedTool,
            theme: this.props.navigation.state.params.theme
        })
    }

    _chooseUpperBody() {
        this.props.navigation.navigate('LoadoutChooseUpperBodyModal', {
            chooseUpperBody: this._upperBodyChosen,
            returnArmorComponent: this._returnArmorComponent,
            theme: this.props.navigation.state.params.theme
        })
    }

    _chooseWeapon() {
        this.props.navigation.navigate('LoadoutChooseWeaponModal', {
            chooseWeapon: this._weaponChosen,
            theme: this.props.navigation.state.params.theme
        })
    }

    _decorationChosen = (decoration, type, index) => {
        let stateObject = {};
        stateObject[type + 'Decoration' + (index + 1)] = decoration;
        this.setState(stateObject);
        this.props.navigation.setParams(stateObject);
    };

    _handsChosen = (data) => {
        let handsObject = {
            hands: data,
            handsDecoration1: undefined,
            handsDecoration2: undefined,
            handsDecoration3: undefined,
        };
        this.setState(handsObject);
        this.props.navigation.setParams(handsObject);
    };

    _headChosen = (data) => {
        let headObject = {
            head: data,
            headDecoration1: undefined,
            headDecoration2: undefined,
            headDecoration3: undefined,
        };
        this.setState(headObject);
        this.props.navigation.setParams(headObject);
    };

    _legsChosen = (data) => {
        let legsObject = {
            legs: data,
            legsDecoration1: undefined,
            legsDecoration2: undefined,
            legsDecoration3: undefined,
        };
        this.setState(legsObject);
        this.props.navigation.setParams(legsObject);
    };

    _lowerBodyChosen = (data) => {
        let lowerBodyObject = {
            lowerBody: data,
            lowerBodyDecoration1: undefined,
            lowerBodyDecoration2: undefined,
            lowerBodyDecoration3: undefined,
        }
        this.setState(lowerBodyObject);
        this.props.navigation.setParams(lowerBodyObject);
    };

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8680885434', 'ca-app-pub-9242567842673294/8181543864');
        } else {
            return null;
        }
    }

    _returnArmorComponent = (armorComponent, type) => {
        //Theme
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        if (armorComponent !== undefined) {
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

            return <View key={`${armorComponent.name}`} style={{
                flex: 1,
                flexDirection: 'row',
                marginBottom: 20,
            }}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{width: 50, height: 50}}>
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
                <View style={{flex: 1, flexDirection: 'column', paddingTop: 4, marginLeft: 20}}>
                    <Text style={[styles.item, themeText]}>{armorComponent.name}</Text>

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
                                <Image source={require('./../assets/general/icon_defense.png')}
                                       style={{
                                           width: 20,
                                           height: 20,
                                           margin: 4,
                                           alignItems: 'center'
                                       }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text
                                        style={[globalStyles.subtitle, themeText]}>Def: {armorComponent.defense}</Text>
                                </View>
                            </View>

                            {/*Vs. Fire*/}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('./../assets/general/icon_fire.png')}
                                       style={{
                                           width: 20,
                                           height: 20,
                                           margin: 4,
                                           alignItems: 'center'
                                       }}/>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text style={[globalStyles.subtitle, themeText]}>Fire
                                        Def: {armorComponent.vsFire}</Text>
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
                                    <Text style={[globalStyles.subtitle, themeText]}>Water
                                        Def: {armorComponent.vsWater}</Text>
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
                                    <Text style={[globalStyles.subtitle, themeText]}>Thunder
                                        Def: {armorComponent.vsThunder}</Text>
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
                                    <Text style={[globalStyles.subtitle, themeText]}>Ice
                                        Def: {armorComponent.vsIce}</Text>
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
                                    <Text style={[globalStyles.subtitle, themeText]}>Dragon
                                        Def: {armorComponent.vsDragon}</Text>
                                </View>
                            </View>
                        </View>

                    </View>

                    {skills}

                </View>
            </View>
        }
    }

    _returnCharm = (charm) => {
        //Theme
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        if (charm !== undefined) {
            return <View style={{flex: 1, flexDirection: 'row'}}>
                <Image source={charm.icon} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', paddingTop: 4}}>
                        <Text style={[styles.item, themeText, {marginLeft: 4}]}>{charm.name}</Text>
                        <Text style={[globalStyles.subtitle, themeText, {marginLeft: 0}]}>{
                            charm.skills.map((skill, index) => {
                                if (index === 0)
                                    return " " + skill + ' Lv.' + charm.level;
                                else
                                    return ", " + skill + ' Lv.' + charm.level;
                            })
                        }</Text>
                    </View>
                </View>
            </View>
        } else {
            return <View>
                <Text style={themeText}>Charm placeholder</Text>
            </View>;
        }
    };

    _returnDecoration = (decoration) => {
        //Theme
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        if (decoration !== undefined) {
            let skillText = decoration.skill + ' (1 pts)';

            return <View key={decoration.name + decoration.skill + decoration.level}
                         style={{flex: 1, flexDirection: 'row'}}>
                <Image source={decoration.icon} style={{
                    width: 25,
                    height: 25,
                    margin: 10,
                    marginTop: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                    resizeMode: 'contain',
                }}/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 4, flexDirection: 'column', paddingTop: 4}}>
                        <Text style={[styles.item, themeText]}>{decoration.name}</Text>
                        <Text style={[globalStyles.subtitle, themeText]}>{skillText}</Text>
                    </View>
                </View>
            </View>;
        } else {
            return <View>
                <Text style={themeText}>Decoration placeholder</Text>
            </View>;
        }
    };

    _returnDecorationSlots(slotsArray, type) {
        return slotsArray.map((decorationLevel, index) => {
            //Theme
            let themeText = null;
            let themeCrafted = '#b3e5fc';
            if (this.props.navigation.state.params.theme !== undefined) {
                if (this.props.navigation.state.params.theme === 'Dark') {
                    themeText = globalStyles.textDark;
                    themeCrafted = null;
                }
            }

            if (decorationLevel !== '-') {
                let decorationObject = null;
                if (this.state[type + 'Decoration' + (index + 1)] !== undefined) {
                    decorationObject = this.state[type + 'Decoration' + (index + 1)];
                }

                let decorationRender = <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/general/icon_select.png')} style={{
                        width: 50,
                        height: 50,
                        margin: 10,
                        marginTop: 16,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}/>
                    <View style={{flexDirection: 'column', paddingTop: 4}}>
                        <Text style={[styles.item, themeText]}>Select Decoration</Text>
                    </View>
                </View>;

                if (decorationObject !== null) {
                    decorationRender = this._returnDecoration(decorationObject);
                    calculateSkill(decorationObject, totalSkills, 1);
                }

                return <MHWTouchable key={decorationLevel + index} onPress={() => {
                    this.props.navigation.navigate('LoadoutChooseDecorationModal', {
                        chooseDecoration: this._decorationChosen,
                        returnDecoration: this._returnDecoration,
                        type: type,
                        index: index,
                        decorationLevel: decorationLevel,
                        theme: this.props.navigation.state.params.theme
                    })
                }} content={decorationRender}/>;
            }
        });
    }

    _returnSpecializedTool = (specializedTool) => {
        //Theme
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        if (specializedTool !== undefined) {
            return <View style={{flex: 1, flexDirection: 'row'}}>
                <Image source={specializedTool.icon} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingRight: 10
                }}>
                    <View style={{flex: 6, flexDirection: 'column', paddingTop: 4}}>
                        <Text style={[styles.item, themeText, {marginLeft: 10}]}>{specializedTool.name}</Text>
                        <Text style={[globalStyles.subtitle, themeText, {paddingLeft: 10, paddingRight: 10}]}>Effect
                            Duration: {specializedTool.effectDuration}, Recharge
                            Time: {specializedTool.rechargeTime}</Text>
                        <Text style={[globalStyles.subtitle, themeText, {
                            paddingLeft: 10,
                            paddingRight: 10
                        }]}>{specializedTool.description}</Text>
                        <Text style={[globalStyles.subtitle, themeText, {paddingLeft: 10, paddingRight: 10}]}>How to
                            get: {specializedTool.howToGet}</Text>
                    </View>
                </View>
            </View>
        } else {
            return <View>
                <Text style={themeText}>Specialized Tool placeholder</Text>
            </View>;
        }
    };

    _specializedTool1Chosen = (data) => {
        this.setState({specializedTool1: data});
        this.props.navigation.setParams({
            specializedTool1: data
        });
    };

    _specializedTool2Chosen = (specializedTool) => {
        this.setState({specializedTool2: specializedTool});
        this.props.navigation.setParams({
            specializedTool2: specializedTool
        });
    };

    _upperBodyChosen = (upperBody) => {
        let upperBodyObject = {
            upperBody: upperBody,
            upperBodyDecoration1: undefined,
            upperBodyDecoration2: undefined,
            upperBodyDecoration3: undefined,
        };
        this.setState(upperBodyObject);
        this.props.navigation.setParams(upperBodyObject);
    };

    _weaponChosen = (weapon) => {
        let weaponObject = {
            weapon: weapon,
            weaponDecoration1: undefined,
            weaponDecoration2: undefined,
            weaponDecoration3: undefined,
        };
        this.setState(weaponObject);
        this.props.navigation.setParams(weaponObject);
    };

    static async _deleteLoadout(navigation) {
        const {goBack} = navigation;
        const {params} = navigation.state;

        Alert.alert(
            'Delete Loadout',
            'Delete this loadout?',
            [
                {
                    text: 'Cancel', onPress: () => {
                    }, style: 'cancel'
                },
                {
                    text: 'OK', onPress: async () => {
                        await AsyncStorage.removeItem(params.key);
                        await params.parent._refreshData();
                        goBack(null);
                        if (Platform.OS === 'android') {
                            ToastAndroid.show('Loadout deleted successfully.', ToastAndroid.SHORT);
                        }
                    }
                },
            ],
            {cancelable: false}
        )
    }

    static async _saveLoadout(navigation, isCopyLoadout = false) {
        const {goBack} = navigation;
        const {params} = navigation.state;

        if (params.loadoutName === undefined || params.loadoutName.length === 0) {
            params.refs.loadoutName.focus();
            if (Platform.OS === 'android') {
                ToastAndroid.show("Please fill out Loadout Name", ToastAndroid.SHORT);
            } else {
                alert('Loadout Name Required');
            }
        } else {
            // console.log(params.key);
            // console.log('loadoutName: ' + params.loadoutName);
            // console.log('weapon: ' + params.weapon.name);
            // console.log('head: ' + params.head.name);
            // console.log('upperBody: ' + params.upperBody.name);
            // console.log('hands: ' + params.hands.name);
            // console.log('lowerBody: ' + params.lowerBody.name);
            // console.log('legs: ' + params.legs.name);
            // console.log('charm: ' + params.charm.name);
            // console.log('smoker: ' + params.smoker.name);
            // console.log('mantle: ' + params.mantle.name);

            let saveKey = '~name:' + params.loadoutName;

            //Save Weapon
            if (params.weapon !== undefined) {
                saveKey += '~weapon:' + params.weapon.name;
            }
            if (params.weaponDecoration1 !== undefined) {
                saveKey += '~weaponDecoration1:' + params.weaponDecoration1.name;
            }
            if (params.weaponDecoration2 !== undefined) {
                saveKey += '~weaponDecoration2:' + params.weaponDecoration2.name;
            }
            if (params.weaponDecoration3 !== undefined) {
                saveKey += '~weaponDecoration3:' + params.weaponDecoration3.name;
            }

            //Save Head
            if (params.head !== undefined) {
                saveKey += '~head:' + params.head.name;
            }
            if (params.headDecoration1 !== undefined) {
                saveKey += '~headDecoration1:' + params.headDecoration1.name;
            }
            if (params.headDecoration2 !== undefined) {
                saveKey += '~headDecoration2:' + params.headDecoration2.name;
            }
            if (params.headDecoration3 !== undefined) {
                saveKey += '~headDecoration3:' + params.headDecoration3.name;
            }

            //Save Upper Body
            if (params.upperBody !== undefined) {
                saveKey += '~upperBody:' + params.upperBody.name;
            }
            if (params.upperBodyDecoration1 !== undefined) {
                saveKey += '~upperBodyDecoration1:' + params.upperBodyDecoration1.name;
            }
            if (params.upperBodyDecoration2 !== undefined) {
                saveKey += '~upperBodyDecoration2:' + params.upperBodyDecoration2.name;
            }
            if (params.upperBodyDecoration3 !== undefined) {
                saveKey += '~upperBodyDecoration3:' + params.upperBodyDecoration3.name;
            }

            //Save Hands
            if (params.hands !== undefined) {
                saveKey += '~hands:' + params.hands.name;
            }
            if (params.handsDecoration1 !== undefined) {
                saveKey += '~handsDecoration1:' + params.handsDecoration1.name;
            }
            if (params.handsDecoration2 !== undefined) {
                saveKey += '~handsDecoration2:' + params.handsDecoration2.name;
            }
            if (params.handsDecoration3 !== undefined) {
                saveKey += '~handsDecoration3:' + params.handsDecoration3.name;
            }

            //Save Lower Body
            if (params.lowerBody !== undefined) {
                saveKey += '~lowerBody:' + params.lowerBody.name;
            }
            if (params.lowerBodyDecoration1 !== undefined) {
                saveKey += '~lowerBodyDecoration1:' + params.lowerBodyDecoration1.name;
            }
            if (params.lowerBodyDecoration2 !== undefined) {
                saveKey += '~lowerBodyDecoration2:' + params.lowerBodyDecoration2.name;
            }
            if (params.lowerBodyDecoration3 !== undefined) {
                saveKey += '~lowerBodyDecoration3:' + params.lowerBodyDecoration3.name;
            }

            //Save Legs
            if (params.legs !== undefined) {
                saveKey += '~legs:' + params.legs.name;
            }
            if (params.legsDecoration1 !== undefined) {
                saveKey += '~legsDecoration1:' + params.legsDecoration1.name;
            }
            if (params.legsDecoration2 !== undefined) {
                saveKey += '~legsDecoration2:' + params.legsDecoration2.name;
            }
            if (params.legsDecoration3 !== undefined) {
                saveKey += '~legsDecoration3:' + params.legsDecoration3.name;
            }


            if (params.charm !== undefined) {
                saveKey += '~charm:' + params.charm.name;
            }
            if (params.specializedTool1 !== undefined) {
                saveKey += '~specializedTool1:' + params.specializedTool1.name;
            }
            if (params.specializedTool2 !== undefined) {
                saveKey += '~specializedTool2:' + params.specializedTool2.name;
            }

            if (!isCopyLoadout) {
                if (params.key !== undefined) {
                    await AsyncStorage.removeItem(params.key); //Remove old loadout
                }
            }

            // console.log(saveKey);

            await AsyncStorage.setItem('Loadout' + saveKey, 'true'); //
            await params.parent._refreshData();
            // let value = await AsyncStorage.getItem('TestLoadout');
            // console.log('saved: ' + value);

            goBack(null);
            if (Platform.OS === 'android') {
                ToastAndroid.show('Loadout saved.', ToastAndroid.SHORT);
            }
        }
    }
}

export class LoadoutChooseWeaponModal extends React.PureComponent {
    state = {
        showAds: true,
        weapons: this._filterWeapons(),
        searchText: '',
        quickSearch: 'Off',
        sortOrder: 'SmithyTree'
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: 'Choose Weapon',
            headerRight: (
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <MHWTouchable
                        onPress={() => LoadoutChooseWeaponModal._sortWeapons(navigation, params.sortOrder, params.updateWeapons)}
                        content={
                            <Image source={require('../assets/general/icon_sort.png')}
                                   style={globalStyles.navSearch}/>
                        }/>
                    {/*<MHWTouchable*/}
                    {/*onPress={() => navigation.navigate('Search', {theme: navigation.state.params.theme})}*/}
                    {/*content={*/}
                    {/*<Image source={require('../assets/general/icon_filter.png')}*/}
                    {/*style={globalStyles.navSearch}/>*/}
                    {/*}/>*/}
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

        let quickSearch = await AsyncStorage.getItem('quickSearch');
        if (quickSearch !== null) {
            if (quickSearch === 'Off') {
                stateObject['quickSearch'] = 'Off';
            }
            if (quickSearch === 'On') {
                stateObject['quickSearch'] = 'On';
            }
        } else {
            stateObject['quickSearch'] = 'Off';
        }

        this.setState(stateObject);

        this.props.navigation.setParams({
            sortOrder: this.state.sortOrder,
            updateWeapons: this._updateWeapons
        })
    }

    render() {
        // console.warn('render');
        //Theme
        let themeBackground = null;
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
            }
        }

        let quickSearch = null;
        if (this.state.quickSearch === 'On') {
            quickSearch = <TextInput
                ref={component => this._weaponTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a weapon..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchText: text,
                        weapons: this._filterWeapons(text, this.state.sortOrder)
                    });
                }}
                clearButtonMode="always"
            />
        } else if (this.state.quickSearch === 'Off') {
            quickSearch = <TextInput
                ref={component => this._weaponTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a weapon..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchText: text
                    });
                }}
                onSubmitEditing={() => {
                    this.setState({
                        weapons: this._filterWeapons(this.state.searchText, this.state.sortOrder)
                    });
                }}
                clearButtonMode="always"
            />
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <View style={{backgroundColor: 'black'}}>
                    {quickSearch}
                    <View style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        marginLeft: Dimensions.get('window').width - 60,
                        marginTop: 20
                    }}>
                        <TouchableHighlight
                            onPress={() => {
                                this._weaponTextInput.setNativeProps({text: ''});
                                this._weaponTextInput.focus();
                                this.setState({weapons: this._filterWeapons()});
                            }}
                            underlayColor="rgba(0, 0, 0, 0)"
                        >
                            <Image source={require('../assets/general/icon_clear_text.png')}
                                   style={{width: 40, height: 40, resizeMode: 'contain'}}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <SectionList
                    sections={this.state.weapons}
                    renderSectionHeader={({section}) => {
                        if (section.data.length > 0) {
                            return <View>
                                <Text style={[globalStyles.sectionHeader, themeText]}>{section.title}</Text>
                            </View>
                        } else {
                            return null;
                        }
                    }}
                    keyExtractor={(item, index) => index}
                >
                </SectionList>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _applySort(weaponsArray, sortOrder) {
        switch (sortOrder) {
            case 'SmithyTree':
                break;

            case 'AttackHighToLow':
                weaponsArray = _.orderBy(weaponsArray, ['attack'], ['desc']);
                console.log(weaponsArray);
                break;

            case 'AttackLowToHigh':
                weaponsArray = _.orderBy(weaponsArray, ['attack'], ['asc']);
                break;

            case 'FireHighToLow':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element.match(/(Fire) (\d+)|(Fire [(](\d+)[)])/g);
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.element.match(/\d+/g));
                    }
                }, ['desc']);
                break;

            case 'FireLowToHigh':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element.match(/(Fire) (\d+)|(Fire [(](\d+)[)])/g);
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.element.match(/\d+/g));
                    }
                }, ['asc']);
                break;

            case 'WaterHighToLow':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element.match(/(Water) (\d+)|(Water [(](\d+)[)])/g);
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.element.match(/\d+/g));
                    }
                }, ['desc']);
                break;

            case 'WaterLowToHigh':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element.match(/(Water) (\d+)|(Water [(](\d+)[)])/g);
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.element.match(/\d+/g));
                    }
                }, ['asc']);
                break;

            case 'ThunderHighToLow':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element.match(/(Thunder) (\d+)|(Thunder [(](\d+)[)])/g);
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.element.match(/\d+/g));
                    }
                }, ['desc']);
                break;

            case 'ThunderLowToHigh':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element.match(/(Thunder) (\d+)|(Thunder [(](\d+)[)])/g);
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.element.match(/\d+/g));
                    }
                }, ['asc']);
                break;

            case 'IceHighToLow':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element.match(/(Ice) (\d+)|(Ice [(](\d+)[)])/g);
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.element.match(/\d+/g));
                    }
                }, ['desc']);
                break;

            case 'IceLowToHigh':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element.match(/(Ice) (\d+)|(Ice [(](\d+)[)])/g);
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.element.match(/\d+/g));
                    }
                }, ['asc']);
                break;

            case 'DragonHighToLow':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element.match(/(Dragon) (\d+)|(Dragon [(](\d+)[)])/g);
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.element.match(/\d+/g));
                    }
                }, ['desc']);
                break;

            case 'DragonLowToHigh':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element.match(/(Dragon) (\d+)|(Dragon [(](\d+)[)])/g);
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.element.match(/\d+/g));
                    }
                }, ['asc']);
                break;

            case 'NoneHighToLow':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element === 'None';
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.attack);
                    }
                }, ['desc']);
                break;

            case 'NoneLowToHigh':
                weaponsArray = _.filter(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return data.element === 'None';
                    }
                });
                weaponsArray = _.orderBy(weaponsArray, (data) => {
                    if (data.element !== undefined) {
                        return parseInt(data.attack);
                    }
                }, ['asc']);
                break;
        }
        return weaponsArray;
    }

    _filterWeapons(text, sortOrder) {
        let greatSwords = [];
        _.forEach(database.greatSwordTree, (greatSword) => {
            let filteredGreatSwords = _.filter(greatSword.data, (greatSwordData) => {
                if (text !== undefined) {
                    if (greatSwordData.name.toLowerCase().match(text.toLowerCase())) {
                        return greatSwordData;
                    }
                } else {
                    return greatSwordData;
                }
            });
            greatSwords = _.concat(greatSwords, filteredGreatSwords);
        });

        let longSwords = [];
        _.forEach(database.longSwordTree, (longSword) => {
            let filteredLongSwords = _.filter(longSword.data, (longSwordData) => {
                if (text !== undefined) {
                    if (longSwordData.name.toLowerCase().match(text.toLowerCase())) {
                        return longSwordData;
                    }
                } else {
                    return longSwordData;
                }
            });

            longSwords = _.concat(longSwords, filteredLongSwords);
        });

        let swordAndShields = [];
        _.forEach(database.swordAndShieldTree, (swordAndShield) => {
            let filteredSwordAndShields = _.filter(swordAndShield.data, (swordAndShieldData) => {
                if (text !== undefined) {
                    if (swordAndShieldData.name.toLowerCase().match(text.toLowerCase())) {
                        return swordAndShieldData;
                    }
                } else {
                    return swordAndShieldData;
                }
            });

            swordAndShields = _.concat(swordAndShields, filteredSwordAndShields);
        });

        let dualBlades = [];
        _.forEach(database.dualBladesTree, (dualBlade) => {
            let filteredDualBlades = _.filter(dualBlade.data, (dualBladeData) => {
                if (text !== undefined) {
                    if (dualBladeData.name.toLowerCase().match(text.toLowerCase())) {
                        return dualBladeData;
                    }
                } else {
                    return dualBladeData;
                }
            });

            dualBlades = _.concat(dualBlades, filteredDualBlades);
        });

        let hammers = [];
        _.forEach(database.hammerTree, (hammer) => {
            let filteredHammers = _.filter(hammer.data, (hammerData) => {
                if (text !== undefined) {
                    if (hammerData.name.toLowerCase().match(text.toLowerCase())) {
                        return hammerData;
                    }
                } else {
                    return hammerData;
                }
            });

            hammers = _.concat(hammers, filteredHammers);
        });

        let huntingHorns = [];
        _.forEach(database.huntingHornTree, (huntingHorn) => {
            let filteredHuntingHorns = _.filter(huntingHorn.data, (huntingHornData) => {
                if (text !== undefined) {
                    if (huntingHornData.name.toLowerCase().match(text.toLowerCase())) {
                        return huntingHornData;
                    }
                } else {
                    return huntingHornData;
                }
            });

            huntingHorns = _.concat(huntingHorns, filteredHuntingHorns);
        });

        let lances = [];
        _.forEach(database.lanceTree, (lance) => {
            let filteredLances = _.filter(lance.data, (lanceData) => {
                if (text !== undefined) {
                    if (lanceData.name.toLowerCase().match(text.toLowerCase())) {
                        return lanceData;
                    }
                } else {
                    return lanceData;
                }
            });

            lances = _.concat(lances, filteredLances);
        });

        let gunlances = [];
        _.forEach(database.gunlanceTree, (gunlance) => {
            let filteredGunlances = _.filter(gunlance.data, (gunlanceData) => {
                if (text !== undefined) {
                    if (gunlanceData.name.toLowerCase().match(text.toLowerCase())) {
                        return gunlanceData;
                    }
                } else {
                    return gunlanceData;
                }
            });

            gunlances = _.concat(gunlances, filteredGunlances);
        });

        let switchAxes = [];
        _.forEach(database.switchAxeTree, (switchAxe) => {
            let filteredSwitchAxes = _.filter(switchAxe.data, (switchAxeData) => {
                if (text !== undefined) {
                    if (switchAxeData.name.toLowerCase().match(text.toLowerCase())) {
                        return switchAxeData;
                    }
                } else {
                    return switchAxeData;
                }
            });

            switchAxes = _.concat(switchAxes, filteredSwitchAxes);
        });

        let chargeBlades = [];
        _.forEach(database.chargeBladeTree, (chargeBlade) => {
            let filteredChargeBlades = _.filter(chargeBlade.data, (chargeBladeData) => {
                if (text !== undefined) {
                    if (chargeBladeData.name.toLowerCase().match(text.toLowerCase())) {
                        return chargeBladeData;
                    }
                } else {
                    return chargeBladeData;
                }
            });

            chargeBlades = _.concat(chargeBlades, filteredChargeBlades);
        });

        let insectGlaives = [];
        _.forEach(database.insectGlaiveTree, (insectGlaive) => {
            let filteredInsectGlaives = _.filter(insectGlaive.data, (insectGlaiveData) => {
                if (text !== undefined) {
                    if (insectGlaiveData.name.toLowerCase().match(text.toLowerCase())) {
                        return insectGlaiveData;
                    }
                } else {
                    return insectGlaiveData;
                }
            });

            insectGlaives = _.concat(insectGlaives, filteredInsectGlaives);
        });

        let lightBowguns = [];
        _.forEach(database.lightBowgunTree, (lightBowgun) => {
            let filteredLightBowguns = _.filter(lightBowgun.data, (lightBowgunData) => {
                if (text !== undefined) {
                    if (lightBowgunData.name.toLowerCase().match(text.toLowerCase())) {
                        return lightBowgunData;
                    }
                } else {
                    return lightBowgunData;
                }
            });

            lightBowguns = _.concat(lightBowguns, filteredLightBowguns);
        });

        let heavyBowguns = [];
        _.forEach(database.heavyBowgunTree, (heavyBowgun) => {
            let filteredHeavyBowguns = _.filter(heavyBowgun.data, (heavyBowgunData) => {
                if (text !== undefined) {
                    if (heavyBowgunData.name.toLowerCase().match(text.toLowerCase())) {
                        return heavyBowgunData;
                    }
                } else {
                    return heavyBowgunData;
                }
            });

            heavyBowguns = _.concat(heavyBowguns, filteredHeavyBowguns);
        });

        let bows = [];
        _.forEach(database.bowTree, (bow) => {
            let filteredBows = _.filter(bow.data, (bowData) => {
                if (text !== undefined) {
                    if (bowData.name.toLowerCase().match(text.toLowerCase())) {
                        return bowData;
                    }
                } else {
                    return bowData;
                }
            });

            bows = _.concat(bows, filteredBows);
        });

        return [
            {
                title: 'Great Sword',
                data: this._applySort(greatSwords, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Long Sword',
                data: this._applySort(longSwords, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Sword and Shield',
                data: this._applySort(swordAndShields, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Dual Blades',
                data: this._applySort(dualBlades, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Hammer',
                data: this._applySort(hammers, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Hunting Horn',
                data: this._applySort(huntingHorns, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Lance',
                data: this._applySort(lances, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Gunlance',
                data: this._applySort(gunlances, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Switch Axe',
                data: this._applySort(switchAxes, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Charge Blade',
                data: this._applySort(chargeBlades, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Insect Glaive',
                data: this._applySort(insectGlaives, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Light Bowgun',
                data: this._applySort(lightBowguns, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Heavy Bowgun',
                data: this._applySort(heavyBowguns, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            },
            {
                title: 'Bow',
                data: this._applySort(bows, sortOrder),
                renderItem: ({item}) => this._returnWeapon(item)
            }
        ];
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8680885434', 'ca-app-pub-9242567842673294/8900377285');
        } else {
            return null;
        }
    }

    _returnWeapon(item) {
        //Theme
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        let elementIcon = returnWeaponElement(item.element);

        let imageViewStyle = {};
        if (item.icon === null) {
            imageViewStyle = {
                width: 50,
                height: 50,
                padding: 10,
                marginRight: 20,
            };
        }

        let slots = null;
        if (item.slots !== undefined) {
            let slotsArray = item.slots.split(' ');
            let slotImageStyle = {
                width: 20,
                height: 20,
                marginRight: 10,
                resizeMode: 'contain'
            };
            slots = <View style={{flex: 1, flexDirection: 'row'}}>
                <Image source={returnSlot(slotsArray[0])} style={slotImageStyle}/>
                <Image source={returnSlot(slotsArray[1])} style={slotImageStyle}/>
                <Image source={returnSlot(slotsArray[2])} style={slotImageStyle}/>
            </View>
        }

        let skills = null;
        if (item.skills !== undefined) {
            skills = item.skills.map((skill, index) => {
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

        let sharpnessBar = null;
        if (item.sharpness !== undefined && typeof item.sharpness === 'object') {
            sharpnessBar = <View style={{
                flexDirection: 'row',
                height: 3,
                marginTop: 4,
            }}>
                <View style={{backgroundColor: '#AF3849', width: item.sharpness.red}}/>
                <View style={{backgroundColor: '#D06847', width: item.sharpness.orange}}/>
                <View style={{backgroundColor: '#B6A83B', width: item.sharpness.yellow}}/>
                <View style={{backgroundColor: '#85AF3E', width: item.sharpness.green}}/>
                <View style={{backgroundColor: '#3D53C5', width: item.sharpness.blue}}/>
                <View style={{backgroundColor: '#CCD6F7', width: item.sharpness.white}}/>
            </View>
        }

        let sharpnessMaxBar = null;
        if (item.sharpnessMax !== undefined && typeof item.sharpnessMax === 'object') {
            sharpnessMaxBar = <View style={{
                flexDirection: 'row',
                height: 3,
                marginTop: 4,
            }}>
                <View style={{backgroundColor: '#AF3849', width: item.sharpnessMax.red}}/>
                <View style={{backgroundColor: '#D06847', width: item.sharpnessMax.orange}}/>
                <View style={{backgroundColor: '#B6A83B', width: item.sharpnessMax.yellow}}/>
                <View style={{backgroundColor: '#85AF3E', width: item.sharpnessMax.green}}/>
                <View style={{backgroundColor: '#3D53C5', width: item.sharpnessMax.blue}}/>
                <View style={{backgroundColor: '#CCD6F7', width: item.sharpnessMax.white}}/>
            </View>
        }


        let content = <View style={{flex: 1, flexDirection: 'row', marginBottom: 5}}>
            <View style={imageViewStyle}>
                <Image source={item.icon} style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
                <Image source={item.weaponIcon} style={{
                    width: 20,
                    height: 20,
                    marginTop: 40,
                    marginLeft: 40,
                    position: 'absolute',
                }}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 4, flexDirection: 'column', paddingTop: 4}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={[styles.item, themeText]}>{item.name}</Text>
                        {slots}
                    </View>
                    {sharpnessBar}
                    {sharpnessMaxBar}
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[globalStyles.subtitle, themeText]}>{I18n.t('ui-attack').Translation}: {item.attack}, </Text>
                        <Text style={[{
                            color: returnRarityColor(item.rarity)
                        }, globalStyles.subtitle]}>{I18n.t('ui-rarity').Translation}: {item.rarity}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={elementIcon}
                                   style={{width: 20, height: 20, marginRight: 4}}/>
                            <Text style={[globalStyles.subtitle, themeText]}>{item.element}</Text>
                        </View>
                    </View>
                    {skills}
                </View>
            </View>
        </View>;

        return <MHWTouchable onPress={() => this._weaponChosen(item)} content={content}/>;
    }

    static async _sortWeapons(navigation, sortOrder, updateWeapons) {
        navigation.navigate('LoadoutSort', {
            theme: navigation.state.params.theme,
            sortOrder: sortOrder,
            updateWeapons: updateWeapons
        })
    }

    _updateWeapons = (sortOrder) => {
        this.props.navigation.setParams({
            sortOrder: sortOrder
        });
        this.setState({
            sortOrder: sortOrder,
            weapons: this._filterWeapons(this.state.searchText, sortOrder)
        });
    };

    _weaponChosen(item) {
        const {goBack} = this.props.navigation;
        this.props.navigation.state.params.chooseWeapon(item);
        goBack(null);
    }
}

export class LoadoutChooseHeadModal extends React.PureComponent {
    state = {
        showAds: true,
        heads: this._prepareInitialData(),
        searchText: '',
        quickSearch: 'Off',
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: 'Choose Head',
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

        let quickSearch = await AsyncStorage.getItem('quickSearch');
        if (quickSearch !== null) {
            if (quickSearch === 'Off') {
                stateObject['quickSearch'] = 'Off';
            }
            if (quickSearch === 'On') {
                stateObject['quickSearch'] = 'On';
            }
        } else {
            stateObject['quickSearch'] = 'Off';
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

        let quickSearch = null;
        if (this.state.quickSearch === 'On') {
            quickSearch = <TextInput
                ref={component => this._headTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a head component / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this._searchHeads(text)
                }}
                clearButtonMode="always"
            />
        } else if (this.state.quickSearch === 'Off') {
            quickSearch = <TextInput
                ref={component => this._headTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a head component / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchText: text
                    });
                }}
                onSubmitEditing={() => {
                    this._searchHeads(this.state.searchText)
                }}
                clearButtonMode="always"
            />
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <View style={{backgroundColor: 'black'}}>
                    {quickSearch}
                    <View style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        marginLeft: Dimensions.get('window').width - 60,
                        marginTop: 20
                    }}>
                        <TouchableHighlight
                            onPress={() => {
                                this._headTextInput.setNativeProps({text: ''});
                                this._headTextInput.focus();
                                this._searchHeads();
                            }}
                            underlayColor="rgba(0, 0, 0, 0)"
                        >
                            <Image source={require('../assets/general/icon_clear_text.png')}
                                   style={{width: 40, height: 40, resizeMode: 'contain'}}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <FlatList
                    data={this.state.heads}
                    renderItem={({item}) => {
                        return <MHWTouchable key={item.name} onPress={() => this._headChosen(item)}
                                             content={this.props.navigation.state.params.returnArmorComponent(item)}/>
                    }}
                    keyExtractor={(item, index) => item.name + item.materials[0].name}
                >
                </FlatList>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _headChosen(item) {
        const {goBack} = this.props.navigation;
        this.props.navigation.state.params.chooseHead(item);
        goBack(null);
    }

    _prepareInitialData() {
        let heads = [];
        let armors = _.concat(database.lowRankArmors, database.highRankArmors, database.masterRankArmors);
        _.forEach(armors, (armorSet) => {
            if (armorSet.head !== undefined) {
                heads.push(armorSet.head);
            }
        });

        let sortedHeads = _.orderBy(heads, ['name'], ['asc']);
        return sortedHeads;
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8680885434', 'ca-app-pub-9242567842673294/8900377285');
        } else {
            return null;
        }
    }

    _searchHeads(text) {
        if (text !== undefined && text.length > 0) {
            let filteredHeadsByName = _.filter(this._prepareInitialData(), function (head) {
                if (I18n.t(head.translationKey).Translation !== undefined &&
                    I18n.t(head.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return head;
                }
            });

            let matchedSkills = _.filter(database.skills, (skill) => {
                if (I18n.t(skill.translationKey).Translation !== undefined &&
                    I18n.t(skill.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return skill;
                }
            });

            let filteredHeadsBySkill = [];
            _.forEach(this._prepareInitialData(), function (head) {
                _.forEach(head.skills, (skill) => {
                    if (skill !== undefined && skill !== null) {
                        let skillInComponent = _.find(matchedSkills, {name: skill.name});
                        if (skillInComponent !== undefined) {
                            filteredHeadsBySkill.push(head);
                        }
                    }
                })
            });

            let sortedHeads = _.orderBy(_.union(filteredHeadsByName, filteredHeadsBySkill), ['name'], ['asc']);

            this.setState({
                searchText: text,
                heads: sortedHeads
            });
        } else {
            this.setState({
                searchText: text,
                heads: this._prepareInitialData()
            })
        }
    }
}

export class LoadoutChooseUpperBodyModal extends React.PureComponent {

    state = {
        showAds: true,
        upperBodies: this._prepareInitialData(),
        searchText: '',
        quickSearch: 'Off',
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: 'Choose Upper Body',
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

        let quickSearch = await AsyncStorage.getItem('quickSearch');
        if (quickSearch !== null) {
            if (quickSearch === 'Off') {
                stateObject['quickSearch'] = 'Off';
            }
            if (quickSearch === 'On') {
                stateObject['quickSearch'] = 'On';
            }
        } else {
            stateObject['quickSearch'] = 'Off';
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

        let quickSearch = null;
        if (this.state.quickSearch === 'On') {
            quickSearch = <TextInput
                ref={component => this._upperBodyTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a upper body component / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this._searchUpperBodies(text)
                }}
                clearButtonMode="always"
            />
        } else if (this.state.quickSearch === 'Off') {
            quickSearch = <TextInput
                ref={component => this._upperBodyTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a upper body component / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchText: text
                    });
                }}
                onSubmitEditing={() => {
                    this._searchUpperBodies(this.state.searchText)
                }}
                clearButtonMode="always"
            />
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <View style={{backgroundColor: 'black'}}>
                    {quickSearch}
                    <View style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        marginLeft: Dimensions.get('window').width - 60,
                        marginTop: 20
                    }}>
                        <TouchableHighlight
                            onPress={() => {
                                this._upperBodyTextInput.setNativeProps({text: ''});
                                this._upperBodyTextInput.focus();
                                this._searchUpperBodies();
                            }}
                            underlayColor="rgba(0, 0, 0, 0)"
                        >
                            <Image source={require('../assets/general/icon_clear_text.png')}
                                   style={{width: 40, height: 40, resizeMode: 'contain'}}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <FlatList
                    data={this.state.upperBodies}
                    renderItem={({item}) => {
                        return <MHWTouchable key={item.name} onPress={() => this._upperBodyChosen(item)}
                                             content={this.props.navigation.state.params.returnArmorComponent(item)}/>
                    }}
                    keyExtractor={(item, index) => item.name + item.materials[0].name}
                >
                </FlatList>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _prepareInitialData() {
        let upperBodies = [];
        let armors = _.concat(database.lowRankArmors, database.highRankArmors, database.masterRankArmors);
        _.forEach(armors, (armorSet) => {
            if (armorSet.upperBody !== undefined) {
                upperBodies.push(armorSet.upperBody);
            }
        });

        let sortedUpperBodies = _.orderBy(upperBodies, ['name'], ['asc']);
        return sortedUpperBodies;
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8680885434', 'ca-app-pub-9242567842673294/8900377285');
        } else {
            return null;
        }
    }

    _searchUpperBodies(text) {
        if (text !== undefined && text.length > 0) {
            let filteredUpperBodiesByName = _.filter(this._prepareInitialData(), function (upperBody) {
                if (I18n.t(upperBody.translationKey).Translation !== undefined &&
                    I18n.t(upperBody.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return upperBody;
                }
            });

            let matchedSkills = _.filter(database.skills, (skill) => {
                if (I18n.t(skill.translationKey).Translation !== undefined &&
                    I18n.t(skill.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return skill;
                }
            });

            let filteredUpperBodiesBySkill = [];
            _.forEach(this._prepareInitialData(), function (upperBody) {
                _.forEach(upperBody.skills, (skill) => {
                    if (skill !== undefined && skill !== null) {
                        let skillInComponent = _.find(matchedSkills, {name: skill.name});
                        if (skillInComponent !== undefined) {
                            filteredUpperBodiesBySkill.push(upperBody);
                        }
                    }
                })
            });

            let sortedUpperBodies = _.orderBy(_.union(filteredUpperBodiesByName, filteredUpperBodiesBySkill), ['name'], ['asc']);

            this.setState({
                searchText: text,
                upperBodies: sortedUpperBodies
            });
        } else {
            this.setState({
                searchText: text,
                upperBodies: this._prepareInitialData()
            })
        }
    }

    _upperBodyChosen(item) {
        const {goBack} = this.props.navigation;
        this.props.navigation.state.params.chooseUpperBody(item);
        goBack(null);
    }
}

export class LoadoutChooseHandsModal extends React.PureComponent {

    state = {
        showAds: true,
        hands: this._prepareInitialData(),
        searchText: '',
        quickSearch: 'Off',
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: 'Choose Hands',
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

        let quickSearch = await AsyncStorage.getItem('quickSearch');
        if (quickSearch !== null) {
            if (quickSearch === 'Off') {
                stateObject['quickSearch'] = 'Off';
            }
            if (quickSearch === 'On') {
                stateObject['quickSearch'] = 'On';
            }
        } else {
            stateObject['quickSearch'] = 'Off';
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

        let quickSearch = null;
        if (this.state.quickSearch === 'On') {
            quickSearch = <TextInput
                ref={component => this._handsTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a hand component / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this._searchHands(text)
                }}
                clearButtonMode="always"
            />
        } else if (this.state.quickSearch === 'Off') {
            quickSearch = <TextInput
                ref={component => this._handsTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a hand component / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchText: text
                    });
                }}
                onSubmitEditing={() => {
                    this._searchHands(this.state.searchText)
                }}
                clearButtonMode="always"
            />
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <View style={{backgroundColor: 'black'}}>
                    {quickSearch}
                    <View style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        marginLeft: Dimensions.get('window').width - 60,
                        marginTop: 20
                    }}>
                        <TouchableHighlight
                            onPress={() => {
                                this._handsTextInput.setNativeProps({text: ''});
                                this._handsTextInput.focus();
                                this._searchHands();
                            }}
                            underlayColor="rgba(0, 0, 0, 0)"
                        >
                            <Image source={require('../assets/general/icon_clear_text.png')}
                                   style={{width: 40, height: 40, resizeMode: 'contain'}}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <FlatList
                    data={this.state.hands}
                    renderItem={({item}) => {
                        return <MHWTouchable onPress={() => {
                            const {goBack} = this.props.navigation;
                            this.props.navigation.state.params.chooseHands(item);
                            goBack(null);
                        }} content={this.props.navigation.state.params.returnArmorComponent(item)}/>
                    }}
                    keyExtractor={(item, index) => item.name + item.materials[0].name}
                >
                </FlatList>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _prepareInitialData() {
        let hands = [];
        let armors = _.concat(database.lowRankArmors, database.highRankArmors, database.masterRankArmors);
        _.forEach(armors, (armorSet) => {
            if (armorSet.hands !== undefined) {
                hands.push(armorSet.hands);
            }
        });

        let sortedHands = _.orderBy(hands, ['name'], ['asc']);
        return sortedHands;
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8680885434', 'ca-app-pub-9242567842673294/8900377285');
        } else {
            return null;
        }
    }

    _searchHands(text) {
        if (text !== undefined && text.length > 0) {
            let filteredHandsByName = _.filter(this._prepareInitialData(), function (hand) {
                if (I18n.t(hand.translationKey).Translation !== undefined &&
                    I18n.t(hand.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return hand;
                }
            });

            let matchedSkills = _.filter(database.skills, (skill) => {
                if (I18n.t(skill.translationKey).Translation !== undefined &&
                    I18n.t(skill.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return skill;
                }
            });

            let filteredHandsBySkill = [];
            _.forEach(this._prepareInitialData(), function (hands) {
                _.forEach(hands.skills, (skill) => {
                    if (skill !== undefined && skill !== null) {
                        let skillInComponent = _.find(matchedSkills, {name: skill.name});
                        if (skillInComponent !== undefined) {
                            filteredHandsBySkill.push(hands);
                        }
                    }
                })
            });

            let sortedHands = _.orderBy(_.union(filteredHandsByName, filteredHandsBySkill), ['name'], ['asc']);

            this.setState({
                searchText: text,
                hands: sortedHands
            });
        } else {
            this.setState({searchText: text, hands: this._prepareInitialData()})
        }
    }
}

export class LoadoutChooseLowerBodyModal extends React.PureComponent {

    state = {
        showAds: true,
        lowerBodies: this._prepareInitialData(),
        searchText: '',
        quickSearch: 'Off'
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: 'Choose Lower Body',
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

        let quickSearch = await AsyncStorage.getItem('quickSearch');
        if (quickSearch !== null) {
            if (quickSearch === 'Off') {
                stateObject['quickSearch'] = 'Off';
            }
            if (quickSearch === 'On') {
                stateObject['quickSearch'] = 'On';
            }
        } else {
            stateObject['quickSearch'] = 'Off';
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

        let quickSearch = null;
        if (this.state.quickSearch === 'On') {
            quickSearch = <TextInput
                ref={component => this._lowerBodyTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a lower body component / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this._searchLowerBodies(text)
                }}
                clearButtonMode="always"
            />
        } else if (this.state.quickSearch === 'Off') {
            quickSearch = <TextInput
                ref={component => this._lowerBodyTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a lower body component / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchText: text
                    });
                }}
                onSubmitEditing={() => {
                    this._searchLowerBodies(this.state.searchText)
                }}
                clearButtonMode="always"
            />
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <View style={{backgroundColor: 'black'}}>
                    {quickSearch}
                    <View style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        marginLeft: Dimensions.get('window').width - 60,
                        marginTop: 20
                    }}>
                        <TouchableHighlight
                            onPress={() => {
                                this._lowerBodyTextInput.setNativeProps({text: ''});
                                this._lowerBodyTextInput.focus();
                                this._searchLowerBodies();
                            }}
                            underlayColor="rgba(0, 0, 0, 0)"
                        >
                            <Image source={require('../assets/general/icon_clear_text.png')}
                                   style={{width: 40, height: 40, resizeMode: 'contain'}}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <FlatList
                    data={this.state.lowerBodies}
                    renderItem={({item}) => {
                        return <MHWTouchable onPress={() => {
                            const {goBack} = this.props.navigation;
                            this.props.navigation.state.params.chooseLowerBody(item);
                            goBack(null);
                        }} content={this.props.navigation.state.params.returnArmorComponent(item)}/>;
                    }}
                    keyExtractor={(item, index) => item.name + item.materials[0].name}
                >
                </FlatList>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _prepareInitialData() {
        //==LOWER BODIES==
        let lowerBodies = [];
        let armors = _.concat(database.lowRankArmors, database.highRankArmors, database.masterRankArmors);
        _.forEach(armors, (armorSet) => {
            if (armorSet.lowerBody !== undefined) {
                lowerBodies.push(armorSet.lowerBody);
            }
        });

        let sortedLowerBodies = _.orderBy(lowerBodies, ['name'], ['asc']);
        return sortedLowerBodies;
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8680885434', 'ca-app-pub-9242567842673294/8900377285');
        } else {
            return null;
        }
    }

    _searchLowerBodies(text) {
        if (text !== undefined && text.length > 0) {
            let filteredLowerBodiesByName = _.filter(this._prepareInitialData(), function (lowerBody) {
                if (I18n.t(lowerBody.translationKey).Translation !== undefined &&
                    I18n.t(lowerBody.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return lowerBody;
                }
            });

            let matchedSkills = _.filter(database.skills, (skill) => {
                if (I18n.t(skill.translationKey).Translation !== undefined &&
                    I18n.t(skill.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return skill;
                }
            });

            let filteredLowerBodiesBySkill = [];
            _.forEach(this._prepareInitialData(), function (lowerBody) {
                _.forEach(lowerBody.skills, (skill) => {
                    if (skill !== undefined && skill !== null) {
                        let skillInComponent = _.find(matchedSkills, {name: skill.name});
                        if (skillInComponent !== undefined) {
                            filteredLowerBodiesBySkill.push(lowerBody);
                        }
                    }
                })
            });

            let sortedLowerBodies = _.orderBy(_.union(filteredLowerBodiesByName, filteredLowerBodiesBySkill), ['name'], ['asc']);

            this.setState({
                searchText: text,
                lowerBodies: sortedLowerBodies
            });
        } else {
            this.setState({
                searchText: text,
                lowerBodies: this._prepareInitialData()
            })
        }
    }
}

export class LoadoutChooseLegsModal extends React.PureComponent {

    state = {
        showAds: true,
        legs: this._prepareInitialData(),
        searchText: '',
        quickSearch: 'Off',
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: 'Choose Legs',
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

        let quickSearch = await AsyncStorage.getItem('quickSearch');
        if (quickSearch !== null) {
            if (quickSearch === 'Off') {
                stateObject['quickSearch'] = 'Off';
            }
            if (quickSearch === 'On') {
                stateObject['quickSearch'] = 'On';
            }
        } else {
            stateObject['quickSearch'] = 'Off';
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

        let quickSearch = null;
        if (this.state.quickSearch === 'On') {
            quickSearch = <TextInput
                ref={component => this._legsTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a legs component / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this._searchLegs(text)
                }}
                clearButtonMode="always"
            />
        } else if (this.state.quickSearch === 'Off') {
            quickSearch = <TextInput
                ref={component => this._legsTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a legs component / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchText: text
                    });
                }}
                onSubmitEditing={() => {
                    this._searchLegs(this.state.searchText)
                }}
                clearButtonMode="always"
            />
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <View style={{backgroundColor: 'black'}}>
                    {quickSearch}
                    <View style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        marginLeft: Dimensions.get('window').width - 60,
                        marginTop: 20
                    }}>
                        <TouchableHighlight
                            onPress={() => {
                                this._legsTextInput.setNativeProps({text: ''});
                                this._legsTextInput.focus();
                                this._searchLegs();
                            }}
                            underlayColor="rgba(0, 0, 0, 0)"
                        >
                            <Image source={require('../assets/general/icon_clear_text.png')}
                                   style={{width: 40, height: 40, resizeMode: 'contain'}}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <FlatList
                    data={this.state.legs}
                    renderItem={({item}) => {
                        return <MHWTouchable onPress={() => {
                            const {goBack} = this.props.navigation;
                            this.props.navigation.state.params.chooseLegs(item);
                            goBack(null);
                        }} content={this.props.navigation.state.params.returnArmorComponent(item)}/>;
                    }}
                    keyExtractor={(item, index) => item.name + item.materials[0].name}
                >
                </FlatList>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _prepareInitialData() {
        let legs = [];
        let armors = _.concat(database.lowRankArmors, database.highRankArmors, database.masterRankArmors);
        _.forEach(armors, (armorSet) => {
            if (armorSet.legs !== undefined) {
                legs.push(armorSet.legs);
            }
        });

        let sortedLegs = _.orderBy(legs, ['name'], ['asc']);
        return sortedLegs;
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8680885434', 'ca-app-pub-9242567842673294/8900377285');
        } else {
            return null;
        }
    }

    _searchLegs(text) {
        if (text !== undefined && text.length > 0) {
            let filteredLegsByName = _.filter(this._prepareInitialData(), function (leg) {
                if (I18n.t(leg.translationKey).Translation !== undefined &&
                    I18n.t(leg.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return leg;
                }
            });

            let matchedSkills = _.filter(database.skills, (skill) => {
                if (I18n.t(skill.translationKey).Translation !== undefined &&
                    I18n.t(skill.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return skill;
                }
            });

            let filteredLegsBySkill = [];
            _.forEach(this._prepareInitialData(), function (legs) {
                _.forEach(legs.skills, (skill) => {
                    if (skill !== undefined && skill !== null) {
                        let skillInComponent = _.find(matchedSkills, {name: skill.name});
                        if (skillInComponent !== undefined) {
                            filteredLegsBySkill.push(legs);
                        }
                    }
                })
            });

            let sortedLegs = _.orderBy(_.union(filteredLegsByName, filteredLegsBySkill), ['name'], ['asc']);

            this.setState({
                searchText: text,
                legs: sortedLegs
            });
        } else {
            this.setState({
                searchText: text,
                legs: this._prepareInitialData()
            })
        }
    }
}

export class LoadoutChooseCharmModal extends React.PureComponent {

    state = {
        charms: this._prepareInitialData(),
        showAds: true,
        searchText: '',
        quickSearch: 'Off',
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: 'Choose Charm',
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

        let quickSearch = await AsyncStorage.getItem('quickSearch');
        if (quickSearch !== null) {
            if (quickSearch === 'Off') {
                stateObject['quickSearch'] = 'Off';
            }
            if (quickSearch === 'On') {
                stateObject['quickSearch'] = 'On';
            }
        } else {
            stateObject['quickSearch'] = 'Off';
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

        let quickSearch = null;
        if (this.state.quickSearch === 'On') {
            quickSearch = <TextInput
                ref={component => this._charmTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a charm / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this._searchCharms(text)
                }}
                clearButtonMode="always"
            />
        } else if (this.state.quickSearch === 'Off') {
            quickSearch = <TextInput
                ref={component => this._charmTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a charm / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchText: text
                    });
                }}
                onSubmitEditing={() => {
                    this._searchCharms(this.state.searchText)
                }}
                clearButtonMode="always"
            />
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <View style={{backgroundColor: 'black'}}>
                    {quickSearch}
                    <View style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        marginLeft: Dimensions.get('window').width - 60,
                        marginTop: 20
                    }}>
                        <TouchableHighlight
                            onPress={() => {
                                this._charmTextInput.setNativeProps({text: ''});
                                this._charmTextInput.focus();
                                this._searchCharms();
                            }}
                            underlayColor="rgba(0, 0, 0, 0)"
                        >
                            <Image source={require('../assets/general/icon_clear_text.png')}
                                   style={{width: 40, height: 40, resizeMode: 'contain'}}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <FlatList
                    data={this.state.charms}
                    renderItem={({item}) => {
                        return <MHWTouchable onPress={() => {
                            const {goBack} = this.props.navigation;
                            this.props.navigation.state.params.chooseCharm(item);
                            goBack(null);
                        }} content={this.props.navigation.state.params.returnCharm(item)}/>
                    }}
                    keyExtractor={(item, index) => item.name}
                >
                </FlatList>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _prepareInitialData() {
        let sortedCharms = _.orderBy(database.charms, ['name'], ['asc']);
        return sortedCharms;
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8680885434', 'ca-app-pub-9242567842673294/8900377285');
        } else {
            return null;
        }
    }

    _searchCharms(text) {
        if (text !== undefined && text.length > 0) {
            let filteredCharmsByName = _.filter(this._prepareInitialData(), function (charm) {
                if (charm.name.toLowerCase().match(text.toLowerCase())) {
                    return charm;
                }
            });

            let matchedSkills = _.filter(database.skills, (skill) => {
                if (I18n.t(skill.translationKey).Translation !== undefined &&
                    I18n.t(skill.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return skill;
                }
            });

            let filteredCharmsBySkill = [];
            _.forEach(this._prepareInitialData(),
                function (charm) {
                    _.forEach(charm.skills, (skill) => {
                        if (skill !== undefined && skill !== null) {
                            let skillInComponent = _.find(matchedSkills, {name: skill});
                            if (skillInComponent !== undefined) {
                                filteredCharmsBySkill.push(charm);
                            }
                        }
                    })
                }
            );

            let sortedCharms = _.orderBy(_.union(filteredCharmsByName, filteredCharmsBySkill), ['name'], ['asc']);

            this.setState({
                searchText: text,
                charms: sortedCharms
            });
        }

        else {
            this.setState({
                searchText: text,
                charms: this._prepareInitialData()
            })
        }
    }
}

export class LoadoutChooseSpecializedToolModal extends React.PureComponent {

    state = {
        specializedTools: this._prepareInitialData(),
        showAds: true,
        searchText: '',
        quickSearch: 'Off'
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: 'Choose Specialized Tool',
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

        let quickSearch = await AsyncStorage.getItem('quickSearch');
        if (quickSearch !== null) {
            if (quickSearch === 'Off') {
                stateObject['quickSearch'] = 'Off';
            }
            if (quickSearch === 'On') {
                stateObject['quickSearch'] = 'On';
            }
        } else {
            stateObject['quickSearch'] = 'Off';
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

        let quickSearch = null;
        if (this.state.quickSearch === 'On') {
            quickSearch = <TextInput
                ref={component => this._specializedToolTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a specialized tool..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this._searchSpecializedTool(text)
                }}
                clearButtonMode="always"
            />
        } else if (this.state.quickSearch === 'Off') {
            quickSearch = <TextInput
                ref={component => this._specializedToolTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a specialized tool..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchText: text
                    });
                }}
                onSubmitEditing={() => {
                    this._searchSpecializedTool(this.state.searchText)
                }}
                clearButtonMode="always"
            />
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <View style={{backgroundColor: 'black'}}>
                    {quickSearch}
                    <View style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        marginLeft: Dimensions.get('window').width - 60,
                        marginTop: 20
                    }}>
                        <TouchableHighlight
                            onPress={() => {
                                this._specializedToolTextInput.setNativeProps({text: ''});
                                this._specializedToolTextInput.focus();
                                this._searchSpecializedTool();
                            }}
                            underlayColor="rgba(0, 0, 0, 0)"
                        >
                            <Image source={require('../assets/general/icon_clear_text.png')}
                                   style={{width: 40, height: 40, resizeMode: 'contain'}}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <FlatList
                    data={this.state.specializedTools}
                    renderItem={({item}) => {
                        return <MHWTouchable onPress={() => {
                            const {goBack} = this.props.navigation;
                            this.props.navigation.state.params.chooseSpecializedTool(item);
                            goBack(null);
                        }} content={this.props.navigation.state.params.returnSpecializedTool(item)}/>
                    }}
                    keyExtractor={(item, index) => item.name}
                >
                </FlatList>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _prepareInitialData() {
        let specializedTools = _.concat(database.mantles, database.smokers);
        let sortedSpecializedTools = _.orderBy(specializedTools, ['name'], ['asc']);
        return sortedSpecializedTools;
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8680885434', 'ca-app-pub-9242567842673294/8900377285');
        } else {
            return null;
        }
    }

    _searchSpecializedTool(text) {
        if (text !== undefined && text.length > 0) {
            let filteredSpecializedTools = _.filter(this._prepareInitialData(), function (specializedTool) {
                if (specializedTool.name.toLowerCase().match(text.toLowerCase())) {
                    return specializedTool;
                }
            });

            let sortedSpecializedTools = _.orderBy(filteredSpecializedTools, ['name'], ['asc']);

            this.setState({
                searchText: text,
                specializedTools: sortedSpecializedTools
            });
        } else {
            this.setState({
                searchText: text,
                specializedTools: this._prepareInitialData()
            })
        }
    }
}

export class LoadoutChooseDecorationModal extends React.PureComponent {

    state = {
        decorations: this._prepareInitialData(),
        showAds: true,
        searchText: '',
        quickSearch: 'Off',
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: 'Choose Decoration',
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

        let quickSearch = await AsyncStorage.getItem('quickSearch');
        if (quickSearch !== null) {
            if (quickSearch === 'Off') {
                stateObject['quickSearch'] = 'Off';
            }
            if (quickSearch === 'On') {
                stateObject['quickSearch'] = 'On';
            }
        } else {
            stateObject['quickSearch'] = 'Off';
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

        let quickSearch = null;
        if (this.state.quickSearch === 'On') {
            quickSearch = <TextInput
                ref={component => this._decorationTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a decoration / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this._searchDecoration(text)
                }}
                clearButtonMode="always"
            />
        } else if (this.state.quickSearch === 'Off') {
            quickSearch = <TextInput
                ref={component => this._decorationTextInput = component}
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                placeholder='Search a decoration / skill..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchText: text
                    });
                }}
                onSubmitEditing={() => {
                    this._searchDecoration(this.state.searchText)
                }}
                clearButtonMode="always"
            />
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <View style={{backgroundColor: 'black'}}>
                    {quickSearch}
                    <View style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        marginLeft: Dimensions.get('window').width - 60,
                        marginTop: 20
                    }}>
                        <TouchableHighlight
                            onPress={() => {
                                this._decorationTextInput.setNativeProps({text: ''});
                                this._decorationTextInput.focus();
                                this._searchDecoration();
                            }}
                            underlayColor="rgba(0, 0, 0, 0)"
                        >
                            <Image source={require('../assets/general/icon_clear_text.png')}
                                   style={{width: 40, height: 40, resizeMode: 'contain'}}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <FlatList
                    data={this.state.decorations}
                    renderItem={({item}) => {
                        return <MHWTouchable onPress={() => {
                            const {goBack} = this.props.navigation;
                            this.props.navigation.state.params.chooseDecoration(item, this.props.navigation.state.params.type, this.props.navigation.state.params.index);
                            goBack(null);
                        }} content={this.props.navigation.state.params.returnDecoration(item)}/>
                    }}
                    keyExtractor={(item, index) => item.name}
                >
                </FlatList>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _prepareInitialData() {
        let decorations = null;
        switch (this.props.navigation.state.params.decorationLevel) {
            case '4':
                decorations = _.concat(database.decorationsJewel1, database.decorationsJewel2, database.decorationsJewel3);
                break;

            case '3':
                decorations = _.concat(database.decorationsJewel1, database.decorationsJewel2, database.decorationsJewel3);
                break;

            case '2':
                decorations = _.concat(database.decorationsJewel1, database.decorationsJewel2);
                break;

            case '1':
                decorations = _.concat(database.decorationsJewel1);
                break;
        }
        let sortedDecorations = _.orderBy(decorations, ['name'], ['asc']);
        return sortedDecorations;
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8680885434', 'ca-app-pub-9242567842673294/8900377285');
        } else {
            return null;
        }
    }

    _searchDecoration(text) {
        if (text !== undefined && text.length > 0) {
            let filteredDecorationsByName = _.filter(this._prepareInitialData(), function (decoration) {
                if (decoration.name.toLowerCase().match(text.toLowerCase())) {
                    return decoration;
                }
            });

            let matchedSkills = _.filter(database.skills, (skill) => {
                if (I18n.t(skill.translationKey).Translation !== undefined &&
                    I18n.t(skill.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return skill;
                }
            });

            let filteredDecorationsBySkill = [];
            _.forEach(this._prepareInitialData(), function (decoration) {
                if (decoration.skill !== undefined && decoration.skill !== null) {
                    let skillInComponent = _.find(matchedSkills, {name: decoration.skill});
                    if (skillInComponent !== undefined) {
                        filteredDecorationsBySkill.push(decoration);
                    }
                }
            });

            let sortedDecorations = _.orderBy(_.union(filteredDecorationsByName, filteredDecorationsBySkill), ['name'], ['asc']);

            this.setState({
                searchText: text,
                decorations: sortedDecorations
            });
        } else {
            this.setState({
                searchText: text,
                decorations: this._prepareInitialData()
            })
        }
    }
}