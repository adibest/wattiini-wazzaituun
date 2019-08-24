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
  Button,
  Drawer
} from 'native-base';
import SideBar from './SideBar';

export default class Home extends Component {

  closeDrawer () {
    this.drawer._root.close()
  };

  openDrawer () {
    this.drawer._root.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button
                transparent
                onPress={() => this.openDrawer()}
              >
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
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#e3244a',
  }
});
