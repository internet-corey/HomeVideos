import { bulkInsert, conn } from './scripts'
import { films } from './films';

async function main(): Promise<void> {

  const knex = conn();

  await bulkInsert(knex, 'films', films);
  knex.destroy();
}

(async () => {
  await main();
})();
