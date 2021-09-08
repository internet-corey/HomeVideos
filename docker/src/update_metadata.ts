import { search } from './api/api_search';
import { conn, update, select } from './db/scripts';
import { Knex } from 'knex';

async function main() {
  const privateKey = '../../../private_key.pem';
  const knex: Knex = conn();

  async function updateFilms(filmTitle: string, response: Record<string, string>) {
    function clean(str: string) {
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
      await update(knex, 'films', whereClause, setClause);
    }
  }

  const rawString: string = 'year IS NULL OR genre IS NULL OR rating IS NULL OR runtime IS NULL';
  const titles: string[] = (await select(knex, 'title', 'films', rawString, []));
  const cleanTitles: string[] = Object.values(JSON.parse(JSON.stringify(titles))).map((row: {title: string}) => (row.title));

  for (let title of cleanTitles) {
    const res = await search(title, privateKey);
    res.Response === "True"
      ? await updateFilms(title, res)
      : console.log(`ERROR - ${title}: ${res}`);
  }

  knex.destroy();
}

(async () => {
  await main();
})();
