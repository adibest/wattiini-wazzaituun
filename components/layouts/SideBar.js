/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Button, Icon
} from 'native-base';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';

class SideBar extends Component {

  navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  }

  render() {
    return (
      <View>
        <Text>I'm the SideBar component</Text>
        <Button onPress={() => this.navigateToScreen('Home')}>
          <Icon name='book' />
          <Text>About</Text>
        </Button>
      </View>
    );
  }
}

SideBar.propTypes = {
  navigation: PropTypes.object
};

export default SideBar;
