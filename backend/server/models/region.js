'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Region.init({
    region_id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    region_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Region',
    tableName: "regions",
    timestamps: false
  });
  return Region;
};