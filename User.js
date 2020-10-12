const router = require('express').Router()

const User = require('userModel')

router.get('/',(req,res) => {
    User.find()
        .then(res => res.json(data))
        .catch(error => res.status(400).json('Error:'+ error ))
})