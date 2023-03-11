'user strict';

const numberOfFilm = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMuvieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i += 1) {
    let lastWachhFilm = prompt('Один из последних фильмов?', '');
    let gradeFilm = +prompt('Насколько оцените его?', '');
    personalMuvieDB.movies[lastWachhFilm] = gradeFilm;
}


console.log(personalMuvieDB)