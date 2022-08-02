'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      user_firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_phone: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('users');
  }
};