//Google: AIzaSyB5SIxMTq7cfn42S2r7Aq_7ncuWJbw1eaA



var marker;
var mymap;
var polygon;
var markers = [];
var coord = [];
var MapController = {
    init : function () {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9zdHJpbmRhZGUiLCJhIjoiY2ptb2J5N2w4MTMzZjNvcWNhM3c0eng0MiJ9.77-ux9J6UjvGAlSGxiu6YA';
        mymap = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [-40.2922, -20.3305],
            zoom: 13,
        });

        document.getElementById("limpar").addEventListener("click", MapController.limparMapa);

        mymap.on('click', MapController.marcarMapa);
    },

    limparMapa : function () {
        if (markers) {
            markers.forEach(function myFunction(item, index) {
                item.remove();
            });

            markers = [];
            if (mymap.getSource('trace') && coord) {
                coord = [];
                mymap.getSource('trace').setData({
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [coord]
                    }
                });
            }
        }
        
    },

    marcarMapa : function (e) {
        marker = new mapboxgl.Marker()
            .setLngLat([e.lngLat.lng, e.lngLat.lat])
            .addTo(mymap);
        markers.push(marker);
        
        console.log(coord);
        console.log(mymap.getSource('trace'));
        if (markers) {
            if (coord.length) {
                coord.push([e.lngLat.lng, e.lngLat.lat]);
                mymap.getSource('trace').setData({
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [coord]
                    }
                });
                mymap.panTo([e.lngLat.lng, e.lngLat.lat]);
            } else {
                coord.push([e.lngLat.lng, e.lngLat.lat]);
                mymap.addSource('trace', {
                    type: 'geojson', 
                    data: {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Polygon',
                            'coordinates': [coord]
                        }
                    }
                });
                mymap.addLayer({
                    "id": "trace",
                    "type": "line",
                    "source": "trace",
                    "paint": {
                        "line-color": "yellow",
                        "line-opacity": 0.75,
                        "line-width": 5
                    }
                });
            }
        }
        
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    MapController.init();
  	// console.log("DOM completamente carregado e analisado");
});