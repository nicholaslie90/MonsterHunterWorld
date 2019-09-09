/**
 * Created by nicholaslie on 18/02/18.
 */
import {Dimensions, StyleSheet} from "react-native";

let {windowWidth} = Dimensions.get('window').width;

const globalStyles = StyleSheet.create({
	backgroundDark: {
		backgroundColor: 'black'
	},
	contentContainer: {
		padding: 10,
	},
	halfWidthImage: {
		width: windowWidth * 0.25,
	},
	heading1: {
		padding: 2,
		paddingTop: 16,
		paddingLeft: 0,
		fontSize: 24,
	},
	heading2: {
		padding: 2,
		paddingTop: 6,
		paddingLeft: 0,
		fontSize: 20,
	},
    heading3: {
        padding: 2,
        paddingTop: 6,
        paddingLeft: 0,
        fontSize: 16,
    },
	item: {
		fontSize: 18,
		marginLeft: 2,
	},
	leftImage: {
		alignItems: 'flex-start',
		width: 20,
		height: 20,
		marginRight: 6
	},
	navSearch: {
		width: 30,
		height: 30,
		margin: 4,
		marginRight: 10,
		marginTop: 10,
		marginBottom: 12
	},
	sectionHeader: {
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontSize: 20,
		fontWeight: 'bold',
		backgroundColor: '#757575',
		color: 'white',
	},
	subtitle: {
		padding: 2,
		paddingLeft: 0,
		fontSize: 12
	},
	tabIndicatorContainer: {
		backgroundColor: 'black',
		height: 48
	},
	tabIndicatorText: {
		fontSize: 14,
		color: 0xFFFFFF99
	},
	tabIndicatorSelectedText: {
		fontSize: 14,
		color: 0xFFFFFFFF
	},
	tabSelectedBorderStyle: {
		height: 3,
		backgroundColor: 'white'
	},
	textDark: {
		color: 'white'
	}
});
export default globalStyles;