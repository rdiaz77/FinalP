//DEPENDENCIES
const {sequelize, DataTypes, Model} = require('sequelize')


//MODEL
class Place extends Model{}


Place.init({
    place_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    place_name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    place_street: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    place_phone:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    place_email: {
        type: DataTypes.STRING,
        allowNull: true
    },

    place_lat: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    place_lon: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    contact_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    county_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },


},{
    sequelize,
    modelName: "Place",
    tableName: "places",
    timestamps: true
})




module.exports = Place





// module.exports =  [{
//     name: 'Clinica Alemana',
//     type : 'Private',
//     address : "Av. Vitacura 9000",
//     county: " Vitacura",
//     city: "Santiago",
//     region: "Metropolitana",
//     mainContact : "John Doe",
//     mainContactPhone: "555-555-555"

// }, {
//     name: 'Hospital Padre Hurtado',
//     type : 'Public',
//     address : "Santa Rosa 10000",
//     county: " Pudahuel",
//     city: "Santiago",
//     region: "Metropolitana",
//     mainContact : "Henry Doe",
//     mainContactPhone: "555-555-9999"

// }]