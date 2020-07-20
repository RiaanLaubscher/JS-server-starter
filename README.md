# :four_leaf_clover: Baba Spinasie Server :four_leaf_clover:

### :radio_button: Development Setup
---------

1. Install [Node.js LTS](https://nodejs.org/en/). I have version 12.18.2 at the time of making this repo. Verify that it has been installed using `node -v` on the command line.
2. Install a code editor, Such as [Visual Studio Code](https://code.visualstudio.com/). Install the Material Icon Theme and Prettier - Code formatter in the extensions section by pressing `CTRL + SHFT + X` in the code editor.
3. Clone this repo to your local PC using version control of your choice.
4. Jump into the repo and run `npm install` to install the dependencies.

> This project uses a package called `ts-node-dev` which works like `nodemon` in the backend with the added benefit of compiling Typescript files in the process. This is required since we will work with Typescript files for this server application.

5. Now for setting up the MySQL Workbench database and server for this project. I only have the setup instructions for Windows here. Head over to [MySQL Workbench](https://dev.mysql.com/downloads/installer/) to download the installer.
6. I just installed the Full Setup Type.
7. It is not necessary to install the Python Connector or MySQL for Visual Studio. Just click 'Next'.
8. Choose a standalone MySQL server since we don't need clusters.
9. Use the default 'Type and Networking' options for the server.
10. Use the RECOMMENDED password hashing type. The MySQL driver for the Node.js server does not support this hashing type yet (there is a PR in the pipeline), but we will use a workaround later on.
11. In the 'Accounts and Roles' tab I chose a password for the Root user: `KoppieKoffie4`. Don't know if this needs to be the same for everyone running the DevSetup though. We connect to the database using the MySQL driver from npm which would require a password when the connection is instantiated. Would probably not make sense to have version control over a file that needs to connect with the database using different passwords, right? See - this is what keeps me up at night!! I need answers for this!
12. Keep the 'Windows Service' as is.
13. Click 'Next' and 'Finish' past the MySQL Router Configuration.
14. On the 'Connect to Server' tab, enter the password so that the server is connected and running. Just click 'Next' and 'Finish' from here on out.
15. Open up workbench and run a query in the query tab such as:
```sql
USE sakila;
SELECT * FROM actor;
```
16. This is a stock database that is included in the Workbench for testing purposes.

> Now we need to make sure we can set up the Express server to connect to the database.

17. Run `npm run start-dev` in the **baba-spinasie-server** folder to start the server. It should fail at first due to the lack of support for the password hashing on the client side. We can force MySQL workbench to allow the root user to use the mysql native password by running the following query in the Workbench:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
```
and then flushing the privileges:
```sql
flush privileges;
```
Check out [this stackoverflow answer](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server) to see an explanation.

18. After that you can restart the Express server, and you should see the following output:
```shell
Baby-spinach server listening on port 4000
Connected to the local MySQL server.
```

19. You can confirm that you are up and running by typing in `localhost:/4000/actors` in the browser URL. I also recommend installing the [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) extension for Chrome to view JSON structures in the browser.
