const scripts = require('./db/scripts.js');

const query = 'INSERT INTO films (title) VALUES ?'
const films = process.argv.slice(2).map(film => ([film]))

scripts.bulkInsert(query, films);
