DROP DATABASE IF EXISTS opentable_overview;
CREATE DATABASE opentable_overview;

USE opentable_overview;

CREATE TABLE restaurants (
  id int NOT NULL,
  name VARCHAR(50),
  description VARCHAR(1000),
  rating VARCHAR(4),
  reviews int,
  max_price int,
  food_type VARCHAR(25),
  tag1 VARCHAR(25),
  tag2 VARCHAR(25),
  tag3 VARCHAR(25)
);