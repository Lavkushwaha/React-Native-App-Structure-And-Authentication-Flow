# React Native App Structure And Authentication FLow 

React TabNavigation and StackNavigation of react-navigation is used here to make a solid Basic App Structure

In this Project We have

4 screens:- LoginScreen, SignUpScreen, WelcomeScreen,AppTabNavigatorScreen


# App.js
'import React, { Component } from 'react';
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
  

});'

#AppTabNavigator.js
'
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
}'

#Another important Topic is to transfer navigation from child route to parent route

We pass the screen Props when rendering the TabNavigator like
'export default class AppTabNavigator extends Component {

    static navigationOptions={
        header:null
      }

  render() {
    return (
      <TabNavigator screenProps={{navigation:this.props.navigation}}/> //here we passed it
    );
  }
}'

and catch inside screen to call those route as

#inside profile.js for logout button
'export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button style={{marginBottom:20}} rounded title="Logout" onPress={() => this.props.screenProps.navigation.navigate('WelcomeScreen')}/>
       
        
      </View>
    );
  }
}'


