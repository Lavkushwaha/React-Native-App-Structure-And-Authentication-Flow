
import React, { Component } from 'react';
import {
 
  StyleSheet,
  Text,
  View
} from 'react-native';

import {createBottomTabNavigator } from 'react-navigation';
import Home from './tabs/Home';
import Profile from './tabs/Profile';

const TabNavigator = new createBottomTabNavigator({
    Home:{
        screen:Home
    },
    Profile:{
        screen:Profile
    }
});

export default class AppTabNavigator extends Component {

    static navigationOptions={
        header:null
      }

  render() {
    return (
      <TabNavigator screenProps={{navigation:this.props.navigation}}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
