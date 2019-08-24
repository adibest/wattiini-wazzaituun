import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './components/layouts/Home';

const screen = createStackNavigator({
  Home: {
    screen: HomeScreen
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
