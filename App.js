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
  AppRegistry,
  AsyncStorage
  
} from 'react-native';

import LoginForm from './app/pages/LoginPage/LoginForm';
import DrugsPage from './app/pages/DrugsPage/DrugsPage';
import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class App extends Component {
  constructor(props){
    super(props);
    this.state={myKey:''};
    
    AsyncStorage.getItem("email").then((value) => {
      this.setState({"myKey": value});    
  }).done();
    
    
  }
 
  render() {
    const { navigate } = this.props.navigation;
    // if(value != null){
    //   return <text> xx </text>  ;
    // }
    return (
      
      <View >
      {/* <Image source={require('./wallpaper.png')}  style={{  flex: 1 , position:'absolute'}} /> */}
              
            {/* <LoginForm /> */}

          {/* <Text>Hello </Text>
            {/* <Test /> */}
            
            <Text>  {this.state.myKey} </Text>
            <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('LoginForm', { name: 'Jane' })
        }
      />
            
      
       
      
      </View>
    );
  }
}


const screens = StackNavigator({
  Home: { screen: App },
  DrugsPage: { screen: DrugsPage },
  LoginForm: { screen: LoginForm},
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
