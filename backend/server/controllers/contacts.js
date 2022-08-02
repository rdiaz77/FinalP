const router = require("express").Router()
const contacts = require('../models/contact')


// GET All Contacts -- from the modules folder

router.get('/', (req,res)=>{
    
    res.render('contacts/index', {contacts})


})

// GET -- Show the form to add a new contact

router.get('/new', (req,res)=>{
    res.render('contacts/new')
})


// GET -- Show particular user


router.get("/:id", (req,res)=>{

    let id = Number(req.params.id)
    
    if(isNaN(id)){
        res.render("error404")
    }else if(!contacts[id]){
        res.render("error404")
    }else {
        res.render('contacts/show', {contact : contacts[id]})
    }
    

})

// POST -- Receive the information to add a new contact

router.post('/', (req,res)=>{
    console.log(req.body)
    if(!req.body.contactPhone){
        req.body.contactPhone = "not available"

    }
    contacts.push(req.body)

    res.redirect('/contacts')
})


module.exports = router