# HomeVideos

### Containerized JS app to pull film metadata from the OMDB API and store in a local mysql db for a personal film collection

## Setup
- `docker-compose up --build`
- go into container
- run initial_table_setup.js and then initial_insert.js
- you may now use the main `add_new_films` and `update_metadata` functionality

## Usage
- add_new_films
  - add titles to the films db table from command line args
  - `node add_new_films.js "Arrival" "Annihilation" "Silent Running"`
- update_metadata
  - connects to the OMDB API to fill in any missing metadata for titles in the films db table
  - `node update_metadata.js`
