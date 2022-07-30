const router = require("express").Router()




// GET Places
router.get('/', (req,res)=>{
    let places = [{
        name: 'Clinica Alemana',
        type : 'Private',
        address : "Av. Vitacura 9000",
        county: " Vitacura",
        city: "Santiago",
        region: "Metropolitana",
        mainContact : "John Doe",
        mainContactPhone: "555-555-555"

    }, {
        name: 'Hospital Padre Hurtado',
        type : 'Public',
        address : "Santa Rosa 10000",
        county: " Pudahuel",
        city: "Santiago",
        region: "Metropolitana",
        mainContact : "Henry Doe",
        mainContactPhone: "555-555-9999"





    }]
    res.render('places/index', {places})


})
// Route to Add a New Place


router.get('/new_place', (req,res)=>{
    res.sender('places/new')



})
// Error 404 route
router.get('*', (req,res)=>{
    res.render('places/error404')
})








module.exports = router