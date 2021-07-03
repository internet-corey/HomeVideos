(() => {
  const api = require('./api/omdb_api.js');
  const scripts = require('./db/scripts.js');

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

  const updateFilms = (title, response) => {
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
  };

  scripts.select(selectQuery, rows => {
    const titles = rows.map(row => (row.title));
    titles.forEach(title => {
      api.search(title).then(response => {
        const res = JSON.parse(response);
        res.Response === "True"
          ? updateFilms(title, res)
          : console.log(`ERROR - ${title}: ${res}`);
      });
    })
  });
})();
