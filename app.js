const express=require('express');
const mysql=require('mysql2');
const axios=require("axios");
const app=express()
const port= 3000
app.use(express.json());
app.set ('view engine',  'ejs');
   
app.get('/',(req,res)=>{
 let name =Roberto ;
 res.render('index',{nameOfTheClient:name  });
})