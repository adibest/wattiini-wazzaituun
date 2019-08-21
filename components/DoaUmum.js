/* @flow */

import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  Container, Header, Title, Content, Footer, FooterTab, Left, Right,
  Body,
  Button,
  Icon,
  Text,
  DeckSwiper, Card, CardItem, Thumbnail
} from 'native-base';
import {Card} from 'react-native-elements';

import listDoa from './datas/Doa.json';
import Sidebar from './Sidebar';

export default class DoaUmum extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={ () => this.props.navigation.navigate('Home') }>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Doa-doa Umum</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <FlatList
            horizontal
            data={listDoa}
            keyExtractor={ (listDoa,index) => index.toString() }
            renderItem= { (doa) => (
              <View>
                <Text>{doa.item.title}</Text>
                <Text>{doa.item.arabic}</Text>
                <Text>{doa.item.translate}</Text>
              </View>
            ) }
          />
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
