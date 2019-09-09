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
    Switch,
    Text,
    View
} from "react-native"
import globalStyles from '../styles';
import {makeAdMob, productIdRemoveAds, returnRarityColor} from "../utility";
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

class PalicoArmorSetComponent extends React.PureComponent {
    render() {
        //Theme
        let themeBackground = null;
        let themeText = null;
        let themeSeparator = '#f5f5f5';
        let themeCrafted = '#b3e5fc';
        let themeSwitch = 'black';
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeSeparator = 'white';
                themeCrafted = null;
                themeSwitch = 'white';
            }
        }

        return <ScrollView style={themeBackground}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={this.props.item.icon}
                       resizeMode={'contain'}/>
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'column',
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
            </View>

        </ScrollView>
    }
}

export default class PalicoArmorSetDetailScreen extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showAds: true,
            crafted: false
        }
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.item.name : 'Palico Armor Set Detail',
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'PalicoArmorSets', theme: navigation.state.params.theme})} content={
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

        this._getCraftedValue(this.props.navigation.state.params.item);
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

        let materials = null;
        if (params.item.materials !== undefined) {
            materials = params.item.materials.map((material, index) => {
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

        let head = null;
        if (params.item.head !== undefined) {
            head = <View>
                <PalicoArmorSetComponent item={params.item.head} theme={this.props.navigation.state.params.theme}/>
            </View>
        }

        let body = null;
        if (params.item.body !== undefined) {
            body = <View>
                <PalicoArmorSetComponent item={params.item.body} theme={this.props.navigation.state.params.theme}/>
            </View>
        }

        let cost = null;
        if (params.item.cost !== undefined) {
            cost = <View style={styles.textContainer}>
                <View style={styles.leftContainer}>
                    <Text style={[{textAlign: 'left'}, themeText, globalStyles.heading2]}>Cost</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text
                        style={[{textAlign: 'right'}, themeText, globalStyles.heading2]}>{params.item.cost}
                        pts</Text>
                </View>
            </View>;
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
                                <Image source={require('../assets/general/icon_crafted.png')}
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
                        <View style={styles.rightContainer}>
                            <Switch
                                onValueChange={(value) => this._toggleCrafted(value, params.item)}
                                thumbColor={themeSwitch}
trackColor='grey'
tintColor='grey'
                                value={this.state.crafted}
                                />
                        </View>
                    </View>

                    <View style={{flexDirection: 'column', padding: 20}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={params.item.icon}
                               style={[Dimensions.get('window').width, {height: 200, resizeMode: 'contain'}]}/>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            paddingTop: 20,
                        }}>

                            {/*Total Defense*/}
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image source={require('../assets/general/icon_defense.png')}
                                               style={globalStyles.leftImage}/>
                                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Total
                                            Defense</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.totalDefense}</Text>
                                </View>
                            </View>

                            {/*Total Fire Defense*/}
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image source={require('../assets/general/icon_fire.png')}
                                               style={globalStyles.leftImage}/>
                                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Total Fire
                                            Defense</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.totalFireDefense}</Text>
                                </View>
                            </View>

                            {/*Total Water Defense*/}
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image source={require('../assets/general/icon_water.png')}
                                               style={globalStyles.leftImage}/>
                                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Total Water
                                            Defense</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.totalWaterDefense}</Text>
                                </View>
                            </View>

                            {/*Total Thunder Defense*/}
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image source={require('../assets/general/icon_thunder.png')}
                                               style={globalStyles.leftImage}/>
                                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Total Thunder
                                            Defense</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.totalThunderDefense}</Text>
                                </View>
                            </View>

                            {/*Total Ice Defense*/}
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image source={require('../assets/general/icon_ice.png')}
                                               style={globalStyles.leftImage}/>
                                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Total Ice
                                            Defense</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.totalIceDefense}</Text>
                                </View>
                            </View>

                            {/*Total Dragon Defense*/}
                            <View style={styles.textContainer}>
                                <View style={styles.leftContainer}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image source={require('../assets/general/icon_dragon.png')}
                                               style={globalStyles.leftImage}/>
                                        <Text style={[{alignItems: 'flex-end', textAlign: 'left'}, themeText]}>Total Dragon
                                            Defense</Text>
                                    </View>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text style={[{textAlign: 'right'}, themeText]}>{params.item.totalDragonDefense}</Text>
                                </View>
                            </View>

                        </View>

                        {head}
                        {body}
                        <Text style={[globalStyles.heading1, themeText]}>Required Materials</Text>
                        {materials}
                        {cost}
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>

        )
    }

    async _getCraftedValue(item) {
        try {
            let value = await AsyncStorage.getItem("PalicoArmorSet" + item.name);
            this.setState({
                crafted: value !== null && value === 'true'
            });
        } catch (error) {
            // Error retrieving data
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/7806074420', 'ca-app-pub-9242567842673294/2150078866');
        } else {
            return null;
        }
    }

    async _toggleCrafted(value, item) {
        this.setState({crafted: value});
        if (value) {
            await AsyncStorage.setItem("PalicoArmorSet" + item.name, 'true');

            if (this.props.navigation.state.params.parent !== undefined)
                this.props.navigation.state.params.parent._setItemState();

        } else {
            await AsyncStorage.setItem("PalicoArmorSet" + item.name, 'false');

            if (this.props.navigation.state.params.parent !== undefined)
                this.props.navigation.state.params.parent._setItemState();
        }
    }
}