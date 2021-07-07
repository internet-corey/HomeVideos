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

async function update(table, whereClause, setClause) {
  const result = await knex(table).where(whereClause).update(setClause);
  return result;
}

async function select(field, table, ...nullFields) {
  const result = await knex.select(field).from(table).whereNull(...nullFields);
  return result;
}

module.exports = { bulkInsert, update, select };
