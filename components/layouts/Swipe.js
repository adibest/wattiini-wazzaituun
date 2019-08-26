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
    text: 'Doa Umum',
    image: require('../../assets/img/the-holy-quran-3006944_1920.jpg'),
    onimg: "Berisi Doa-doa yang bersifat Umum. Namun juga dahsyat karena terdapat dalam Al Qur'anul Karim",
    quotes: 'Berdoalah kepada-Ku, niscaya akan Kuperkenankan bagimu (Ghafir: 60)',
  },
  {
    text: 'Doa Nabi',
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
          <Card style={{elevation: 3, backgroundColor: '#dedede', height: 510}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{item.text}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <ImageBackground source={item.image} style={{width: (Dimensions.get('window').width)-4,height: 400}}>
                <Text>{item.onimg}</Text>
              </ImageBackground>
            </CardItem>
            <CardItem>
              <Text>{item.quotes}</Text>
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
  },
});
