'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('places', {
      place_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      place_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      place_street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      place_phone: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      place_email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      place_lat: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      place_lon: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      contact_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      county_id: {
        type: Sequelize.INTEGER,
        allowNull:false
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
    await queryInterface.dropTable('places');
  }
};