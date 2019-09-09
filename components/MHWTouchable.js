import React, {Component} from 'react';
import {
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
    View
} from "react-native";

export class MHWTouchable extends React.PureComponent {
    render() {
        let content = <View></View>;
        if (this.props.content !== undefined) {
            content = this.props.content;
        }

        if (Platform.OS === 'android' && Platform.Version > 21) {
            return <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#FFF')}
                onPress={this.props.onPress}>
                {content}
            </TouchableNativeFeedback>
        } else {
            return <TouchableHighlight
                underlayColor={'silver'}
                onPress={this.props.onPress}>
                {content}
            </TouchableHighlight>
        }
    }
}