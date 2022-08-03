'use strict';
const {
  Model
} = require('sequelize');
// const { all } = require('../controllers/places');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact.init({
    contact_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    contact_firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    contact_lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    contact_email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact_DOB: {
      type: DataTypes.DATE,
      allowNull: true
    },

    place_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    county_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  }, 
  {
    sequelize,
    modelName: 'Contact',
    tableName: 'contacts',
    timestamps: true
  });
  return Contact;
};