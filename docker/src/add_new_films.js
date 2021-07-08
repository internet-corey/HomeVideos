const scripts = require('./db/scripts.js');

const filmArray = process.argv.slice(2).map(film => ({title: film}));
const knex = scripts.knex();

scripts.bulkInsert(knex, 'films', filmArray);
knex.destroy();
