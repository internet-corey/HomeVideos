const mysql = require('mysql2/promise');

async function connection() {
  return await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'rewt',
    database: 'db'
  });
}

const bulkInsert = async (query, arrayOfArrays) => {
  const conn = await connection();
  conn.query(query, [arrayOfArrays]);
  conn.end();
};

const update = async (query, ...params) => {
  const conn = await connection();
  conn.query(query, [...params]);
  conn.end();
};

const select = async (query, ...params) => {
  const conn = await connection();
  const rows = await conn.query(query, ...params);
  conn.end();
  return rows[0]
};

module.exports = { bulkInsert, update, select };
