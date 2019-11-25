
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
        price: 100
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
        price: 100
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
        price: 100
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
        price: 100
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


// Отображение мест в зале

const places = [];

// Задать количество мест в зале
let seatsCount = 8;

for (let y = 1; y < seatsCount + 1; y++) {
    let bStatus = Math.round(Math.random());

    let place = {
        seatNumber: y,
        price: 100,
        booking: bStatus,
    };
    places.push(place);
};




// Функции обработчики

let order = function (e) {
    // console.warn(e);

    let clickedElement = e.target,
        index = clickedElement.innerHTML*1 - 1;
    // console.log('Индекс места:', index);

    let place = places[index];
    // console.log('Полученный объект-место:', place);


    if (place.booking) {
        alert('Место забронировано');
    } else {
        place.booking = 1;
        // console.log('Статус брони изменен:', place.booking);
        let bookedSeatNumber = document.getElementById('orderSeatNumber');
        console.log(bookedSeatNumber);
        bookedSeatNumber.innerHTML = place.seatNumber;
    }
};

let placeToggle = function () {
    console.log('Функция placeToggle')

    // if (place.booking) {
    //     // placeDiv.classList.add('placeBooked');
    // } else {
    //     placeDiv.classList.add('placeBooked');

    //     // placeDiv.classList.add('placeFree');
    // }

};

let placeContext = function () {
    // console.log('Функция placeContext')
    alert(place.price)
};


let placeHover = function () {
    console.log('Функция placeHover')
    // placeDiv.classList.add('placeHover')
};
let placeHoverOut = function () {
    console.log('Функция placeHoverOut')
};






let placesHTML = document.querySelector('.places');
// let hall = document.createElement('div');

// console.log(placesHTML);

for (let place of places) {
    let placeDiv = document.createElement('div');
    placeDiv.addEventListener('click', order);
    placeDiv.addEventListener('click', placeToggle);
    placeDiv.addEventListener('contextmenu', placeContext);
    placeDiv.addEventListener('mouseover', placeHover);
    placeDiv.addEventListener('mouseout', placeHoverOut)


    placeDiv.innerHTML = place.seatNumber;
    placeDiv.classList.add('placeDiv');

    if (place.booking) {
        placeDiv.classList.add('placeBooked');
    } else {
        placeDiv.classList.add('placeFree');
    }

    placesHTML.append(placeDiv);
};


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
    getName: function () {
        return this.name;
    },

    getStart: function () {
        return this.start;
    },

    getGanre: function () {
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
                function (el) {
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

    renderFilmRow() {

        //добавлена строка вывода цены
        let filmName = this.name,
            filmStart = this.start,
            filmGanars = film.getGanre.apply(this),
            filmPrice = this.price;


        let filmHTML = `
            <td id="startFilm_${1}" class="movie-list__first-col">${filmStart}</td>
            <td id="nameFilm_${1}" class="movie-list__second-col">${filmName}</td>
            <td id="genreFilm_${1}" class="movie-list__third-col">${filmGanars}</td>
            <td class="movie-list__fourth-col">${filmPrice}
            </td>
        `;
        return filmHTML;
    
    
    
    
    },

    // renderFilmBlock()

 
    //добавлен
    getPrice: function () {
        return this.price
    }
};

//получаем DOM элемент с таблицей
let tableDOM = document.getElementById("filmsHire");
for (let i = 0; i < filmsHire.length; i++) {
    let currentFilm = filmsHire[i],
        filmName = film.getName.bind(currentFilm)(),
        filmStart = film.getStart.bind(currentFilm)(),
        filmGanars = film.getGanre.bind(currentFilm)(),
        filmRowHTML = film.renderFilmRow.bind(currentFilm)(),
        tr = document.createElement("tr"), //содаем DOM элемент TR;
        filmPrice = film.getPrice.bind(currentFilm)();
    tr.innerHTML = filmRowHTML; //записываем в DOM элемент HTML разметку

    //вешаем обработчик события на строку, вызывающий модальное окно
    /*** РАЗОБРАТЬ */
    tr.onclick = function () {
        // 1. Находим элемент с формой заказ
        // 2. Изменить состояние из display: none -> display: block;
        // 3. Отобразить данные по бронированию фильма

        orderForm.style.display = 'block';

        let orderFilmName = document.getElementById('orderFilmName'),
            orderFilmStart = document.getElementById('orderFilmStart'),
            orderFilmGanar = document.getElementById('orderFilmGanar'),
            orderFilmPrice = document.getElementById('orderFilmPrice');

        orderFilmName.innerHTML = filmName;
        orderFilmStart.innerHTML = filmStart;
        orderFilmGanar.innerHTML = filmGanars;
        orderFilmPrice.innerHTML = filmPrice;
    
        // let orderFilmCountTicket = document.getElementById('orderFilmCountTicket'),
        //     orderFilmTotalPrice = document.getElementById('orderFilmTotalPrice');
    
        // orderFilmTotalPrice.innerHTML = filmPrice * orderFilmCountTicket.value;
    
        // orderFilmCountTicket.onchange = function () {
        //   orderFilmTotalPrice.innerHTML = filmPrice * orderFilmCountTicket.value;
        // }
    }

    tableDOM.appendChild(tr); //добавляем в DOM элемент таблицы DOM элемент строки с фильмом
}

// Закрытие модального окна
/*** РАЗОБРАТЬ Event Handler */
let orderForm = document.getElementById('orderForm');
let closeOrderForm = document.getElementById('closeOrderForm');

closeOrderForm.onclick = function () {
    orderForm.style.display = 'none';
}

// Валидация ввода имени
/** РАЗОБРАТЬ Event Handler */
let sendOrder = document.getElementById('sendOrder');
sendOrder.onclick = function () {
  let orderClinetName = document.getElementById('orderClinetName');

  if (orderClinetName.value) {
    orderClinetName.style.border = '1px solid #bebebe';
  } else {
    orderClinetName.style.border = '2px solid red';
  }
}



