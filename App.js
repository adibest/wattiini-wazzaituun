import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './components/layouts/Home';
import UmumScreen from './components/layouts/Umum';
import NabiScreen from './components/layouts/Nabi';

const screen = createStackNavigator({
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
