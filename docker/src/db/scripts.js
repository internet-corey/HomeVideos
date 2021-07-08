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
  const result = await knex(table).insert(valuesArray);
  return result;
}

async function update(knex, table, whereClause, setClause) {
  const result = await knex(table).where(whereClause).update(setClause);
  return result;
}

async function select(knex, field, table, ...nullFields) {
  const result = await knex.select(field).from(table).whereNull(...nullFields);
  return result;
}

module.exports = { knex, bulkInsert, update, select };
