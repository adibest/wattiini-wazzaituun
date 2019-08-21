/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Button} from 'native-base';
import { SwitchActions } from 'react-navigation';

export default class Sidebar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Sidebar component</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={ () => this.props.navigation.navigate( 'About' ) }
          block light
        >
          <Text> About </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3CB38',
    marginRight: 5,
  },
  button: {
    marginTop: 20,
  }
});
