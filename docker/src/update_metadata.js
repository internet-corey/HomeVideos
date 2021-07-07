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

  function updateFilms(filmTitle, response) {
    const clean = str => {
      return str.replace(/[^\w\s]/g, '').replace('  ', ' ').toLowerCase();
    }

    // skips false positive matches
    if (clean(title) !== clean(response.Title)) {
      console.log(`ERROR - ${title} matched to wrong title ${response.Title}`);
    } else {
      const whereClause = { title: filmTitle };
      const setClause = {
        year: response.Year,
        genre: response.Genre,
        rating: response.Rated,
        runtime: response.Runtime.replace(' min', '')
      };
      scripts.update('films', whereClause, setClause);
    }
  }

  const titles = await scripts.select('title', 'films', 'year', 'genre', 'rating', 'runtime');
  for (let title of titles) {
    console.log(title);
    // res = JSON.parse(await api.search(title, privateKey));
    // res.Response === "True"
    //   ? updateFilms(title, res)
    //   : console.log(`ERROR - ${title}: ${res}`);
  }
}

(async () => {
  await main();
})();
