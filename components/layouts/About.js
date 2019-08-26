/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Content,
  Button,
  Title,
  Card,
  CardItem,
  Image
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import Icono from 'react-native-vector-icons/Ionicons';
import Icona from 'react-native-vector-icons/Entypo';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress = { () => this.props.navigation.goBack() }>
              <Icon name='leftcircleo' size={24} color='#fff' style={{padding: 5}} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.tt}>About Developer</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={[styles.main,styles.tt]}>Adib</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text style={[styles.isi,styles.tt]}>Seorang santri di Pondok Informatika Al Madinah Yogyakarta yang kini sedang menjalani pembelajaran secara intensif. Dibimbing oleh Ustadz-ustadz حَفِظَهُ اللهُ yang kompeten dibidangnya. Aplikasi sederhana ini adalah salah satu dari hasil belajar tersebut.</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem itemHeader>
              <Text style={[styles.main,styles.tt]}>Fork my code!</Text>
            </CardItem>
            <CardItem
              button onPress={ () => Linking.openURL('https://github.com/adibest/wattiini-wazzaituun') }
            >
                <Icon name='github' size={24} style={{color: '#24292E'}} />
                <Text style={[styles.isi,styles.tt,styles.ks]}>Github</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem itemHeader>
              <Text style={[styles.main,styles.tt]}>Contact My Account</Text>
            </CardItem>
            <CardItem
              button onPress={ () => Linking.openURL('https://twitter.com/eladibi1421') }
            >
                <Icon name='twitter' size={24} style={{color: '#55acee'}} />
                <Text style={[styles.isi,styles.tt,styles.ks]}>Twitter</Text>
            </CardItem>
            <CardItem
              button onPress={ () => Linking.openURL('https://www.facebook.com/adibiadibest') }
            >
                <Icon name='facebook-square' size={24} style={{color: '#3b5999'}} />
                <Text style={[styles.isi,styles.tt,styles.ks]}>Facebook</Text>
            </CardItem>
            <CardItem
              button onPress={ () => Linking.openURL('https://www.instagram.com/el_adibi1421/') }
            >
                <Icona name='instagram' size={24} style={{color: '#e4405f'}} />
                <Text style={[styles.isi,styles.tt,styles.ks]}>Instagram</Text>
            </CardItem>
            <CardItem
              button onPress={ () => Linking.openURL('https://wa.me/6282241662516') }
            >
                <Icono name='logo-whatsapp' size={24} style={{color: '#25D366'}} />
                <Text style={[styles.isi,styles.tt,styles.ks]}>WhatsApp</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
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
  main: {
    fontSize: 18,
  },
  isi: {
    fontSize: 16,
    textAlign: 'justify',
  },
  ks: {
    paddingLeft: 10,
  },
  tt: {
    fontFamily: 'Livvic-Regular',
  }
});
