import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from "./screens/Home";
import MonstersScreen from "./screens/Monsters";
import MonsterDetailScreen from "./screens/MonsterDetail";
import SkillsScreen from "./screens/Skills";
import WeaponsScreen from "./screens/Weapons";
import WeaponDetailScreen from "./screens/WeaponDetail";
import SpecializedToolsScreen from "./screens/SpecializedTools";
import CraftingListScreen from "./screens/CraftingList";
import AboutScreen from "./screens/About";
import WeaponSubDetailScreen from "./screens/WeaponSubDetail";
import ArmorsScreen from "./screens/Armors";
import PalicoEquipmentScreen from "./screens/PalicoEquipment";
import ArmorDetailScreen from "./screens/ArmorDetail";
import ArmorSubDetailScreen from "./screens/ArmorSubDetail";
import KinsectTreesScreen from "./screens/KinsectTrees";
import KinsectDetailScreen from "./screens/KinsectDetail";
import DecorationsScreen from "./screens/Decorations";
import CharmsScreen from "./screens/Charms";
import CharmDetailScreen from "./screens/CharmDetail";
import PalicoEquipmentDetailScreen from "./screens/PalicoEquipmentDetail";
import SkillDetailScreen from "./screens/SkillDetail";
import EndemicLifeScreen from "./screens/EndemicLife";
import EndemicLifeDetailScreen from "./screens/EndemicLifeDetail";
import QuestsScreen from "./screens/Quests";
import QuestDetailScreen from "./screens/QuestDetail";
import SearchScreen from "./screens/Search";
import MonsterMaterialsScreen from "./screens/MonsterMaterials";
import MonsterMaterialDetailScreen from "./screens/MonsterMaterialDetail";
import TrophiesScreen from "./screens/Trophies";
import PalicoGadgetsScreen from "./screens/PalicoGadgets";
import DeliveriesScreen from "./screens/Deliveries";
import ReleaseNotesScreen from "./screens/ReleaseNotes";
import WishlistScreen from "./screens/Wishlist";
import LoadoutsScreen from "./screens/Loadouts";
import LoadoutDetailScreen, {
    LoadoutChooseCharmModal, LoadoutChooseDecorationModal,
    LoadoutChooseHandsModal,
    LoadoutChooseHeadModal, LoadoutChooseLegsModal, LoadoutChooseLowerBodyModal, LoadoutChooseMantleModal,
    LoadoutChooseSmokerModal, LoadoutChooseSpecializedToolModal,
    LoadoutChooseUpperBodyModal,
    LoadoutChooseWeaponModal
} from "./screens/LoadoutDetail";
import ArmorSetsScreen from "./screens/ArmorSets";
import CanteenScreen from "./screens/Canteen";
import ArmorSetDetailScreen from "./screens/ArmorSetDetail";
import ArmorSetSubDetailScreen from "./screens/ArmorSetSubDetail";
import PalicoArmorSetsScreen from "./screens/PalicoArmorSets";
import PalicoArmorSetDetailScreen from "./screens/PalicoArmorSetDetail";
import SettingsScreen from "./screens/Settings";
import ArenaQuestsScreen from "./screens/ArenaQuests";
import ArenaQuestDetailScreen from "./screens/ArenaQuestDetail";
import ArenaEquipmentInfoDetailScreen from "./screens/ArenaEquipmentInfoDetail";
import ItemsScreen from "./screens/Items";
import EventCalendarScreen from "./screens/EventCalendar";
import PlayGuideScreen from "./screens/PlayGuide";
import PoogieScreen from "./screens/Poogie";
import PoogieDetailScreen from "./screens/PoogieDetail";
import LayeredArmors from "./screens/LayeredArmors";
import LayeredArmorDetailScreen from "./screens/LayeredArmorDetail";
import CriticalBountiesScreen from "./screens/CriticalBounties";
import LoadoutSortScreen from "./screens/LoadoutSort";
import QuestsFilterScreen from "./screens/QuestsFilter";
import WeaponsFilterScreen from "./screens/WeaponsFilter";

//Global configs
console.disableYellowBox = true;

const RootStack = createStackNavigator({
        Home: {
            screen: HomeScreen,
        },
        CraftingList: {
            screen: CraftingListScreen,
        },
        Monsters: {
            screen: MonstersScreen,
        },
        MonsterDetail: {
            screen: MonsterDetailScreen,
        },
        MonsterMaterials: {
            screen: MonsterMaterialsScreen,
        },
        MonsterMaterialDetail: {
            screen: MonsterMaterialDetailScreen,
        },
        Skills: {
            screen: SkillsScreen,
        },
        SkillDetail: {
            screen: SkillDetailScreen,
        },
        SpecializedTools: {
            screen: SpecializedToolsScreen,
        },
        Weapons: {
            screen: WeaponsScreen
        },
        WeaponsFilter: {
            screen: WeaponsFilterScreen,
        },
        WeaponDetail: {
            screen: WeaponDetailScreen,
        },
        WeaponSubDetail: {
            screen: WeaponSubDetailScreen,
        },
        About: {
            screen: AboutScreen
        },
        Armors: {
            screen: ArmorsScreen
        },
        PalicoEquipment: {
            screen: PalicoEquipmentScreen
        },
        PalicoEquipmentDetail: {
            screen: PalicoEquipmentDetailScreen
        },
        PalicoGadgets: {
            screen: PalicoGadgetsScreen
        },
        ArmorDetail: {
            screen: ArmorDetailScreen
        },
        ArmorSubDetail: {
            screen: ArmorSubDetailScreen
        },
        KinsectTrees: {
            screen: KinsectTreesScreen
        },
        KinsectDetail: {
            screen: KinsectDetailScreen
        },
        Decorations: {
            screen: DecorationsScreen
        },
        Charms: {
            screen: CharmsScreen
        },
        CharmDetail: {
            screen: CharmDetailScreen
        },
        EndemicLife: {
            screen: EndemicLifeScreen
        },
        EndemicLifeDetail: {
            screen: EndemicLifeDetailScreen
        },
        Quests: {
            screen: QuestsScreen
        },
        QuestDetail: {
            screen: QuestDetailScreen
        },
        QuestsFilter: {
            screen: QuestsFilterScreen
        },
        Deliveries: {
            screen: DeliveriesScreen
        },
        Search: {
            screen: SearchScreen
        },
        Trophies: {
            screen: TrophiesScreen
        },
        ReleaseNotes: {
            screen: ReleaseNotesScreen
        },
        Wishlist: {
            screen: WishlistScreen
        },
        Loadouts: {
            screen: LoadoutsScreen
        },
        LoadoutDetail: {
            screen: LoadoutDetailScreen
        },
        LoadoutChooseWeaponModal: {
            screen: LoadoutChooseWeaponModal
        },
        LoadoutChooseHeadModal: {
            screen: LoadoutChooseHeadModal
        },
        LoadoutChooseUpperBodyModal: {
            screen: LoadoutChooseUpperBodyModal
        },
        LoadoutChooseHandsModal: {
            screen: LoadoutChooseHandsModal
        },
        LoadoutChooseLowerBodyModal: {
            screen: LoadoutChooseLowerBodyModal
        },
        LoadoutChooseLegsModal: {
            screen: LoadoutChooseLegsModal
        },
        LoadoutChooseCharmModal: {
            screen: LoadoutChooseCharmModal
        },
        LoadoutChooseSpecializedToolModal: {
            screen: LoadoutChooseSpecializedToolModal
        },
        LoadoutChooseDecorationModal: {
            screen: LoadoutChooseDecorationModal
        },
        LoadoutSort: {
            screen: LoadoutSortScreen
        },
        ArmorSets: {
            screen: ArmorSetsScreen
        },
        ArmorSetDetail: {
            screen: ArmorSetDetailScreen
        },
        ArmorSetSubDetail: {
            screen: ArmorSetSubDetailScreen
        },
        LayeredArmors: {
            screen: LayeredArmors
        },
        LayeredArmorDetail:{
            screen: LayeredArmorDetailScreen
        },
        Canteen: {
            screen: CanteenScreen
        },
        PalicoArmorSets: {
            screen: PalicoArmorSetsScreen
        },
        PalicoArmorSetDetail: {
            screen: PalicoArmorSetDetailScreen
        },
        Settings: {
            screen: SettingsScreen
        },
        ArenaQuests: {
            screen: ArenaQuestsScreen
        },
        ArenaQuestDetail: {
            screen: ArenaQuestDetailScreen
        },
        ArenaEquipmentInfoDetail: {
            screen: ArenaEquipmentInfoDetailScreen
        },
        Items: {
            screen: ItemsScreen
        },
        EventCalendar: {
            screen: EventCalendarScreen
        },
        PlayGuide: {
            screen: PlayGuideScreen
        },
        Poogie: {
            screen: PoogieScreen
        },
        PoogieDetail: {
            screen: PoogieDetailScreen
        },
        CriticalBounties: {
            screen: CriticalBountiesScreen
        }
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default class App extends React.PureComponent {
    render() {
        return (
            <RootStack/>
        );
    }
}

// symbol polyfills
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');