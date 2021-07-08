async function main() {
  const films = require('./films.js');
  const scripts = require('./scripts');

  const knex = scripts.knex();

  await scripts.bulkInsert(knex, 'films', films.films);
  knex.destroy();
}

(async () => {
  await main();
})();
