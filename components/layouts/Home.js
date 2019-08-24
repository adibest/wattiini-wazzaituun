/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title,
  Icon,
  Button
} from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Doa Dalam Qur'an</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button onPress = { () => this.props.navigation.navigate('Umum') }>
            <Text>Doa Umum</Text>
          </Button>
          <Button onPress = { () => this.props.navigation.navigate('Nabi') }>
            <Text>Doa Nabi</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
