var map = L.map('map').setView([51.90693, 8.37853], 14);

L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18
}).addTo(map);

function jumpToPosition(lat, long)
{
  map.setView([lat, long], 14);
}
