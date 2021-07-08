const axios = require('axios');
const apiKey = require('./api_key.js');

async function search(searchTerm, privateKey) {
  const key = apiKey.decrypt(apiKey.encryptedApiKey, privateKey);  // priv key gitignored
  const url = `https://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`;

  try {
    return (await axios.get(url)).data;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { search };
