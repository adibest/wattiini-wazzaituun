/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Linking
} from 'react-native';
import {
  Container, Header, Content,
  Left, Right, Body, Title, Button,
  Tab, Tabs, TabHeading,
  Card, CardItem,
  List, ListItem, Separator
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class About extends Component {
  render() {
    return (
      <Container>
        <View style={styles.cusHead}>
          <View style={{paddingLeft: 20}}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-left' size={18} style={{color: '#fff'}} />
            </Button>
          </View>
          <View>
            <Text style={styles.headerTitle}>About App</Text>
          </View>
          <View style={{paddingRight: 40}}></View>
        </View>
        <Content>
          <View style={styles.njobo}>
            <Card>
              <View style={{alignItems: 'center',justifyContent: 'center',paddingTop: 20,paddingBottom: 10}}>
                <Image source={require('./img/icon.png')} style={{height: 120, width: 120}} />
              </View>
              <View style={{alignItems: 'center',justifyContent: 'center'}}>
                <Text style={styles.lh}>Doa Dalam Qur'an</Text>
                <Text style={styles.ln}>by Pondok Informatika Al-Madinah</Text>
              </View>

              <CardItem>
                <Body>
                  <Text style={[styles.lph,styles.tt]}>Sebuah aplikasi sederhana yang berisi doa-doa yang bersumber dari Al Qur'an yang mulia.</Text>
                  <Text style={[styles.lph,styles.tt]}>Project ini merupakan hasil pembelajaran mobile application dari santri jurusan programming di Pondok Informatika Al-Madinah. Dikerjakan dengan basis React Native selama 1 bulan ½.</Text>
                  <Text style={[styles.lph,styles.tt]}>Teks Arab dan Terjemahan disadur dari <Text onPress={ () => Linking.openURL('https://muslim.or.id')} style={{color: '#3c40c6'}}>muslim.or.id</Text> dan <Text onPress={ () => Linking.openURL('https://bincangsyariah.com')} style={{color: '#3c40c6'}}>bincangsyariah.com</Text></Text>
                  <Text style={[styles.lph,styles.tt]}>Jazaakumullaahu khairan. Beribu kata terima kasih untuk segala pihak yang telah membantu dalam proses pembuatan aplikasi ini. Terutama kepada para asatidz yang dengan sabar mengajar kami. Semoga Allah menjaga mereka semua.</Text>
                  <Text style={[styles.lph,styles.tt]}>Dengan aplikasi ini, kami harap dapat menjadikan manfaat bagi para penggunanya. Tak ada gading yang tak retak. Aplikasi ini hanyalah buatan manusia. Maka dari pada itu kritik saran dari para pengguna akan sangat membantu dalam pengembangan aplikasi ini di kemudian hari. InsyaaAllaah.</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Text style={styles.lh}>Developer</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={[styles.lph,styles.tt]}><Icon name='angle-right' />  Adib</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Text style={styles.lh}>Pondok Informatika Al Madinah</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={[styles.lph,styles.tt]}><Icon name='envelope' />  pondokitalmadinah@gmail.com</Text>
                  <Text onPress={ () => Linking.openURL('https://pondokinformatika.com')} style={[styles.lph,styles.tt]}><Icon name='external-link-alt' />  https://pondokinformatika.com</Text>
                  <Text style={[styles.lph,styles.tt]}><Icon name='mobile-alt' />  0857 2524 9265 (Irhamullah)</Text>
                  <Text style={[styles.lph,styles.tt]}><Icon name='map-marker-alt' />  Jl. Raya Krapyak RT.05, Karanganyar, Wedomartani, Ngemplak, Sleman, Daerah Istimewa Yogyakarta</Text>
                </Body>
              </CardItem>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cusHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#22223B',
    height: 70,
    width: Dimensions.get('window').width,
  },
  njobo: {
    width: Dimensions.get('window').width,
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Livvic-SemiBold',
    fontSize: 18,
  },
  lh: {
    fontSize: 18,
    fontFamily: 'Livvic-Medium'
  },
  ln: {
    fontSize: 12,
    fontFamily: 'Livvic-Regular'
  },
  lph: {
    fontSize: 14,
    marginBottom: 10,
  },
  tt: {
    fontFamily: 'Livvic-Regular',
  },
});
