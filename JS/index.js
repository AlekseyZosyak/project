'user strict';

const personalMuvieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilm = prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = prompt('Сколько фильмов вы посмотрели?', '');
    }
}
   
start();

function question() {
    let numberOfFilm = '';
    let lastWachhFilm = '';
    let gradeFilm = '';

    restart:
    for (let i = 0; i < 2; i++) {
        lastWachhFilm = prompt('Один из последних фильмов?', '');
        gradeFilm = prompt('Насколько оцените его?', '');

        if (numberOfFilm === null || lastWachhFilm === null || gradeFilm === null) {
            i--;
            console.error('произошла ошибка, вы ничего не ввели!!!')
            continue restart;
        }

        if (lastWachhFilm !== '' &&  gradeFilm !== '' || lastWachhFilm.length === 20 && numberOfFilm !== '' ) {
            key = false;
            personalMuvieDB['count'] = numberOfFilm;
            personalMuvieDB.movies[lastWachhFilm] = gradeFilm;
        } else {
            alert('вы ввели не правильные данные, давайте еще раз');
        }
    }
}

question();
 
function add() {
    if (personalMuvieDB.count < 10) {
        console.log('просмотренно довольно мало фильмов');
    } else if (personalMuvieDB.count > 10 || personalMuvieDB.count < 30) {
        console.log('классический зритель');
    } else {
        console.log('ну вы и киноша)');
    }
    
}

console.log(personalMuvieDB)







