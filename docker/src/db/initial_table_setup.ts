import { conn } from './scripts'

async function main(): Promise<void> {

  const knex = conn();

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

(async () => {
  await main();
})();
