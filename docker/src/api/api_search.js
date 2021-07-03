const apiKey = require('./api_key.js'); // .gitignore'd
const https = require('https');

const search = (searchTerm, privateKey, imageSearch=false) => {
  const key = apiKey.decrypt(apiKey.encryptedApiKey, privateKey);  // priv key gitignored
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
