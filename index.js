// const chalk =require ("chalk")
// console.log(chalk.blue('Hello world!'));

const express = require('express')
const app = express()
const carime_arreglo = []
app.post('/user',express.json(), (req,res)=> {
  console.log(req.body)
  carime_arreglo.push(req.body)
  res.send({message:'/este es el post'})
  })
app.get('/user', (req,res)=> {
  res.send({user:carime_arreglo})
})
app.get ('/home', (req,res) => { 
    res.send('<h1> Hola Mundo </h1>')
})
app.get ('/page', (req,res) => { 
    res.send( {message: "Hola Mundo"} )
})
app.listen(3001, () => {
  console.log('servidor corriendo')
})

