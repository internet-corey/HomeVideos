import { bulkInsert, conn } from './scripts';
import { films } from './films';
import { Knex } from 'knex';

async function main(): Promise<void> {

  const knex: Knex = conn();

  await bulkInsert(knex, 'films', films);
  knex.destroy();
}

(async (): Promise<void> => {
  await main();
})();
