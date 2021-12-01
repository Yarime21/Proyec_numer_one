// const chalk =require ("chalk")
// console.log(chalk.blue('Hello world!'));

const express = require('express')
const app = express()
app.get ('/home', (req,res) => { 
    res.send('<h1> Hola Mundo </h1>')
})
app.get ('/page', (req,res) => { 
    res.send( {message: "Hola Mundo"} )
})
app.listen(3001, () => {
  console.log('servidor corriendo')
})
