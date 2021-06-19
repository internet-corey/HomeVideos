const connect = require('./connect.js');
const films = require('./films.js');

const insert = () => {
  const conn = connect.conn;
  const query = 'INSERT INTO films (title) VALUES ?;';
  conn.query(query, [films.films], function (error, results, fields) {
    if (error) throw error;
  });
  conn.end();
};

insert();
