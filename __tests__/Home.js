import 'react-native';
import React from 'react';
import HomeScreen from '../screens/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
	const tree = renderer.create(<HomeScreen />).toJSON();
	expect(tree).toMatchSnapshot();
});
