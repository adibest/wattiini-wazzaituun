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
  Container,
  Header,
  Footer,
  FooterTab,
  Content,
  Left,
  Right,
  Body,
  Title,
  Button,
  Drawer,
  Card,
  CardItem,
  DeckSwiper
} from 'native-base';
import SideBar from './SideBar';
import Swipe from './Swipe';
import Icon from 'react-native-vector-icons/AntDesign';

const cards = [
  {
    text: 'Doa Umum',
  },
  {
    text: 'Doa Nabi'
  }
];

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
                <Icon name='leftcircleo' size={24} color='#fff' style={{padding: 5}} />
              </Button>
            </Left>
            <Body>
              <Title style={styles.tt}>Doa Dalam Qur'an</Title>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('About')}
              >
                <Icon name='infocirlceo' size={24} color='#fff' style={{padding: 5}} />
              </Button>
            </Right>
          </Header>
          <Content>
            <View style={styles.cardus}>
              <Swipe />
            </View>
          </Content>
          <Footer>
            <FooterTab style={styles.footer}>
              <Button
                onPress = { () => this.props.navigation.navigate('Umum') }
              >
                <Text style={styles.tb}>Doa Umum</Text>
              </Button>
              <Button
                onPress = { () => this.props.navigation.navigate('Nabi') }
              >
                <Text style={styles.tb}>Doa Nabi</Text>
              </Button>
            </FooterTab>
          </Footer>
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
    backgroundColor: '#0fb9b1',
    height: 80,
  },
  footer: {
    backgroundColor: '#0fb9b1',
  },
  button: {
    backgroundColor: '#0fb9b1',
    height: 100,
  },
  tb: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Livvic-Regular',
  },
  tt: {
    fontFamily: 'Livvic-Regular',
  },
  cardus: {
    width: Dimensions.get('window').width,
    height: 510,
  }
});
