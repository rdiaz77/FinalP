const router = require("express").Router()



// GET -- Show All Places
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
// GET -- Show the form to add a new place


router.get('/new', (req,res)=>{
    res.render('places/new')

})

// POST -- Receive the information to add a new place

router.post('/', (req,res)=>{
    console.log(req.body)
    res.send('POST/places')
})










// Error 404 route
router.get('*', (req,res)=>{
    res.render('places/error404')
})



module.exports = router