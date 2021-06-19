const api = require('./api/omdb_api.js');
const scripts = require('./db/scripts.js');
const dedent = require('dedent');

const updateMetadata = () => {
  const updatedFilms = {};
  const erroredFilms = {};

  // connect to db, pull all films without metadata
  const selectQuery = dedent`
    SELECT title
    FROM films
    WHERE year IS NULL
      OR genre IS NULL
      OR rating IS NULL
      OR runtime IS NULL
  `;
  titlesNeedUpdating = scripts.select(selectQuery);

  // loop thru the list, grab metadata from api, save to success and error obs
  titlesNeedUpdating.forEach(title => {
    metaData = api.search(title);
    metaData.response === "True"
      ? updatedFilms[film] = metaData
      : erroredFilms[film] = metaData;
  })

  // insert for all success, console.log for erroredFilms
  const updateQuery = dedent`
    UPDATE films
    SET year = ?
      ,genre = ?
      ,rating = ?
      ,runtime = ?
  `;
  updatedFilms.forEach(film => {
    const metaData = updatedFilms[film];
    if ("nonalphanumeric-stripped lowercase title does not equal metaData.title") {
      erroredFilms[film] = 'Matched to wrong title';
    } else {
      scripts.update(
        updateQuery,
        metaData.Year,
        metaData.Genre,
        metaData.Rating,
        metaData.Runtime,
      );
    }
  });

  console.log('Something went wrong with: ');
  erroredFilms.forEach(badFilm => console.log(erroredFilms[badFilm]));
};

updateMetadata();
