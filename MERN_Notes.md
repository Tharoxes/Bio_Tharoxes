# MERN Notes

## Application overview

Dependency installation:\
!Version may be changed
Backend:
```
npm i mongoose express dotenv ejs bcryptjs jsonwebtoken
npm i --save express express-async-handler
npm i -D nodemon
```
1. create server.js -> change "start" : "node backend/server.js, "server" : "nodemon backend/server.js" in package.json -> check connection by running command "npm start server/start"
2. touch .gitignore -> add node_modules; .env;
3. git init; git commit -m "Initial commit"; git add .

Backend Folder:
* controllers
* middleware
* routes
* views
* config
* models

In middleware I created an errorHandler as complement for Devs. For this project our first schema is an user model in /models.

Frontend:
```
npx create-react-app [nameOfTheApp]
```
1. create frontend application in the root folder -> delete .git, if you do not want the react application as submodule in the project (not the best solution, but the simplest)
2. cd [nameOfTheApp] (bootstrap of course optional, whatever you prefer)
 ```
 npm install react-router-dom bootstrap
 ```

 Frontend Folder within src:
* components
* pages
