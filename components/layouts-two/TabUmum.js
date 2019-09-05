/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import {
  Container, Header, Left, Body, Right, Content,
  Button, Title, List, ListItem
} from 'native-base';
import Doa from '../datas/Doa.json';

export default class TabUmum extends Component {
  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={Doa}
            keyExtractor={(doa, index) => index.toString()}
            renderItem={(doa) => (
              <ListItem>
                <View style={styles.container}>
                  <View styles={styles.flexNumb}>
                    <Text style={[styles.textRegular,styles.numbering]}>{doa.item.id}</Text>
                  </View>
                  <View style={styles.flexCont}>
                    <Text style={[styles.textRegular,styles.titleList]}>{doa.item.title}</Text>
                  </View>
                </View>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-around'
  },
  textRegular: {
    fontFamily: 'Livvic-Regular',
  },
  flexNumb: {
    flex: 1,
  },
  flexCont: {
    flex: 9,
  },
  numbering: {
    padding: 2,
    fontSize: 14,
    backgroundColor: '#22223B',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 25,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  titleList: {
    fontSize: 14,
  }
});
