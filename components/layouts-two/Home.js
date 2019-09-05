/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';
import {
  Container, Header, Content,
  Left, Right, Body, Title, Button, Tab, Tabs, TabHeading
} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabUmum from './TabUmum';

export default class Home extends Component {

  componentDidMount(){
    SplashScreen.hide();
  };

  render() {
    return (
      <Container>
        <Header hasTabs style={styles.header}>
          <Body>
            <Text style={styles.headerTitle}>Doa Dalam Qur'an</Text>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon name='ellipsis-v' size={18} color='#fff' style={{padding: 5}} />
            </Button>
          </Right>
        </Header>
        <Tabs
          style={styles.tab}
          tabBarUnderlineStyle={styles.tabUnderlineColor}
        >
          <Tab heading={
            <TabHeading style={styles.tabHeading}>
              <Text style={styles.textOnTab}>DOA-DOA UMUM</Text>
            </TabHeading>
          }
          >
            <TabUmum />
          </Tab>
          <Tab heading={
            <TabHeading style={styles.tabHeading}>
              <Text style={styles.textOnTab}>DOA PARA NABI</Text>
            </TabHeading>
          }
          >

          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#22223B',
    height: 95,
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Livvic-SemiBold',
    fontSize: 18,
    paddingLeft: 15,
  },
  tab: {
    borderBottomColor: '#02C39A',
  },
  tabHeading: {
    backgroundColor: '#fff',
    borderBottomColor: '#02C39A',
  },
  textOnTab: {
    color: '#02C39A',
    fontFamily: 'Livvic-Medium',
    fontSize: 14,
  },
  tabUnderlineColor: {
    backgroundColor: '#02C39A',
    height: 2.15,
  }
});
