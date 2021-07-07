async function main() {
  const api = require('./api/api_search.js');
  const scripts = require('./db/scripts.js');

  const privateKey = './api/private_key.pem'

  function updateFilms(filmTitle, response) {
    const clean = str => {
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
      scripts.update('films', whereClause, setClause);
    }
  }

  const nullFields = ['year', 'genre', 'rating', 'runtime'];
  const titles = (await scripts.select('title', 'films', ...nullFields)).map(title => (title.title));

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
