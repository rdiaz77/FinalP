const router = require('express').Router()
const supportRequest = require('../models/support')



// GET -- entry point for support page


router.get('/', (req,res)=>{
    res.render("support/contact")
})

// GET - Message web
router.get("/message", (req,res)=>{
    res.render("support/message")
})
// POST -- Receive the information from the contact form

router.post('/', (req,res)=>{
    console.log(req.body)
   
    res.redirect('/support/message')
})


// ALL other errors

router.get('*', (req,res)=>{
    res.render("error404")

})

module.exports = router