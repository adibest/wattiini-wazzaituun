/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class DoaNabi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the DoaNabi component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
