const regions = require('express').Router()
const { BackendKeyDataMessage } = require('pg-protocol/dist/messages')
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

//FIND SPECIFIC REGION -- not working

// FIND A SPECIFIC BAND

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









module.exports = regions