'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('treasures', [
      {
        id: 100,
        latitude: 14.5437648051331,
        longitude: 121.019911678311,
        name: "T1",
        created_at: new Date(),
      },
      {
        id: 101,
        latitude: 14.5532076554883,
        longitude: 121.055774532421,
        name: "T2",
        created_at: new Date(),
      },
      {
        id: 102,
        latitude: 14.5446435656183,
        longitude: 121.020365629871,
        name: "T3",
        created_at: new Date(),
      },
      {
        id: 103,
        latitude: 14.5872615919051,
        longitude: 120.979504794655,
        name: "T4",
        created_at: new Date(),
      },
      {
        id: 104,
        latitude: 14.5732032723718,
        longitude: 121.023090376156,
        name: "T5",
        created_at: new Date(),
      },
      {
        id: 105,
        latitude: 14.5231131289849,
        longitude: 121.019457319516,
        name: "T6",
        created_at: new Date(),
      },
      {
        id: 106,
        latitude: 14.6024229153284,
        longitude: 121.011513378939,
        name: "T7",
        created_at: new Date(),
      },
      {
        id: 107,
        latitude: 14.6085746293116,
        longitude: 121.018551395794,
        name: "T8",
        created_at: new Date(),
      },
      {
        id: 108,
        latitude: 14.4911143426092,
        longitude: 121.043748206197,
        name: "T9",
        created_at: new Date(),
      },
      {
        id: 109,
        latitude: 14.5445595272478,
        longitude: 121.106088282234,
        name: "T10",
        created_at: new Date(),
      },
      {
        id: 110,
        latitude: 14.5445595272478,
        longitude: 121.106088282234,
        name: "T11",
        created_at: new Date(),
      },
      {
        id: 111,
        latitude: 14.5488649285797,
        longitude: 121.03363929755,
        name: "T12",
        created_at: new Date(),
      },
      {
        id: 112,
        latitude: 14.5371505894201,
        longitude: 120.990430237915,
        name: "T13",
        created_at: new Date(),
      },
      {
        id: 113,
        latitude: 14.5257966600328,
        longitude: 121.020868844103,
        name: "T14",
        created_at: new Date(),
      },
      {
        id: 114,
        latitude: 14.5170998780454,
        longitude: 120.981002106201,
        name: "T15",
        created_at: new Date(),
      },
      {
        id: 115,
        latitude: 14.502006871058,
        longitude: 120.991618127534,
        name: "T16",
        created_at: new Date(),
      },
      {
        id: 116,
        latitude: 14.521124409049,
        longitude: 121.042771368704,
        name: "T17",
        created_at: new Date(),
      },
      {
        id: 117,
        latitude: 14.4772076562187,
        longitude: 120.986792724064,
        name: "T18",
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('treasures', null, {});
  }
};
