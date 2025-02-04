const express = require('express')
const axios = require("axios");
const app = express()
const port = 3000
 
app.use(express.json());
 

app.set('view engine', 'ejs');
 
app.get('/', (req,res) => {
 

    res.render('main');
})
 
app.get('/lista', (req,res) => {
 
    let name = "Roberto";
    let listaCompras = ["carne", "sumo", "arroz"];
    let msg = "A minha lista"
 
    res.render('index', { nameOfTheClient: name, mensagem: msg, lista: listaCompras});
})
 
app.get('/contacts', (req,res) => {
 
    res.render('contacts');
})
 
 
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${3000}`)
  })