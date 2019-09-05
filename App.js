import React, {Component} from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import HomeScreen from './components/layouts-two/Home';
import DoaUmumScreen from './components/layouts-two/DoaUmum';
import UmumScreen from './components/layouts/Umum';
import NabiScreen from './components/layouts/Nabi';
import AboutScreen from './components/layouts/About';

const Stack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  DoaUmum: {
    screen: DoaUmumScreen
  },
  Umum: {
    screen: UmumScreen
  },
  Nabi: {
    screen: NabiScreen
  },
  About: {
    screen: AboutScreen
  },
}, {
  defaultNavigationOptions: {
    header: null,
  },
});

const AppContainer = createAppContainer(Stack);

export default class App extends Component {
  render(){
    return(
      <AppContainer />
    );
  }
}
