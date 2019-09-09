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
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {deliveries} from '../database'
import {makeAdMob, productIdRemoveAds} from '../utility';
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class DeliveryItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            completed: false,
            completedOpacity: 1,
        };

        this._isMounted = false;
    }

    componentWillMount(){
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

        let item = this.props.item;

        let notes = null;
        if (item.notes !== undefined){
            notes = <Text style={[globalStyles.subtitle, themeText]}>{item.notes}</Text>
        }

        return <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    opacity: this.state.completedOpacity,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{flex: 5, flexDirection: 'column'}}>
                        <Text style={[globalStyles.item, themeText]}>{item.name}</Text>
                        <Text style={[globalStyles.subtitle, themeText]}>Client: {item.client}</Text>
                        <Text style={[globalStyles.subtitle, themeText]}>{item.description}</Text>
                        {notes}
                        {item.requestedItems.map(function (requestedItem) {
                            return <Text key={requestedItem.name}
                                         style={[globalStyles.subtitle, themeText]}>{requestedItem.name}: {requestedItem.required}</Text>
                        })
                        }
                        <Text style={[globalStyles.subtitle, themeText]}>Rewards: {item.rewards}</Text>
                    </View>
                    <Switch
                        onValueChange={(value) => this._toggleCompleted(value, item)}
                        value={this.state.completed}
                        thumbColor={themeSwitch}

                        trackColor='grey'
tintColor='grey'
                        style={{flex: 1}}/>
                </View>
            </View>
        </View>
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
        let value = await AsyncStorage.getItem("Delivery" + this.props.item.name);
        if (this._isMounted) {
            this.setState({
                completed: (value !== null && value === 'true'),
                completedOpacity: (value !== null && value === 'true') ? 0.3 : 1
            });
        }
    }

    async _toggleCompleted(value, item) {
        try {
            if (value) {
                this.setState({
                    completed: true,
                    completedOpacity: 0.3
                });
                await
                    AsyncStorage.setItem("Delivery" + item.name, 'true');
            } else {
                this.setState({
                    completed: false,
                    completedOpacity: 1
                });
                await
                    AsyncStorage.setItem("Delivery" + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class DeliveriesScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-deliveries').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {scope: 'Deliveries', theme: navigation.state.params.theme})} content={
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

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <FlatList
                    data={deliveries}
                    renderItem={({item}) => <DeliveryItem item={item} navigation={this.props.navigation} theme={this.props.navigation.state.params.theme}/>
                    }
                    keyExtractor={(item, index) => item.name}
                />
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/8734301884', 'ca-app-pub-9242567842673294/3723424108');
        } else {
            return null;
        }
    }
}