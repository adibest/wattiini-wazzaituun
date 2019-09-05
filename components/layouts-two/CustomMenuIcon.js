//This is an example code for the popup menu//
import React, { Component } from 'react';
//import react in our code.
import { Button, View, Text,Image, TouchableOpacity, StyleSheet  } from 'react-native';
//import all the components we are going to use.
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//import menu and menu item
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CustomMenuIcon extends Component {
  _menu = null;
  setMenuRef = ref => {
    this._menu = ref;
  };
  showMenu = () => {
    this._menu.show();
  };
  hideMenu = () => {
    this._menu.hide();
  };
  optionAbout = () => {
    this._menu.hide();
    this.props.optionAbout();
  };
  render() {
    return (
      <View>
        <Menu
          ref={this.setMenuRef}
          button={
            <TouchableOpacity onPress={this.showMenu}>
              <Icon name='ellipsis-v' size={18} style={{color: '#fff'}} />
            </TouchableOpacity>
          }>
          <MenuItem onPress={this.optionAbout} style={styles.menu}>About</MenuItem>
        </Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#fefefe',
  }
});
