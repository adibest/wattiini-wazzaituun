/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  Container, Header, Content,
  Left, Right, Body, Title, Button,
  Tab, Tabs, TabHeading,
  List, ListItem
} from 'native-base';
import Doa from '../datas/Doa.json';
import Doa2 from '../datas/Doa2.json';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomMenuIcon from './CustomMenuIcon';

export default class HomeFinal extends Component {

  componentDidMount(){
    SplashScreen.hide();
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
    return (
      <Container
        onLayout={this.onLayout}
        style={{width: this.state.width}}
      >
        <View hasTabs style={styles.cusHead}>
          <View style={styles.textHead}>
            <Text style={styles.headerTitle}>Doa Dalam Qur'an</Text>
            <Text style={styles.headerDesc}>Sebuah aplikasi yang berisi doa-doa dalam Al-Qur'an Al-Karim</Text>
          </View>
          <View style={styles.rightHead}>
            <View style={{paddingRight: 20}}>
              <CustomMenuIcon
                //Menu Text
                menutext="Menu"
                //Menu View Style
                menustyle={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}
                //Menu Text Style
                textStyle={{
                  color: 'white',
                }}
                //Click functions for the menu items
                optionAbout={() => {
                  this.props.navigation.navigate('About');
                }}
              />
            </View>
          </View>
        </View>
        <Tabs
          style={styles.tab}
          tabBarUnderlineStyle={styles.tabUnderlineColor}
        >
          <Tab
            heading={
            <TabHeading style={styles.tabHeading}>
              <Text style={styles.textOnTab}>DOA-DOA UMUM</Text>
            </TabHeading>
          }
          >
            <FlatList
              style={{width: this.state.width}}
              data={Doa}
              keyExtractor={(doa, index) => index.toString()}
              renderItem={(doa) => (
                <View style={styles.outer}>
                  <TouchableOpacity
                    style={styles.touch}
                    onPress={() => this.props.navigation.navigate('DoaUmum',{pageId:doa.item.id})}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 10,
                        width: this.state.width-20,
                        height: 50,
                        borderWidth: 1,
                        borderColor: '#22223B',
                        borderRadius: 5,
                      }}
                    >
                      <View styles={styles.flexNumb}>
                        <Text style={[styles.textRegular,styles.numbering]}>{doa.item.id}</Text>
                      </View>
                      <View style={styles.flexCont}>
                        <Text style={[styles.textRegular,styles.titleList]}>{doa.item.title}</Text>
                      </View>
                      <View style={styles.flexIcon}>
                        <Icon name='angle-right' size={12} style={{color: '#22223B'}} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
            <View style={{height: 10}}></View>
          </Tab>
          <Tab heading={
            <TabHeading style={styles.tabHeading}>
              <Text style={styles.textOnTab}>DOA PARA NABI</Text>
            </TabHeading>
          }
          >
            <FlatList
              style={{width: this.state.width}}
              data={Doa2}
              keyExtractor={(doa, index) => index.toString()}
              renderItem={(doa) => (
                <View style={(styles.outer)}>
                  <TouchableOpacity
                    style={styles.touch}
                    onPress={() => this.props.navigation.navigate('DoaNabi',{pageId:doa.item.id})}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 10,
                        width: this.state.width-20,
                        height: 50,
                        borderWidth: 1,
                        borderColor: '#22223B',
                        borderRadius: 5,
                      }}
                    >
                      <View styles={styles.flexNumb}>
                        <Text style={styles.numbering}>{doa.item.id}</Text>
                      </View>
                      <View style={styles.flexCont}>
                        <Text style={[styles.textRegular,styles.titleList]}>{doa.item.title}</Text>
                      </View>
                      <View style={styles.flexIcon}>
                        <Icon name='angle-right' size={12} style={{color: '#22223B'}} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
            <View style={{height: 20}}></View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cusHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22223B',
    height: 120,
  },
  textHead: {
    flex: 4,
    paddingLeft: 20
  },
  rightHead: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Livvic-SemiBold',
    fontSize: 24,
  },
  headerDesc: {
    color: '#fff',
    fontFamily: 'Livvic-Light',
    fontSize: 12,
  },
  tab: {
    borderBottomColor: '#02C39A',
  },
  tabHeading: {
    backgroundColor: '#fff',
    borderBottomColor: '#02C39A',
  },
  textOnTab: {
    color: '#02C39A',
    fontFamily: 'Livvic-Medium',
    fontSize: 14,
  },
  tabUnderlineColor: {
    backgroundColor: '#02C39A',
    height: 2.15,
  },
  outer: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: Dimensions.get('window').width-20,
    height: 50,
    borderWidth: 1,
    borderColor: '#22223B',
    borderRadius: 5,
  },
  textRegular: {
    fontFamily: 'Livvic-Regular',
  },
  flexNumb: {
    flex: 2,
  },
  flexCont: {
    flex: 9,
  },
  flexIcon: {
    alignItems: 'flex-end',
    flex: 1,
  },
  numbering: {
    padding: 2,
    fontSize: 14,
    backgroundColor: '#22223B',
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Livvic-Medium',
    borderRadius: 25,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  titleList: {
    fontSize: 12,
  },
});
