const scripts = require('./db/scripts.js');

const filmArray = process.argv.slice(2).map(film => ({title: film}));

scripts.bulkInsert('films', filmArray);
