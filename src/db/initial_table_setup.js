const dedent = require('dedent');
const connect = require('./connect.js');

const setupQuery = dedent`
  DROP TABLE IF EXISTS custom_tags;
  DROP TABLE IF EXISTS films;
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
    id SMALLINT NOT NULL UNIQUE AUTO_INCREMENT,
    film_id SMALLINT,
    custom_tag VARCHAR(250),
    PRIMARY KEY (id),
    FOREIGN KEY (film_id) REFERENCES films (id)
  );
`;

connect.conn.query(setupQuery, function (error, results, fields) {
  if (error) throw error;
})
connect.conn.end();