'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Support extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Support.init({
    support_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
    },

    support_firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    support_lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    support_phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    support_email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    support_comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Support',
    tableName: 'supports',
    timestamps: true
  });
  return Support;
};