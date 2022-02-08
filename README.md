# koa-sequelize-skeleton

Simple typescript skeleton in KoaJs + Sequelize ORM with Postgres database

## Setup

1. Create the postgres database on Heroku and note the URI in configuration
2. Paste the URI into .env file under DATABASE_URL
3. Run commands: 
 - `yarn db:migrate` to create tables in the database
 - `yarn db:seed` to seed the data into the previously created tables

4. To start the server in development mode, run command:
 - `yarn start:dev`

Warning: In case of deleting the entire database, run command:
 - `yarn db:rollback`

## Models

Created are 2 models, including relation Many-To-Many between them:

 - User (id, name, createdAt)

 - City (id, name, createdAt)

 - User_To_City (id, userId, cityId, createdAt)

## Seeds

Database is seeded with generic user and city data, as well as relation between them

## Notes

`global-bundle.pem` is used to certificate all traffic to and from database and server

Prettier configuration is in `.prettierrc`

Eslint configuration is in `.eslint.json`

