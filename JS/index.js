'user strict';

const personalMuvieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let key = true;
let numberOfFilm = null;
let lastWachhFilm = null;
let gradeFilm = null;

do {
    numberOfFilm = +prompt('Сколько фильмов вы посмотрели?', '');
    lastWachhFilm = prompt('Один из последних фильмов?', '');
    gradeFilm = +prompt('Насколько оцените его?', '');

    if(lastWachhFilm !== '' && lastWachhFilm.length === 20 || gradeFilm !== '' && numberOfFilm !== '' ) {
        key = false;
        personalMuvieDB['count'] = numberOfFilm;
        personalMuvieDB.movies[lastWachhFilm] = gradeFilm;
    } else {
        alert('вы ввели не правильные данные, давайте еще раз');
    }

} while (key);

if (personalMuvieDB.count < 10) {
    console.log('просмотренно довольно мало фильмов');
} else if (personalMuvieDB.count > 10 || personalMuvieDB.count < 30) {
    console.log('классический зритель');
} else {
    console.log('ну вы и киноша)');
}

console.log(personalMuvieDB)