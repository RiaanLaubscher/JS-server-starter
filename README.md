# :four_leaf_clover: Baba Spinasie :four_leaf_clover:

---
### :radio_button: Project Stack
---

1. Frontend - Ionic React
2. State management - Apollo Client
3. **Integration - GraphQL API**
4. **Backend/Server - Express.js / Apollo Server / TypeGraphQL**
5. **Database - TypeORM/Postgres**

### :radio_button: Development Setup
---------

1. Install [Node.js](https://nodejs.org/en/). I have version 12.18.2 LTS installed on my system. Can be verified using `node -v` on the command line.
2. Visual Studio or [Visual Studio Code](https://code.visualstudio.com/) works really well as code editors. Also download the following extensions:
    * Material Icon Theme extension (these just make your folder and file icons look cooler);
    * Prettier - Code formatter. The latter helps A LOT with formatting code by just pressing `CTRL + SHIFT + F`;
    * Apollo GraphQL - Syntax highlighting for GraphQL;
    * ES7 React/Redux/GraphQL/React-Native snippets - React and GraphQL snippets (if you want).
3. Clone this repo to your local PC using the version control software of your choice.
4. Jump into the repo and run `npm install` to install the dependencies listed in `package.json`.
5. Download [postgres](https://www.postgresql.org/download/windows/) and install the cli tool and pgAdmin. Run `psql --version`. I have 12.4 installed.
6. Create a copy of `ormconfig.json.example` and fill in your own details if you created a postgres user. Otherwise just use the default `postgres` user with the password you chose during the setup process. Just make sure there is a database called `dev_spinasie_db` otherwise the server will complain.
7. Verify that the server runs by running `npm run start:dev` and opening the localhost on port 4000 in the browser.
8. This should open GraphQLPlayground. Run the following query to make sure a user can be inserted:
   ```
   {
      user {
         userName
      }
   }
   ```
9. This should return a list of the userNames in the database - there won't be any when you start ofcourse, but running the query first performs an insert and then returns the results. So the list should get longer everytime you perform the query.
---

#### Check out the [Confluence page](https://seednet-babyspinach.atlassian.net/wiki/home) for more information regarding the project and the tech stack.
