# Node - MongoDB - Heroku

## Description

* This is a simple api rest of tasks using mongodb as database. The application was deploy in heroku.
* An use example in requests/tasks.http

## Manual Configuration
1. Clone the repository
2. Run npm install 
3. Create a .env file

```
PORT
MONGODB_URI
```
4. Run npm run build
5. npm start

## Using Docker

```
docker compose up --build
```

* The application will run on port 4000

## Heroku Deploy

* The application was deploy on heroku. Link ***https://node-mongodbatlas-heroku.herokuapp.com/***