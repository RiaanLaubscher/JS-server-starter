// require express
import express = require("express");
import cors = require("cors");

// CONFIG ENV
import * as dotenv from "dotenv";
dotenv.config();

// CUSTOM IMPORTS
import { ActorModel } from "./src/models/Actor";
import { Op } from "sequelize";

// PORT
if (!process.env.PORT) {
  console.log(
    "No port is provided for the server to listen on in the .env file"
  );
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
console.log("PORT: ", PORT);

// CREATE EXPRESS APP
const app: express.Application = express();

// MOUNT MIDDLEWARES
app.use(cors());
app.use(express.json()); // allows a body object within a POST request to be parsed to JSON

// ROUTES
app.get("/actors", (req, res) => {
  const { name } = req.query;

  let filter = {};

  if (name) {
    filter = {
      where: {
        name: {
          [Op.like]: `${name}%`,
        },
      },
    };
  }

  ActorModel.findAll(filter).then((actors) => {
    res.json(actors);
  });
});

app.get("/actors/:id", (req, res) => {
  const { id } = req.params;

  ActorModel.findByPk(id).then((actor) => {
    if (actor) {
      res.json(actor);
    } else {
      res.status(404).send();
    }
  });
});

app.post("/actors", (req, res) => {
  const { body } = req;
  console.log(body);
  res.json(body);
});

app.listen(PORT, () => {
  console.log(`Baby-spinach server listening on port ${PORT}`);
});
