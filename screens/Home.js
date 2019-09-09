/**
 * Created by nicholaslie on 17/02/18.
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
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";
import {makeAdMob, productIdRemoveAds} from "../utility";
import globalStyles from "../styles";
import I18n from '../i18n/i18n';
import * as StoreReview from 'react-native-store-review';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    homeButton: {
        borderColor: '#FFFFFF',
        borderWidth: 0.5,
        width: Dimensions.get('window').width / 4,
        height: 100,
        borderRadius: 4,
        margin: 10,
    },
});

const InAppBilling = require("react-native-billing");

class HomeButton extends Component {
    state = {
        appLanguage: I18n.locale
    };

    render() {
        let content = <View style={styles.homeButton}>
            <View style={{
                flex: 1, flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={this.props.icon} style={globalStyles.navSearch}/>
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                    textAlign: 'center',
                    padding: 4,
                }}>{I18n.t(this.props.name).Translation}</Text>
            </View>
        </View>;


        return <MHWTouchable onPress={async () => {
            let homeClicks = await AsyncStorage.getItem('homeClicks');
            let theme = await AsyncStorage.getItem('theme');
            // Track home button clicks for requesting review
            if (homeClicks !== null) {
                await AsyncStorage.setItem('homeClicks', (parseInt(homeClicks) + 1).toString());
            } else {
                await AsyncStorage.setItem('homeClicks', '1');
            }

            if (this.props.navigateTo === 'EventCalendar') {
                let language = await AsyncStorage.getItem('language');

                Alert.alert(
                    I18n.t('ui-platform').Translation,
                    I18n.t('ui-choose-platform').Translation,
                    [
                        {
                            text: I18n.t('ui-pc-steam').Translation,
                            onPress: () => {
                                let eventCalendarUrl = 'http://game.capcom.com/world/steam/us/schedule.html';
                                if (language !== undefined) {
                                    switch (language) {
                                        case 'ch':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/hk/schedule.html';
                                            break;

                                        case 'de':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/de/schedule.html';
                                            break;

                                        case 'en':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/us/schedule.html';
                                            break;

                                        case 'es':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/es/schedule.html';
                                            break;

                                        case 'fr':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/fr/schedule.html';
                                            break;

                                        case 'it':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/it/schedule.html';
                                            break;

                                        case 'jp':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/ja/schedule.html';
                                            break;

                                        case 'kr':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/kr/schedule.html';
                                            break;

                                        case 'pt':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/us/schedule.html';
                                            break;

                                        case 'tl':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/us/schedule.html';
                                            break;
                                    }
                                }

                                this.props.navigation.navigate(this.props.navigateTo, {
                                    parentScreen: this.props.parentScreen,
                                    theme: theme,
                                    url: eventCalendarUrl
                                })
                            }
                        },
                        {
                            text: I18n.t('ui-ps4-xbox').Translation,
                            onPress: () => {
                                let eventCalendarUrl = 'http://game.capcom.com/world/us/schedule.html';
                                if (language !== undefined) {
                                    switch (language) {
                                        case 'ch':
                                            eventCalendarUrl = 'http://game.capcom.com/world/hk/schedule.html';
                                            break;

                                        case 'de':
                                            eventCalendarUrl = 'http://game.capcom.com/world/de/schedule.html';
                                            break;

                                        case 'en':
                                            eventCalendarUrl = 'http://game.capcom.com/world/us/schedule.html';
                                            break;

                                        case 'es':
                                            eventCalendarUrl = 'http://game.capcom.com/world/es/schedule.html';
                                            break;

                                        case 'fr':
                                            eventCalendarUrl = 'http://game.capcom.com/world/fr/schedule.html';
                                            break;

                                        case 'it':
                                            eventCalendarUrl = 'http://game.capcom.com/world/it/schedule.html';
                                            break;

                                        case 'jp':
                                            eventCalendarUrl = 'http://game.capcom.com/world/ja/schedule.html';
                                            break;

                                        case 'kr':
                                            eventCalendarUrl = 'http://game.capcom.com/world/kr/schedule.html';
                                            break;

                                        case 'pt':
                                            eventCalendarUrl = 'http://game.capcom.com/world/us/schedule.html';
                                            break;

                                        case 'tl':
                                            eventCalendarUrl = 'http://game.capcom.com/world/us/schedule.html';
                                            break;
                                    }
                                }

                                this.props.navigation.navigate(this.props.navigateTo, {
                                    parentScreen: this.props.parentScreen,
                                    theme: theme,
                                    url: eventCalendarUrl
                                })
                            },
                        },
                        {
                            text: I18n.t('ui-cancel').Translation,
                            onPress: () => {
                            },
                            style: 'cancel'
                        }
                    ],
                    {cancelable: true}
                )
            } else if (this.props.navigateTo === 'ReleaseNotes') {
                let language = await AsyncStorage.getItem('language');

                Alert.alert(
                    I18n.t('ui-platform').Translation,
                    I18n.t('ui-choose-platform').Translation,
                    [
                        {
                            text: I18n.t('ui-pc-steam').Translation,
                            onPress: () => {
                                let eventCalendarUrl = 'http://game.capcom.com/world/steam/us/infomation.html';
                                if (language !== undefined) {
                                    switch (language) {
                                        case 'ch':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/hk/infomation.html';
                                            break;

                                        case 'de':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/de/infomation.html';
                                            break;

                                        case 'en':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/us/infomation.html';
                                            break;

                                        case 'es':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/es/infomation.html';
                                            break;

                                        case 'fr':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/fr/infomation.html';
                                            break;

                                        case 'it':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/it/infomation.html';
                                            break;

                                        case 'jp':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/ja/infomation.html';
                                            break;

                                        case 'kr':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/kr/infomation.html';
                                            break;

                                        case 'pt':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/us/infomation.html';
                                            break;

                                        case 'tl':
                                            eventCalendarUrl = 'http://game.capcom.com/world/steam/us/infomation.html';
                                            break;
                                    }
                                }

                                this.props.navigation.navigate(this.props.navigateTo, {
                                    parentScreen: this.props.parentScreen,
                                    theme: theme,
                                    url: eventCalendarUrl
                                })
                            }
                        },
                        {
                            text: I18n.t('ui-ps4-xbox').Translation,
                            onPress: () => {
                                let eventCalendarUrl = 'http://game.capcom.com/world/us/infomation.html';
                                if (language !== undefined) {
                                    switch (language) {
                                        case 'ch':
                                            eventCalendarUrl = 'http://game.capcom.com/world/hk/infomation.html';
                                            break;

                                        case 'de':
                                            eventCalendarUrl = 'http://game.capcom.com/world/de/infomation.html';
                                            break;

                                        case 'en':
                                            eventCalendarUrl = 'http://game.capcom.com/world/us/infomation.html';
                                            break;

                                        case 'es':
                                            eventCalendarUrl = 'http://game.capcom.com/world/es/infomation.html';
                                            break;

                                        case 'fr':
                                            eventCalendarUrl = 'http://game.capcom.com/world/fr/infomation.html';
                                            break;

                                        case 'it':
                                            eventCalendarUrl = 'http://game.capcom.com/world/it/infomation.html';
                                            break;

                                        case 'jp':
                                            eventCalendarUrl = 'http://game.capcom.com/world/ja/infomation.html';
                                            break;

                                        case 'kr':
                                            eventCalendarUrl = 'http://game.capcom.com/world/kr/infomation.html';
                                            break;

                                        case 'pt':
                                            eventCalendarUrl = 'http://game.capcom.com/world/us/infomation.html';
                                            break;

                                        case 'tl':
                                            eventCalendarUrl = 'http://game.capcom.com/world/us/infomation.html';
                                            break;
                                    }
                                }

                                this.props.navigation.navigate(this.props.navigateTo, {
                                    parentScreen: this.props.parentScreen,
                                    theme: theme,
                                    url: eventCalendarUrl
                                })
                            },
                        },
                        {
                            text: I18n.t('ui-cancel').Translation,
                            onPress: () => {
                            },
                            style: 'cancel'
                        }
                    ],
                    {cancelable: true}
                )
            } else {
                this.props.navigation.navigate(this.props.navigateTo, {
                    parentScreen: this.props.parentScreen,
                    theme: theme
                })
            }
        }} content={content}/>
    }
}

export default class HomeScreen extends React.PureComponent {
    state = {
        appLanguage: I18n.locale,
        showAds: true
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            header: null,
        };
    };

    async componentWillMount() {
        let stateObject = {};
        let language = await AsyncStorage.getItem('language');
        if (language !== undefined) {
            I18n.locale = language;
            stateObject['appLanguage'] = language;
        }

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
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#000000'}}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#000000"
                />

                <ScrollView style={{backgroundColor: 'black'}}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View>
                            <Image source={require('./../assets/home/logo_black.jpg')}
                                   resizeMode='contain'
                                   style={{width: Dimensions.get('window').width - 50, height: 150}}
                            />
                        </View>

                        <FlatList
                            data={[
                                {
                                    name: 'home-quick-search',
                                    navigateTo: 'Search',
                                    icon: require('../assets/general/icon_search.png')
                                },
                                {
                                    name: 'home-wishlist',
                                    navigateTo: 'Wishlist',
                                    icon: require('../assets/general/icon_wishlist.png')
                                },
                                {
                                    name: 'home-armors',
                                    navigateTo: 'Armors',
                                    icon: require('../assets/general/icon_armors.png')
                                },
                                {
                                    name: 'home-armor-sets',
                                    navigateTo: 'ArmorSets',
                                    icon: require('../assets/general/icon_armor_sets.png')
                                },
                                {
                                    name: 'home-layered-armors',
                                    navigateTo: 'LayeredArmors',
                                    icon: require('../assets/general/icon_layered_armors.png')
                                },
                                {
                                    name: 'home-weapons',
                                    navigateTo: 'Weapons',
                                    icon: require('../assets/general/icon_weapons.png')
                                },
                                {
                                    name: 'home-loadouts',
                                    navigateTo: 'Loadouts',
                                    icon: require('../assets/general/icon_loadouts.png')
                                },
                                {
                                    name: 'home-monsters',
                                    navigateTo: 'Monsters',
                                    icon: require('../assets/general/icon_monsters.png')
                                },
                                {
                                    name: 'home-monster-materials',
                                    navigateTo: 'MonsterMaterials',
                                    icon: require('../assets/general/icon_monster_materials.png')
                                },
                                {
                                    name: 'home-specialized-tools',
                                    navigateTo: 'SpecializedTools',
                                    icon: require('../assets/general/icon_specialized_tools.png')
                                },
                                {
                                    name: 'home-crafting-list',
                                    navigateTo: 'CraftingList',
                                    icon: require('../assets/general/icon_combination_list.png')
                                },
                                {
                                    name: 'home-palico-equipment',
                                    navigateTo: 'PalicoEquipment',
                                    icon: require('../assets/general/icon_palico_equipments.png')
                                },
                                {
                                    name: 'home-palico-gadgets',
                                    navigateTo: 'PalicoGadgets',
                                    icon: require('../assets/general/icon_palico_gadgets.png')
                                },
                                {
                                    name: 'home-palico-armor-sets',
                                    navigateTo: 'PalicoArmorSets',
                                    icon: require('../assets/general/icon_palico_armor_set.png')
                                },
                                {
                                    name: 'home-skills',
                                    navigateTo: 'Skills',
                                    icon: require('../assets/general/icon_skills.png')
                                },
                                {
                                    name: 'home-kinsect-trees',
                                    navigateTo: 'KinsectTrees',
                                    icon: require('../assets/general/icon_kinsect_trees.png')
                                },
                                {
                                    name: 'home-decorations',
                                    navigateTo: 'Decorations',
                                    icon: require('../assets/general/icon_decorations.png')
                                },
                                {
                                    name: 'home-charms',
                                    navigateTo: 'Charms',
                                    icon: require('../assets/general/icon_charms.png')
                                },
                                {
                                    name: 'home-endemic-life',
                                    navigateTo: 'EndemicLife',
                                    icon: require('../assets/general/icon_endemic_life.png')
                                },
                                {
                                    name: 'home-items',
                                    navigateTo: 'Items',
                                    icon: require('../assets/general/icon_items.png')
                                },
                                {
                                    name: 'home-quests',
                                    navigateTo: 'Quests',
                                    icon: require('../assets/general/icon_quests.png')
                                },
                                {
                                    name: 'home-canteen',
                                    navigateTo: 'Canteen',
                                    icon: require('../assets/general/icon_canteen.png')
                                },
                                {
                                    name: 'home-deliveries',
                                    navigateTo: 'Deliveries',
                                    icon: require('../assets/general/icon_deliveries.png')
                                },
                                {
                                    name: 'home-critical-bounties',
                                    navigateTo: 'CriticalBounties',
                                    icon: require('../assets/general/icon_critical_bounties.png')
                                },
                                {
                                    name: 'home-arena-quests',
                                    navigateTo: 'ArenaQuests',
                                    icon: require('../assets/general/icon_arena_quests.png')
                                },
                                {
                                    name: 'home-trophies',
                                    navigateTo: 'Trophies',
                                    icon: require('../assets/general/icon_trophies.png')
                                },
                                {
                                    name: 'home-play-guide',
                                    navigateTo: 'PlayGuide',
                                    icon: require('../assets/general/icon_play_guide.png')
                                },
                                {
                                    name: 'home-poogie',
                                    navigateTo: 'Poogie',
                                    icon: require('../assets/general/icon_poogie.png')
                                },
                                {
                                    name: 'home-release-notes',
                                    navigateTo: 'ReleaseNotes',
                                    icon: require('../assets/general/icon_release_notes.png')
                                },
                                {
                                    name: 'home-event-calendar',
                                    navigateTo: 'EventCalendar',
                                    icon: require('../assets/general/icon_event_calendar.png'),
                                },
                                {
                                    name: 'home-settings',
                                    navigateTo: 'Settings',
                                    icon: require('../assets/general/icon_settings.png')
                                },
                                {
                                    name: 'home-about',
                                    navigateTo: 'About',
                                    icon: require('../assets/general/icon_about.png')
                                },
                            ]}
                            numColumns={3}
                            renderItem={
                                ({item}) => <HomeButton name={item.name} navigateTo={item.navigateTo}
                                                        navigation={this.props.navigation} icon={item.icon}
                                                        parentScreen={this}/>}
                            keyExtractor={(item, index) => item.name}
                            shouldItemUpdate={(props, nextProps) => {
                                return false;
                            }}
                        />
                    </View>
                </ScrollView>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    async componentDidMount() {
        // let _ = require('lodash');
        // let list = ['Fire 240', 'Ice 120', 'None', 'Fire 480', 'Fire (360)', 'Ice (240)', 'Ice 480', 'Water 120', 'Water 240', 'Water 480', 'Thunder 240', 'Water 180', 'Thunder 120', 'Thunder 180', 'Ice 60'];
        // list = _.filter(list, (data) => {
        //     return data.match(/(Fire) (\d+)|(Fire [(](\d+)[)])/g);
        // });
        // list = _.orderBy(list, (data) => {
        //     return parseInt(data.match(/\d+/g));
        // }, ['desc']);
        // console.warn(list);


        if (Platform.OS === 'ios') {
            let isReviewed = await AsyncStorage.getItem('isReviewed');
            if (isReviewed !== undefined && isReviewed !== 'true') {
                let homeClicks = await AsyncStorage.getItem('homeClicks');
                if (homeClicks !== null && parseInt(homeClicks) >= 10 && StoreReview.isAvailable && !__DEV__) {
                    StoreReview.requestReview();
                }
            }
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/3753950329', 'ca-app-pub-9242567842673294/9705119349');
        } else {
            return null;
        }
    }

    async _updateLanguage() {
        let language = await AsyncStorage.getItem('language');
        I18n.locale = language;
        this.setState({appLanguage: I18n.locale})
    }
}
