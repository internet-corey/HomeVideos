import { Film } from "knex/types/tables";
import knex, { Knex } from "knex";

function conn() {
  const config = {
    client: 'mysql2',
    connection: {
      host : 'db',
      user : 'root',
      password : 'rewt',
      database : 'db'
    }
  };

  const knex_conn: Knex = knex(config);
  return knex_conn;
}

async function bulkInsert(conn: Knex, table: string, valuesArray: {title: string}[]) {
  await conn(table).insert(valuesArray);
}

async function update(conn: Knex, table: string, whereClause: {title: string}, setClause: {}) {
  await conn(table).where(whereClause).update(setClause);
}

async function select(conn: Knex, field: string, table: string, ...nullFields: [string]): Promise<Pick<Film, "title">[]> {
  const result: Pick<Film, "title">[] = await conn.select(field).from(table).whereNull(...nullFields);
  return result;
}

export { conn, bulkInsert, update, select };
