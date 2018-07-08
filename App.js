
import React, { Component } from 'react';
import {
 
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AppTabNavigator from './screens/AppTabNavigator';


export default class App extends Component{
  render(){
    return(
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = new createStackNavigator({
  WelcomeScreen:{screen:WelcomeScreen,},
  LoginScreen:{screen:LoginScreen},
  SignupScreen:{screen:SignupScreen},
  AppTabNavigator:{screen:AppTabNavigator},
  

});

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
