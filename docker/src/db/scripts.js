const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : 'db',
    user : 'root',
    password : 'rewt',
    database : 'db'
  },
  pool: { min: 0, max: 7 }
});

async function bulkInsert(table, valuesArray) {
  const result = await knex(table).insert(valuesArray);
  return result;
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
