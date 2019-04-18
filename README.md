# OpenTable FEC
> A service which finds all of the information you may need about nearby restaurants (menu, location, hours, description, reviews, etc.), and allows you to make reservations. This service includes the overview and photo gallery modules.

## Related Projects

  - https://github.com/professor-6/service_sydney
  - https://github.com/professor-6/service-reservation-aysun
  - https://github.com/professor-6/service-menu-rebecca
  - https://github.com/professor-6/service_reviews_ike

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

From within the root directory:

- To run webpack:
  ```npm run build```
- To start the server:
  ```npm run start```
- To seed the database:
  ```npm run seed```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
### CRUD API

| intention                                                       | request type | request url       | request body                                                          | side effect                                                     | response body                                                                                                                           |
|-----------------------------------------------------------------|--------------|-------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Read info. for current restaurant                           | GET          | /restaurants/:id | none                                                                  | none                                                            | {description:"...", food_type: "Japanese", id: 1, max_price: 54, name: "Pollich LLC", rating: "2.7", reviews: 399, tag1: "healthy", tag2: "casual", tag3: "fit for foodies"} |
| Create info. for single restaurant                | POST         | /restaurants/:id | {descrption: '...', food_type: "Thai", id: 5, max_price: 133, name: "Jacobs - Heaney", rating: "2.6", reviews: 854, tag1: healthy", tag2: "good for business", tag3: "tasty"}   | add restaurant and its data to database                     |  {descrption: '...', food_type: "Thai", id: 5, max_price: 133, name: "Jacobs - Heaney", rating: "2.6", reviews: 854, tag1: healthy", tag2: "good for business", tag3: "tasty"}                                                                       |
| Update info. for target restaurant     | PUT          | /restaurants/:id | {id: 5, food_type: "Mexican"}   | overwrite target data in database         | {descrption: '...', food_type: "Mexican", id: 5, max_price: 133, name: "Jacobs - Heaney", rating: "2.6", reviews: 854, tag1: healthy", tag2: "good for business", tag3: "tasty"}                                                                   |
| Delete target restaurant from database | DELETE       | /restaurants/:id | {id: 5}          | delete specified movie name and associated videos from database | {descrption: '...', food_type: "Mexican", id: 5, max_price: 133, name: "Jacobs - Heaney", rating: "2.6", reviews: 854, tag1: healthy", tag2: "good for business", tag3: "tasty"}                                                                           |
