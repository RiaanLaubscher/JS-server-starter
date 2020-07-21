import { Sequelize } from "sequelize";

// CONNECT SEQUELIZE
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/config.js")[env];
const { database, username, host, password, dialect } = config;
export const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  define: {
    freezeTableName: true, // this is so that table names are not inferred by a sequelize model instance
  },
});

// TEST CONNECTION
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
