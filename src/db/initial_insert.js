const films = require('./films.js');
const scripts = require('./scripts');

const query = 'INSERT INTO films (title) VALUES ?;';
scripts.bulkInsert(query, films.films);
