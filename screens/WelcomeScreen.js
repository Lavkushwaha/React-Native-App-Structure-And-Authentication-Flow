
import React, { Component } from 'react';
import {
 
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import AppTabNavigator from './AppTabNavigator';


export default class WelcomeScreen extends Component {
  static navigationOptions={
    header:null
  }

  constructor(props){
    super(props);
    this.state=({
      isLoggedIn:0,
    });
  }

  componentWillMount()
  {
    AsyncStorage.getItem('user').then((user)=>{
      if(user != null){
        this.setState({
          isLoggedIn:1,
        })
        this.props.navigation.navigate('AppTabNavigator');       
      }     
    })
  }

  render() {
    return (
      <View style={styles.container}>
         <Button style={{marginBottom:20}} rounded title="Login" onPress={() => this.props.navigation.navigate('LoginScreen')}/>
         <Button rounded title="Signup" onPress={() => this.props.navigation.navigate('SignupScreen')}/>
      </View>
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
 
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
