const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'rewt',
  database: 'db'
});

module.exports = { conn };
