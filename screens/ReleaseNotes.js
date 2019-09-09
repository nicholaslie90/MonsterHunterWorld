/**
 * Created by nicholaslie on 18/02/18.
 */

import React, {Component} from 'react'
import {
	AsyncStorage,
	Platform,
	SafeAreaView,
} from "react-native"
import {WebView} from "react-native-webview";
import globalStyles from '../styles'
import {makeAdMob, productIdRemoveAds} from "../utility";
import I18n from '../i18n/i18n';

let _ = require('lodash');
const InAppBilling = require("react-native-billing");

export default class ReleaseNotesScreen extends React.PureComponent {
	constructor() {
		super();

		this.state = {
			showAds: true
		};
	}

	static navigationOptions = ({navigation, navigationOptions}) => {
		return {
			title: I18n.t('home-release-notes').Translation,
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
				<WebView source={{uri: this.props.navigation.state.params.url}}
						 automaticallyAdjustContentInsets={true}
						 javaScriptEnabled={true}
						 domStorageEnabled={true}
						 decelerationRate="normal"
						 startInLoadingState={true}
						 />
				{this._renderAds()}
			</SafeAreaView>

		);
	}

    _renderAds() {
        if (this.state.showAds) {
            return makeAdMob('ca-app-pub-9242567842673294/1468327014', 'ca-app-pub-9242567842673294/5678244420');
        } else {
            return null;
        }
    }
}