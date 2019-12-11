const SYPEX_URL = 'https://api.sypexgeo.net',
    CITIES_URL = 'https://glavpunkt.ru/api/get_rf_cities';

let cities;

/**
 * 
 * @param {*} api_url - адрес запроса
 */


function getRequest(api_url, callback) {
    let xhr = new XMLHttpRequest(),
        async = true;
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback.call(xhr.responseText);
        }
    }

    xhr.open('GET', api_url, async);
    xhr.send();
    // return (xhr.responseText);
};

jQuery(($)=> {
    $('#city_name').on('click', function(e){
        e.preventDefault();
        choose_city.style.display = 'block';

        closeChoose_city.onclick = function () {
            choose_city.style.display = 'none';
        }

        if (!cities) {
            getRequest(CITIES_URL, function(){
                // console.log(cities);
                cities = $.parseJSON(this);
            });
        
        }

        $('body').on('input keyup', 'input[name=choose_city__form]', function() {
            console.log(cities);
            counter = 0;
            let search = $(this).val(),
                html = '<ul>';
            for (let i = 0; i < cities.length; i++) {
                if (cities[i].name.toLowerCase().indexOf(search.toLowerCase()) >= 0 && counter < 5) {
                    html += '<li data-city="' + cities[i].name+ '">' + cities[i].name + ' (' + cities[i].area + ')</li>';
                    counter++;
                }
            }
            html += '</ul>';
            $('#search_result').html(html);

        })

        $('body').on('click', '#search_result li', function() {
            $('#city_name').html($(this).data('city'));
            choose_city.style.display = 'none';

        })

    });
});

jQuery(document).ready(($) => {
    // console.log('start request');
    getRequest(SYPEX_URL, function(){
        $answer = $.parseJSON(this)
        let city = $answer['city']['name_ru'];
        // console.log(city);
        $('#city_name').html(city);
    });
});