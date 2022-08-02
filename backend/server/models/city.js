'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
    city_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    city_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    county_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    region_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'City',
    tableName: 'cities',
    timestamps: false
  });
  return City;
};