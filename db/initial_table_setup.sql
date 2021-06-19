USE db;
CREATE TABLE films (
  id SMALLINT NOT NULL UNIQUE AUTO_INCREMENT,
  title VARCHAR(250),
  year SMALLINT,
  genre VARCHAR(250),
  rating VARCHAR(250),
  runtime VARCHAR(250),
  cover_image VARCHAR(250),
  file_path VARCHAR(250),
  PRIMARY KEY (id)
);
CREATE TABLE custom_tags (
  id SMALLINT NOT NULL AUTO_INCREMENT,
  film_id SMALLINT,
  custom_tag VARCHAR(250),
  PRIMARY KEY (id),
  FOREIGN KEY (film_id) REFERENCES films (id)
);
