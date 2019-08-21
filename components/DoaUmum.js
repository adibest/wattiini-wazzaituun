/* @flow */

import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  Container, Header, Title, Content, Footer, FooterTab, Left, Right,
  Body, List, ListItem,
  Button,
  Icon,
  Text,
  DeckSwiper, Card, CardItem, Thumbnail
} from 'native-base';

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
          <List>
            <FlatList
              data={listDoa}
              keyExtractor={(listDoa, index) => index.toString()}
              renderItem={ (doa) => (
                  <ListItem>
                    <TouchableOpacity
                      onPress={ () => this.props.navigation.navigate('Home') }
                    >
                      <Text>{doa.item.title}</Text>
                    </TouchableOpacity>
                  </ListItem>
                )
              }
            />
          </List>
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
