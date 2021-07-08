async function main() {
  const scripts = require('./scripts');

  const knex = scripts.knex();

  await knex.schema.withSchema('db').dropTableIfExists('films');
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
