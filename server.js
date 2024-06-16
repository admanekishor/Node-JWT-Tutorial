const express = require('express');

const app = express();

app.get('', (req, res)=>{
    res.send("Hello World");

});

app.get('/user', (req, res)=>{
    res.send("User Page, "+ req.query.name);
});


app.get('/about', (req, res)=>{
    res.send("About Page");
});


app.get('/help', (req, res)=>{
    res.send("Help Page");
});


app.listen(4200);