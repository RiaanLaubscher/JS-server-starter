"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(
      "Blocks",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER.UNSIGNED,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        size: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        deletedAt: {
          allowNull: true,
          type: DataTypes.DATE,
        },
      },
      {
        charset: "utf8",
      }
    );
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Blocks");
  },
};
