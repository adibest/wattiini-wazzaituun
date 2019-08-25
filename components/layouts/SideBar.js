/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { SwitchActions } from 'react-navigation';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Content,
  Button,
  Title
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name='rightcircleo' size={24} color='#fff' style={{marginLeft: 5}} />
          </Left>
          <Body>
            <Title>Doa Umum</Title>
          </Body>
          <Right />
        </Header>
        <Content>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4d4d',
  },
});
