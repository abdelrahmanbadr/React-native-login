import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import LoginForm from './LoginForm';


export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.loginContainer}>
                  <Image resizeMode="contain" style={styles.logo} source={require('./logo.png')} />
       </View>

          <View style={styles.formContainer}>
                 <LoginForm />
          </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    //  backgroundColor: '#2c3e50',
  },
  loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  logo: {
    //  position: 'absolute',
      width: 300,
      height: 100
  }
});



