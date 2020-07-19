import express = require("express");
import mysql = require("mysql");
import cors = require("cors");

const app: express.Application = express();

const SELECT_ALL_ACTOR = "SELECT actor_id, first_name, last_name FROM actor;";

const connection: mysql.Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "KoppieKoffie4",
  database: "sakila",
});

connection.connect((error) => {
  if (error) {
    console.log(error);
    return error;
  } else {
    console.log("Connected to the local MySQL server.");
  }
});

app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Go to actors field");
});

app.get("/actors", (req, res) => {
  connection.query(SELECT_ALL_ACTOR, (err, results) => {
    if (err) {
      console.log(err);
      return res.send(err);
    } else {
      return res.json({ data: results });
    }
  });
});

app.listen(4000, () => {
  console.log(`Baby-spinach server listening on port 4000`);
});
