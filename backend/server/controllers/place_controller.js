const places = require('express').Router()
const db = require('../models')
const {Place} = db



//FIND ALL REGIONS

places.get('/', async(req,res)=>{
    try {
        const foundPlaces = await Place.findAll()
        res.status(200).json(foundRegions)
    } catch (error) {
        res.status(500).json(error)
        
    }
})