/* Allows us to use shorter import statements for very nested
 private modules instead of having to type ../../../mymod.js */
import "module-alias/register";

/* Loads .env file variables into the process.env variable. 
 It automatically looks for the .ENV file in the root directory of the 
 application. */
import "dotenv/config";

/* Other imports */
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { GraphQLSchema } from "graphql";
import { UserResolver, HelloResolver } from "@modules/index";
import accessEnv from "@helpers/accessEnv";

const PORT: string = accessEnv("PORT", 4000);

(async () => {
  const schema: GraphQLSchema = await buildSchema({
    resolvers: [UserResolver, HelloResolver],
    emitSchemaFile: {
      path: __dirname + "/graphql/schema.gql",
      commentDescriptions: true,
      sortedSchema: false,
    },
  });

  const apolloServer: ApolloServer = new ApolloServer({
    schema,
    engine: {
      reportSchema: true,
    },
  });

  const app: express.Application = express();

  // REGISTER MIDDLEWARES
  app.use(cors());
  apolloServer.applyMiddleware({ app: app, path: "/graphql" });

  // TEST DB CONNECTION
  createConnection()
    .then((connection) => {
      console.log("TypeORM successfully connected to the Postgres db.");
      app.listen(PORT, () => {
        console.log(`Express server listening on PORT: ${PORT}`);
        console.log("http://localhost:4000/graphql");
      });
    })
    .catch((error) => {
      console.log(
        "Error encountered when connecting TypeORM to the Postgres db."
      );
      console.log(error);
    });
})();
