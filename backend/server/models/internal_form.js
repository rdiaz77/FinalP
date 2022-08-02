'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Internal_Form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Internal_Form.init({
    internal_form_id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false
    },
    internal_form_note: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    reason_to_contact: {
        type: DataTypes.STRING,
        allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Internal_Form',
    tableName: "internal_forms",
    timestamps:true
  });
  return Internal_Form;
};