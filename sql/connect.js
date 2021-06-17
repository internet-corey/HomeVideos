const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'rewt',
  database: 'db'
});

const query = (qry, callback) => {
  con.connect((err) => {
    if (err) throw err;
    con.query(qry, (err, result) => {
      if (err) throw err;
      callback();
    });
  });
};

module.exports = { con, query };
