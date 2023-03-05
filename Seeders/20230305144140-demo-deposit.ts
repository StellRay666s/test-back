"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Deposites", [
      {
        title: "Название 1",
        reference: "Ссылка 1",
        status: false,
        depositeStatus: false,
        dateDeposite: "22.02.2023",
        price: 2000,
        createdAt: "20.03.2023",
        updatedAt: "23.02.2023",
      },
      {
        title: "Название 2",
        reference: "Ссылка 2",
        status: false,
        depositeStatus: false,
        dateDeposite: "22.01.2020",
        price: 5000,
        createdAt: "20.03.2023",
        updatedAt: "23.02.2023",
      },
      {
        title: "Название 3",
        reference: "Ссылка 3",
        status: false,
        depositeStatus: false,
        dateDeposite: "28.01.2023",
        price: 10000,
        createdAt: "20.03.2023",
        updatedAt: "23.02.2023",
      },
      {
        title: "Название 4",
        reference: "Ссылка 4",
        status: true,
        depositeStatus: true,
        dateDeposite: "22.02.2023",
        price: 2000,
        createdAt: "20.03.2023",
        updatedAt: "23.02.2023",
      },
      {
        title: "Название 5",
        reference: "Ссылка 5",
        status: true,
        depositeStatus: true,
        dateDeposite: "21.02.2010",
        price: 3000,
        createdAt: "20.03.2023",
        updatedAt: "23.02.2023",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
