


const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const User = require('../Model/user.js')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Mern-APP')

app.post('/api/register',  async(req, res) => {

console.log(req.body)    

try{

     await User.Create({

        name : req.body.name,
        email : req.body.email,
        password : req.body.password,

    })
    res.json({status : 'ok'})


} catch (err){

    res.json({status : 'error', error : 'Duplicate Email'})

}



})

app.listen (1337, () => {

console.log('Server Started on 1337')

})
