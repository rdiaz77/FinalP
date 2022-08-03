'use strict';
const {
  Model
} = require('sequelize');
// const { all } = require('../controllers/places');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    user_firstName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    user_lastName:{
      type: DataTypes.STRING,
      allowNull:false
    },
    user_phone:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_email:{
      type:DataTypes.STRING,
      allowNull: true
    },
    city_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    county_id:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    region_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
  });
  return User;
};