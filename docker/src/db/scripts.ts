import knex, { Knex } from "knex";
import { config } from './config';

function conn() {
  const conf = config;
  const knex_conn: Knex = knex(conf);
  return knex_conn;
}

async function bulkInsert(conn: Knex, table: string, valuesArray: {title: string}[]) {
  await conn(table).insert(valuesArray);
}

async function update(conn: Knex, table: string, whereClause: {title: string}, setClause: {}) {
  await conn(table).where(whereClause).update(setClause);
}

async function select(conn: Knex, field: string, table: string, rawString: string, rawFields: string[]): Promise<string[]> {
  const result: string[] = await conn.select(field).from(table).whereRaw(rawString, rawFields);
  return result;
}

export { conn, bulkInsert, update, select };
