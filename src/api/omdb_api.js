const api = require('./omdb_api_key.js'); // .gitignore'd
const https = require('https');

const search = (searchTerm, imageSearch=false) => {
  const key = api.key;
  const url = imageSearch
    ? `https://www.img.omdbapi.com/?apikey=${key}&t=${searchTerm}`
    : `https://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`;
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        try {
          resolve(body);
        } catch (e) {
          reject(e.message);
        };
      });
    }).on('error', e => {
      console.log('ERROR: ', e.message);
    });
  });
};

module.exports = { search };
