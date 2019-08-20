import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './Home';
import AboutScreen from './components/About';
import SidebarScreen from './components/Sidebar';

const screen = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  Sidebar: {
    screen: SidebarScreen
  }
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
