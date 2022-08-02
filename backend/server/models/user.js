//DEPENDENCIES
const {sequelize, DataTypes, Model} = require('sequelize')



//MODEL

class User extends Model{}

User.init({

    user_id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    user_firstName: {
        type: DataTypes.STRING,
        allowNull: false
    }


}, {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false

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