const apiKey = require('./omdb_api_key.js'); // .gitignore'd
const https = require('https');

const get = (url) => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      return data;
    });
  }).on('error', (err) => {
    console.log('ERROR: ', err.message);
  });
};

const search = (searchTerm, imageSearch=false) => {
  const key = apiKey.key;
  const type = searchTypes[searchType];
  const url = imageSearch
    ? `https://www.img.omdbapi.com/?apikey=${key}&t=${searchTerm}`
    : `https://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`;
  return get(url);
};

module.exports = { search };
