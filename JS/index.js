'user strict';

const personalMuvieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMuvieDB.count = +prompt('Сколько фильмов вы посмотрели?', '').trim();
    
        while (personalMuvieDB.count == '' || personalMuvieDB.count == null || isNaN(personalMuvieDB.count)) {
            personalMuvieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilm: function() {
        let lastWachhFilm = '';
        let gradeFilm = '';
    
        restart:
        for (let i = 0; i < 2; i++) {
            lastWachhFilm = prompt('Один из последних фильмов?', '').trim();
            gradeFilm = prompt('Насколько оцените его?', '').trim();
            //проверка на кнопку отмена
            if (lastWachhFilm === null || gradeFilm === null) {
                i--;
                console.error('произошла ошибка, вы ничего не ввели!!!')
                continue restart;
            }
            // проверка на инпут
            if (lastWachhFilm !== '' &&  gradeFilm !== '' || lastWachhFilm.length === 20) {
                key = false;
                personalMuvieDB.movies[lastWachhFilm] = +gradeFilm;
            } else {
                alert('вы ввели не правильные данные, давайте еще раз');
            }
        }
    },
    detectPersonalLevel: function() {
    if (personalMuvieDB.count < 10) {
        console.log('просмотренно довольно мало фильмов');
    } else if (personalMuvieDB.count > 10 || personalMuvieDB.count < 30) {
        console.log('классический зритель');
    } else {
        console.log('ну вы и киноша)');
    }
    },
    showMyDB: function(hidden) {
        if (!hidden) { 
            console.log('Главный обьект программы');
        }
    },
    writeYourGenres: function() {
    for (let i = 0; i <= 2; i++) {
        personalMuvieDB.genres[i] = prompt(`ваш любимый жанр под номером : ${i + 1}.`);
        if (personalMuvieDB.genres[i] == null || personalMuvieDB.genres[i] == '') {
            i--;
        }
    }
    let index = 0;
    let {genres} = personalMuvieDB;
    genres.forEach(function (element) {
        console.log(`${element} == ${element}`)
    })
    },
     toggleVisibleMyDB: function() {
        if(personalMuvieDB.privat) {
            personalMuvieDB.privat = false;
        } else {
            personalMuvieDB.privat = true;
        }
    }
};