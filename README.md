<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Product API assignment
This is a RESTful API for managing products and their variants. It allows you to create, read, update, and delete products and variants, as well as search for them by keywords. It also generates unique SKUs for each variant based on the product name and the variant attributes.
## Why NestJS
I chose NestJS as the framework for building this API because of its advantages such as:

- It uses TypeScript, which provides type safety, code completion, and better developer experience.
- It follows the Model-View-Controller (MVC) pattern, which helps to organize the code and separate the concerns of different components.
- It is scalable, testable, and maintainable, thanks to its modular structure and dependency injection system.
- It supports various features and tools out of the box, such as validation, authentication, authorization, logging, configuration, etc.
- It is platform-agnostic, which means it can work with any Node HTTP framework, such as Express or Fastify.


The application leverages the power of NestJS's design patterns and built-in modules to provide a robust and well-structured back end. It also incorporates Pactum for end-to-end (E2E) testing, ensuring that your application functions correctly from the user's perspective.

## Features
NestJS: The application is built with NestJS, a Node.js framework that simplifies server-side development by providing a scalable, extensible, and maintainable architecture.

Dependency Injection: Follows the dependency injection pattern, a core concept of NestJS, to enhance code modularity, improve testability, and make your codebase more maintainable. 

Pactum E2E Testing: Utilizes Pactum for end-to-end (E2E) testing. Pactum is a versatile testing library that allows you to write concise and expressive E2E tests to ensure the reliability of your application.

Modularity: NestJS's module system encourages code modularity, allowing you to organize your application into manageable components and promote reusability.

## How to run the project
To run the project, you need to have the following requirements:

- Node.js (version >= 16)
- Docker (version >= 20)
- Yarn (version >= 1)
- Prisma CLI (version >= 3)

You also need to clone the project from GitHub and install the dependencies:


## Installation

```bash
$ git clone https://github.com/gosLp/mirrar-ecom-api.git
$ cd mirrar-ecom-api
$ yarn install

```

## Database
set up the environment variables for the database connection using the example .env file and .env.test for test db
build the postgres DB based on the docker compose file
to reset the db and applying all the migrations use the yarn db:dev:restart

```bash
$ docker-compose build

$ docker-compose up

$ yarn db:dev:restart
```

other commands for DB 
```bash
# Remove the existing database container if any
$ yarn db:dev:rm

# Start a new database container in the background
$ yarn db:dev:up

# Wait for the database to be ready and run the migrations
$ yarn db:dev:restart
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
This will run the application in development mode, with hot reload and debugging enabled. You can access the API at http://localhost:3333.

## How to test the project
To test the project, you need to have the same requirements as above, plus the following:

Jest (version >= 27)
Pactum (version >= 3)
Set up the environment variables for the test database connection. Copy the .env file and rename it to .env.test, and fill in the values.

Start the test database using Docker:
```bash
# Remove the existing test database container if any
$ yarn db:test:rm

# Start a new test database container in the background
$ yarn db:test:up

# Wait for the test database to be ready and run the migrations
$ yarn db:test:restart
```

finally run the tests:

```bash
$ yarn test:e2e
```

## How to use the API
The API exposes the following endpoints for managing products and variants:

- GET /product: Get all products and their variants
- GET /product/:id: Get a product and its variants by id
- GET /product/search?q=<keyword>: Search for products and variants by keyword
- POST /product: Create a new product and its variants
- PATCH /product/:id: Update a product and its variants by id
- DELETE /product/:id: Delete a product and its variants by id

## Postman Collections

look at the route collection on postman [here](https://www.postman.com/spacecubes/workspace/mirrar-ecom-api/collection/12714878-96850fcc-197a-4fc0-9532-c6b0d95c8938?action=share&creator=12714878)

## Sample Environment Variables
  ```bash
  DATABASE_URL='postgresql://postgres:123@localhost:5434/nest?schema=public'
  ```
  store these in an .env file at the root of the project
## Test

for the testing environment use the yarn db:test:restart to reset test db environment 

End to end testing has been implemnted to test functionality of the following:
1. Get Product
2. Create Products
3. Search Products
4. Update Products

## Design choices
Here are some of the design choices that I made for this project and the reasons behind them:

- I used Prisma as the ORM for interacting with the PostgreSQL database, because it provides a type-safe and declarative way to model and query the data. It also supports migrations, seeding, and introspection, which makes it easy to manage the database schema and data.
- I used a UUID as the primary key for the product and variant models, because it provides a unique and random identifier that avoids collisions and exposes less information than a sequential id.
- I used a custom function to generate the SKU for each variant, based on the product name and the variant attributes. The function concatenates the product name, the variant size, the variant color, and the variant additional cost, and converts them to uppercase. For example, the SKU for a T-shirt with size large, color blue, and additional cost 0 is TSHIRT-L-BLUE-0. This makes the SKU easy to read and understand, and also avoids duplicates.
- I used NestJS as the framework for building the API


