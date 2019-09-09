/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react';
import {
    AsyncStorage, Dimensions,
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    Switch,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import {consoleTrophies, pcTrophies} from '../database'
import {makeAdMob, productIdRemoveAds} from '../utility';
import I18n from '../i18n/i18n';
import {MHWTouchable} from "../components/MHWTouchable";
import {IndicatorViewPager, PagerTitleIndicator} from "rn-viewpager";

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

const styles = {
    image: {
        width: 50,
        height: 50,
        margin: 10,
        marginTop: 25
    }
};

export class TrophyItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            completed: false,
            completedOpacity: 1,
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

        let item = this.props.item;

        let image = null;
        if (item.platform === "PS4"){
            switch (item.level) {
                case 'Bronze':
                    image = <Image source={require('../assets/trophies/bronze.png')} style={styles.image}/>;
                    break;

                case 'Silver':
                    image = <Image source={require('../assets/trophies/silver.png')} style={styles.image}/>;
                    break;

                case 'Gold':
                    image = <Image source={require('../assets/trophies/gold.png')} style={styles.image}/>;
                    break;

                case 'Platinum':
                    image = <Image source={require('../assets/trophies/platinum.png')} style={styles.image}/>;
                    break;
            }
        } else {
            image = <Image source={item.icon} style={styles.image}/>;
        }


        return <View style={{flex: 1, flexDirection: 'row'}}>
            {image}
            <View style={{
                flex: 1,
                flexDirection: 'row',
                opacity: this.state.completedOpacity,
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight: 10
            }}>
                <View style={{flex: 5, flexDirection: 'column', paddingTop: 4}}>
                    <Text style={[globalStyles.item, themeText]}>{I18n.t(item.translationKey).Translation}</Text>
                    <Text style={[globalStyles.subtitle, themeText]}>{I18n.t(item.description).Translation}</Text>
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
        let value = await AsyncStorage.getItem("Trophy" + this.props.item.platform + this.props.item.name);
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
                    AsyncStorage.setItem("Trophy" + item.platform + item.name, 'true');
            } else {
                this.setState({
                    completed: false,
                    completedOpacity: 1
                });
                await
                    AsyncStorage.setItem("Trophy" + item.platform + item.name, 'false');
            }

        } catch (error) {
        }
    }
}

export default class TrophiesScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showAds: true};
    }

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: I18n.t('home-trophies').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', {
                    scope: 'Trophies',
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

        return (
            <SafeAreaView style={[{flex: 1}, themeBackground]}>
                <IndicatorViewPager
                    style={{flex: 1, flexDirection: 'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View>
                        <FlatList
                            data={consoleTrophies}
                            renderItem={({item}) => <TrophyItem item={item} navigation={this.props.navigation}
                                                                theme={this.props.navigation.state.params.theme}/>
                            }
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={pcTrophies}
                            renderItem={({item}) => <TrophyItem item={item} navigation={this.props.navigation}
                                                                theme={this.props.navigation.state.params.theme}/>
                            }
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                </IndicatorViewPager>
                {this._renderAds()}
            </SafeAreaView>
        );
    }

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/3013548835', 'ca-app-pub-9242567842673294/4939877820');
        } else {
            return null;
        }
    }

    _renderTitleIndicator() {
        const windowWidth = Dimensions.get('window').width;

        return (
            <PagerTitleIndicator
                style={globalStyles.tabIndicatorContainer}
                trackScroll={true}
                itemTextStyle={globalStyles.tabIndicatorText}
                itemStyle={{width: windowWidth / 2}}
                selectedItemStyle={{width: windowWidth / 2}}
                selectedItemTextStyle={globalStyles.tabIndicatorSelectedText}
                selectedBorderStyle={globalStyles.tabSelectedBorderStyle}
                titles={['Console', 'PC']}
            />
        )
    }
}