//DEPENDENCIES
const {Sequelize, DataTypes, Model} = require('sequelize')



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
    Sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false

})



module.exports = User



