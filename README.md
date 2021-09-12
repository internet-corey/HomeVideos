# HomeVideos

Containerized TS app to pull film metadata from the OMDB API and store in a local mysql db for a personal film collection

## Setup
- `docker-compose up --build`

## Usage
- add_new_films
  - add titles to the films db table from command line args
  - `node dist/add_new_films.js "Arrival" "Annihilation" "Silent Running"`
- update_metadata
  - connects to the OMDB API to fill in any missing metadata for titles in the films db table
  - `node dist/update_metadata.js`
