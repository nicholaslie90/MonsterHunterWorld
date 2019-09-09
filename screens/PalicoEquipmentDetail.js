/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react'
import {
    AsyncStorage,
    Dimensions,
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
import {makeAdMob, productIdRemoveAds, returnRarityColor, returnWeaponElement} from "../utility";
import {MonsterMaterialItem} from "./MonsterMaterials";
import {monsterMaterials} from "../database";
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

class PalicoWeapon extends React.PureComponent {
    render() {
        //Theme
        let themeBackground = null;
        let themeText = null;
        let themeSeparator = '#f5f5f5';
        let themeCrafted = '#b3e5fc';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeSeparator = 'white';
                themeCrafted = null;
            }
        }

        let elderseal = null;
        if (this.props.item.elderseal !== undefined) {
            elderseal = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <Text style={[{textAlign: 'left'}, themeText]}>Elderseal</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText]}>{this.props.item.elderseal}</Text>
                </View>
            </View>;
        }

        let defenseBonus = null;
        if (this.props.item.defenseBonus !== undefined) {
            defenseBonus = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <Text style={[{textAlign: 'left'}, themeText]}>Defense Bonus</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText]}>{this.props.item.defenseBonus}</Text>
                </View>
            </View>;
        }

        let materials = null;
        let hasMaterial = false;
        if (this.props.item.materials !== undefined) {
            hasMaterial = true;
            materials = this.props.item.materials.map((material, index) => {
                let materialObject = _.find(monsterMaterials, {'name': material.name});

                if (materialObject !== undefined) {
                    return <MonsterMaterialItem key={`${material.name}`} item={materialObject}
                                                navigation={this.props.navigation} quantity={material.quantity} theme={this.props.navigation.state.params.theme}/>
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
        if (this.props.item.cost !== undefined) {
            cost = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <Text style={[{textAlign: 'left'}, themeText, globalStyles.heading2]}>Cost</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText, globalStyles.heading2]}>{this.props.item.cost} pts</Text>
                </View>
            </View>;
        }

        let elementIcon = returnWeaponElement(this.props.item.element);

        //Check whether affinity should use red color
        let affinityColor = {};
        if (this.props.item.affinity !== undefined) {
            if (this.props.navigation.state.params.theme !== undefined && this.props.navigation.state.params.theme === 'Dark'){
                affinityColor = globalStyles.textDark;
            }

            let affinityArray = this.props.item.affinity.split('-');
            if (affinityArray.length > 0 && affinityArray[1] !== undefined) {
                affinityColor = {color: 'red'};
            }
        }

        return <ScrollView style={themeBackground}>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={this.props.item.icon} style={Dimensions.get('window').width} resizeMode={'contain'}/>
            </View>

            <View style={{flex: 1, flexDirection: 'column', padding: 20}}>

                <Text style={[globalStyles.heading1, themeText]}>{this.props.item.name}</Text>

                {/*Rarity*/}
                <View style={styles.rightContainer}>
                    <Text style={[{
                        textAlign: 'right',
                        color: returnRarityColor(this.props.item.rarity)
                    }, themeText]}>Rarity: {this.props.item.rarity}</Text>
                </View>

                {/*Attack Melee*/}
                <View style={[styles.textContainer, {marginTop: 10}]}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/weapons/icon_attack.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Attack</Text>
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        <Text style={[{textAlign: 'right'}, themeText]}>Melee {this.props.item.attackMelee}</Text>
                    </View>
                </View>

                {/*Attack Ranged*/}
                <View style={styles.textContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={[{textAlign: 'left'}, themeText]}></Text>
                    </View>

                    <View style={styles.rightContainer}>
                        <Text style={[{textAlign: 'right'}, themeText]}>Ranged {this.props.item.attackRanged}</Text>
                    </View>
                </View>

                {/*Attack Type*/}
                <View style={styles.textContainer}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/weapons/icon_attack_type.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Attack Type</Text>
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={[{textAlign: 'right'}, themeText]}>{this.props.item.attackType}</Text>
                        </View>
                    </View>
                </View>


                {/*Element*/}
                <View style={styles.textContainer}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/weapons/icon_element.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Element</Text>
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={elementIcon} style={{width: 20, height: 20, marginRight: 4}}/>
                            <Text style={[{textAlign: 'right'}, themeText]}>{this.props.item.element}</Text>
                        </View>
                    </View>
                </View>

                {/*Elderseal*/}
                {elderseal}

                {/*Affinity*/}
                <View style={styles.textContainer}>
                    <View style={styles.leftContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('../assets/weapons/icon_affinity.png')}
                                   style={globalStyles.leftImage}/>
                            <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Affinity</Text>
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        <Text style={[affinityColor, {textAlign: 'right'}]}>{this.props.item.affinity}</Text>
                    </View>
                </View>

                {/*Defense Bonus*/}
                {defenseBonus}

                {/*Description*/}
                <View
                    style={{
                        borderTopColor: themeSeparator,
                        borderWidth: 0.5,
                        borderLeftWidth: 0,
                        borderRightWidth: 0
                    }}/>
                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 3,
                    marginBottom: 10
                }}/>

                <Text style={themeText}>{this.props.item.description}</Text>

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

                {/*Materials*/}
                {materialHeading}
                {materials}

                {/*Cost*/}
                {cost}
            </View>
        </ScrollView>
    }
}

class PalicoArmor extends React.PureComponent {
    render() {
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

        let materials = null;
        if (this.props.item.materials !== undefined) {
            materials = this.props.item.materials.map((material, index) => {
                let materialObject = _.find(monsterMaterials, {'name': material.name});

                if (materialObject !== undefined) {
                    return <MonsterMaterialItem key={`${material.name}`} item={materialObject}
                                                navigation={this.props.navigation} quantity={material.quantity} theme={this.props.navigation.state.params.theme}/>
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

        let cost = null;
        if (this.props.item.cost !== undefined) {
            cost = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <Text style={[{textAlign: 'left'}, themeText, globalStyles.heading2]}>Cost</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText, globalStyles.heading2]}>{this.props.item.cost} pts</Text>
                </View>
            </View>;
        }

        return <ScrollView style={themeBackground}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                paddingLeft: 20,
                paddingTop: 20,
                paddingRight: 20,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={this.props.item.icon}
                       resizeMode={'contain'}/>
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'column',
                padding: 20
            }}>

                <Text style={[globalStyles.heading1, themeText]}>{this.props.item.name}</Text>

                {/*Level - Rarity*/}
                <View style={styles.textContainer}>
                    <View style={styles.rightContainer}>
                        <Text style={[{
                            textAlign: 'right',
                            color: returnRarityColor(this.props.item.rarity)
                        }, themeText]}>Rarity {this.props.item.rarity}</Text>
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
                        <Text style={[{textAlign: 'right'}, themeText]}>{this.props.item.defense}</Text>
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
                        <Text style={[{textAlign: 'right'}, themeText]}>{this.props.item.vsFire}</Text>
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
                        <Text style={[{textAlign: 'right'}, themeText]}>{this.props.item.vsWater}</Text>
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
                        <Text style={[{textAlign: 'right'}, themeText]}>{this.props.item.vsThunder}</Text>
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
                        <Text style={[{textAlign: 'right'}, themeText]}>{this.props.item.vsIce}</Text>
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
                        <Text style={[{textAlign: 'right'}, themeText]}>{this.props.item.vsDragon}</Text>
                    </View>
                </View>


                {/*Description*/}
                <View
                    style={{
                        borderTopColor: themeSeparator,
                        borderWidth: 0.5,
                        borderLeftWidth: 0,
                        borderRightWidth: 0
                    }}/>
                <View style={{
                    borderTopColor: themeSeparator,
                    borderWidth: 0.5,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginTop: 3,
                    marginBottom: 10
                }}/>

                <Text style={themeText}>{this.props.item.description}</Text>

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

                {/*Materials*/}
                <View style={{paddingTop: 20}}>
                    <Text style={[globalStyles.heading2, themeText]}>Required Materials</Text>
                    {materials}
                </View>

                {cost}

            </View>

        </ScrollView>
    }
}

export default class PalicoEquipmentDetailScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.item.name : 'Palico Equipment Detail',
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'PalicoEquipments', theme: navigation.state.params.theme})} content={
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
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
            }
        }

        let weapon = null;
        if (this.props.navigation.state.params.item.weapon !== undefined){
            weapon = <View>
                <PalicoWeapon item={params.item.weapon} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
            </View>
        }

        let head = null;
        if (this.props.navigation.state.params.item.head !== undefined){
            head = <View>
                <PalicoArmor item={params.item.head} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
            </View>;
        }

        let body = null;
        if (this.props.navigation.state.params.item.body !== undefined){
            body = <View>
                <PalicoArmor item={params.item.body} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
            </View>
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <IndicatorViewPager
                    style={{flex: 1, flexDirection: 'column-reverse'}}
                    indicator={this._renderTitleIndicator()}>
                    {weapon}
                    {head}
                    {body}
                </IndicatorViewPager>
                {this._renderAds()}
            </SafeAreaView>

        )
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/5263923210', 'ca-app-pub-9242567842673294/7770480326');
        } else {
            return null;
        }
    }

    _renderTitleIndicator() {
        const windowWidth = Dimensions.get('window').width;

        let titles = [];

        if (this.props.navigation.state.params.item.weapon !== undefined){
            titles.push('Weapon');
        }

        if (this.props.navigation.state.params.item.head !== undefined){
            titles.push('Helm');
        }

        if (this.props.navigation.state.params.item.body !== undefined){
            titles.push('Body');
        }

        return (
            <PagerTitleIndicator
                style={globalStyles.tabIndicatorContainer}
                trackScroll={true}
                itemTextStyle={globalStyles.tabIndicatorText}
                itemStyle={{width: windowWidth / 3}}
                selectedItemStyle={{width: windowWidth / 3}}
                selectedItemTextStyle={globalStyles.tabIndicatorSelectedText}
                selectedBorderStyle={globalStyles.tabSelectedBorderStyle}
                titles={titles}
            />
        )
    }
}