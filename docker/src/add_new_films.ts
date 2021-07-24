import { conn, bulkInsert } from './db/scripts';
import { Knex } from 'knex';

async function main(): Promise<void> {
  const filmArray: {title: string}[] = process.argv.slice(2).map(film => ({title: film}));
  const knex: Knex = conn();

  await bulkInsert(knex, 'films', filmArray);
  knex.destroy();
}

(async (): Promise<void> => {
  await main();
})();
