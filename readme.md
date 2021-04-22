# Fast REST API with Node.js, Prisma, PostgreSQL, Fastify and Swagger

## Features

- request validation with json schema
- prisma js orm
- swagger with fastify-wagger
- nice colorfull logging

### Functionality

- adding car owners
- adding owner's cars
- adding car's service history

## Database schema

![DB schema](db-schema.jpg)

## Running API

- clone repo and run `npm install`
- run postgresql i.e. `sudo service postrgresql start` or in docker
- provide postgres user name and password in `.env` file (user has to have permission for CREATE DATABASE)
- initialize db: `npx prisma migrate dev`
- run api with `npm start`
- open [localhost:5000/docs](http//localhost:5000/docs) for api testing with swagger
