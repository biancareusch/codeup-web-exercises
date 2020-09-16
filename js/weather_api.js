(function () {
        "use strict";
        mapboxgl.accessToken = mapboxToken;


        // DRAW MAP
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: [-64.969414, 18.327129], // starting position [lng, lat]
            zoom: 11, // starting zoom
        });


        // GET WEATHER API ( coordinates)
        function weatherCoordinates(lng, lat) {
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: openWeatherKey,
                lon: lng,
                lat: lat,
                units: "imperial"
            }).done(function (data) {
                    //DRAW HEADER
                    let headerHTML = '<h1>' + data.city.name + '</h1>';
                    $('.location').append(headerHTML);

                    //DRAW WEATHER CARDS
                    for (let i = 0; i <= data.list.length - 1; i = i + 8) {
                        let date = data.list[i].dt_txt.substring(0, 10);
                        let iconURL = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
                        let finalHTML =
                            '<div class="cards">' +
                            '<div class="card text-center">' +
                            '<div class="card-header">' + date + '</div>' +
                            '<div class="card-body"> ' +
                            '<ul class="list-group list-group-flush">' +
                            '<li class="list-group-item">' + '<p class="font-weight-bold">' + data.list[i].main.temp + ' °F' + '</p>' + '<div><img id="img" class="img" alt=""></div> ' + '</li>' +
                            '<li class="list-group-item">' + 'Description: ' + '<p class="font-weight-bold">' + data.list[i].weather[0].description + '</p>' + '</li> ' +
                            '<li class="list-group-item">' + 'Humidity: ' + '<p class="font-weight-bold">' + data.list[i].main.humidity + '</p>' + '</li>' +
                            '<li class="list-group-item">' + 'Wind: ' + '<p class="font-weight-bold">' + +data.list[i].wind.speed + '</p>' + '</li>' +
                            '<li class="list-group-item">' + 'Pressure: ' + '<p class="font-weight-bold">' + data.list[i].main.pressure + '</p>' + '</li>' +
                            '</ul>' +
                            '</div>' +
                            '</div>' +
                            '</div>';

                        $('#weather').append(finalHTML);
                        $('.img').attr('src', iconURL);

                    }

                    let markerCoordinates =
                        map.on('click', function (e) {
                            // getting latitude and longitude for weather app
                            var coordsObj = e.lngLat;
                            // // console.log(coordsObj);
                            // console.log('data.city' + data.city.coord.lat);
                            console.log('markercoord ' + coordsObj.lng);
                            var marker = new mapboxgl.Marker()
                                .setLngLat(coordsObj)
                                .addTo(map);
                            // data.city.coord.lat = coordsObj.lat;
                            // data.city.coord.lon = coordsObj.lng;

                        })
                }
            )
        }


        //TODO fix icons, make all cards the same size, update weather to marker coordinates, make search bar functional
    }());

