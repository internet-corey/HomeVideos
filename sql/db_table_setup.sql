use db;
create table films (
	id integer,
    genre varchar(250),
    cover_image varchar(250),
    file_path varchar(250),
    primary key (id)
);
create table custom_tags (
	id integer,
    film_id integer,
    custom_tag varchar(250),
    primary key (id),
    foreign key (film_id) references films (id)
);