const mysql = require('mysql2/promise');
const https = require('https');

const search = (searchTerm, imageSearch=false) => {
  const key = '48819cea';
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

const select = async (query, callback) => {
  const conn = await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'rewt',
    database: 'db'
  });

  const rows = await conn.query(query);
  callback(rows[0]);
};

select('SELECT title FROM films', rows => {
  const titles = rows.map(row => (row.title));
  titles.forEach(title => {
    search(title).then(res => {
      const r = JSON.parse(res);
      r.Response === "True"
      ? console.log(`${title}: ${r.Year} ${r.Genre}, rated ${r.Rating}, runtime ${r.Runtime}`)
      : console.log(`ERROR - ${title}: ${res}`);
    })
  });
});
