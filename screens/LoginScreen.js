
import React, { Component } from 'react';
import {
 
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';




export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button style={{marginBottom:20}} rounded title="To Dashboard" onPress={() => this.props.navigation.navigate('AppTabNavigator')}/>
       
        
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
