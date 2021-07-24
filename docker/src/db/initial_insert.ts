import { bulkInsert, conn } from './scripts';
import { films } from './films';
import { Knex } from 'knex';

async function main() {

  const knex: Knex = conn();

  await bulkInsert(knex, 'films', films);
  knex.destroy();
}

(async () => {
  await main();
})();
