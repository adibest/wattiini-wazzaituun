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

export default class Home extends Component {

  componentDidMount(){
    SplashScreen.hide();
  };

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Text>Doa Dalam Qur'an</Text>
          </Left>
          <Right>
            <Button
              transparent
            >
              <Icon name='ellipsis-v' size={24} color='#fff' style={{padding: 5}} />
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab heading={
            <TabHeading>
              <Text>Doa-doa Umum</Text>
            </TabHeading>
          }
          >

          </Tab>
          <Tab heading={
            <TabHeading>
              <Text>Doa Para Nabi</Text>
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
});
