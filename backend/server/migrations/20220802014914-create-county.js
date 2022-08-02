'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('counties', {
      county_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      county_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      region_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('counties');
  }
};