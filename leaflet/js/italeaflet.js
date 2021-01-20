var mymap;
var popup;

$(document).ready(function () {
    var text = "<p><h5>Restaurant Centfocs</h5>Restaurant mediterrani<br>Carrer de Balmes, 16, 08007 Barcelona</>";
    mymap = L.map('mapid').setView([41.387092, 2.169816], 14);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(mymap);
    L.control.scale().addTo(mymap);
    var marker = L.marker([41.38692914857442,2.1660218281404964], {keyboard: true,draggable: true}).addTo(mymap);
    marker.bindPopup(text);
    popup = L.popup();
    mymap.on('click', onMapClick);
    });
    

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng) 
            .setContent('<p><h5>Posició:</h5>Lat: '+e.latlng.lat.toString() + "<br> Lng: " +  e.latlng.lng.toString()+'</p>') 
            .openOn(mymap); 
    }
    
