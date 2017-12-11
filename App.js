/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  AppRegistry
  
} from 'react-native';

import LoginPage from './app/pages/LoginPage/LoginPage';
import Test from './app/pages/Test';
import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
      {/* <Image source={require('./wallpaper.png')}  style={{  flex: 1 , position:'absolute'}} /> */}
              
            {/* <LoginPage /> */}
          <Text>Hello </Text>
            {/* <Test /> */}
            {/* <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      /> */}
            
      
       
      
      </View>
    );
  }
}


const screens = StackNavigator({
  Home: { screen: App },
  Login: { screen: LoginPage },
});
AppRegistry.registerComponent('pvradar', () => screens);

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
