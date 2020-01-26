/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Clipboard,
  Alert,
  Dimensions
} from 'react-native';
import {
  Container, Header, Content,
  Left, Right, Body, Title, Button, Card, CardItem
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Doa from '../datas/Doa2.json';
import CustomMenuCopy from './CustomMenuCopy';

export default class DoaNabi extends Component {

  id      = this.props.navigation.getParam('pageId');
  index   = this.id - 1;
  data    = Doa[this.index];
  textArab = this.data.arabic;
  textIsi = this.data.translate;
  textSrc = this.data.source;
  textCp  = 'https://play.google.com/store/apps/details?id=com.doadalamquran';
  textLengkapDoa = this.data.title + '\n \n' + this.data.arabic + '\n \n' + this.data.translate + '\n \n' + this.data.source;

  copyDoa = async (foo) => {
    const data    = Doa[parseInt(foo) - 1];
    const textLengkapDoa = data.title + '\n \n' + data.arabic + '\n \n' + data.translate + '\n \n' + data.source + '\n \n' + this.textCp;
    await Clipboard.setString(textLengkapDoa);
    Alert.alert(
      'Salin Doa',
      'Doa berhasil disalin!'
    );
  };

  constructor(props){
    super(props);

    this.state = {
      width: Dimensions.get('window').width,
    }

    this.onLayout = this.onLayout.bind(this);
  };

  onLayout(e) {
    this.setState({
      width: Dimensions.get('window').width,
    });
  };

  render() {

    const {navigation} = this.props;
    const index        = parseInt(this.id) - 1;

    return (
      <Container
        onLayout={this.onLayout}
        style={{width: this.state.width}}
      >
        <View style={styles.cusHead}>
          <View style={{paddingLeft: 20}}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-left' size={18} style={{color: '#fff'}} />
            </Button>
          </View>
          <View>
            <Text style={styles.headerTitle}>DOA PARA NABI</Text>
          </View>
          <View style={{paddingRight: 20}}>
            <CustomMenuCopy
              menutext="Menu"
              menustyle={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
              textStyle={{
                color: '#fff',
              }}
              copyDoa={() => {
                this.copyDoa(this.id);
              }}
            />
          </View>
        </View>
        <Content>
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
              <View
                style={{
                  width: this.state.width,
                  alignSelf: 'flex-start',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                }}
              >
                <Card>
                  <CardItem header style={{alignItems: 'center', justifyContent: 'center'}}>
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
            )}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cusHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#22223B',
    height: 70,
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Livvic-SemiBold',
    fontSize: 18,
  },
  njobo: {
    width: Dimensions.get('window').width,
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
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
