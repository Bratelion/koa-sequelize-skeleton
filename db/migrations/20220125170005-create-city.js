'use strict';
module.exports = {
  up: async (queryInterface, sequelize) => {
    try {
      await queryInterface.createTable('city', {
        id: {
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          type: sequelize.INTEGER,
        },
        name: {
          unique: true,
          allowNull: false,
          type: sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: sequelize.DATE,
        },
      });
    } catch (err) {
      throw err;
    }
  },
  down: async (queryInterface) => {
    try {
      await queryInterface.dropTable('city');
    } catch (err) {
      throw err;
    }
  },
};
