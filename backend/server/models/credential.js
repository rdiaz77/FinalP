'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credential extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Credential.init({
    credential_id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true
    },
    credential_userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    credential_password: {
        type: DataTypes.STRING,
        allowNull: true
    },

  }, 
  {
    sequelize,
    modelName: 'Credential',
  });
  return Credential;
};