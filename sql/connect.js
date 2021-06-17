//import { films } from './films.js';

const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'rewt',
  database: 'db'
});

conn.connect(function (err) {
  if (err) throw err;
  console.log('connected')
})
