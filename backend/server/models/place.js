'use strict';
const {
  Model
} = require('sequelize');
// const { all } = require('../controllers/places');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Place.init({
    place_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    place_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    place_street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    place_phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    place_email: {
      type: DataTypes.STRING,
      allowNull: true
    },

    place_lat: {
      type: DataTypes.FLOAT,
      allowNull:true,
    },
    place_lon: {
      type: DataTypes.FLOAT,
      allowNull:true
    },
    contact_id: {
      type:DataTypes.INTEGER,
      allowNull: true
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    city_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    county_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
} , {
    sequelize,
    modelName: 'Place',
    tableName:"bands",
    timestamps: true
  });
  return Place;
};