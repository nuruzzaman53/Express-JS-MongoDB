const express = require('express')

const app = express()

const mongoose = require('mongoose')

const cors = require('cors')

const port = process.env.port || 8000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost/users',{useNewUrlParser:true},() => {
    console.log('MongoDB databse connection successful')
})

app.listen(port ,()=> {
    console.log(`App is connected on port ${port}`)
})