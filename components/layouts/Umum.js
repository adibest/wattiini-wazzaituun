/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Content,
  Icon,
  Button,
  Title
} from 'native-base';
import Doa from '../datas/Doa.json';

export default class Umum extends Component {
  render() {
    return (
      <FlatList
        data = { Doa }
        keyExtractor = { (doa, index) => index.toString() }
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem = { (doa) => (
          <Container>
            <Header>
              <Left>
                <Button transparent onPress = { () => this.props.navigation.goBack() }>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>Doa Umum</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <View style = { styles.njobo }>
                <Text>{doa.item.title}</Text>
                <Text>{doa.item.arabic}</Text>
                <Text>{doa.item.translate}</Text>
              </View>
            </Content>
          </Container>
        ) }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  njobo: {
    backgroundColor: '#32ff7e',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
});
