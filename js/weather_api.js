$(document).ready(function () {
    "use strict";
    mapboxgl.accessToken = mapboxToken;

    // DRAW MAP
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-64.969414, 18.327129], // starting position [lng, lat]
        zoom: 11, // starting zoom
    });


    // GET WEATHER API
    const openWeatherURL = "http://api.openweathermap.org/data/2.5/forecast";

    function weatherData(lng, lat) {
        $.get(openWeatherURL, {
            APPID: openWeatherKey,
            'lon': lng,
            'lat': lat,
            'units': 'imperial'
        }).done(function (data) {
            //DRAW HEADER
            console.log(data);
            //create header with forecast city name
            let headerHTML = '<h1>' + data.city.name + '</h1>';
            $('.location').append(headerHTML);

            //DRAW WEATHER CARDS
            for (let i = 0; i <= data.list.length - 1; i += 8) {
                let date = data.list[i].dt_txt.substring(0, 10);
                let iconURL = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
                console.log(data);
                let finalHTML = '';
                 finalHTML =
                    '<div class="cards">' +
                    '<div class="card text-center">' +
                    '<div class="card-header">' + date + '</div>' +
                    '<div class="card-body">' +
                    '<ul class="list-group list-group-flush">' +
                    '<li class="list-group-item">' + '<p class="font-weight-bold">' + data.list[i].main.temp + ' °F' + '</p>' + '<div><img id="img" class="img" alt=""></div>' + '</li>' +
                    '<li class="list-group-item">' + 'Description: ' + '<p class="font-weight-bold">' + data.list[i].weather[0].description + '</p>' + '</li> ' +
                    '<li class="list-group-item">' + 'Humidity: ' + '<p class="font-weight-bold">' + data.list[i].main.humidity + '</p>' + '</li>' +
                    '<li class="list-group-item">' + 'Wind: ' + '<p class="font-weight-bold">' + +data.list[i].wind.speed + '</p>' + '</li>' +
                    '<li class="list-group-item">' + 'Pressure: ' + '<p class="font-weight-bold">' + data.list[i].main.pressure + '</p>' + '</li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>' +
                    '</div>'

                $('#weather').append(finalHTML);
                $('.img').attr('src', iconURL);
            }
        })
    }

    function search (input) {
        geocode(input, mapboxToken)
            .then(function (result) { //first get weather data
                console.log(result);
                weatherData(result[0], result[1]);
                return result;
            }).then(function (data){ //then go to this location
            map.flyTo({center: data, zoom: 12});

            let marker = new mapboxgl.Marker({draggable: true})
                .setLngLat(data)
                .addTo(map)
        });
    }
    $(".btn").click(function (e){
        e.preventDefault();
        let searchLocation = $('#search').val().trim();
        if (searchLocation !== ""){
            search(searchLocation);
            $('#search').val("");

        }

    });

    search("Saint Thomas");


    //TODO fix icons, make it clear prior search result cards
}());

