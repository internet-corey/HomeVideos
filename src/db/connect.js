const mysql = require('mysql2/promise');

const conn = await mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'rewt',
  database: 'db'
});

module.exports = { conn };
