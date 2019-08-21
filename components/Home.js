/* @flow */

import React, { Component } from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Button, Text} from 'native-base';

import Doa from './datas/Doa.json';

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
        <Body>
          <FlatList
            data={Doa}
            keyExtractor={ (Doa,index) => index.toString() }
            renderItem= { (doa) => (
              <View>
                <Text>{doa.item.title}</Text>
                <Text>{doa.item.arabic}</Text>
                <Text>{doa.item.translate}</Text>
              </View>
            ) }
          />
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
