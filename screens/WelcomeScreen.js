
import React, { Component } from 'react';
import {
 
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';






export default class WelcomeScreen extends Component {
  static navigationOptions={
    header:null
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
