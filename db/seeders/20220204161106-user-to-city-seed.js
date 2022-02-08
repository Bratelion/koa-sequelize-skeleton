'use strict';

module.exports = {
  up: async (queryInterface, _sequelize) => {
    await queryInterface.bulkInsert('user_to_city', [
      {
        id: 1001,
        user_id: 1001,
        city_id: 1001,
        created_at: new Date(),
      },
      {
        id: 1002,
        user_id: 1002,
        city_id: 1002,
        created_at: new Date(),
      },
      {
        id: 1003,
        user_id: 1001,
        city_id: 1003,
        created_at: new Date(),
      },
      {
        id: 1004,
        user_id: 1003,
        city_id: 1002,
        created_at: new Date(),
      },
      {
        id: 1005,
        user_id: 1004,
        city_id: 1001,
        created_at: new Date(),
      },
      {
        id: 1006,
        user_id: 1005,
        city_id: 1003,
        created_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user_to_city');
  },
};
