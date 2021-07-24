import { conn } from './scripts';
import { Knex } from 'knex';

async function main(): Promise<void> {

  const knex: Knex = conn();

  await knex.schema.withSchema('db').dropTableIfExists('films');

  // @ts-ignore
  await knex.schema.withSchema('db').createTable('films', function (table) {
    table.increments();
    table.string('title');
    table.string('year');
    table.string('genre');
    table.string('rating');
    table.string('runtime');
  });

  knex.destroy();
}

(async (): Promise<void> => {
  await main();
})();
