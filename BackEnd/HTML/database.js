const express=require('express');
var path=require('path');
const bodyparser=require('body-parser');

//const { dirname } = require('../HTML');
const app=express();
//app.use(bodyparser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
//res.sendFile(path.join(__dirname,'/index.html'))
})
// app.post('/dashboard.html',(req,res)=>{
//     console.log('Helooo');
//     console.log(req.body);
// })
app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})
