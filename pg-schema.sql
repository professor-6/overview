DROP TABLE IF EXISTS open_table_reviews;


CREATE TABLE open_table_reviews(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  description text,
  rating decimal,
  reviews decimal,
  max_price decimal,
  food_type VARCHAR(25),
  tag1 VARCHAR(25),
  tag2 VARCHAR(25),
  tag3 VARCHAR(25),
  isDeleted boolean
);

\COPY open_table_reviews (name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isDeleted) FROM '/home/chagil/service_sydney/database/ten-mill/record-1.csv' WITH DELIMITER ',' CSV Header

\COPY open_table_reviews (name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isDeleted) FROM '/home/chagil/service_sydney/database/ten-mill/record-2.csv' WITH DELIMITER ',' CSV Header

\COPY open_table_reviews (name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isDeleted) FROM '/home/chagil/service_sydney/database/ten-mill/record-3.csv' WITH DELIMITER ',' CSV Header

\COPY open_table_reviews (name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isDeleted) FROM '/home/chagil/service_sydney/database/ten-mill/record-4.csv' WITH DELIMITER ',' CSV Header

\COPY open_table_reviews (name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isDeleted) FROM '/home/chagil/service_sydney/database/ten-mill/record-5.csv' WITH DELIMITER ',' CSV Header

\COPY open_table_reviews (name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isDeleted) FROM '/home/chagil/service_sydney/database/ten-mill/record-6.csv' WITH DELIMITER ',' CSV Header

\COPY open_table_reviews (name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isDeleted) FROM '/home/chagil/service_sydney/database/ten-mill/record-7.csv' WITH DELIMITER ',' CSV Header

\COPY open_table_reviews (name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isDeleted) FROM '/home/chagil/service_sydney/database/ten-mill/record-8.csv' WITH DELIMITER ',' CSV Header

\COPY open_table_reviews (name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isDeleted) FROM '/home/chagil/service_sydney/database/ten-mill/record-9.csv' WITH DELIMITER ',' CSV Header

\COPY open_table_reviews (name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isDeleted) FROM '/home/chagil/service_sydney/database/ten-mill/record-10.csv' WITH DELIMITER ',' CSV Header