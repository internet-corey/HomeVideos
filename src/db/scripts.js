const mysql = require('mysql2/promise');

const bulkInsert = async (query, arrayOfArrays) => {
  const conn = await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'rewt',
    database: 'db'
  });
  conn.query(query, [arrayOfArrays]);
  conn.end();
};

const update = async (query, ...params) => {
  const conn = await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'rewt',
    database: 'db'
  });
  conn.query(query, [...params]);
  conn.end();
};

const select = async (query, callback, ...params) => {
  const conn = await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'rewt',
    database: 'db'
  });
  const rows = await conn.query(query, ...params);
  callback(rows[0]);
  conn.end();
};

module.exports = { bulkInsert, update, select };
