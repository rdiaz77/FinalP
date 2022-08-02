'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('credentials', {
      credential_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      credential_userName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      credential_password: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('credentials');
  }
};