'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cities', {
      city_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city_name: {
        type: Sequelize.STRING
      },
      county_id: {
        type: Sequelize.INTEGER
      },
      region_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('cities');
  }
};