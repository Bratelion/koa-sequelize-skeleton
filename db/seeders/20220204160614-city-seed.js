'use strict';

module.exports = {
  up: async (queryInterface, _sequelize) => {
    await queryInterface.bulkInsert('city', [
      {
        id: 1001,
        name: 'City 1',
        created_at: new Date(),
      },
      {
        id: 1002,
        name: 'City 2',
        created_at: new Date(),
      },
      {
        id: 1003,
        name: 'City 3',
        created_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('city');
  },
};
