import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet,Button,Image} from 'react-native';
import {Login} from '../../services';
import { StackNavigator } from 'react-navigation';


export default class LoginForm extends Component {
    
    constructor(props) {
        super(props);
        this.state={email:'',password:''};
       
        
      }
      userLogin = ()=>{
        var data = {
            "email": this.state.email,
            "password": this.state.password,
        
         }
         Login(data,this.props);
       
      }
     
     
  render() {
    //const { navigate } = this.props.navigation;
    return (
        <View >
        <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('./logo.png')} />
         </View>
  
            <View style={styles.formContainer}>
                  
         
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
</View>
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



