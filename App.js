import React, {Component} from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import HomeScreen from './components/layouts-two/HomeFinal';
import TabUmumScreen from './components/layouts-two/TabUmum';
import DoaUmumScreen from './components/layouts-two/DoaUmum';
import DoaNabiScreen from './components/layouts-two/DoaNabi';
import UmumScreen from './components/layouts/Umum';
import NabiScreen from './components/layouts/Nabi';
import AboutScreen from './components/layouts-two/About';

const Stack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  DoaUmum: {
    screen: DoaUmumScreen
  },
  DoaNabi: {
    screen: DoaNabiScreen
  },
  TabUmum: {
    screen: TabUmumScreen
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
