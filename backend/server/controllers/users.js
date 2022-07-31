const router = require("express").Router()



// GET Users

router.get('/', (req,res)=>{
    let users = [{
        
        userName : "Rafael Diaz",
        userPhone: "555-555-1111"

    }, {
        
        userName : "Jorge Donono",
        userPhone: "555-555-111"

    }]
    res.render('users/index', {users})


})

router.get('/new', (req,res)=>{
    res.render('users/new')
})

module.exports = router