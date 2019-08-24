import React, {Component} from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import HomeScreen from './components/layouts/Home';
import UmumScreen from './components/layouts/Umum';
import NabiScreen from './components/layouts/Nabi';
import AboutScreen from './components/layouts/About';

const Stack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Umum: {
    screen: UmumScreen
  },
  Nabi: {
    screen: NabiScreen
  },
}, {
  defaultNavigationOptions: {
    header: null,
  },
});

const Drawer = createDrawerNavigator({
  About: {
    screen: AboutScreen
  },
});

const Fusion = createSwitchNavigator({
  Main: {
    screen: Stack
  },
  Second: {
    screen: Drawer
  },
});

const NestAll = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Umum: {
    screen: UmumScreen
  },
  Nabi: {
    screen: NabiScreen
  },
  Drawer: {
    screen: Drawer
  }
}, {
  defaultNavigationOptions: {
    header: null,
  },
});

const AppContainer = createAppContainer(NestAll);

export default class App extends Component {
  render(){
    return(
      <AppContainer />
    );
  }
}
