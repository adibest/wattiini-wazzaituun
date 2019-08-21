import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './Home';
import AboutScreen from './components/About';
import SidebarScreen from './components/Sidebar';
import DoaUmumScreen from './components/DoaUmum';
import DoaNabiScreen from './components/DoaNabi';
import CardScreen from './components/Card';

const screen = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Sidebar: {
    screen: SidebarScreen
  },
  About: {
    screen: AboutScreen
  },
  DoaUmum: {
    screen: DoaUmumScreen
  },
  DoaNabi: {
    screen: DoaNabiScreen
  },
  Card: {
    screen: CardScreen
  },
}, {
  defaultNavigationOptions: {
    header: null,
  }
});

const AppContainer = createAppContainer(screen);

export default class App extends Component {
  render(){
    return(
      <AppContainer />
    );
  }
}
