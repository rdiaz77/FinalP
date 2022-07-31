const router = require("express").Router()


// GET Contacts

router.get('/', (req,res)=>{
    let contacts = [{
        
        contactName : "John",
        contactLastName: "Doe",
        contactPhone: "555-555-555"

    }, {
        
        contactName : "Henry",
        contactLastName: "Doe",
        contactPhone: "555-555-9999"

    }]
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