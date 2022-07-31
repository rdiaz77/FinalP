const router = require("express").Router()


// GET Contacts

router.get('/', (req,res)=>{
    let contacts = [{
        
        mainContact : "John Doe",
        mainContactPhone: "555-555-555"

    }, {
        
        mainContact : "Henry Doe",
        mainContactPhone: "555-555-9999"

    }]
    res.render('contacts/index', {contacts})


})

router.get('/new', (req,res)=>{
    res.render('contacts/new')
})

module.exports = router