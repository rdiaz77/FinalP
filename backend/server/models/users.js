//DEPENDENDIES
const {sequelize, DataTypes, Model} = require('sequelize')


//MODEL
class User extends Model{}


User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    user_firstName: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    user_lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_phone:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
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
    modelName: "Users",
    tableName: "users",
    timestamps: true
})




module.exports = User

// module.exports = [{
        
//     userName : "Rafael",
//     userLastName: "Diaz",
//     userPhone: "555-555-1111"

// }, {
    
//     userName : "Jorge",
//     userLastName: "Donoso",
//     userPhone: "555-555-111"

// }]