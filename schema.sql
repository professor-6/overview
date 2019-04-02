DROP DATABASE IF EXISTS opentable;
CREATE DATABASE opentable;

USE opentable;

CREATE TABLE restaurants (
  id int NOT NULL,
  name VARCHAR(50),
  description VARCHAR(500),
  rating VARCHAR(4),
  reviews int,
  max_price int,
  food_type VARCHAR(25),
  tag1 VARCHAR(25),
  tag2 VARCHAR(25),
  tag3 VARCHAR(25)
);