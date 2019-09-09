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
    Switch,
    StyleSheet,
    Text,
    View, Dimensions
} from "react-native"
import globalStyles from '../styles'
import * as database from '../database'
import {calculateSkill, makeAdMob, productIdRemoveAds, returnSlot} from "../utility";
import {MonsterMaterialItem} from "./MonsterMaterials";
import {SkillItem} from "./Skills";
import I18n from '../i18n/i18n';
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
        flex: 3,
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

export class ArmorComponent extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            crafted: false,
            craftedOpacity: 1,
        };

        this._isMounted = false;
    }

    componentWillMount() {
        this._setItemState();
    }

    render() {
        //Theme
        let themeText = null;
        let themeSwitch = 'black';
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
                themeSwitch = 'white';
            }
        }

        let skills = null;
        if (this.props.item.skills !== undefined) {
            skills = this.props.item.skills.map((skill, index) => {
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
                return <View key={`${skill.name}`} style={styles.textContainer}>
                    {skillImage}
                    <Text style={[{textAlign: 'left'}, themeText]}> {skill.name} Lv. {skill.level}</Text>
                </View>;
            })
        }

        let slots = null;
        if (this.props.item.slots !== undefined) {
            let slotsArray = this.props.item.slots.split(' ');
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

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('ArmorSubDetail', {
                item: this.props.item,
                parent: this,
                theme: this.props.theme
            })} content={
            <View style={{
                flex: 1,
                flexDirection: 'row',
                paddingLeft: 20,
                paddingRight: 20,
                opacity: this.state.craftedOpacity
            }}>
                <View style={{flexDirection: 'column', marginRight: 10}}>
                    <View style={{width: 50, height: 50}}>
                        <Image source={this.props.item.iconMale} style={{
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
                        <Image source={this.props.item.iconFemale} style={{
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
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text
                            style={[styles.item, themeText, {flex: 7}]}>{I18n.t(this.props.item.translationKey).Translation}</Text>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Switch
                                onValueChange={(value) => this._toggleCrafted(value, this.props.item)}
                                thumbColor={themeSwitch}
                                trackColor='grey'
                                tintColor='grey'
                                value={this.state.crafted}
                                style={{marginTop: 10, marginRight: 10}}/>
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
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-defense').Translation}{this.props.item.defense}</Text>
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
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-fire-defense').Translation}{this.props.item.vsFire}</Text>
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
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-water-defense').Translation}{this.props.item.vsWater}</Text>
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
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-thunder-defense').Translation}{this.props.item.vsThunder}</Text>
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
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-ice-defense').Translation}{this.props.item.vsIce}</Text>
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
                                        style={[globalStyles.subtitle, themeText]}>{I18n.t('armor-component-dragon-defense').Translation}{this.props.item.vsDragon}</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    {skills}

                </View>
            </View>
        }/>;
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillReceiveProps() {
        this._setItemState();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async _setItemState() {
        let value = await AsyncStorage.getItem("ArmorComponent" + this.props.item.name);
        if (this._isMounted) {
            this.setState({
                crafted: (value !== null && value === 'true'),
                craftedOpacity: (value !== null && value === 'true') ? 0.5 : 1
            });
        }
    }

    async _toggleCrafted(value, item) {
        try {
            if (value) {
                this.setState({
                    crafted: true,
                    craftedOpacity: 0.5
                });
                await AsyncStorage.setItem("ArmorComponent" + item.name, 'true');
                if (this.props.parent !== undefined) {
                    this.props.parent._setItemState();
                }

            } else {
                this.setState({
                    crafted: false,
                    craftedOpacity: 1
                });
                await AsyncStorage.setItem("ArmorComponent" + item.name, 'false');
                if (this.props.parent !== undefined) {
                    this.props.parent._setItemState();
                }
            }

        } catch (error) {
        }
    }


}

export default class ArmorDetailScreen extends React.PureComponent {
    state = {
        showAds: true
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.item.name : 'Armor Detail',
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {
                    scope: 'ArmorComponents',
                    theme: navigation.state.params.theme
                })}
                              content={
                                  <Image source={require('../assets/general/icon_search.png')}
                                         style={globalStyles.navSearch}/>
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
        let themeCrafted = '#b3e5fc';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeCrafted = null;
            }
        }

        //Prepare Set Bonus Skills
        let setBonusSkills = [];
        let setBonusSkillsHeader = null;
        if (params.item.setBonusSkills !== undefined) {
            setBonusSkillsHeader =
                <Text
                    style={[globalStyles.heading1, themeText]}>{I18n.t('armor-detail-set-bonus-skills').Translation}</Text>;
            params.item.setBonusSkills.map((bonusSkill) => {
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
                                <Text
                                    style={[globalStyles.subtitle, themeText]}>{I18n.t(bonusSkill.description).Translation}</Text>
                            </View>
                        </View>}/>);
                }
            });
        }

        //Prepare Components
        let head = null;
        if (params.item.head !== undefined) {
            head = <ArmorComponent ref="head" item={params.item.head} navigation={this.props.navigation}
                                   parent={this.props.navigation.state.params.parent}
                                   theme={this.props.navigation.state.params.theme}/>;
        }
        let upperBody = null;
        if (params.item.upperBody !== undefined) {
            upperBody =
                <ArmorComponent ref="upperBody" item={params.item.upperBody} navigation={this.props.navigation}
                                parent={this.props.navigation.state.params.parent}
                                theme={this.props.navigation.state.params.theme}/>;
        }
        let hands = null;
        if (params.item.hands !== undefined) {
            hands = <ArmorComponent ref="hands" item={params.item.hands} navigation={this.props.navigation}
                                    parent={this.props.navigation.state.params.parent}
                                    theme={this.props.navigation.state.params.theme}/>;
        }
        let lowerBody = null;
        if (params.item.lowerBody !== undefined) {
            lowerBody =
                <ArmorComponent ref="lowerBody" item={params.item.lowerBody} navigation={this.props.navigation}
                                parent={this.props.navigation.state.params.parent}
                                theme={this.props.navigation.state.params.theme}/>;
        }
        let legs = null;
        if (params.item.legs !== undefined) {
            legs = <ArmorComponent ref="legs" item={params.item.legs} navigation={this.props.navigation}
                                   parent={this.props.navigation.state.params.parent}
                                   theme={this.props.navigation.state.params.theme}/>;
        }

        //Calculate total skills
        let totalSkills = [];
        if (params.item.head !== undefined) {
            calculateSkill(params.item.head, totalSkills);
        }
        if (params.item.upperBody !== undefined) {
            calculateSkill(params.item.upperBody, totalSkills);
        }
        if (params.item.hands !== undefined) {
            calculateSkill(params.item.hands, totalSkills);
        }
        if (params.item.lowerBody !== undefined) {
            calculateSkill(params.item.lowerBody, totalSkills);
        }
        if (params.item.legs !== undefined) {
            calculateSkill(params.item.legs, totalSkills);
        }
        let skills = null;
        let skillsHeader = null;
        if (totalSkills.length > 0) {
            skillsHeader =
                <Text
                    style={[globalStyles.heading1, themeText]}>{I18n.t('armor-detail-total-skills').Translation}</Text>;
            //Order the gathered skill by level
            totalSkills = _.orderBy(totalSkills, data => {
                return [data.level]
            }, ['desc']);

            skills = totalSkills.map((skillObject, index) => {
                if (skillObject !== undefined) {
                    return <View key={`${skillObject.skill.name + index}`} style={{marginLeft: 20}}><SkillItem
                        item={skillObject.skill}
                        navigation={this.props.navigation}
                        level={skillObject.level}
                        theme={this.props.navigation.state.params.theme}
                    />
                    </View>
                }
            });
        }

        //Calculate total material
        let totalMaterials = [];
        if (params.item.materials !== undefined) {
            this._calculateMaterial(params.item, totalMaterials);
        } else {
            if (params.item.head !== undefined) {
                this._calculateMaterial(params.item.head, totalMaterials);
            }
            if (params.item.upperBody !== undefined) {
                this._calculateMaterial(params.item.upperBody, totalMaterials);
            }
            if (params.item.hands !== undefined) {
                this._calculateMaterial(params.item.hands, totalMaterials);
            }
            if (params.item.lowerBody !== undefined) {
                this._calculateMaterial(params.item.lowerBody, totalMaterials);
            }
            if (params.item.legs !== undefined) {
                this._calculateMaterial(params.item.legs, totalMaterials);
            }
        }
        let materials = null;
        let materialsHeader = null;
        if (totalMaterials.length > 0) {
            materialsHeader =
                <Text
                    style={[globalStyles.heading1, themeText]}>{I18n.t('armor-detail-total-materials').Translation}</Text>;
            //Order the gathered materials by name
            totalMaterials = _.orderBy(totalMaterials, data => {
                return [data.material.name]
            }, ['asc']);

            materials = totalMaterials.map((materialObject, index) => {
                if (materialObject !== undefined) {
                    return <View key={`${materialObject.material.name}`} style={{marginLeft: 20}}><MonsterMaterialItem
                        item={materialObject.material}
                        navigation={this.props.navigation}
                        quantity={materialObject.quantity}
                        theme={this.props.navigation.state.params.theme}/>
                    </View>
                }
                else {
                    return <View key={`${materialObject.name}`} style={[styles.textContainer, {marginLeft: 20}]}>
                        <View style={styles.leftContainer}>
                            <Text style={[{textAlign: 'left'}, themeText]}> {materialObject.name}</Text>
                        </View>

                        <View style={styles.rightContainer}>
                            <Text style={[{textAlign: 'right'}, themeText]}> x {materialObject.quantity}</Text>
                        </View>
                    </View>;
                }
            });
        }

        //Calculate cost
        let cost = 0;
        if (params.item.cost !== undefined) {
            cost = parseInt(params.item.cost);
        } else {
            if (params.item.head !== undefined) {
                cost += parseInt(params.item.head.cost);
            }
            if (params.item.upperBody !== undefined) {
                cost += parseInt(params.item.upperBody.cost);
            }
            if (params.item.hands !== undefined) {
                cost += parseInt(params.item.hands.cost);
            }
            if (params.item.lowerBody !== undefined) {
                cost += parseInt(params.item.lowerBody.cost);
            }
            if (params.item.legs !== undefined) {
                cost += parseInt(params.item.legs.cost);
            }
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>

                <ScrollView>

                    <View style={{flexDirection: 'column'}}>

                        <View style={globalStyles.contentContainer}>

                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={params.item.icon} style={Dimensions.get('window').width}
                                       resizeMode={'contain'}/>
                            </View>

                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                paddingLeft: 20,
                                paddingTop: 20,
                                paddingRight: 20
                            }}>

                                {/*Total Defense*/}
                                <View style={styles.textContainer}>
                                    <View style={styles.leftContainer}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Image source={require('../assets/general/icon_defense.png')}
                                                   style={globalStyles.leftImage}/>
                                            <Text style={[{
                                                alignItems: 'flex-end',
                                                textAlign: 'left'
                                            }, themeText]}>{I18n.t('armor-detail-total-defense').Translation}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.rightContainer}>
                                        <Text
                                            style={[{textAlign: 'right'}, themeText]}>{params.item.totalDefense}</Text>
                                    </View>
                                </View>

                                {/*Total Fire Defense*/}
                                <View style={styles.textContainer}>
                                    <View style={styles.leftContainer}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Image source={require('../assets/general/icon_fire.png')}
                                                   style={globalStyles.leftImage}/>
                                            <Text style={[{
                                                alignItems: 'flex-end',
                                                textAlign: 'left'
                                            }, themeText]}>{I18n.t('armor-detail-total-fire-defense').Translation}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.rightContainer}>
                                        <Text
                                            style={[{textAlign: 'right'}, themeText]}>{params.item.totalFireDefense}</Text>
                                    </View>
                                </View>

                                {/*Total Water Defense*/}
                                <View style={styles.textContainer}>
                                    <View style={styles.leftContainer}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Image source={require('../assets/general/icon_water.png')}
                                                   style={globalStyles.leftImage}/>
                                            <Text style={[{
                                                alignItems: 'flex-end',
                                                textAlign: 'left'
                                            }, themeText]}>{I18n.t('armor-detail-total-water-defense').Translation}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.rightContainer}>
                                        <Text
                                            style={[{textAlign: 'right'}, themeText]}>{params.item.totalWaterDefense}</Text>
                                    </View>
                                </View>

                                {/*Total Thunder Defense*/}
                                <View style={styles.textContainer}>
                                    <View style={styles.leftContainer}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Image source={require('../assets/general/icon_thunder.png')}
                                                   style={globalStyles.leftImage}/>
                                            <Text style={[{
                                                alignItems: 'flex-end',
                                                textAlign: 'left'
                                            }, themeText]}>{I18n.t('armor-detail-total-thunder-defense').Translation}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.rightContainer}>
                                        <Text
                                            style={[{textAlign: 'right'}, themeText]}>{params.item.totalThunderDefense}</Text>
                                    </View>
                                </View>

                                {/*Total Ice Defense*/}
                                <View style={styles.textContainer}>
                                    <View style={styles.leftContainer}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Image source={require('../assets/general/icon_ice.png')}
                                                   style={globalStyles.leftImage}/>
                                            <Text style={[{
                                                alignItems: 'flex-end',
                                                textAlign: 'left'
                                            }, themeText]}>{I18n.t('armor-detail-total-ice-defense').Translation}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.rightContainer}>
                                        <Text
                                            style={[{textAlign: 'right'}, themeText]}>{params.item.totalIceDefense}</Text>
                                    </View>
                                </View>

                                {/*Total Dragon Defense*/}
                                <View style={styles.textContainer}>
                                    <View style={styles.leftContainer}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Image source={require('../assets/general/icon_dragon.png')}
                                                   style={globalStyles.leftImage}/>
                                            <Text style={[{
                                                alignItems: 'flex-end',
                                                textAlign: 'left'
                                            }, themeText]}>{I18n.t('armor-detail-total-dragon-defense').Translation}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.rightContainer}>
                                        <Text
                                            style={[{textAlign: 'right'}, themeText]}>{params.item.totalDragonDefense}</Text>
                                    </View>
                                </View>

                            </View>

                            {setBonusSkillsHeader}
                            {setBonusSkills}

                            <Text
                                style={[globalStyles.heading1, themeText]}>{I18n.t('armor-detail-components').Translation}</Text>

                            {head}
                            {upperBody}
                            {hands}
                            {lowerBody}
                            {legs}

                            {skillsHeader}
                            {skills}

                            {materialsHeader}
                            {materials}

                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <Text
                                        style={[{textAlign: 'left'}, themeText, globalStyles.heading2]}>{I18n.t('armor-detail-total-cost').Translation}</Text>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text
                                        style={[{textAlign: 'right'}, themeText, globalStyles.heading2]}>{cost}z</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _calculateMaterial(item, array) {
        if (item.materials !== undefined) {
            item.materials.map((material, index) => {
                let materialFromDatabase = _.find(database.monsterMaterials, {'name': material.name});
                let materialObject = {};
                let currentMaterial;
                //Try finding existing material from the array
                if (array.length > 0) {
                    _.forEach(array, (materialInArray) => {
                        if (materialInArray.material.name === material.name) {
                            currentMaterial = materialInArray;
                            return false;
                        }
                    });
                }
                if (currentMaterial !== undefined) {
                    //Update the quantity of the currentMaterial
                    currentMaterial.quantity += parseInt(material.quantity);
                } else {
                    //Insert new material and its quantity
                    materialObject.material = materialFromDatabase !== undefined ? materialFromDatabase : material.name;
                    materialObject.quantity = parseInt(material.quantity);
                    array.push(materialObject);
                }
            })
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/1080922625', 'ca-app-pub-9242567842673294/9677199180');
        } else {
            return null;
        }
    }
}