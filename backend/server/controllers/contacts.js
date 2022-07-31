const router = require("express").Router()


// GET Contacts

router.get('/', (req,res)=>{
    let contacts = [{
        
        contactName : "John Doe",
        contactPhone: "555-555-555"

    }, {
        
        contactName : "Henry Doe",
        contactPhone: "555-555-9999"

    }]
    res.render('contacts/index', {contacts})


})

router.get('/new', (req,res)=>{
    res.render('contacts/new')
})

module.exports = router