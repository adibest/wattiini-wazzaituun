/* @flow */

import React, { Component } from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Button, Text, Drawer} from 'native-base';

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
          <Body>
            <FlatList
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
            <Button
              style={styles.button}
              onPress={ () => this.props.navigation.navigate('Sidebar') }
              block light
            >
              <Text> Sidebar </Text>
            </Button>
          </Body>
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
