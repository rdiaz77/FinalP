'use strict';

const { all } = require("../controllers/places");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('supports', {
      support_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      support_firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },

      support_lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },

      support_phone: {
        type: Sequelize.INTEGER,
        allowNull: true
      },

      support_email: {
        type: Sequelize.STRING,
        allowNull: false
      },

      support_comment: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('supports');
  }
};