const users = require("express").Router()
const db = require('../models')
const {User} = db



// GET All Users -- now from the models folder

users.get('/', async(req,res)=>{
    try {
        const foundUsers = await User.findAll()
        res.status(200).json(foundUsers)
    } catch(error){
        res.status(500).json(error)
    }
    
    // res.render('users/index', {users})
})



module.exports = users