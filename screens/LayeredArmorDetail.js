/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Button,
    Image,
    Linking,
    Platform,
    SafeAreaView,
    ScrollView,
    Switch,
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";
import * as database from "../database";
import {MonsterMaterialItem} from "./MonsterMaterials";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

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

export default class LayeredArmorDetailScreen extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            obtained: false,
            showAds: true
        };

        this._isMounted = false;
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            title: params ? params.item.name : 'Layered Armor Detail',
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

        this._getObtainedValue(this.props.navigation.state.params.item);
    }

    render() {
        //Theme
        let themeBackground = null;
        let themeText = null;
        let themeCrafted = '#b3e5fc';
        let themeSwitch = 'black';
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                themeCrafted = null;
                themeSwitch = 'white';
            }
        }

        const {params} = this.props.navigation.state;

        //How to Get
        let howToGet = null;
        let howToGetHeader = null;
        if (params.item.howToGet !== undefined) {
            howToGetHeader = <Text style={[globalStyles.heading1, themeText]}>How to Get</Text>;
            howToGet = <Text style={themeText}>{I18n.t(params.item.howToGet).Translation}</Text>
        }

        //Location
        let location = null;
        let locationHeader = null;
        if (params.item.location !== undefined) {
            locationHeader = <Text style={[globalStyles.heading1, themeText]}>Location</Text>;
            location = <Image source={params.item.location} style={{height: 200, width: 330, margin: 10}}
                              resizeMode={'contain'}/>
        }

        let youTube = <View>
            <Text style={[globalStyles.heading1, themeText]}>Related YouTube Videos</Text>
            <Button
                onPress={() => {
                    Linking.openURL('https://www.youtube.com/results?search_query=' + params.item.name + '+monster+hunter+world+layered+armor');
                }}
                title="Search on YouTube"
                color="#F80016"
                accessibilityLabel="Search on YouTube"
            />
        </View>;

        //Components
        let componentsHeader = null;
        let head = null;
        let upperBody = null;
        let hands = null;
        let lowerBody = null;
        let legs = null;

        if (params.item.howToGet === undefined) {
            componentsHeader =
                <Text style={[globalStyles.heading1, themeText]}>{I18n.t('armor-detail-components').Translation}</Text>

            //Parse Head
            if (params.item.head !== undefined) {
                let headImage = null;
                if (params.item.color !== undefined) {
                    switch (params.item.color) {
                        case "green":
                            headImage = require('./../assets/layered_armors/helm-green.png');
                            break;
                        case "purple":
                            headImage = require('./../assets/layered_armors/helm-purple.png');
                            break;
                    }
                }
                head = <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Image source={headImage} style={{
                        width: 50,
                        height: 50,
                        marginTop: 16,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}/>

                    <Text
                        style={[styles.item, themeText, {
                            flex: 7,
                            paddingLeft: 4
                        }]}>{I18n.t(params.item.head.translationKey).Translation}</Text>
                </View>;
            }

            // Parse upperBody
            if (params.item.upperBody !== undefined) {
                let upperBodyImage = null;
                if (params.item.color !== undefined) {
                    switch (params.item.color) {
                        case "green":
                            upperBodyImage = require('./../assets/layered_armors/chest-green.png');
                            break;
                        case "purple":
                            upperBodyImage = require('./../assets/layered_armors/chest-purple.png');
                            break;
                    }
                }
                upperBody = <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Image source={upperBodyImage} style={{
                        width: 50,
                        height: 50,
                        marginTop: 16,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}/>

                    <Text
                        style={[styles.item, themeText, {
                            flex: 7,
                            paddingLeft: 4
                        }]}>{I18n.t(params.item.upperBody.translationKey).Translation}</Text>
                </View>;
            }

            // Parse hands
            if (params.item.hands !== undefined) {
                let handsImage = null;
                if (params.item.color !== undefined) {
                    switch (params.item.color) {
                        case "green":
                            handsImage = require('./../assets/layered_armors/arms-green.png');
                            break;
                        case "purple":
                            handsImage = require('./../assets/layered_armors/arms-purple.png');
                            break;
                    }
                }
                hands = <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Image source={handsImage} style={{
                        width: 50,
                        height: 50,
                        marginTop: 16,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}/>

                    <Text
                        style={[styles.item, themeText, {
                            flex: 7,
                            paddingLeft: 4
                        }]}>{I18n.t(params.item.hands.translationKey).Translation}</Text>
                </View>;
            }

            // Parse lowerBody
            if (params.item.lowerBody !== undefined) {
                let lowerBodyImage = null;
                if (params.item.color !== undefined) {
                    switch (params.item.color) {
                        case "green":
                            lowerBodyImage = require('./../assets/layered_armors/torso-green.png');
                            break;
                        case "purple":
                            lowerBodyImage = require('./../assets/layered_armors/torso-purple.png');
                            break;
                    }
                }
                lowerBody = <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Image source={lowerBodyImage} style={{
                        width: 50,
                        height: 50,
                        marginTop: 16,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}/>

                    <Text
                        style={[styles.item, themeText, {
                            flex: 7,
                            paddingLeft: 4
                        }]}>{I18n.t(params.item.lowerBody.translationKey).Translation}</Text>
                </View>;
            }

            // Parse legs
            if (params.item.legs !== undefined) {
                let legsImage = null;
                if (params.item.color !== undefined) {
                    switch (params.item.color) {
                        case "green":
                            legsImage = require('./../assets/layered_armors/legs-green.png');
                            break;
                        case "purple":
                            legsImage = require('./../assets/layered_armors/legs-purple.png');
                            break;
                    }
                }
                legs = <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Image source={legsImage} style={{
                        width: 50,
                        height: 50,
                        marginTop: 16,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}/>

                    <Text
                        style={[styles.item, themeText, {
                            flex: 7,
                            paddingLeft: 4
                        }]}>{I18n.t(params.item.legs.translationKey).Translation}</Text>
                </View>;
            }
        }

        // Parse materials
        let materials = null;
        let materialsHeader = null;
        if (params.item.materials !== undefined) {
            materialsHeader = <Text style={[globalStyles.heading2, themeText]}>Materials</Text>;
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

        //Parse cost
        let cost = null;
        if (params.item.cost !== undefined) {
            cost = <View style={[styles.textContainer, {marginBottom: 20}]}>
                <View style={styles.leftContainer}>
                    <Text style={[{textAlign: 'left'}, themeText, globalStyles.heading2]}>Cost</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={[{textAlign: 'right'}, themeText, globalStyles.heading2]}>{params.item.cost}P</Text>
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
                                <Image source={require('../assets/general/icon_completed.png')}
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
                                onValueChange={(value) => this._toggleObtained(value, params.item)}
                                thumbColor={themeSwitch}
                                trackColor='grey'
                                tintColor='grey'
                                value={this.state.obtained}/>
                        </View>
                    </View>

                    <Image source={params.item.icon} style={{height: 200, width: 330, margin: 20}}
                           resizeMode={'contain'}/>

                    <View style={{flex: 1, flexDirection: 'column', padding: 20}}>
                        {howToGetHeader}
                        {howToGet}

                        {locationHeader}
                        {location}

                        {componentsHeader}
                        {head}
                        {upperBody}
                        {hands}
                        {lowerBody}
                        {legs}

                        {materialsHeader}
                        {materials}

                        {cost}

                        {youTube}
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

    async _getObtainedValue(item) {
        try {
            let value = await AsyncStorage.getItem("LayeredArmor" + item.name);
            this.setState({
                obtained: (value !== null && value === 'true')
            });
        } catch (error) {
            // Error retrieving data
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/5540874941', 'ca-app-pub-9242567842673294/1246406717');
        } else {
            return null;
        }
    }

    async _toggleObtained(value, item) {
        this.setState({obtained: value});
        try {
            if (value) {
                await AsyncStorage.setItem("LayeredArmor" + item.name, 'true');

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();
            } else {
                await AsyncStorage.setItem("LayeredArmor" + item.name, 'false');

                if (this.props.navigation.state.params.parent !== undefined)
                    this.props.navigation.state.params.parent._setItemState();
            }

        } catch (error) {
        }
    }
}