# HomeVideos

Containerized TS app to pull film metadata from the OMDb API and store in a local mysql db for a personal film collection

## Setup
- `docker-compose up --build`
- `docker exec -it homevids sh`
- in container, `npm install && npm run build`

## Usage
- add_new_films
  - add titles to the `films` table from command line args
  - `node dist/add_new_films.js "Arrival" "Annihilation" "Silent Running"`
- update_metadata
  - connects to the OMDb API to fill in any missing metadata for titles in the `films` table
  - `node dist/update_metadata.js`
