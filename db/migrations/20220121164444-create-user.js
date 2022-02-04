'use strict';
module.exports = {
  up: async (queryInterface, sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('user', {
        id: {
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          type: sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: sequelize.DATE,
        },
      });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('user');
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
