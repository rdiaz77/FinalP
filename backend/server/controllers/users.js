const router = require("express").Router()
const users = require('../models/users')


// GET All Users -- now from the models folder

router.get('/', (req,res)=>{
    
    res.render('users/index', {users})


})

// GET -- Show the form to add a new user

router.get('/new', (req,res)=>{
    res.render('users/new')
})

// POST -- Receive the information to add a new user

router.post('/', (req,res)=>{
    console.log(req.body)
    res.send('POST/users')
})

router.get('*', (req,res)=>{
    res.render("how not to Dry")

})



module.exports = router