function conn() {
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
  return knex;
}

async function bulkInsert(knex, table: string, valuesArray: {title: string}[]): Promise<void> {
  await knex(table).insert(valuesArray);
}

async function update(knex, table: string, whereClause: {title: string}, setClause: {}): Promise<void> {
  await knex(table).where(whereClause).update(setClause);
}

async function select(knex, field: string, table: string, ...nullFields: [string]) {
  const result = await knex.select(field).from(table).whereNull(...nullFields);
  return result;
}

export { conn, bulkInsert, update, select };
