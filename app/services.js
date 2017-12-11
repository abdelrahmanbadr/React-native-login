var global = 'http://192.168.88.2/pvradar/public/api/';

export function Login(data){

        fetch(global+"authenticate", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:  JSON.stringify(data)
         }).then(function(response){ 
            console.log(response)
           // navigate('DrugPage', { name: 'Jane' });
            return response.json();   
           })
           .then(function(data){ 
           console.log(data)
           });

}