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
  Button,
  Title,
  Card,
  CardItem
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
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
            <Header style={styles.header}>
              <Left>
                <Button transparent onPress = { () => this.props.navigation.goBack() }>
                  <Icon name='leftcircleo' size={24} color='#fff' style={{padding: 5}} />
                </Button>
              </Left>
              <Body>
                <Title style={styles.tt}>Doa-doa Umum</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <View style={styles.njobo}>
                <Card>
                  <CardItem header>
                    <Text style={[styles.title,styles.tt]}>{doa.item.title}</Text>
                  </CardItem>
                  <CardItem>
                    <Body style={styles.body}>
                      <Text style={[styles.arabic,styles.ta]}>{doa.item.arabic}</Text>
                      <Text style={[styles.translate,styles.tt]}>{doa.item.translate}</Text>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                    <Text style={[styles.source,styles.tt]}>{doa.item.source}</Text>
                  </CardItem>
                </Card>
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
  header: {
    backgroundColor: '#0fb9b1',
    height: 80,
  },
  njobo: {
    width: Dimensions.get('window').width,
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  arabic: {
    textAlign: 'center',
    fontSize: 24,
    padding: 5,
    marginBottom: 20,
  },
  translate: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'justify',
  },
  source: {
    fontSize: 18,
  },
  tt: {
    fontFamily: 'Livvic-Regular',
  },
  ta: {
    fontFamily: 'me_quran',
  }
});
