import { sequelize } from "../database/connection";
import { DataTypes } from "sequelize";

export const ActorModel = sequelize.define(
  "actor",
  {
    id: {
      field: "actor_id",
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      field: "first_name",
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
