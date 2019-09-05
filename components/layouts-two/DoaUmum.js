/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  Container, Header, Content,
  Left, Right, Body, Title, Button, Card, CardItem
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Doa from '../datas/Doa.json';

export default class DoaUmum extends Component {

  id      = this.props.navigation.getParam('pageId');
  index   = this.id - 1;
  data    = Doa[this.index];
  textArab = this.data.arabic;
  textIsi = this.data.translate;
  textSrc = this.data.source;
  textCp  = 'Download aplikasinya kalau sudah di upload di playstore :-)';
  textLengkapDoa = this.data.title + '\n \n' + textArab + '\n \n' + textIsi + '\n \n' + textSrc + '\n \n' + textCp;

  render() {

    const {navigation} = this.props;
    const index        = parseInt(this.id) - 1;

    return (
      <FlatList
        data={Doa}
        keyExtractor={(doa, index) => index.toString()}
        getItemLayout={(doa, index) => (
          {length: Dimensions.get('window').width, offset: Dimensions.get('window').width * index, index}
        )}
        initialScrollIndex={index}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={(doa) => (
          <Container>
            <Header style={styles.header}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name='arrow-left' size={18} style={{color: '#fff'}} />
                </Button>
              </Left>
              <Body>
                <Text style={styles.headerTitle}>Doa-doa Umum</Text>
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
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#22223B',
    height: 70,
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Livvic-SemiBold',
    fontSize: 18,
    paddingLeft: 15,
  },
  njobo: {
    width: Dimensions.get('window').width-20,
    alignSelf: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  arabic: {
    textAlign: 'center',
    fontSize: 24,
    padding: 5,
    marginBottom: 20,
  },
  translate: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'left',
  },
  source: {
    fontSize: 12,
  },
  tt: {
    fontFamily: 'Livvic-Regular',
  },
  ta: {
    fontFamily: 'me_quran',
  }
});
