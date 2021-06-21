const api = require('./api/omdb_api.js');
const scripts = require('./db/scripts.js');
const dedent = require('dedent');

const main = () => {
  const selectQuery = dedent`
    SELECT title
    FROM films
    WHERE year IS NULL
      OR genre IS NULL
      OR rating IS NULL
      OR runtime IS NULL
  `;
  const updateQuery = dedent`
    UPDATE films
    SET year = ?
      ,genre = ?
      ,rating = ?
      ,runtime = ?
  `;

  const updateFilms = (title, response) => {
    if (false && "nonalphanumeric-stripped lowercase title does not equal response.title") {
      console.log(`${title} matched to wrong title ${response.Title}`);
    } else {
      scripts.update(
        updateQuery,
        response.Year,
        response.Genre,
        response.Rating,
        response.Runtime,
      );
    }
  };

  scripts.select(selectQuery, (rows) => {
    const titles = rows.map(row => (row.title));
    titles.forEach(title => {
      api.search(title).then(response => {
        const res = JSON.parse(response);
        res.Response === "True"
          ? updateFilms(title, res)
          : console.log(`ERROR - ${film}: ${res}`);
      });
    })
  });
};

main();
