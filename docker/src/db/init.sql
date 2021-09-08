CREATE TABLE IF NOT EXISTS `db`.`films` (
  id INT NOT NULL AUTO_INCREMENT
  ,title VARCHAR NOT NULL
  ,year INT
  ,genre VARCHAR
  ,rating VARCHAR
  ,runtimne INT
);

-- Does the initial insert if the table is empty
INSERT INTO films (title)
SELECT * FROM (
  SELECT 'Anchorman: The Legend of Ron Burgundy' AS title
  UNION SELECT 'Anchorman 2: The Legend Continues'
  UNION SELECT 'Anchorman: The Legend of Ron Burgundy'
  UNION SELECT 'Anchorman 2: The Legend Continues'
  UNION SELECT 'Batman Begins'
  UNION SELECT 'Beerfest'
  UNION SELECT 'Bill & Ted''s Excellent Adventure'
  UNION SELECT 'Blazing Saddles'
  UNION SELECT 'The Cabin in the Woods'
  UNION SELECT 'The Campaign'
  UNION SELECT 'Castle in the Sky'
  UNION SELECT 'Coco'
  UNION SELECT 'The Dark Knight'
  UNION SELECT 'THe Dark Knight Rises'
  UNION SELECT 'Dodgeball'
  UNION SELECT 'Dumb and Dumber'
  UNION SELECT 'Employee of the Month'
  UNION SELECT 'Fast Times at Ridgemont High'
  UNION SELECT 'Fight Club'
  UNION SELECT 'Get Hard'
  UNION SELECT 'Godzilla'
  UNION SELECT 'The Hangover Part II'
  UNION SELECT 'Harry Potter and the Sorcerer''s Stone'
  UNION SELECT 'Harry Potter and the Chamber of Secrets'
  UNION SELECT 'Harry Potter and the Prisoner of Azkaban'
  UNION SELECT 'Harry Potter and the Goblet of Fire'
  UNION SELECT 'Harry Potter and the Order of the Phoenix'
  UNION SELECT 'Harry Potter and the Half-Blood Prince'
  UNION SELECT 'Harry Potter and the Deathly Hallows Part 1'
  UNION SELECT 'Harry Potter and the Deathly Hallows Part 2'
  UNION SELECT 'The Hateful Eight'
  UNION SELECT 'The Hobbit: An Unexpected Journey'
  UNION SELECT 'The Hobbit: The Desolation of Smaug'
  UNION SELECT 'The Hobbit: The Battle of the Five Armies'
  UNION SELECT 'High Anxiety'
  UNION SELECT 'History of the World Part I'
  UNION SELECT 'Horrible Bosses'
  UNION SELECT 'Horrible Bosses 2'
  UNION SELECT 'Hot Fuzz'
  UNION SELECT 'Inception'
  UNION SELECT 'Independence Day'
  UNION SELECT 'Inglorious Basterds'
  UNION SELECT 'Interstellar'
  UNION SELECT 'Jurassic Park'
  UNION SELECT 'The Lost World: Jurassic Park'
  UNION SELECT 'Jurassic Park III'
  UNION SELECT 'Jurassic World'
  UNION SELECT 'Jurassic World: Fallen Kingdom'
  UNION SELECT 'Kiki''s Delivery Service'
  UNION SELECT 'Kill Bill Volume 1'
  UNION SELECT 'Kill Bill Volume 2'
  UNION SELECT 'Kung Pow: Enter the Fist'
  UNION SELECT 'The Last Samurai'
  UNION SELECT 'Lilo & Stitch'
  UNION SELECT 'The Lord of the Rings: The Fellowship of the Ring'
  UNION SELECT 'The Lord of the Rings: The Two Towers'
  UNION SELECT 'The Lord of the Rings: The Return of the King'
  UNION SELECT 'The Matrix'
  UNION SELECT 'The Matrix: Reloaded'
  UNION SELECT 'The Matrix: Revolutions'
  UNION SELECT 'Monty Python and the Holy Grail'
  UNION SELECT 'Moana'
  UNION SELECT 'The Mummy'
  UNION SELECT 'The Mummy Returns'
  UNION SELECT 'The Mummy: Tomb of the Dragon Emperor'
  UNION SELECT 'My Neighbor Totoro'
  UNION SELECT 'Nacho Libre'
  UNION SELECT 'Nausicaa of the Valley of the Wind'
  UNION SELECT 'No Country for Old Men'
  UNION SELECT 'Old School'
  UNION SELECT 'The Other Guys'
  UNION SELECT 'Pacific Rim'
  UNION SELECT 'Porco Rosso'
  UNION SELECT 'Princess Mononoke'
  UNION SELECT 'The Phantom of the Opera'
  UNION SELECT 'Pulp Fiction'
  UNION SELECT 'The Ring'
  UNION SELECT 'Robin Hood: Men in Tights'
  UNION SELECT 'Rogue One: A Star Wars Story'
  UNION SELECT 'Santa''s Magical Stories'
  UNION SELECT 'The Scorpion King'
  UNION SELECT 'Shaun of the Dead'
  UNION SELECT 'Silent Movie'
  UNION SELECT 'Spaceballs'
  UNION SELECT 'Spirited Away'
  UNION SELECT 'Star Wars Episode IV: A New Hope'
  UNION SELECT 'Star Wars Episode V: The Empire Strikes Back'
  UNION SELECT 'Star Wars Episode VI: Return of the Jedi'
  UNION SELECT 'Star Wars Episode I: The Phantom Menace'
  UNION SELECT 'Star Wars Episode II: Attack of the Clones'
  UNION SELECT 'Star Wars Episode III: Revenge of the Sith'
  UNION SELECT 'Step Brothers'
  UNION SELECT 'Superbad'
  UNION SELECT 'Talladega Nights: The Ballad of Ricky Bobby'
  UNION SELECT 'To Be or Not to Be'
  UNION SELECT 'Total Recall'
  UNION SELECT 'Transformers'
  UNION SELECT 'The Twelve Chairs'
  UNION SELECT 'V for Vendetta'
  UNION SELECT 'The Watch'
  UNION SELECT 'Wedding Crashers'
  UNION SELECT 'The World''s End'
  UNION SELECT 'Young Frankenstein'
  UNION SELECT 'Zootopia'
) q
WHERE NOT EXISTS (SELECT * FROM films);
