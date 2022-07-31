const router = require("express").Router()



// GET Users

router.get('/', (req,res)=>{
    let users = [{
        
        userName : "Rafael",
        userLastName: "Diaz",
        userPhone: "555-555-1111"

    }, {
        
        userName : "Jorge",
        userLastName: "Donoso",
        userPhone: "555-555-111"

    }]
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