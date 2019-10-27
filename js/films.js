// Массивы

let genres = ['фантастика', 'боевик', 'приключения', 'фэнтези', 'драма', 'комедия', 'мультфильм']

let films = [
    ['10:00', 'Человек-паук: Вдали от дома', '1and2and3'],
    ['12:00', 'Собачья жизнь 2', '4and5and6'],
    ['14:00', 'История игрушек 4', '7and4and6'],
    ['16:00', 'Люди в черном: Интернэшнл', '1and2and6'],
]

for (i=0; i < films.length; i++) {
    let film = films[i]
    t = i + 1
    let elementStartFilm = document.getElementById('startFilm_' + t)
    let elementNameFilm = document.getElementById('nameFilm_' + t)
    let elementGenreFilm = document.getElementById('genreFilm_' + t)

    for (m=0; m < film.length; m++) {
        let matches = film[2].match(/(\d+)and(\d+)and(\d+)/);
        let g_1 = Number(matches[1])-1;
        let g_2 = Number(matches[2])-1;
        let g_3 = Number(matches[3])-1;
        let genreFilm = genres[g_1] + ', ' + genres[g_2] + ', ' + genres[g_3]
        
        elementStartFilm.innerHTML = film[0]
        elementNameFilm.innerHTML = film[1]
        elementGenreFilm.innerHTML = genreFilm
    }
}