
/** Заглушки данных */
const mock = [
    {
        name: "Человек-паук",
        start: "10:00",
        genre: [0, 1, 2],
        filmHire: true,
        filmNew: true,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov1.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 200 
    },
    {
        name: "Собачья жизнь 2",
        start: "12:00",
        genre: [3, 4, 5],
        filmHire: true,
        filmNew: true,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov2.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 300
    },
    {
        name: "История игрушек 4",
        start: "14:00",
        genre: [6, 3, 5],
        filmHire: true,
        filmNew: false,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 500
    },
    {
        name: "Люди в чёрном: Интернэшнл",
        start: "16:00",
        genre: [0, 1, 5],
        filmHire: true,
        filmNew: true,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov3.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 700
    }
];

//справочник жанров - так часто работают сервисы
const genres = [
    {
        id: 0,
        name: "фантастика"
    },
    {
        id: 1,
        name: "боевик"
    },
    {
        id: 2,
        name: "приключения"
    },
    {
        id: 3,
        name: "фэнтези"
    },
    {
        id: 4,
        name: "драма"
    },
    {
        id: 5,
        name: "комедия"
    },
    {
        id: 6,
        name: "мультфильм"
    }
];

//массивы для хранения отсортированных данных
let filmsNew = [],
    filmsHire = [];

//сортируем на новинки и в прокате
for (let i = 0; i < mock.length; i++) {
    let currentFilm = mock[i];
    
    if (currentFilm.filmHire) {
        filmsHire.push(currentFilm);
    }

    if (currentFilm.filmNew) {
        filmsNew.push(currentFilm);
    }
}

//объект-обертка для универсализации работы с данными
const film = {
    getName: function() {
        return this.name;
    },

    getStart: function() {
        return this.start;
    },

    getGanre: function() {
        //хранит текущие идентификаторы жанров. Здесь тоже используется this!
        const ganarsIds = this.genre;

        //вспомогательный массив, который будет хранить текстовые описания жанров
        let arrGanars = [];

        //проходим по id шникам жанров
        for (let i = 0; i < ganarsIds.length; i++) {
            let currentId = ganarsIds[i];

            //так делали на лекции
            //arrGanars.push( genres[currentId] );

            //@see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
            let genreText = genres.find(
                //el содержит текущий элемент перебираемого массива genres
                function(el) {
                    //если условие выполняется, то возвращается проверяемый элемент
                    return el.id == currentId;
                }
            ).name; //элементом genres является объект справочника { id:..., name... }, на этом объекте
            // берем поле name и сохраняем как genreText;

            arrGanars.push(genreText); //добаляем полученный genreText во вспомогательный массив
        }

        //текстовое представление жанров
        //@see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        let strGanars = arrGanars.join(", ");
        return strGanars;
    },


}

for (let i = 0; i < filmsHire.length; i++) {

    let currentFilm = filmsHire[i],
        filmName = film.getName.bind(currentFilm)(),
        filmStart = film.getStart.bind(currentFilm)(),
        filmGanars = film.getGanre.bind(currentFilm)();

    console.log('Массив №', i);
    console.log(filmName);
    console.log(filmStart);
    console.log(filmGanars);

    let tableDOM = document.getElementById("filmsHire");


    let filmHTML = `
    <td id="startFilm_${i}" class="movie-list__first-col">${filmStart}
    </td>
    <td id="nameFilm_${i}" class="movie-list__second-col">
        ${filmName}
    </td>
    <td id="genreFilm_${i}" class="movie-list__third-col">${filmGanars}
    </td>
    <td class="movie-list__fourth-col">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="33px" height="33px">
            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                d="M16.505,32.994 C7.393,32.994 0.005,25.607 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.607 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.777 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z" />
        </svg>
    </td>
`;
 
    let tr = document.createElement("tr");
    tr.innerHTML = filmHTML;
    tableDOM.appendChild(tr); //добавляем в DOM элемент таблицы DOM элемент строки с фильмом

}























//////////////// Первоначальный вариант по теме массивы 

// let genres = ['фантастика', 'боевик', 'приключения', 'фэнтези', 'драма', 'комедия', 'мультфильм'];

// let films = [
//     ['10:00', 'Человек-паук: Вдали от дома', '1and2and3'],
//     ['12:00', 'Собачья жизнь 2', '4and5and6'],
//     ['14:00', 'История игрушек 4', '7and4and6'],
//     ['16:00', 'Люди в черном: Интернэшнл', '1and2and6'],
// ]

// for (let i = 0; i < films.length; i++) {
//     let film = films[i];
//     let elementStartFilm = document.getElementById('startFilm_' + (i + 1));
//     let elementNameFilm = document.getElementById('nameFilm_' + (i + 1));
//     let elementGenreFilm = document.getElementById('genreFilm_' + (i + 1));

//     for (let m = 0; m < film.length; m++) {
//         let matches = film[2].match(/(\d+)and(\d+)and(\d+)/);
//         let g_1 = Number(matches[1]) - 1;
//         let g_2 = Number(matches[2]) - 1;
//         let g_3 = Number(matches[3]) - 1;
//         let genreFilm = genres[g_1] + ', ' + genres[g_2] + ', ' + genres[g_3];

//         let genreTest = genres.join(', ');
//         console.log(genreTest);

//         elementStartFilm.innerHTML = film[0];
//         elementNameFilm.innerHTML = film[1];
//         elementGenreFilm.innerHTML = genreFilm;
//     }
// }