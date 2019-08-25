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
  Title,
  Card,
  CardItem
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
              <View style={styles.njobo}>
                <Card>
                  <CardItem header>
                    <Text style={styles.title}>{doa.item.title}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text style={styles.arabic}>{doa.item.arabic}</Text>
                      <Text style={styles.translate}>{doa.item.translate}</Text>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                    <Text style={styles.source}>{doa.item.source}</Text>
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
  njobo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
  },
  arabic: {
    fontSize: 24,
    marginBottom: 10,
  },
  translate: {
    fontSize: 18,
    marginBottom: 10,
  },
  source: {
    fontSize: 14,
  }
});
