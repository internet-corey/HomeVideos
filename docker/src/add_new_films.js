async function main() {
  const scripts = require('./db/scripts.js');

  const filmArray = process.argv.slice(2).map(film => ({title: film}));
  const knex = scripts.knex();

  await scripts.bulkInsert(knex, 'films', filmArray);
  knex.destroy();
}

(async () => {
  await main();
})();
