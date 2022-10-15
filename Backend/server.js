


const express = require('express')
const app = express()


app.get('/hello', (req, res) => {

res.send('Hello World')

})

app.listen (1337, () => {

console.log('Server Started on 1337')

})
