/**
 * Created by nicholaslie on 18/02/18.
 */

import React, { Component } from 'react';
import {
    AsyncStorage,
    Dimensions,
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from '../styles'
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager';
import { smallMonsters, largeMonsters } from '../database';
import { makeAdMob, productIdRemoveAds } from "../utility";
import I18n from '../i18n/i18n';
import { MHWTouchable } from "../components/MHWTouchable";

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        paddingLeft: 2,
    },
});

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export class MonsterItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            miniatureCrown: false,
            giantCrown: false
        };

        this._isMounted = false;
    }

    componentWillMount() {
        this._setItemState();
    }

    render() {
        //Theme
        let themeText = null;
        if (this.props.theme !== undefined) {
            if (this.props.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        let miniatureCrown = <View style={{ width: 20, height: 20, margin: 9 }} />;
        if (this.state.miniatureCrown) {
            miniatureCrown = <Image source={require('../assets/general/icon_miniature_crown.png')} style={{
                width: 20,
                height: 20,
                margin: 9,
                justifyContent: 'center',
                alignItems: 'center'
            }} />;
        }

        let giantCrown = <View style={{ width: 20, height: 20, margin: 9 }} />;
        if (this.state.giantCrown) {
            giantCrown = <Image source={require('../assets/general/icon_giant_crown.png')} style={{
                width: 20,
                height: 20,
                margin: 9,
                justifyContent: 'center',
                alignItems: 'center'
            }} />;
        }

        let weakness = null;
        if (this.props.item.weaknessFire !== undefined) {
            weakness = <View style={{ flex: 1, flexDirection: 'row' }}>
                {/*Weakness*/}
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={themeText}>Weakness</Text>

                    {/*Fire*/}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('./../assets/general/icon_fire.png')} style={{
                            width: 20,
                            height: 20,
                            margin: 4,
                            alignItems: 'center'
                        }} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this._getStars(this.props.item.weaknessFire)}
                        </View>
                    </View>

                    {/*Water*/}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('./../assets/general/icon_water.png')} style={{
                            width: 20,
                            height: 20,
                            margin: 4,
                            alignItems: 'center'
                        }} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this._getStars(this.props.item.weaknessWater)}
                        </View>
                    </View>

                    {/*Thunder*/}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('./../assets/general/icon_thunder.png')}
                            style={{
                                width: 20,
                                height: 20,
                                margin: 4,
                                alignItems: 'center'
                            }} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this._getStars(this.props.item.weaknessThunder)}
                        </View>
                    </View>

                    {/*Ice*/}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('./../assets/general/icon_ice.png')}
                            style={{
                                width: 20,
                                height: 20,
                                margin: 4,
                                alignItems: 'center'
                            }} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this._getStars(this.props.item.weaknessIce)}
                        </View>
                    </View>

                    {/*Dragon*/}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('./../assets/general/icon_dragon.png')}
                            style={{
                                width: 20,
                                height: 20,
                                margin: 4,
                                alignItems: 'center'
                            }} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this._getStars(this.props.item.weaknessDragon)}
                        </View>
                    </View>


                </View>

                {/*Ailments*/}
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={themeText}>Ailments</Text>
                    {/*Poison*/}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('./../assets/general/icon_poison.png')}
                            style={{
                                width: 20,
                                height: 20,
                                margin: 4,
                                alignItems: 'center'
                            }} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this._getStars(this.props.item.ailmentPoison)}
                        </View>
                    </View>

                    {/*Sleep*/}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('./../assets/general/icon_sleep.png')} style={{
                            width: 20,
                            height: 20,
                            margin: 4,
                            alignItems: 'center'
                        }} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this._getStars(this.props.item.ailmentSleep)}
                        </View>
                    </View>

                    {/*Paralysis*/}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('./../assets/general/icon_paralysis.png')}
                            style={{
                                width: 20,
                                height: 20,
                                margin: 4,
                                alignItems: 'center'
                            }} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this._getStars(this.props.item.ailmentParalysis)}
                        </View>
                    </View>

                    {/*Blast*/}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('./../assets/general/icon_blast.png')}
                            style={{
                                width: 20,
                                height: 20,
                                margin: 4,
                                alignItems: 'center'
                            }} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this._getStars(this.props.item.ailmentBlast)}
                        </View>
                    </View>

                    {/*Stun*/}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('./../assets/general/icon_stun.png')}
                            style={{
                                width: 20,
                                height: 20,
                                margin: 4,
                                alignItems: 'center'
                            }} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this._getStars(this.props.item.ailmentStun)}
                        </View>
                    </View>
                </View>

            </View>;
        }

        //Content
        let content = <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
            <Image source={this.props.item.icon} style={{
                width: 50,
                height: 50,
                margin: 10,
                marginTop: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 4, flexDirection: 'column', paddingTop: 4 }}>
                        <Text style={[styles.item, themeText]}>{this.props.item.name}</Text>
                        <Text style={[globalStyles.subtitle, themeText]}>Type: {this.props.item.type}</Text>
                        <Text style={[globalStyles.subtitle, themeText]}>Found in:
                            {
                                this.props.item.location.map(function (location, index) {
                                    if (index === 0)
                                        return " " + location;
                                    else
                                        return ", " + location;
                                })
                            }
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        {miniatureCrown}
                        {giantCrown}
                    </View>
                </View>

                {weakness}
            </View>
        </View>;

        return <MHWTouchable onPress={() =>
            this.props.navigation.navigate('MonsterDetail', {
                item: this.props.item,
                parent: this,
                theme: this.props.theme
            })} content={content} />
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

    _getStars(number) {
        let imageStyle = {
            width: 14,
            height: 14,
        };

        //Theme
        let themeText = null;
        if (this.props.navigation.state.params.theme !== undefined) {
            if (this.props.navigation.state.params.theme === 'Dark') {
                themeText = globalStyles.textDark;
            }
        }

        if (number.length > 1) {
            let numberArray = number.split(" ");
            let previousNumber = numberArray[0];
            let nextNumber = numberArray[1].replace("(", "").replace(")", "");
            return <View
                style={[styles.rightContainer, { flexDirection: 'row' }]}>
                {this._getStars(previousNumber)}
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[{ marginLeft: 10 }, themeText]}>(</Text>
                    {this._getStars(nextNumber)}
                    <Text style={themeText}>)</Text>
                </View>
            </View>
        } else {
            if (number === '0') {
                return <Image source={require('../assets/general/icon_zero.png')} style={imageStyle} />
            } else if (number === '1') {
                return <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
            } else if (number === '2') {
                return <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                </View>
            } else if (number === '3') {
                return <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                </View>
            } else if (number === '4') {
                return <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                </View>
            } else if (number === '5') {
                return <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                    <Image source={require('../assets/general/icon_star.png')} style={imageStyle} />
                </View>
            }
            return <Text style={themeText}>{number}</Text>;
        }

        return <Text style={themeText}>{number}</Text>;
    }

    async _setItemState() {
        let miniatureCrownValue = await AsyncStorage.getItem("MiniatureCrown" + this.props.item.name);
        if (this._isMounted) {
            this.setState({
                miniatureCrown: (miniatureCrownValue !== null && miniatureCrownValue === 'true'),
            });
        }

        let giantCrownValue = await AsyncStorage.getItem("GiantCrown" + this.props.item.name);
        if (this._isMounted) {
            this.setState({
                giantCrown: (giantCrownValue !== null && giantCrownValue === 'true'),
            });
        }
    }

}

export default class MonstersScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { showAds: true };
    }

    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: I18n.t('home-monsters').Translation,
            headerRight: (
                <MHWTouchable onPress={() => navigation.navigate('Search', { scope: 'Monsters', theme: navigation.state.params.theme })}
                    content={
                        <Image source={require('../assets/general/icon_search.png')}
                            style={globalStyles.navSearch} />
                    } />
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

        let sortedSmallMonsters = _.orderBy(smallMonsters, ['name'], ['asc']);
        let sortedLargeMonsters = _.orderBy(largeMonsters, ['name'], ['asc']);

        let allMonsters = _.concat(smallMonsters, largeMonsters);
        let sortedBirdWyverns = _.filter(allMonsters, (monster) => {
            return monster.type === 'Bird Wyverns';
        });
        let sortedBruteWyverns = _.filter(allMonsters, (monster) => {
            return monster.type === 'Brute Wyverns';
        });
        let sortedElderDragons = _.filter(allMonsters, (monster) => {
            return monster.type === 'Elder Dragons';
        });
        let sortedFangedWyverns = _.filter(allMonsters, (monster) => {
            return monster.type === 'Fanged Wyverns';
        });
        let sortedFlyingWyverns = _.filter(allMonsters, (monster) => {
            return monster.type === 'Flying Wyverns';
        });
        let sortedHerbivores = _.filter(allMonsters, (monster) => {
            return monster.type === 'Herbivores';
        });
        let sortedLynians = _.filter(allMonsters, (monster) => {
            return monster.type === 'Lynians';
        });
        let sortedNeopterons = _.filter(allMonsters, (monster) => {
            return monster.type === 'Neopterons';
        });
        let sortedPiscineWyverns = _.filter(allMonsters, (monster) => {
            return monster.type === 'Piscine Wyverns';
        });
        let sortedRelicts = _.filter(allMonsters, (monster) => {
            return monster.type === 'Relict';
        });
        let sortedWingdrakes = _.filter(allMonsters, (monster) => {
            return monster.type === 'Wingdrakes';
        });

        return (
            <SafeAreaView style={[{ flex: 1 }, themeBackground]}>
                <IndicatorViewPager
                    style={{ flex: 1, flexDirection: 'column-reverse' }}
                    indicator={this._renderTitleIndicator()}
                >
                    <View>
                        <FlatList
                            data={sortedLargeMonsters}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedSmallMonsters}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedBirdWyverns}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedBruteWyverns}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedElderDragons}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedFangedWyverns}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedFlyingWyverns}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedHerbivores}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                                                   theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedLynians}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                                                   theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedNeopterons}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                                                   theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedPiscineWyverns}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedRelicts}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                                                   theme={this.props.navigation.state.params.theme} />}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={sortedWingdrakes}
                            renderItem={({ item }) => <MonsterItem item={item} navigation={this.props.navigation}
                                theme={this.props.navigation.state.params.theme} />}
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
            return makeAdMob('ca-app-pub-9242567842673294/4202975645', 'ca-app-pub-9242567842673294/8236125003');
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
                itemStyle={{ width: windowWidth / 3 }}
                selectedItemStyle={{ width: windowWidth / 3 }}
                selectedItemTextStyle={globalStyles.tabIndicatorSelectedText}
                selectedBorderStyle={globalStyles.tabSelectedBorderStyle}
                titles={[I18n.t('ui-large-monsters').Translation,
                    I18n.t('ui-small-monsters').Translation,
                    I18n.t('ui-bird-wyverns').Translation,
                    I18n.t('ui-brute-wyverns').Translation,
                    I18n.t('ui-elder-dragons').Translation,
                    I18n.t('ui-fanged-wyverns').Translation,
                    I18n.t('ui-flying-wyverns').Translation,
                    I18n.t('ui-herbivores').Translation,
                    I18n.t('ui-lynians').Translation,
                    I18n.t('ui-neopterons').Translation,
                    I18n.t('ui-piscine-wyverns').Translation,
                    I18n.t('ui-relicts').Translation,
                    I18n.t('ui-wingdrakes').Translation]}
            />
        )
    }
}