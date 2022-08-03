const regions = require('express').Router()
const db = require('../models')
const {Region} = db



//FIND ALL REGIONS

regions.get('/', async(req,res)=>{
    try {
        const foundRegions = await Region.findAll()
        res.status(200).json(foundRegions)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

//FIND SPECIFIC REGION 


regions.get('/:id', async (req, res) => {
    try {
        const foundRegion = await Region.findOne({
            where: { region_id: req.params.id }
        })
        res.status(200).json(foundRegion)
    } catch (error) {
        res.status(500).json(error)
    }
})


// CREATE A REGION -- not needed --not working on postman
regions.post('/', async (req, res) => {
    try {
        const newRegion = await Region.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new region',
            data: newRegion
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A BAND -- not needed
regions.put('/:id', async (req, res) => {
    try {
        const updatedRegions = await Region.update(req.body, {
            where: {
                region_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedRegions} region(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})







module.exports = regions