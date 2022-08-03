'use strict';
const {
  Model
} = require('sequelize');
// const { all } = require('../controllers/places');
module.exports = (sequelize, DataTypes) => {
  class County extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  County.init({
    county_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    county_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    region_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'County',
    tableName: "counties",
    timestamps: false
  });
  return County;
};