async function main() {
  const api = require('./api/api_search.js');
  const scripts = require('./db/scripts.js');

  const privateKey = './api/private_key.pem';
  const knex = scripts.knex();

  async function updateFilms(filmTitle, response) {
    function clean(str) {
      return str.replace(/[^\w\s]/g, '').replace('  ', ' ').toLowerCase();
    }

    // skips false positive matches
    if (clean(filmTitle) !== clean(response.Title)) {
      console.log(`ERROR - ${filmTitle} matched to wrong title ${response.Title}`);
    } else {
      const whereClause = { title: filmTitle };
      const setClause = {
        year: response.Year,
        genre: response.Genre,
        rating: response.Rated,
        runtime: response.Runtime.replace(' min', '')
      };
      await scripts.update(knex, 'films', whereClause, setClause);
    }
  }

  const nullFields = ['year', 'genre', 'rating', 'runtime'];
  const titles = (await scripts.select(knex, 'title', 'films', ...nullFields)).map(row => (row.title));

  for (let title of titles) {
    const res = await api.search(title, privateKey);
    res.Response === "True"
      ? await updateFilms(title, res)
      : console.log(`ERROR - ${title}: ${res}`);
  }

  knex.destroy();
}

(async () => {
  await main();
})();
