const router = require("express").Router()
const places = require('../models/places')



// GET -- Show All Places -- getting the date from modules now
router.get('/', (req,res)=>{
    
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