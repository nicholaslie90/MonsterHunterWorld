/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Image,
    Platform,
    SafeAreaView,
    SectionList,
    Switch,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {
    bowTree,
    chargeBladeTree,
    dualBladesTree,
    greatSwordTree,
    gunlanceTree,
    hammerTree,
    heavyBowgunTree,
    huntingHornTree,
    insectGlaiveTree,
    lanceTree,
    lightBowgunTree,
    longSwordTree,
    switchAxeTree,
    swordAndShieldTree
} from '../database'
import {makeAdMob, productIdRemoveAds, returnSlot, returnWeaponElement} from "../utility";
import {MHWTouchable} from "../components/MHWTouchable";
import I18n from '../i18n/i18n';

const InAppBilling = require("react-native-billing");
const _ = require('lodash');

export class WeaponItem extends React.PureComponent {
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

        let attack = this.props.item.attack;
        if (this.props.item.baseAttack !== undefined) {
            attack += ' | ' + this.props.item.baseAttack;
        }

        let elementIcon = returnWeaponElement(this.props.item.element);

        let sharpnessBar = null;
        if (this.props.item.sharpness !== undefined && typeof this.props.item.sharpness === 'object') {
            sharpnessBar = <View style={{
                flexDirection: 'row',
                height: 3,
                marginTop: 4,
            }}>
                <View style={{backgroundColor: '#AF3849', width: this.props.item.sharpness.red}}/>
                <View style={{backgroundColor: '#D06847', width: this.props.item.sharpness.orange}}/>
                <View style={{backgroundColor: '#B6A83B', width: this.props.item.sharpness.yellow}}/>
                <View style={{backgroundColor: '#85AF3E', width: this.props.item.sharpness.green}}/>
                <View style={{backgroundColor: '#3D53C5', width: this.props.item.sharpness.blue}}/>
                <View style={{backgroundColor: '#CCD6F7', width: this.props.item.sharpness.white}}/>
            </View>
        }

        let sharpnessMaxBar = null;
        if (this.props.item.sharpnessMax !== undefined && typeof this.props.item.sharpnessMax === 'object') {
            sharpnessMaxBar = <View style={{
                flexDirection: 'row',
                height: 3,
                marginTop: 4,
            }}>
                <View style={{backgroundColor: '#AF3849', width: this.props.item.sharpnessMax.red}}/>
                <View style={{backgroundColor: '#D06847', width: this.props.item.sharpnessMax.orange}}/>
                <View style={{backgroundColor: '#B6A83B', width: this.props.item.sharpnessMax.yellow}}/>
                <View style={{backgroundColor: '#85AF3E', width: this.props.item.sharpnessMax.green}}/>
                <View style={{backgroundColor: '#3D53C5', width: this.props.item.sharpnessMax.blue}}/>
                <View style={{backgroundColor: '#CCD6F7', width: this.props.item.sharpnessMax.white}}/>
            </View>
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

        let icon = <View style={{
            width: 50,
            height: 50,
            margin: 10,
            marginTop: 16,
            justifyContent: 'center',
            alignItems: 'center'
        }}/>;
        if (this.props.item.icon !== null) {
            icon = <Image source={this.props.item.icon} style={{
                width: 50,
                height: 50,
                margin: 10,
                marginTop: 16,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>;
        }

        let craftedSwitch = <Switch
            onValueChange={(value) => this._toggleCrafted(value, this.props.item)}
            thumbColor={themeSwitch}
            trackColor='grey'
            tintColor='grey'
            value={this.state.crafted}
            style={{marginRight: 10}}/>;
        if (this.props.noSwitch !== undefined) {
            craftedSwitch = null;
        }

        //Content
        let content = <View style={{flex: 1, flexDirection: 'row', opacity: this.state.craftedOpacity}}>
            <View>
                {icon}
                <Image source={this.props.item.weaponIcon} style={{
                    width: 20,
                    height: 20,
                    marginTop: 40,
                    marginLeft: 40,
                    position: 'absolute',
                }}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 4, flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[{
                        paddingTop: 10,
                        fontSize: 18,
                    }, themeText]}>{this.props.item.name}</Text>
                    {sharpnessBar}
                    {sharpnessMaxBar}
                    {slots}
                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <Text style={[globalStyles.subtitle, themeText]}>Attack: {attack}, </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={elementIcon} style={{width: 20, height: 20, marginRight: 4}}/>
                            <Text style={themeText}>{this.props.item.element}</Text>
                        </View>
                    </View>
                </View>
                {craftedSwitch}
            </View>

        </View>;

        return <MHWTouchable onPress={() => this.props.navigation.navigate('WeaponSubDetail', {
            item: this.props.item,
            parent: this,
            theme: this.props.navigation.state.params.theme
        })} content={content}/>;
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
        let value = await AsyncStorage.getItem("Weapon" + this.props.item.type + this.props.item.name);
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
                this.setState({crafted: true, craftedOpacity: 0.5});
                await AsyncStorage.setItem("Weapon" + item.type + item.name, 'true');
            } else {
                this.setState({crafted: false, craftedOpacity: 1});
                await AsyncStorage.setItem("Weapon" + item.type + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class WeaponDetailScreen extends React.PureComponent {
    state = {
        showAds: true,
        filterCondition: 'None',
        weaponData: []
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.weaponName : 'Weapon Detail',
            headerRight: (
                <View style={{flexDirection: 'row'}}>
                    <MHWTouchable onPress={() => {
                        navigation.navigate('WeaponsFilter', {
                            theme: navigation.state.params.theme,
                            filterCondition: navigation.state.params.filterCondition,
                            updateWeapons: navigation.state.params.updateWeapons
                        })
                    }} content={
                        <Image source={require('../assets/general/icon_filter.png')} style={globalStyles.navSearch}/>
                    }/>
                    <MHWTouchable onPress={() => navigation.navigate('Search', {
                        scope: 'Weapons',
                        theme: navigation.state.params.theme
                    })} content={
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

        //Prepare weapon tree
        stateObject['weaponData'] = this._returnDefaultTree();

        this.setState(stateObject);

        this.props.navigation.setParams({
            filterCondition: this.state.filterCondition,
            updateWeapons: this._updateWeapons
        })
    }

    render() {
        const {params} = this.props.navigation.state;

        //Theme
        let themeBackground = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
            }
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <SectionList
                    sections={this.state.weaponData}
                    renderItem={({item}) =>
                        <WeaponItem item={item} navigation={this.props.navigation}
                                    theme={this.props.navigation.state.params.theme}/>
                    }
                    renderSectionHeader={({section}) => <View>
                        <Text style={globalStyles.sectionHeader}>{I18n.t(section.title).Translation}</Text>
                    </View>}
                    keyExtractor={(item, index) => index}
                />
                {this._renderAds()}
            </SafeAreaView>

        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/5416782368', 'ca-app-pub-9242567842673294/1419974831');
        } else {
            return null;
        }
    }

    _returnDefaultTree() {
        const weaponName = this.props.navigation.state.params.weaponName;
        switch (weaponName) {
            case "Great Sword":
                return _.cloneDeep(greatSwordTree);

            case "Long Sword":
                return _.cloneDeep(longSwordTree);

            case "Sword and Shield":
                return _.cloneDeep(swordAndShieldTree);

            case "Dual Blades":
                return _.cloneDeep(dualBladesTree);

            case "Hammer":
                return _.cloneDeep(hammerTree);

            case "Hunting Horn":
                return _.cloneDeep(huntingHornTree);

            case "Lance":
                return _.cloneDeep(lanceTree);

            case "Gunlance":
                return _.cloneDeep(gunlanceTree);

            case "Switch Axe":
                return _.cloneDeep(switchAxeTree);

            case "Charge Blade":
                return _.cloneDeep(chargeBladeTree);

            case "Insect Glaive":
                return _.cloneDeep(insectGlaiveTree);

            case "Light Bowgun":
                return _.cloneDeep(lightBowgunTree);

            case "Heavy Bowgun":
                return _.cloneDeep(heavyBowgunTree);

            case "Bow":
                return _.cloneDeep(bowTree);
        }
    }

    _updateWeapons = async (filterCondition) => {
        this.props.navigation.setParams({
            filterCondition: filterCondition
        });

        let stateObject = {};
        stateObject['filterCondition'] = filterCondition;
        if (filterCondition === "None") {
            stateObject['weaponData'] = this._returnDefaultTree();
            this.setState(stateObject);
        } else if (filterCondition === "KT") {
            stateObject['weaponData'] = _.filter(this._returnDefaultTree(), o => o.title === "weapon-tree-kulve-taroth-relic-weapons");
            this.setState(stateObject);
        } else if (filterCondition === "Final") {
            let finalForms = _.forEach(this._returnDefaultTree(), (tree) => {
                tree.data =  _.filter(tree.data, o => o.upgradableTo === undefined);
            });

            stateObject['weaponData'] = finalForms;
            this.setState(stateObject);
        }
    };
}