
//instantiate the server
const express = require('express');
const app= express();

//use to parse req.body in express -> put or post case
// const bodyParser= require('body-parser')

//specifically parse json data && add it to the request.body object
// app.use(bodyParser.json());



// activate the server or live on browser with port number 3000
app.listen(3000,()=>{
    console.log("server started at port number 3000")
})

// creating first route slash represents the homepage

app.get('/',(req,res)=>{
    res.send("hello-you have created the first  server")
})

//post means submmiting the data.... right now we have not created any database
//submitiing data:--client side to server side
// app.post('/api/cars',(req,res)=>{
//         const{name,brand}= req.body;
//         console.log(name);
//         console.log(brand);
//         res.send("cars submitted successfully")
// })


//connecting the server and the mangoose

const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase",{
    useNewUrlParser:true,
    useUnifiedTopology:true

    
}).then(()=>{console.log("successfull")})
.catch((error)=>{console.log("error")})
