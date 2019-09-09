/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    Animated,
    AsyncStorage,
    Dimensions,
    Easing,
    Image,
    Platform,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {makeAdMob, productIdRemoveAds} from "../utility";
import SortableList from 'react-native-sortable-list';
import * as database from '../database';
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

let _ = require('lodash');
const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',

        ...Platform.select({
            ios: {
                paddingTop: 20,
            },
        }),
    },

    title: {
        fontSize: 16,
        paddingVertical: 20,
        color: '#999999',
    },

    item: {
        paddingTop: 10,
        paddingRight: 10,
        fontSize: 18,
        width: 220,
    },

    list: {
        flex: 1,
    },

    contentContainer: {
        width: window.width,

        ...Platform.select({
            ios: {
                paddingHorizontal: 30,
            },

            android: {
                paddingHorizontal: 0,
            }
        })
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        marginTop: 10,
        marginBottom: 10,


        ...Platform.select({
            ios: {
                width: window.width - 30 * 2,
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowOpacity: 1,
                shadowOffset: {height: 2, width: 2},
                shadowRadius: 2,
            },

            android: {
                width: window.width,
                elevation: 0,
            },
        })
    },

    image: {
        width: 30,
        height: 30,
        marginRight: 30,
    },

    text: {
        fontSize: 24,
        color: '#222222',
    },
});

const InAppBilling = require("react-native-billing");

class WishlistItem extends React.PureComponent {
    state = {
        crafted: false,
        shouldDisplayList: false,
    };

    constructor(props) {
        super(props);

        this._active = new Animated.Value(0);

        this._style = {
            ...Platform.select({
                ios: {
                    transform: [{
                        scale: this._active.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.1],
                        }),
                    }],
                    shadowRadius: this._active.interpolate({
                        inputRange: [0, 1],
                        outputRange: [2, 10],
                    }),
                },

                android: {
                    transform: [{
                        scale: this._active.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.07],
                        }),
                    }],
                    elevation: this._active.interpolate({
                        inputRange: [0, 1],
                        outputRange: [2, 6],
                    }),
                },
            })
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.active) {
            Animated.timing(this._active, {
                duration: 300,
                easing: Easing.bounce,
                toValue: Number(nextProps.active),
            }).start();
        }
    }

    render() {
        //Theme
        let themeText = null;
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        let navigateTo;
        let materials = null;
        let icon;
        if (this.props.data.type === 'ArmorComponent') {
            //Find which armor this armor comopnent belong to.
            let armorComponent;
            let armors = _.concat(database.lowRankArmors, database.highRankArmors);
            let armorSet = _.find(armors, {name: this.props.data.extra});
            if (armorSet !== undefined) {
                if (armorSet.head !== undefined) {
                    if (armorSet.head.name === this.props.data.name) {
                        armorComponent = armorSet.head;
                    }
                }
                if (armorSet.upperBody !== undefined) {
                    if (armorSet.upperBody.name === this.props.data.name) {
                        armorComponent = armorSet.upperBody;
                    }
                }
                if (armorSet.hands !== undefined) {
                    if (armorSet.hands.name === this.props.data.name) {
                        armorComponent = armorSet.hands;
                    }
                }
                if (armorSet.lowerBody !== undefined) {
                    if (armorSet.lowerBody.name === this.props.data.name) {
                        armorComponent = armorSet.lowerBody;
                    }
                }
                if (armorSet.legs !== undefined) {
                    if (armorSet.legs.name === this.props.data.name) {
                        armorComponent = armorSet.legs;
                    }
                }
            }

            //If armorComponent is found, construct the navigateTo object for navigation
            if (armorComponent !== undefined) {
                icon = armorComponent.iconMale;

                if (armorComponent.materials !== undefined) {
                    materials = armorComponent.materials.map((material, index) => {
                        let materialObject = _.find(database.monsterMaterials, {'name': material.name});

                        if (materialObject !== undefined) {
                            return this._returnMaterials(material, materialObject);
                        }
                    })
                }

                navigateTo = {
                    screen: 'ArmorSubDetail',
                    item: armorComponent,
                };
            }
        }
        else if (this.props.data.type === 'Weapon') {
            let weapon;
            let treeToSearch;
            switch (this.props.data.extra) {
                case 'Great Sword':
                    treeToSearch = database.greatSwordTree;
                    break;

                case 'Long Sword':
                    treeToSearch = database.longSwordTree;
                    break;

                case 'Sword and Shield':
                    treeToSearch = database.swordAndShieldTree;
                    break;

                case 'Dual Blades':
                    treeToSearch = database.dualBladesTree;
                    break;

                case 'Hammer':
                    treeToSearch = database.hammerTree;
                    break;

                case 'Hunting Horn':
                    treeToSearch = database.huntingHornTree;
                    break;

                case 'Lance':
                    treeToSearch = database.lanceTree;
                    break;

                case 'Gunlance':
                    treeToSearch = database.gunlanceTree;
                    break;

                case 'Switch Axe':
                    treeToSearch = database.switchAxeTree;
                    break;

                case 'Charge Blade':
                    treeToSearch = database.chargeBladeTree;
                    break;

                case 'Insect Glaive':
                    treeToSearch = database.insectGlaiveTree;
                    break;

                case 'Light Bowgun':
                    treeToSearch = database.lightBowgunTree;
                    break;

                case 'Heavy Bowgun':
                    treeToSearch = database.heavyBowgunTree;
                    break;

                case 'Bow':
                    treeToSearch = database.bowTree;
                    break;
            }

            _.forEach(treeToSearch, (weaponTree) => {
                _.forEach(weaponTree.data, (weaponInTree) => {
                    if (weaponInTree.name === this.props.data.name) {
                        weapon = weaponInTree;
                        return false;
                    }
                })
            });

            if (weapon !== undefined) {
                icon = weapon.icon;

                //Gather weapon materials info
                if (weapon.materials !== undefined) {
                    materials = weapon.materials.map((material, index) => {
                        let materialObject = _.find(database.monsterMaterials, {'name': material.name});

                        if (materialObject !== undefined) {
                            return this._returnMaterials(material, materialObject);
                        }
                    })
                }

                navigateTo = {
                    screen: 'WeaponSubDetail',
                    item: weapon,
                };
            }
        }
        else if (this.props.data.type === 'Charm') {
            let charm = _.find(database.charms, {name: this.props.data.name});

            if (charm !== undefined) {
                icon = charm.icon;

                if (charm.materials !== undefined) {
                    materials = charm.materials.map((material, index) => {
                        let materialObject = _.find(database.monsterMaterials, {'name': material.name});

                        if (materialObject !== undefined) {
                            return this._returnMaterials(material, materialObject);
                        }
                    })
                }

                navigateTo = {
                    screen: 'CharmDetail',
                    item: charm,
                };
            }
        }

        let image = null;
        if (icon !== undefined) {
            image = <Image source={icon} style={{
                width: 50,
                height: 50,
                margin: 10,
                marginTop: 16,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
        }

        return (
            <Animated.View style={[
                styles.row,
                this._style,
            ]}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <MHWTouchable onPress={() => {
                        if (navigateTo !== undefined) {
                            this.props.navigation.navigate(navigateTo.screen, {
                                item: navigateTo.item,
                                wishlist: this.props.parent,
                                theme: this.props.navigation.state.params.theme,
                            })
                        }
                    }} content={
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            {image}
                            <View style={{flexDirection: 'column'}}>
                                <Text style={[styles.item, themeText]}>{this.props.data.name}</Text>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    {materials}
                                </View>
                            </View>

                        </View>
                    }/>
                    <Image source={require('../assets/general/icon_reorder.png')} style={{
                        width: 30,
                        height: 30,
                        margin: 10,
                    }}/>
                </View>
            </Animated.View>
        );
    }

    _returnMaterials(material, materialFromDatabase) {
        //Theme
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        return <View key={`${material.name}`}
                     style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={materialFromDatabase.icon} style={{width: 20, height: 20, margin: 4}}/>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={[globalStyles.subtitle, themeText]}>{material.name} x{material.quantity}</Text>
            </View>
        </View>
    }
}

export default class WishlistScreen extends React.PureComponent {
    state = {
        showAds: true,
        dataArray: [],
        refreshing: false,
        // dataArray: [{
        // 	name: 'Diablos Nero Helm ⍺',
        // 	type: 'ArmorComponent',
        // 	extra: 'Diablos Nero ⍺',
        // 	icon: require('../assets/armors/components/diablos_nero_helm_alpha_male.png'),
        // },
        // 	{
        // 		name: 'Diablos Nero Helm ß',
        // 		type: 'ArmorComponent',
        // 		extra: 'Diablos Nero ß',
        // 		icon: require('../assets/armors/components/diablos_nero_helm_beta_male.png'),
        // 	},
        // 	{
        // 		name: 'Nergal Judicator',
        // 		type: 'Weapon',
        // 		extra: 'Great Sword',
        // 		icon: require('../assets/weapons/great_sword/nergal_judicator.png'),
        // 	}
        // ],
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-wishlist').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {theme: navigation.state.params.theme})} content={
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

        await this._refreshData();
    }

    render() {
        //Theme
        let themeBackground = null;
        let themeText = null;
        let themeCrafted = '#b3e5fc';
        let iconWishlistEmpty = require('../assets/general/icon_wishlist_empty.png');
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
                themeText = globalStyles.textDark;
                iconWishlistEmpty = require('../assets/general/icon_wishlist_empty_dark.png');
                themeCrafted = null;
            }
        }

        let list = null;
        if (this.state.shouldDisplayList) {
            list = <SortableList
                style={styles.list}
                contentContainerStyle={styles.contentContainer}
                data={this.state.dataArray}
                sortingEnabled={true}
                rowActivationTime={150}
                renderRow={this._renderRow}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
                renderFooter={() => <Text style={[globalStyles.subtitle, themeText, {textAlign: 'center'}]}>Hold the
                    right icon and drag to
                    reorder the items. </Text>}
            />;
        } else {
            list = <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={iconWishlistEmpty} style={{width: 100, height: 100}}/>
                <Text style={[{
                    textAlign: 'center',
                    lineHeight: 30,
                    padding: 20
                }, themeText]}>{I18n.t('wishlist-empty').Translation}</Text>
            </View>
        }

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                {list}
                {this._renderAds()}
            </SafeAreaView>

        );
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this._refreshData().then(() => {
            this.setState({refreshing: false});
        });
    };

    _refreshData = async () => {
        setTimeout(async () => {
            let keys = await AsyncStorage.getAllKeys();
            let wishlist = _.filter(keys, (key) => {
                return _.startsWith(key, "Wishlist");
            });
            let dataSource = [];
            let shouldDisplayList = false;
            if (wishlist.length > 0) {
                _.forEach(wishlist, (wishlistItem) => {
                    let split = wishlistItem.split('~');
                    let wishlistObject = {
                        name: split[1],
                        type: split[2],
                        extra: split[3],
                        icon: split[4],
                    };
                    // console.log(wishlistObject);
                    dataSource.push(wishlistObject);
                });
                shouldDisplayList = true;
            }

            this.setState({
                dataArray: dataSource,
                shouldDisplayList: shouldDisplayList
            });
        }, 200);
    };

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/9311963913', 'ca-app-pub-9242567842673294/9357634986');
        } else {
            return null;
        }
    }

    _renderRow = ({data, active}) => {
        return <WishlistItem data={data} active={active} navigation={this.props.navigation} parent={this}
                             theme={this.props.navigation.state.params.theme}/>
    }
}