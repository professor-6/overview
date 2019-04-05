DROP DATABASE opentable;
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

CREATE TABLE photos (
  photo_id int NOT NULL,
  photo1 VARCHAR(200),
  photo2 VARCHAR(200),
  photo3 VARCHAR(200),
  photo4 VARCHAR(200),
  photo5 VARCHAR(200),
  photo6 VARCHAR(200),
  photo7 VARCHAR(200),
  photo8 VARCHAR(200),
  photo9 VARCHAR(200),
  photo10 VARCHAR(200)
);