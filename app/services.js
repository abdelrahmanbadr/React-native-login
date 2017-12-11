import { AsyncStorage } from 'react-native';

var global = 'http://192.168.88.2/pvradar/public/api/';

export function Login(data,props){

        fetch(global+"authenticate", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:  JSON.stringify(data)
         }).then((response) => response.json())
         .then((responseJson) => {
            console.log(responseJson.status)

            if(responseJson.status == 'ok'){
              AsyncStorage.setItem("email",data.email);
              AsyncStorage.setItem("password",data.password);
               props.navigate('DrugsPage', { name: 'Jane' });
            }
              
           })
           .then(function(data){ 
           console.log(data)
           });

}