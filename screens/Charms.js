/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    Switch,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import globalStyles from '../styles'
import {charms} from '../database'
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        paddingLeft: 0,
        paddingTop: 10,
        paddingRight: 10,
    },
    navImage: {
        width: 50,
        height: 50,
        margin: 5
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class CharmItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            crafted: false,
            craftedOpacity: 1
        };
        this._isMounted = false;
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

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('CharmDetail', {
                item: this.props.item,
                parent: this,
                theme: this.props.theme
            })} content={<View style={{flex: 1, flexDirection: 'row', opacity: this.state.craftedOpacity}}>
            <Image source={this.props.item.icon} style={{
                width: 50,
                height: 50,
                margin: 10,
                marginTop: 16,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={[globalStyles.item, themeText]}>{this.props.item.name}</Text>
                    <Text style={[globalStyles.subtitle, themeText]}>{
                        this.props.item.skills.map((skill, index) => {
                            if (index === 0)
                                return skill + ' Lv.' + this.props.item.level;
                            else
                                return ", " + skill + ' Lv.' + this.props.item.level;
                        })
                    }</Text>
                </View>

                <Switch
                    onValueChange={(value) => this._toggleCrafted(value, this.props.item)}
                    thumbColor={themeSwitch}

                    trackColor='grey'
tintColor='grey'
                    value={this.state.crafted}
                    style={{marginRight: 10}}/>
            </View>
        </View>}/>;
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
        let value = await AsyncStorage.getItem("Charm" + this.props.item.name);
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
                this.setState({crafted: true, craftedOpacity: 0.5})
                await AsyncStorage.setItem("Charm" + item.name, 'true');
            } else {
                this.setState({crafted: false, craftedOpacity: 1})
                await AsyncStorage.setItem("Charm" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class CharmsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-charms').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {
                    scope: 'Charms',
                    theme: navigation.state.params.theme
                })} content={
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
        //Theme
        let themeBackground = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeBackground = globalStyles.backgroundDark;
            }
        }

        let sortedCharms = _.orderBy(charms, ['name'], ['asc']);

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <FlatList
                    data={sortedCharms}
                    renderItem={({item}) =>
                        <CharmItem item={item} navigation={this.props.navigation}
                                   theme={this.props.navigation.state.params.theme}/>
                    }
                    keyExtractor={(item) => item.name}
                />

                {this._renderAds()}
            </SafeAreaView>
        );
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            InAppBilling.close();
        }
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/2635073649', 'ca-app-pub-9242567842673294/8144625660');
        } else {
            return null;
        }
    }
}