const genre_1 = 'фантастика'
const genre_2 = 'боевик'
const genre_3 = 'приключения'
const genre_4 = 'фэнтези'
const genre_5 = 'драма'
const genre_6 = 'комедия'
const genre_7 = 'мультфильм'

let startFilm_1 = '10:00'
let startFilm_2 = '12:00'
let startFilm_3 = '13:00'
let startFilm_4 = '14:00'

let nameFilm_1 = 'Человек-паук: Вдали от дома'
let nameFilm_2 = 'Собачья жизнь 2'
let nameFilm_3 = 'История игрушек 4'
let nameFilm_4 = 'Люди в черном: Интернэшнл'

let genreFilm_1 = genre_1 + ', ' + genre_2 + ', ' + genre_3
let genreFilm_2 = genre_4 + ', ' + genre_5 + ', ' + genre_6
let genreFilm_3 = genre_7 + ', ' + genre_4 + ', ' + genre_6
let genreFilm_4 = genre_1 + ', ' + genre_2 + ', ' + genre_6

let elementStartFilm_1 = document.getElementById('startFilm_1')
let elementNameFilm_1 = document.getElementById('nameFilm_1')
let elementGenreFilm_1 = document.getElementById('genreFilm_1')

elementStartFilm_1.innerHTML = startFilm_1
elementNameFilm_1.innerHTML = nameFilm_1
elementGenreFilm_1.innerHTML = genreFilm_1

let elementStartFilm_2 = document.getElementById('startFilm_2')
let elementNameFilm_2 = document.getElementById('nameFilm_2')
let elementGenreFilm_2 = document.getElementById('genreFilm_2')

elementStartFilm_2.innerHTML = startFilm_2
elementNameFilm_2.innerHTML = nameFilm_2
elementGenreFilm_2.innerHTML = genreFilm_2

let elementStartFilm_3 = document.getElementById('startFilm_3')
let elementNameFilm_3 = document.getElementById('nameFilm_3')
let elementGenreFilm_3 = document.getElementById('genreFilm_3')

elementStartFilm_3.innerHTML = startFilm_3
elementNameFilm_3.innerHTML = nameFilm_3
elementGenreFilm_3.innerHTML = genreFilm_3

let elementStartFilm_4 = document.getElementById('startFilm_4')
let elementNameFilm_4 = document.getElementById('nameFilm_4')
let elementGenreFilm_4 = document.getElementById('genreFilm_4')

elementStartFilm_4.innerHTML = startFilm_4
elementNameFilm_4.innerHTML = nameFilm_4
elementGenreFilm_4.innerHTML = genreFilm_4

let elementNameFilmCarousel_1 = document.getElementById('nameFilmCarousel_1')
elementNameFilmCarousel_1.innerHTML = nameFilm_1

let elementNameFilmCarousel_2 = document.getElementById('nameFilmCarousel_2')
elementNameFilmCarousel_2.innerHTML = nameFilm_2

let elementNameFilmCarousel_4 = document.getElementById('nameFilmCarousel_4')
elementNameFilmCarousel_4.innerHTML = nameFilm_4
