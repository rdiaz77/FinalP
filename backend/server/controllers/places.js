const router = require("express").Router()
const places = require('../models/places')



// GET -- Index show all Places -- getting the date from modules now
router.get('/', (req,res)=>{
    
    res.render('places/index', {places})


})

// GET -- Show route

router.get("/show", (req,res)=>{
    res.render('places/show')
})

// GET - Show the selected Place

router.get('/:id',(req,res)=>{
    console.log(req.params)

    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    } 
    else if(!places[id]){
        res.render("error404")
    }
    
    else {

        res.render("/places/show", {place: places[id]})

    }
    
})



// GET -- Show the form to add a new place


router.get('/new', (req,res)=>{
    res.render('places/new')

})

// POST -- Send the information to add a new place

router.post('/', (req,res)=>{
    console.log(req.body)
    if(!req.body.address){
        req.body.address = "not available"
    }
    places.push(req.body)
    res.redirect('/places')
})










// Error 404 route
router.get('*', (req,res)=>{
    res.render('places/error404')
})



module.exports = router