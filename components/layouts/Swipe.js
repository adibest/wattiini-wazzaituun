/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions
} from 'react-native';
import {
  Container, Header, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Icon
} from 'native-base';

const cards = [
  {
    text: 'Doa-doa Umum',
    image: require('../../assets/img/the-holy-quran-3006944_1920.jpg'),
    onimg: "Berisi Doa-doa yang bersifat Umum. Namun juga bersifat dahsyat karena terdapat dalam Al Qur'anul Karim",
    quotes: 'Berdoalah kepada-Ku, niscaya akan Kuperkenankan bagimu (Ghafir: 60)',
  },
  {
    text: 'Doa Para Nabi',
    image: require('../../assets/img/sinai-517893_1920.jpg'),
    onimg: "Berisi Doa-doa yang dilantunkan Para Nabi yang diabadikan dalam Al Qur'anul Karim",
    quotes: 'Berdoa adalah termasuk bagian dari ibadah (HR. Abu Daud, No, 1481)',
  }
];

export default class Swipe extends Component {
  render() {
    return (
      <DeckSwiper
        dataSource={cards}
        renderItem={item =>
          <Card style={styles.container}>
            <CardItem>
              <Text style={[styles.ta,styles.tt]}>{item.text}</Text>
            </CardItem>
            <CardItem cardBody>
              <ImageBackground source={item.image} style={styles.image}>
                <Text style={[styles.tc]}>{item.onimg}</Text>
              </ImageBackground>
            </CardItem>
            <CardItem>
              <Text style={[styles.ta,styles.tt]}>{item.quotes}</Text>
            </CardItem>
          </Card>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 3,
    height: 450,
    alignItems: 'center',
  },
  image: {
    width: (Dimensions.get('window').width)-4,
    backgroundColor: '#000',
    opacity: 0.9,
    height: 350,
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  ta: {
    fontSize: 18,
    textAlign: 'center',
  },
  tc: {
    fontSize: 24,
    fontFamily: 'Livvic-Bold',
    textAlign:'center',
    position: 'absolute',
    color: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 40,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  tt: {
    fontFamily: 'Livvic-Regular',
  },
});
