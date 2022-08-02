'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contacts', {
      contact_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      contact_firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contact_lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contact_phone: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      contact_email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      contact_DOB: {
        type: Sequelize.DATE,
        allowNull: true
      },
      place_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      county_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      region_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contacts');
  }
};