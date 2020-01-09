/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    SectionList,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from "react-native";
import globalStyles from '../styles';
import * as database from '../database';
import {ArmorItem} from './Armors';
import {WeaponItem} from './WeaponDetail';
import {MonsterItem} from './Monsters';
import {MonsterMaterialItem} from './MonsterMaterials';
import {SpecializedToolItem} from './SpecializedTools';
import {CraftingListItem} from './CraftingList';
import {PalicoItem} from './PalicoEquipment';
import {PalicoGadgetItem} from './PalicoGadgets';
import {SkillItem} from './Skills';
import {KinsectTreeItem} from './KinsectTrees';
import {DecorationItem} from './Decorations';
import {CharmItem} from './Charms';
import {EndemicLifeItem} from './EndemicLife';
import {QuestItem} from './Quests';
import {DeliveryItem} from './Deliveries';
import {TrophyItem} from './Trophies';
import {makeAdMob, productIdRemoveAds} from "../utility";
import {ArmorSetItem} from "./ArmorSets";
import {CanteenItem, CanteenSkillItem} from "./Canteen";
import {PalicoArmorSetItem} from "./PalicoArmorSets";
import I18n from '../i18n/i18n';
import {ArmorComponent} from "./ArmorDetail";
import {ArenaQuestItem} from "./ArenaQuests";
import {Item} from "./Items";
import {PlayGuideItem} from "./PlayGuide";
import {PoogieItem} from "./Poogie";
import {LayeredArmorItem} from "./LayeredArmors";
import {CriticalBountyItem} from "./CriticalBounties";
import {arenaArmors} from "../database-armors";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export default class SearchScreen extends React.PureComponent {
    state = {
        showAds: true,
        searchResults: this._filterData(),
        searchText: '',
        quickSearch: 'Off',
    };

    static navigationOptions = ({navigation, navigationOptions}) => {
        let searchTitle = I18n.t('home-quick-search').Translation;

        switch (navigation.state.params.scope) {
            case 'ArenaQuests':
                searchTitle = I18n.t('search-arena-quests').Translation;
                break;

            case 'Armors':
                searchTitle = I18n.t('search-armors').Translation;
                break;

            case 'ArmorComponents':
                searchTitle = I18n.t('search-armor-components').Translation;
                break;

            case 'ArmorSets':
                searchTitle = I18n.t('search-armor-sets').Translation;
                break;

            case 'Canteen':
                searchTitle = I18n.t('search-canteen').Translation;
                break;

            case 'CanteenSkills':
                searchTitle = I18n.t('search-canteen-skills').Translation;
                break;

            case 'Charms':
                searchTitle = I18n.t('search-charms').Translation;
                break;

            case 'CraftingList':
                searchTitle = I18n.t('search-crafting-list').Translation;
                break;

            case 'CriticalBounties':
                searchTitle = I18n.t('search-critical-bounties').Translation;
                break;

            case 'Decorations':
                searchTitle = I18n.t('search-decorations').Translation;
                break;

            case 'Deliveries':
                searchTitle = I18n.t('search-deliveries').Translation;
                break;

            case 'EndemicLife':
                searchTitle = I18n.t('search-endemic-life').Translation;
                break;

            case 'Items':
                searchTitle = I18n.t('search-items').Translation;
                break;

            case 'KinsectTrees':
                searchTitle = I18n.t('search-kinsect-trees').Translation;
                break;

            case 'LayeredArmors':
                searchTitle = I18n.t('search-layered-armors').Translation;
                break;

            case 'MonsterMaterials':
                searchTitle = I18n.t('search-monster-materials').Translation;
                break;

            case 'Monsters':
                searchTitle = I18n.t('search-monsters').Translation;
                break;

            case 'PalicoArmorSets':
                searchTitle = I18n.t('search-palico-armor-sets').Translation;
                break;

            case 'PalicoEquipments':
                searchTitle = I18n.t('search-palico-equipments').Translation;
                break;

            case 'PalicoGadgets':
                searchTitle = I18n.t('search-palico-gadgets').Translation;
                break;

            case 'Poogie':
                searchTitle = I18n.t('search-poogie').Translation;
                break;

            case 'Quests':
                searchTitle = I18n.t('search-quests').Translation;
                break;

            case 'Skills':
                searchTitle = I18n.t('search-skills').Translation;
                break;

            case 'SpecializedTools':
                searchTitle = I18n.t('search-specialized-tools').Translation;
                break;

            case 'Trophies':
                searchTitle = I18n.t('search-trophies').Translation;
                break;

            case 'Weapons':
                searchTitle = I18n.t('search-weapons').Translation;
                break;

            default:
                searchTitle = I18n.t('home-quick-search').Translation;
                break;
        }

        return {
            title: searchTitle,
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
                ref="textInput"
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                autoFocus
                underlineColorAndroid='transparent'
                placeholder='Type to search..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchResults: this._filterData(text)
                    });
                }}
            />
        } else if (this.state.quickSearch === 'Off') {
            quickSearch = <TextInput
                ref="textInput"
                style={{
                    height: 40,
                    borderColor: 'white',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    margin: 20,
                    color: 'white',
                }}
                autoCorrect={false}
                autoFocus
                underlineColorAndroid='transparent'
                placeholder='Type to search..'
                placeholderTextColor='white'
                selectionColor='white'
                onChangeText={(text) => {
                    this.setState({
                        searchText: text
                    });
                }}
                onSubmitEditing={() => {
                    this.setState({
                        searchResults: this._filterData(this.state.searchText)
                    });
                }}
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
                                this.refs.textInput.setNativeProps({text: ''});
                                this.refs.textInput.focus();
                                this.setState({searchResults: this._filterData()});
                            }}
                            underlayColor="rgba(0, 0, 0, 0)"
                        >
                            <Image source={require('../assets/general/icon_clear_text.png')}
                                   style={{width: 40, height: 40, resizeMode: 'contain'}}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <SectionList
                    sections={this.state.searchResults}
                    renderSectionHeader={({section}) => {
                        if (section.data.length > 0) {
                            return <View>
                                <Text style={globalStyles.sectionHeader}>{section.title}</Text>
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

    _filterData(text) {
        let searchResult = [];

        switch (this.props.navigation.state.params.scope) {
            case 'ArenaQuests' :
                searchResult.push(this._searchArenaQuests(text));
                break;

            case 'Armors' :
                searchResult.push(this._searchArmors(text));
                break;

            case 'ArmorComponents':
                searchResult.push(this._searchArmorComponents(text));
                break;

            case 'ArmorSets':
                searchResult.push(this._searchArmorSets(text));
                break;

            case 'Canteen':
                searchResult.push(this._searchCanteen(text));
                break;

            case 'CanteenSkills':
                searchResult.push(this._searchCanteenSkills(text));
                break;

            case 'Charms':
                searchResult.push(this._searchCharms(text));
                break;

            case 'CraftingList':
                searchResult.push(this._searchCraftingList(text));
                break;

            case 'CriticalBounties':
                searchResult.push(this._searchCriticalBounties(text));
                break;

            case 'Decorations':
                searchResult.push(this._searchDecorations(text));
                break;

            case 'Deliveries':
                searchResult.push(this._searchDeliveries(text));
                break;

            case 'EndemicLife':
                searchResult.push(this._searchEndemicLife(text));
                break;

            case 'Items':
                searchResult.push(this._searchItems(text));
                break;

            case 'KinsectTrees':
                searchResult.push(this._searchKinsectTrees(text));
                break;

            case 'LayeredArmors':
                searchResult.push(this._searchLayeredArmors(text));
                break;

            case 'MonsterMaterials':
                searchResult.push(this._searchMonsterMaterials(text));
                break;

            case 'Monsters':
                searchResult.push(this._searchMonsters(text));
                break;

            case 'PalicoArmorSets':
                searchResult.push(this._searchPalicoArmorSets(text));
                break;

            case 'PalicoEquipments':
                searchResult.push(this._searchPalicoEquipments(text));
                break;

            case 'PalicoGadgets':
                searchResult.push(this._searchPalicoGadgets(text));
                break;

            case 'Poogie':
                searchResult.push(this._searchPoogie(text));
                break;

            case 'Quests':
                searchResult.push(this._searchQuests(text));
                break;

            case 'Skills':
                searchResult.push(this._searchSkills(text));
                break;

            case 'SpecializedTools':
                searchResult.push(this._searchSpecializedTools(text));
                break;

            case 'Trophies':
                searchResult.push(this._searchTrophies(text));
                break;

            case 'Weapons':
                searchResult.push(this._searchWeapons(text));
                break;

            default:
                searchResult.push(this._searchMonsters(text));
                searchResult.push(this._searchArmors(text));
                searchResult.push(this._searchArmorComponents(text));
                searchResult.push(this._searchArmorSets(text));
                searchResult.push(this._searchLayeredArmors(text));
                searchResult.push(this._searchWeapons(text));
                searchResult.push(this._searchMonsterMaterials(text));
                searchResult.push(this._searchSpecializedTools(text));
                searchResult.push(this._searchCraftingList(text));
                searchResult.push(this._searchPalicoEquipments(text));
                searchResult.push(this._searchPalicoGadgets(text));
                searchResult.push(this._searchPalicoArmorSets(text));
                searchResult.push(this._searchSkills(text));
                searchResult.push(this._searchKinsectTrees(text));
                searchResult.push(this._searchDecorations(text));
                searchResult.push(this._searchCharms(text));
                searchResult.push(this._searchEndemicLife(text));
                searchResult.push(this._searchItems(text));
                searchResult.push(this._searchQuests(text));
                searchResult.push(this._searchCanteen(text));
                searchResult.push(this._searchDeliveries(text));
                searchResult.push(this._searchCriticalBounties(text));
                searchResult.push(this._searchArenaQuests(text));
                searchResult.push(this._searchTrophies(text));
                searchResult.push(this._searchPoogie(text));
                searchResult.push(this._searchCanteenSkills(text));
                break;
        }

        return searchResult;

        // return [
        //
        // ];
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/7687506615', 'ca-app-pub-9242567842673294/5542513052');
        } else {
            return null;
        }
    }

    _searchArenaQuests(text) {
        let arenaQuests = _.filter(database.arenaQuests, function (arenaQuest) {
            if (text !== undefined) {
                if (arenaQuest.name.toLowerCase().match(text.toLowerCase())) {
                    return arenaQuest;
                }
            } else {
                return arenaQuest;
            }
        });
        return {
            title: I18n.t('home-arena-quests').Translation,
            data: arenaQuests,
            renderItem: ({item}) => <ArenaQuestItem item={item} navigation={this.props.navigation}
                                                    theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchArmorComponents(text) {
        //==ARMOR COMPONENTS==
        let lowRankArmorComponents = [];
        _.forEach(database.lowRankArmors, (lowRankArmor) => {
            if (lowRankArmor.head !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(lowRankArmor.head.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        lowRankArmorComponents.push(lowRankArmor.head);
                    } else {
                        return lowRankArmor.head;
                    }
                } else {
                    lowRankArmorComponents.push(lowRankArmor.head);
                }
            }
            if (lowRankArmor.upperBody !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(lowRankArmor.upperBody.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        lowRankArmorComponents.push(lowRankArmor.upperBody);
                    } else {
                        return lowRankArmor.upperBody;
                    }
                } else {
                    lowRankArmorComponents.push(lowRankArmor.upperBody);
                }
            }
            if (lowRankArmor.hands !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(lowRankArmor.hands.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        lowRankArmorComponents.push(lowRankArmor.hands);
                    } else {
                        return lowRankArmor.hands;
                    }
                } else {
                    lowRankArmorComponents.push(lowRankArmor.hands);
                }
            }
            if (lowRankArmor.lowerBody !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(lowRankArmor.lowerBody.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        lowRankArmorComponents.push(lowRankArmor.lowerBody);
                    } else {
                        return lowRankArmor.lowerBody;
                    }
                } else {
                    lowRankArmorComponents.push(lowRankArmor.lowerBody);
                }
            }
            if (lowRankArmor.legs !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(lowRankArmor.legs.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        lowRankArmorComponents.push(lowRankArmor.legs);
                    } else {
                        return lowRankArmor.legs;
                    }
                } else {
                    lowRankArmorComponents.push(lowRankArmor.legs);
                }
            }
        });

        let highRankArmorComponents = [];
        _.forEach(database.highRankArmors, (highRankArmor) => {
            if (highRankArmor.head !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(highRankArmor.head.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        highRankArmorComponents.push(highRankArmor.head);
                    } else {
                        return highRankArmor.head;
                    }
                } else {
                    highRankArmorComponents.push(highRankArmor.head);
                }
            }
            if (highRankArmor.upperBody !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(highRankArmor.upperBody.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        highRankArmorComponents.push(highRankArmor.upperBody);
                    } else {
                        return highRankArmor.upperBody;
                    }
                } else {
                    highRankArmorComponents.push(highRankArmor.upperBody);
                }
            }
            if (highRankArmor.hands !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(highRankArmor.hands.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        highRankArmorComponents.push(highRankArmor.hands);
                    } else {
                        return highRankArmor.hands;
                    }
                } else {
                    highRankArmorComponents.push(highRankArmor.hands);
                }
            }
            if (highRankArmor.lowerBody !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(highRankArmor.lowerBody.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        highRankArmorComponents.push(highRankArmor.lowerBody);
                    } else {
                        return highRankArmor.lowerBody;
                    }
                } else {
                    highRankArmorComponents.push(highRankArmor.lowerBody);
                }
            }
            if (highRankArmor.legs !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(highRankArmor.legs.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        highRankArmorComponents.push(highRankArmor.legs);
                    } else {
                        return highRankArmor.legs;
                    }
                } else {
                    highRankArmorComponents.push(highRankArmor.legs);
                }
            }
        });

        let masterRankArmorComponents = [];
        _.forEach(database.masterRankArmors, (masterRankArmor) => {
            if (masterRankArmor.head !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(masterRankArmor.head.translationKey) !== undefined && I18n.t(masterRankArmor.head.translationKey).Translation !== undefined &&
                        I18n.t(masterRankArmor.head.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        masterRankArmorComponents.push(masterRankArmor.head);
                    } else {
                        return masterRankArmor.head;
                    }
                } else {
                    masterRankArmorComponents.push(masterRankArmor.head);
                }
            }
            if (masterRankArmor.upperBody !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(masterRankArmor.upperBody.translationKey) !== undefined && I18n.t(masterRankArmor.upperBody.translationKey).Translation !== undefined &&
                        I18n.t(masterRankArmor.upperBody.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        masterRankArmorComponents.push(masterRankArmor.upperBody);
                    } else {
                        return masterRankArmor.upperBody;
                    }
                } else {
                    masterRankArmorComponents.push(masterRankArmor.upperBody);
                }
            }
            if (masterRankArmor.hands !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(masterRankArmor.hands.translationKey) !== undefined && I18n.t(masterRankArmor.hands.translationKey).Translation !== undefined &&
                        I18n.t(masterRankArmor.hands.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        masterRankArmorComponents.push(masterRankArmor.hands);
                    } else {
                        return masterRankArmor.hands;
                    }
                } else {
                    masterRankArmorComponents.push(masterRankArmor.hands);
                }
            }
            if (masterRankArmor.lowerBody !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(masterRankArmor.lowerBody.translationKey) !== undefined && I18n.t(masterRankArmor.lowerBody.translationKey).Translation !== undefined &&
                        I18n.t(masterRankArmor.lowerBody.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        masterRankArmorComponents.push(masterRankArmor.lowerBody);
                    } else {
                        return masterRankArmor.lowerBody;
                    }
                } else {
                    masterRankArmorComponents.push(masterRankArmor.lowerBody);
                }
            }
            if (masterRankArmor.legs !== undefined) {
                if (text !== undefined) {
                    if (I18n.t(masterRankArmor.legs.translationKey) !== undefined && I18n.t(masterRankArmor.legs.translationKey).Translation !== undefined &&
                        I18n.t(masterRankArmor.legs.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                        masterRankArmorComponents.push(masterRankArmor.legs);
                    } else {
                        return masterRankArmor.legs;
                    }
                } else {
                    masterRankArmorComponents.push(masterRankArmor.legs);
                }
            }
        });
        let armorComponents = _.concat(lowRankArmorComponents, highRankArmorComponents, masterRankArmorComponents);

        return {
            title: I18n.t('ui-armor-components').Translation,
            data: armorComponents,
            renderItem: ({item}) => <ArmorComponent item={item} navigation={this.props.navigation}
                                                    theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchArmors(text) {
        let filteredLowRankArmors = _.filter(database.lowRankArmors, (lowRankArmor) => {
            if (text !== undefined) {
                if (I18n.t(lowRankArmor.translationKey) !== undefined && I18n.t(lowRankArmor.translationKey).Translation !== undefined &&
                    I18n.t(lowRankArmor.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return lowRankArmor;
                }
            } else {
                return lowRankArmor;
            }
        });
        let filteredHighRankArmors = _.filter(database.highRankArmors, (highRankArmor) => {
            if (text !== undefined) {
                if (I18n.t(highRankArmor.translationKey) !== undefined && I18n.t(highRankArmor.translationKey).Translation !== undefined &&
                    I18n.t(highRankArmor.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return highRankArmor;
                }
            } else {
                return highRankArmor;
            }
        });
        let filteredMasterRankArmors = _.filter(database.masterRankArmors, (masterRankArmor) => {
            if (text !== undefined) {
                if (I18n.t(masterRankArmor.translationKey) !== undefined && I18n.t(masterRankArmor.translationKey).Translation !== undefined &&
                    I18n.t(masterRankArmor.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return masterRankArmor;
                }
            } else {
                return masterRankArmor;
            }
        });
        let filteredArenaArmors = _.filter(database.arenaArmors, (arenaArmor) => {
            if (text !== undefined) {
                if (I18n.t(arenaArmor.translationKey) !== undefined && I18n.t(arenaArmor.translationKey).Translation !== undefined &&
                    I18n.t(arenaArmor.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return arenaArmor;
                }
            } else {
                return arenaArmor;
            }
        });
        let armors = _.concat(filteredLowRankArmors, filteredHighRankArmors, filteredMasterRankArmors, filteredArenaArmors);

        return {
            title: I18n.t('home-armors').Translation,
            data: armors,
            renderItem: ({item}) => {
                if (item.head !== undefined){
                    return <ArmorItem item={item} navigation={this.props.navigation}
                                      theme={this.props.navigation.state.params.theme}/>
                } else {
                    return <ArmorComponent ref="head" item={item} navigation={this.props.navigation}
                                           parent={this.props.navigation.state.params.parent}
                                           theme={this.props.navigation.state.params.theme}/>
                }
            }
        }
    }

    _searchArmorSets(text) {
        let armorSets = _.filter(database.armorSets, function (armorSet) {
            if (text !== undefined) {
                if (armorSet.name.toLowerCase().match(text.toLowerCase())) {
                    return armorSet;
                }
            } else {
                return armorSet;
            }
        });

        return {
            title: I18n.t('home-armor-sets').Translation,
            data: armorSets,
            renderItem: ({item}) => <ArmorSetItem item={item} navigation={this.props.navigation}
                                                  theme={this.props.navigation.state.params.theme}/>
        }

    }

    _searchCanteen(text) {
        let canteen = _.filter(_.concat(database.canteenMeats, database.canteenFish, database.canteenVeggies, database.canteenDrinks), function (canteen) {
            if (text !== undefined) {
                if (canteen.name.toLowerCase().match(text.toLowerCase())) {
                    return canteen;
                }
            } else {
                return canteen;
            }
        });

        return {
            title: I18n.t('home-canteen').Translation,
            data: canteen,
            renderItem: ({item}) => <CanteenItem item={item} navigation={this.props.navigation}
                                                 theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchCanteenSkills(text) {
        let canteenSkills = _.filter(database.canteenSkills, function (canteenSkill) {
            if (text !== undefined) {
                if (canteenSkill.name.toLowerCase().match(text.toLowerCase())) {
                    return canteenSkill;
                }
            } else {
                return canteenSkill;
            }
        });
        return {
            title: I18n.t('search-canteen-skills').Translation,
            data: canteenSkills,
            renderItem: ({item}) => <CanteenSkillItem item={item} navigation={this.props.navigation}
                                                      theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchCharms(text) {
        let charms = _.filter(database.charms, function (charm) {
            if (text !== undefined) {
                if (charm.name.toLowerCase().match(text.toLowerCase())) {
                    return charm;
                }
            } else {
                return charm;
            }
        });

        return {
            title: I18n.t('home-charms').Translation,
            data: charms,
            renderItem: ({item}) => <CharmItem item={item} navigation={this.props.navigation}
                                               theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchCraftingList(text) {
        let craftingList = _.filter(database.craftingList, function (craftingListItem) {
            if (text !== undefined) {
                if (craftingListItem.productName.toLowerCase().match(text.toLowerCase())) {
                    return craftingListItem;
                }
            } else {
                return craftingListItem;
            }
        });

        return {
            title: I18n.t('home-crafting-list').Translation,
            data: craftingList,
            renderItem: ({item}) => <CraftingListItem item={item} navigation={this.props.navigation}
                                                      theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchCriticalBounties(text) {
        let criticalBounties = [];
        _.forEach(database.criticalBounties, function (criticalBounty) {
            let filteredCriticalBounties = _.filter(criticalBounty.data, (bounty) => {
                if (text !== undefined) {
                    if (bounty.name.toLowerCase().match(text.toLowerCase())) {
                        return bounty;
                    }
                } else {
                    return bounty;
                }
            });

            criticalBounties = _.concat(criticalBounties, filteredCriticalBounties);
        });

        return {
            title: I18n.t('home-critical-bounties').Translation,
            data: criticalBounties,
            renderItem: ({item}) => <CriticalBountyItem item={item} navigation={this.props.navigation}
                                                        theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchDecorations(text) {
        let decorations = _.filter(_.concat(database.decorationsJewel1, database.decorationsJewel2, database.decorationsJewel3), function (decoration) {
            if (text !== undefined) {
                if (decoration.name.toLowerCase().match(text.toLowerCase())) {
                    return decoration;
                }
            } else {
                return decoration;
            }
        });

        return {
            title: I18n.t('home-decorations').Translation,
            data: decorations,
            renderItem: ({item}) => <DecorationItem item={item} navigation={this.props.navigation}
                                                    theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchDeliveries(text) {
        let deliveries = _.filter(database.deliveries, function (delivery) {
            if (text !== undefined) {
                if (delivery.name.toLowerCase().match(text.toLowerCase())) {
                    return delivery;
                }
            } else {
                return delivery;
            }
        });

        return {
            title: I18n.t('home-deliveries').Translation,
            data: deliveries,
            renderItem: ({item}) => <DeliveryItem item={item} navigation={this.props.navigation}
                                                  theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchEndemicLife(text) {
        let endemicLife = [];
        _.forEach(database.endemicLife, function (endemic) {
            let filteredEndemicLife = _.filter(endemic.data, (endemicData) => {
                if (text !== undefined) {
                    if (endemicData.name.toLowerCase().match(text.toLowerCase())) {
                        return endemicData;
                    }
                } else {
                    return endemicData;
                }
            });

            endemicLife = _.concat(endemicLife, filteredEndemicLife);
        });

        return {
            title: I18n.t('home-endemic-life').Translation,
            data: endemicLife,
            renderItem: ({item}) => <EndemicLifeItem item={item} navigation={this.props.navigation}
                                                     theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchItems(text) {
        let items = _.filter(database.items, function (item) {
            if (text !== undefined) {
                if (item.name.toLowerCase().match(text.toLowerCase())) {
                    return item;
                }
            } else {
                return item;
            }
        });

        return {
            title: I18n.t('home-items').Translation,
            data: items,
            renderItem: ({item}) => <Item item={item} navigation={this.props.navigation}
                                          theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchKinsectTrees(text) {
        let kinsectTrees = [];
        _.forEach(database.kinsectTrees, function (kinsectTree) {
            let filteredKinsectTrees = _.filter(kinsectTree.data, (kinsectTreeData) => {
                if (text !== undefined) {
                    if (kinsectTreeData.name.toLowerCase().match(text.toLowerCase())) {
                        return kinsectTreeData;
                    }
                } else {
                    return kinsectTreeData;
                }
            });

            kinsectTrees = _.concat(kinsectTrees, filteredKinsectTrees);
        });

        return {
            title: I18n.t('home-kinsect-trees').Translation,
            data: kinsectTrees,
            renderItem: ({item}) => <KinsectTreeItem item={item} navigation={this.props.navigation}
                                                     theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchLayeredArmors(text) {
        let layeredArmors = _.filter(database.layeredArmors, function (layeredArmor) {
            if (text !== undefined) {
                if (layeredArmor.name.toLowerCase().match(text.toLowerCase())) {
                    return layeredArmor;
                }
            } else {
                return layeredArmor;
            }
        });

        return {
            title: I18n.t('home-layered-armors').Translation,
            data: layeredArmors,
            renderItem: ({item}) => <LayeredArmorItem item={item} navigation={this.props.navigation}
                                                      theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchMonsterMaterials(text) {
        let monsterMaterials = _.filter(database.monsterMaterials, function (monsterMaterial) {
            if (text !== undefined) {
                if (monsterMaterial.name.toLowerCase().match(text.toLowerCase())) {
                    return monsterMaterial;
                }
            } else {
                return monsterMaterial;
            }
        });

        return {
            title: I18n.t('home-monster-materials').Translation,
            data: monsterMaterials,
            renderItem: ({item}) => <MonsterMaterialItem item={item}
                                                         navigation={this.props.navigation}
                                                         theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchMonsters(text) {
        let monsters = _.filter(_.concat(database.smallMonsters, database.largeMonsters), function (monster) {
            if (text !== undefined) {
                if (monster.name.toLowerCase().match(text.toLowerCase())) {
                    return monster;
                }
            } else {
                return monster;
            }
        });

        return {
            title: I18n.t('home-monsters').Translation,
            data: monsters,
            renderItem: ({item}) => <MonsterItem item={item} navigation={this.props.navigation}
                                                 theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchPalicoArmorSets(text) {
        let palicoArmorSets = _.filter(database.palicoArmorSets, function (palicoArmorSet) {
            if (text !== undefined) {
                if (palicoArmorSet.name.toLowerCase().match(text.toLowerCase())) {
                    return palicoArmorSet;
                }
            } else {
                return palicoArmorSet;
            }
        });

        return {
            title: I18n.t('home-palico-armor-sets').Translation,
            data: palicoArmorSets,
            renderItem: ({item}) => <PalicoArmorSetItem item={item} navigation={this.props.navigation}
                                                        theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchPalicoEquipments(text) {
        let palicoEquipments = _.filter(_.concat(database.lowRankPalicoArmors, database.highRankPalicoArmors, database.masterRankPalicoArmors), function (palicoEquipment) {
            if (text !== undefined) {
                if (palicoEquipment.name.toLowerCase().match(text.toLowerCase())) {
                    return palicoEquipment;
                }
            } else {
                return palicoEquipment;
            }
        });

        return {
            title: I18n.t('home-palico-equipment').Translation,
            data: palicoEquipments,
            renderItem: ({item}) => <PalicoItem item={item} navigation={this.props.navigation}
                                                theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchPalicoGadgets(text) {
        let palicoGadgets = _.filter(database.palicoGadgets, function (palicoGadget) {
            if (text !== undefined) {
                if (palicoGadget.name.toLowerCase().match(text.toLowerCase())) {
                    return palicoGadget;
                }
            } else {
                return palicoGadget;
            }
        });

        return {
            title: I18n.t('home-palico-gadgets').Translation,
            data: palicoGadgets,
            renderItem: ({item}) => <PalicoGadgetItem item={item} navigation={this.props.navigation}
                                                      theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchPoogie(text) {
        let poogieCostumes = _.filter(database.poogieCostumes, function (poogieCostume) {
            if (text !== undefined) {
                if (I18n.t(poogieCostume.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return poogieCostume;
                }
            } else {
                return poogieCostume;
            }
        });
        return {
            title: I18n.t('home-poogie').Translation,
            data: poogieCostumes,
            renderItem: ({item}) => <PoogieItem item={item} navigation={this.props.navigation}
                                                theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchQuests(text) {
        let quests = _.filter(_.concat(database.assignedQuests, database.optionalQuests, database.eventQuests, database.specialAssignmentsQuests), function (quest) {
            if (text !== undefined) {
                if (quest.name.toLowerCase().match(text.toLowerCase())) {
                    return quest;
                }
            } else {
                return quest;
            }
        });

        return {
            title: I18n.t('home-quests').Translation,
            data: quests,
            renderItem: ({item}) => {
                if (item.repeatable !== undefined) {
                    return <QuestItem item={item} navigation={this.props.navigation} repeatable={true}
                                      theme={this.props.navigation.state.params.theme}/>
                } else {
                    return <QuestItem item={item} navigation={this.props.navigation}
                                      theme={this.props.navigation.state.params.theme}/>
                }
            }
        }
    }

    _searchSkills(text) {
        let skills = _.filter(database.skills, function (skill) {
            if (text !== undefined) {
                if (I18n.t(skill.translationKey).Translation.toLowerCase().match(text.toLowerCase())) {
                    return skill;
                }
            } else {
                return skill;
            }
        });

        return {
            title: I18n.t('home-skills').Translation,
            data: skills,
            renderItem: ({item}) => <SkillItem item={item} navigation={this.props.navigation}
                                               theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchSpecializedTools(text) {
        let specializedTools = _.filter(_.concat(database.mantles, database.smokers), function (specializedTool) {
            if (text !== undefined) {
                if (specializedTool.name.toLowerCase().match(text.toLowerCase())) {
                    return specializedTool;
                }
            } else {
                return specializedTool;
            }
        });

        return {
            title: I18n.t('home-specialized-tools').Translation,
            data: specializedTools,
            renderItem: ({item}) => <SpecializedToolItem item={item} navigation={this.props.navigation}
                                                         theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchTrophies(text) {
        let trophies = _.filter(_.concat(database.consoleTrophies, database.pcTrophies), function (trophy) {
            if (text !== undefined) {
                if (trophy.name.toLowerCase().match(text.toLowerCase())) {
                    return trophy;
                }
            } else {
                return trophy;
            }
        });

        return {
            title: I18n.t('home-trophies').Translation,
            data: trophies,
            renderItem: ({item}) => <TrophyItem item={item} navigation={this.props.navigation}
                                                theme={this.props.navigation.state.params.theme}/>
        }
    }

    _searchWeapons(text) {
        //==WEAPONS==
        let greatSwords = [];
        _.forEach(database.greatSwordTree, function (greatSword) {
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
        _.forEach(database.longSwordTree, function (longSword) {
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
        _.forEach(database.swordAndShieldTree, function (swordAndShield) {
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
        _.forEach(database.dualBladesTree, function (dualBlade) {
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
        _.forEach(database.hammerTree, function (hammer) {
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
        _.forEach(database.huntingHornTree, function (huntingHorn) {
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
        _.forEach(database.lanceTree, function (lance) {
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
        _.forEach(database.gunlanceTree, function (gunlance) {
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
        _.forEach(database.switchAxeTree, function (switchAxe) {
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
        _.forEach(database.chargeBladeTree, function (chargeBlade) {
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
        _.forEach(database.insectGlaiveTree, function (insectGlaive) {
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
        _.forEach(database.lightBowgunTree, function (lightBowgun) {
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
        _.forEach(database.heavyBowgunTree, function (heavyBowgun) {
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
        _.forEach(database.bowTree, function (bow) {
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
        let weapons = _.concat(greatSwords, longSwords, swordAndShields, dualBlades, hammers, huntingHorns, lances, gunlances, switchAxes, chargeBlades, insectGlaives, lightBowguns, heavyBowguns, bows);

        return {
            title: I18n.t('home-weapons').Translation,
            data: weapons,
            renderItem: ({item}) => <WeaponItem item={item} navigation={this.props.navigation}
                                                theme={this.props.navigation.state.params.theme}/>
        }
    }
}