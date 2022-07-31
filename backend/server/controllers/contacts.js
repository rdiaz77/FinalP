const router = require("express").Router()
const contacts = require('../models/contacts')


// GET All Contacts -- from the modules folder

router.get('/', (req,res)=>{
    
    res.render('contacts/index', {contacts})


})

// GET -- Show the form to add a new contact

router.get('/new', (req,res)=>{
    res.render('contacts/new')
})

// POST -- Receive the information to add a new contact

router.post('/', (req,res)=>{
    console.log(req.body)
    res.send('POST/contacts')
})


module.exports = router