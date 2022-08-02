'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('regions', {
      region_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      region_name: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('regions');
  }
};