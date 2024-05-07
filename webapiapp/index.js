const express = require('express');

const app = express();

app.get("/" , (req,res) =>{
    res.send('Wecome tp Node API 1000')
});

app.listen(1000,() =>{
    console.log('APP is running 1000');
});


app.get('/todos' , (req,res) =>{

    const todos =[
        {id : 1 , text: 'To Do One'},
        {id : 2 , text: 'To Do Two'},
        {id : 3 , text: 'To Do Three'},
        {id : 4 , text: 'To Do five'},
    ];

    res.json(todos);

});