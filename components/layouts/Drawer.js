/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import HomeScreen from './Home';
import UmumScreen from './Umum';
import NabiScreen from './Nabi';
import AboutScreen from './About';

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
}, {
  defaultNavigationOptions: {
    header: null
  }
});

export default createAppContainer(DrawerNavigator);
