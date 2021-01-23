# A-Commerce

> This is a microservice component, representing the photos on a product detail page.


## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
1. [Usage](#Usage)



## Requirements
- Node 12+
- Postgres Server

You will need to fill in the database connection details in `server/database/connection.js` or create a .env file and reference it there.


## Development
Run the following commands sequentially from the root of the project.


### Installing Dependencies

1. npm install
2. npm run seed:pg
3. npm run build
4. npm run start

## Usage

Visit `localhost:3001/` and you will be served the application.

From here, you can view the images seeded into the database.
