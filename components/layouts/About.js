/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
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

export default class About extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress = { () => this.props.navigation.goBack() }>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>About Developer</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.container}>
            <Text>I'm the About component</Text>
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
});
