import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';


export default class DrugsPage extends Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null
  };
  render() {
    
    return (
      <View >
     
       <Text> Drug Pagex </Text>
       {/* <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('DrugsPage', { name: 'Jane' })
        }/> */}
      
      
      </View>
    );
  }
}

