'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('money_values', [
      {
        treasure_id: 100,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 101,
        amt: 10,
        created_at: new Date(),
      },
      {
        treasure_id: 102,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 103,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 104,
        amt: 10,
        created_at: new Date(),
      },
      {
        treasure_id: 105,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 106,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 107,
        amt: 10,
        created_at: new Date(),
      },
      {
        treasure_id: 108,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 109,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 110,
        amt: 10,
        created_at: new Date(),
      },
      {
        treasure_id: 111,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 112,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 113,
        amt: 10,
        created_at: new Date(),
      },
      {
        treasure_id: 114,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 115,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 116,
        amt: 10,
        created_at: new Date(),
      },
      {
        treasure_id: 117,
        amt: 15,
        created_at: new Date(),
      },
      {
        treasure_id: 100,
        amt: 20,
        created_at: new Date(),
      },
      {
        treasure_id: 101,
        amt: 25,
        created_at: new Date(),
      },
      {
        treasure_id: 102,
        amt: 20,
        created_at: new Date(),
      },
      {
        treasure_id: 103,
        amt: 25,
        created_at: new Date(),
      },
      {
        treasure_id: 107,
        amt: 30,
        created_at: new Date(),
      },
      {
        treasure_id: 108,
        amt: 30,
        created_at: new Date(),
      },
      {
        treasure_id: 109,
        amt: 30,
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('money_values', null, {});
  }
};
