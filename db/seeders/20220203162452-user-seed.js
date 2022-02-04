module.exports = {
  up: async (queryInterface, _sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('user', [
        {
          id: 1001,
          name: 'User 1',
          created_at: new Date(),
        },
        {
          id: 1002,
          name: 'User 2',
          created_at: new Date(),
        },
        {
          id: 1003,
          name: 'User 3',
          created_at: new Date(),
        },
        {
          id: 1004,
          name: 'User 4',
          created_at: new Date(),
        },
        {
          id: 1005,
          name: 'User 5',
          created_at: new Date(),
        },
      ]);
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      queryInterface.bulkDelete('user');
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
