const mysql = require('mysql2/promise');

async function connection() {
  return await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'rewt',
    database: 'db'
  });
}

async function bulkInsert(query, arrayOfArrays) {
  const conn = await connection();
  conn.query(query, [arrayOfArrays]);
  conn.end();
}

async function update(query, ...params) {
  const conn = await connection();
  conn.query(query, [...params]);
  conn.end();
}

async function select(query, ...params) {
  const conn = await connection();
  const rows = await conn.query(query, ...params);
  conn.end();
  return rows[0]
}

module.exports = { bulkInsert, update, select };
