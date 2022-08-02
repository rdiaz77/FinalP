'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('visits', {
      visit_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      visit_notes: {
        type: Sequelize.TEXT
      },
      place_id: {
        type: Sequelize.INTEGER
      },
      contact_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('visits');
  }
};