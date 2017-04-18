/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import navigationOptions from './config/navigationOptions';
import { HomeScreen } from './screen/index';


HomeScreen.navigationOptions = navigationOptions;

StatusBar.setBarStyle('light-content', true);

const App = StackNavigator({
    Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('money', () => App);

export default App;