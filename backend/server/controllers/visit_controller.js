const visits = require('express').Router()
const db = require('../models')
const {Visit} = db


//FIND ALL REGIONS

visits.get('/', async(req,res)=>{
    try {
        const foundVisits = await Visit.findAll()
        res.status(200).json(foundVisits)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

//FIND SPECIFIC REGION 


// visits.get('/:id', async (req, res) => {
//     try {
//         const foundVisit = await Visit.findOne({
//             where: { visit_id: req.params.id }
//         })
//         res.status(200).json(foundRegion)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })
