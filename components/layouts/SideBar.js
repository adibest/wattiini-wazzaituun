/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking
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
  Title,
  List,
  ListItem
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Icon name='rightcircleo' size={24} color='#fff' style={{padding: 5}} />
          </Left>
          <Body>
            <Title style={styles.tt}>About App</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem itemHeader>
              <Text style={[styles.lh,styles.tt]}>Doa Dalam Qur'an</Text>
            </ListItem>
            <ListItem>
              <Text style={[styles.lph,styles.tt]}>Sebuah aplikasi sederhana yang berisi doa-doa yang bersumber dari Al Qur'an yang mulia.</Text>
            </ListItem>
            <ListItem>
              <Text style={[styles.lph,styles.tt]}>Teks Arab dan Terjemahan disadur dari <Text onPress={ () => Linking.openURL('https://muslim.or.id')} style={{color: '#3c40c6'}}>muslim.or.id</Text> dan <Text onPress={ () => Linking.openURL('https://bincangsyariah.com')} style={{color: '#3c40c6'}}>bincangsyariah.com</Text></Text>
            </ListItem>
            <ListItem>
              <Text style={[styles.lph,styles.tt]}>Versi 0.0.1</Text>
            </ListItem>
            <ListItem>
              <Text style={[styles.lph,styles.tt]}>&copy; 1422H</Text>
            </ListItem>
          </List>
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
  header: {
    backgroundColor: '#0fb9b1',
    height: 80,
  },
  lh: {
    fontSize: 18,
  },
  lph: {
    fontSize: 16,
    textAlign: 'justify',
  },
  tt: {
    fontFamily: 'Livvic-Regular',
  }
});
