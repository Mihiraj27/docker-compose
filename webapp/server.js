const express = require('express');

const app = express();

app.get("/" ,(req,res)=>{
    fetch('http://webapiapp:1000/todos/', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    },
    ).then(response => {
        if (response.ok) {
            response.json().then(json => {
            console.log(json);
            res.send(json);
            });
        }
    });
} );



app.listen(1200,()=>{
    console.log("Server is running 1200");
})