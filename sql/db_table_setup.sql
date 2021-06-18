USE db;
CREATE TABLE films (
	id INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
  title VARCHAR(250),
  genre VARCHAR(250),
  rating VARCHAR(250),
  runtime VARCHAR(250),
  cover_image VARCHAR(250),
  file_path VARCHAR(250),
  PRIMARY KEY (id)
);
CREATE TABLE custom_tags (
	id INTEGER NOT NULL AUTO_INCREMENT,
  film_id INTEGER,
  custom_tag VARCHAR(250),
  PRIMARY KEY (id),
  FOREIGN KEY (film_id) REFERENCES films (id)
);
