const users = require("express").Router()
const db = require('../models')
const {user} = db



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

// GET -- Show the form to add a new user

users.get('/new', (req,res)=>{
    res.render('users/new')
})

// GET -- Show particular user


users.get("/:id", (req,res)=>{

    let id = Number(req.params.id)

    if(isNaN(id)){
        res.render("error404")
    }else if(!users[id]){
        res.render("error404")
    }else {
        res.render('users/show', {user : users[id]})
    }
    

})

// POST -- Receive the information to add a new user

users.post('/', (req,res)=>{
    console.log(req.body)
    if(!req.body.userPhone){
        req.body.userPhone = 'not available'
    }

    users.push(req.body)
    res.redirect('/users')
})

users.get('*', (req,res)=>{
    res.render("how not to Dry")

})



module.exports = users