import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';


export default class Test extends Component {
    
    constructor(props) {
        super(props);
        console.log('constaructor test run.');
        var data = {
          // "username": this.state.username,
          // "password": this.state.password
          "email": 'abdo@yahoo.com',
          "password": '123456'
       }

        fetch("http://192.168.88.2/pvradar/public/api/authenticate", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:  JSON.stringify(data)
       })
     
       .then(function(response){ 
        console.log(response)
        return response.json();   
       })
       .then(function(data){ 
       console.log(data)
       });
        
        
      }
      
     
     
  render() {
    return (
        
        <View>
        <Text> testing </Text>

       </View>
    );
  }

}
function getMoviesFromApiAsync() {
  return fetch('http://192.168.88.2/pvradar/public/api/get')
    .then(response => response.json())
    .then(responseJson => {
    console.log(responseJson);
    })
    .catch(error => {
      console.error(error);
    });
}
