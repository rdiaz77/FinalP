const router = require("express").Router()




//GET routes

router.get('/', (req,res)=>{
    res.render('dashboard/index')
})


module.exports = router