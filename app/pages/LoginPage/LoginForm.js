import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
import {Login} from '../../services';


export default class LoginForm extends Component {
    
    constructor(props) {
        super(props);
        this.state={email:'',password:''};
       
        
      }
      userLogin = ()=>{
        var data = {
            "email": this.state.email,
            "password": this.state.password
         }
         Login(data);
        //   fetch("http://192.168.88.2/pvradar/public/api/authenticate", {
        //     method: "POST",
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body:  JSON.stringify(data)
        //  }).then(function(response){ 
        //     console.log(response)
        //     return response.json();   
        //    })
        //    .then(function(data){ 
        //    console.log(data)
        //    });
         
      }
     
     
  render() {
    return (
        
        <View style={styles.container}>
        
        <TextInput style = {styles.input} 
        autoCapitalize="none" 
        onSubmitEditing={() => this.passwordInput.focus()} 
        autoCorrect={false} 
        keyboardType='email-address' 
        returnKeyType="next" 
        placeholder='Email or Mobile Num' 
        onChangeText={email => this.setState({email})}
        placeholderTextColor='rgba(225,225,225,0.7)'/>

<TextInput style = {styles.input}   
       returnKeyType="go" 
       ref={(input)=> this.passwordInput = input} 
       placeholder='Password' 
       onChangeText={password => this.setState({password})}
       placeholderTextColor='rgba(225,225,225,0.7)' 
       secureTextEntry/>

<TouchableOpacity style={styles.buttonContainer} 
                >
      <Text  style={styles.buttonText} onPress={this.userLogin}>LOGIN</Text>
</TouchableOpacity> 

</View>
    );
  }

  
}


const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: 'black'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});



