//DEPENDENCIES
const {sequelize, DataTypes, Model} = require('sequelize')


//MODEL
class Contact extends Model{}


Contact.init({
    contact_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    contact_firstName: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    contact_lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact_phone:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    contact_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact_DOB:{
        type: DataTypes.DATE,
        allowNull: true
    },
    place_id: {
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
    modelName: "Contact",
    tableName: "contacts",
    timestamps: true
})




module.exports = Contact

















// module.exports = [{
        
//     contactName : "John",
//     contactLastName: "Doe",
//     contactPhone: "555-555-555"

// }, {
    
//     contactName : "Henry",
//     contactLastName: "Doe",
//     contactPhone: "555-555-9999"

// }]