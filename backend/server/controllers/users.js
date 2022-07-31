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

// GET -- Show particular user


router.get("/:id", (req,res)=>{

    let id = Number(req.params.id)
    
    if(isNaN(id)){
        res.render("error")
    }else if(!users[id]){
        res.render("error2")
    }else {
        res.render('users/show', {user : users[id]})
    }
    

})

// POST -- Receive the information to add a new user

router.post('/', (req,res)=>{
    console.log(req.body)
    if(!req.body.userPhone){
        req.body.userPhone = 'not available'
    }

    users.push(req.body)
    res.redirect('/users')
})

router.get('*', (req,res)=>{
    res.render("how not to Dry")

})



module.exports = router