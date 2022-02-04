'use strict';

module.exports = {
  up: async (queryInterface, sequelize) => {
    try {
      await queryInterface.createTable('user_to_city', {
        id: {
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          type: sequelize.INTEGER,
        },
        user_id: {
          allowNull: false,
          type: sequelize.INTEGER,
          references: { model: 'user', key: 'id' },
        },
        city_id: {
          allowNull: false,
          type: sequelize.INTEGER,
          references: { model: 'city', key: 'id' },
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
      await queryInterface.dropTable('user_to_city');
    } catch (err) {
      throw err;
    }
  },
};
