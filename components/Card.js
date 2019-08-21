/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import listDoa from './datas/Doa.json';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Card component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
