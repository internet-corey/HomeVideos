const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'rewt',
  database: 'db',
  multipleStatements: true
});

const setupQuery = `
  DROP TABLE IF EXISTS films;
  CREATE TABLE films (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(250),
    year VARCHAR(250),
    genre VARCHAR(250),
    rating VARCHAR(250),
    runtime VARCHAR(250),
    cover_image VARCHAR(250),
    file_path VARCHAR(250),
    PRIMARY KEY (id)
  );
`;

conn.query(setupQuery, error => {if (error) throw error});
conn.end();
