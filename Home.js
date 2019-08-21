/* @flow */

import React, { Component } from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Text,
  Drawer,
  Accordion
} from 'native-base';

import listDoa from './components/datas/Doa.json';
import Sidebar from './components/Sidebar';

export default class Home extends Component {

  closeDrawer() {
    this.drawer._root.close()
  }

  openDrawer() {
    this.drawer._root.open()
  }

  render() {
    return (
      <Drawer
        ref={ (ref) => {this.drawer = ref;} }
        content={<Sidebar navigator={this.navigator} />}
        onClose={ () => this.closeDrawer() }
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={ () => this.openDrawer() }>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Doa Dalam Qur'an</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Button onPress={ () => this.props.navigation.navigate('DoaUmum') }>
              <Text>Doa Umum</Text>
            </Button>
            <Button>
              <Text>Doa Para Nabi</Text>
            </Button>
          </Content>
        </Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
