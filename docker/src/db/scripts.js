function knex() {
  const conn = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'db',
      user : 'root',
      password : 'rewt',
      database : 'db'
    },
    pool: { min: 0, max: 7 }
  });
  return conn;
}

async function bulkInsert(knex, table, valuesArray) {
  await knex(table).insert(valuesArray);
}

async function update(knex, table, whereClause, setClause) {
  await knex(table).where(whereClause).update(setClause);
}

async function select(knex, field, table, ...nullFields) {
  const result = await knex.select(field).from(table).whereNull(...nullFields);
  return result;
}

module.exports = { knex, bulkInsert, update, select };
