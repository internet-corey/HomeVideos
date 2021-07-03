async function main() {
  const api = require('./api/api_search.js');
  const scripts = require('./db/scripts.js');

  const privateKey = './api/private_key.pem'

  const selectQuery = `
    SELECT title
    FROM films
    WHERE year IS NULL
      OR genre IS NULL
      OR rating IS NULL
      OR runtime IS NULL
  `;
  const updateQuery = `
    UPDATE films
    SET year = ?
      ,genre = ?
      ,rating = ?
      ,runtime = ?
    WHERE title = ?
  `;

  function updateFilms(title, response) {
    const clean = str => {
      return str.replace(/[^\w\s]/g, '').replace('  ', ' ').toLowerCase();
    }

    // skips false positive matches
    if (clean(title) !== clean(response.Title)) {
      console.log(`ERROR - ${title} matched to wrong title ${response.Title}`);
    } else {
      scripts.update(
        updateQuery,
        response.Year,
        response.Genre,
        response.Rated,
        response.Runtime.replace(' min', ''),
        title
      );
    }
  }

  const titles = (await scripts.select(selectQuery)).map(row => (row.title));
  for (let title of titles) {
    res = JSON.parse(await api.search(title, privateKey));
    res.Response === "True"
      ? updateFilms(title, res)
      : console.log(`ERROR - ${title}: ${res}`);
  }
}

(async () => {
  await main();
})();
