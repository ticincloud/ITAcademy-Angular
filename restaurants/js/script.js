var map = L.map('mapid').on('load', onMapLoad);

//posició actual
map.locate({ setView: true, maxZoom: 25 });

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
var markers = L.markerClusterGroup();
var data_markers = [];

function onMapLoad() {
    console.log("Mapa cargado");
    getRestaurants();
}

$('#kind_food_selector').on('change', function() {
    console.log(this.value);
    render_to_map(data_markers, this.value);
});

function render_to_map(data_markers, filter) {
    var marker;
    var htmlImg, htmlTipus;
    /*
    FASE 3.2
    	1) Limpio todos los marcadores
    	2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
    */
    //1) Limpio todos los marcadores
    markers.clearLayers();

    //2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
    $.each(data_markers, function(i, item) {
        if (filter == 'all' || item.kind_food == filter) {
            htmlImg = '<div><img src="css/' + item.photo + '" width="100" height="100"></div>';
            htmlTipus = (filter == 'all') ? '<h4>' + item.kind_food + '</h4>' : '';
            html = htmlImg + '<p><h3>' + item.name + '</h3>' + htmlTipus + '</p>' + item.address + '</p>';
            console.log(html);
            marker = L.marker([item.lat, item.lng])
                .bindPopup(html);
            //.addTo(map);
            markers.addLayer(marker);

        }
    });
    map.addLayer(markers);
}

function getRestaurants() {
    /*
	FASE 3.1
		1) Relleno el data_markers con una petición a la api
		2) Añado de forma dinámica en el select los posibles tipos de restaurantes
		3) Llamo a la función para --> render_to_map(data_markers, 'all'); <-- para mostrar restaurantes en el mapa
	*/
    var url = "http://localhost/ita/restaurants/mapa/api/apiRestaurants.php";
    $.getJSON(url,
        function(data, textStatus, jqXHR) {
            if (textStatus === 'success') {
                //1) Relleno el data_markers con una petición a la api
                data_markers = data;

                //2) Añado de forma dinámica en el select los posibles tipos de restaurantes
                addTipusRestaurant();

                //3) Llamo a la función para --> render_to_map(data_markers, 'all'); <-- para mostrar restaurantes en el mapa
                render_to_map(data_markers, 'all');

            } else {}
        }
    );
}

function addTipusRestaurant() {
    var tipus = [];

    $('#kind_food_selector').append($('<option>', {
        value: 'all',
        text: 'Tots'
    }));

    $.each(data_markers, function(i, item) {
        if (!tipus.includes(item.kind_food)) {
            tipus.push(item.kind_food);
        }
    });

    $.each(tipus, function(i, item) {
        $('#kind_food_selector').append($('<option>', {
            value: item,
            text: item
        }));
    });
}