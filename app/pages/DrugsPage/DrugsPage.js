import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';


export default class DrugPage extends Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
     
       <Text> Drug Page </Text>
       <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('DrugPage', { name: 'Jane' })
        }
      />
      
      </View>
    );
  }
}

