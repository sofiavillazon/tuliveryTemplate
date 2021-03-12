mapboxgl.accessToken = 'pk.eyJ1Ijoic29maWF2aWxsYXpvbiIsImEiOiJLZ2hJU0dVIn0.TCba--MdAt3klzuZKvlHfg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/sofiavillazon/ckm6gzd3v22mm17po2a5zjd3d',
  center: [-76.993702, -12.093133],
  zoom: 16
});


var geojson = {
	"features": [
	  {
		"type": "Feature",
		"properties": {
			"type": "deliver",
            "title": 'Delivery',
			"name": 'Aldo Benites Palomino',
			"university": '975069855'
		},
		"geometry": {
            "coordinates": [
              -76.993702,
              -12.093133
            ],
            "type": "Point"
        },
		"id": "20a2aa2d3256fac0ec8e6ffd6d1c4371"
	  },
      {
		"type": "Feature",
		"properties": {
			"type": "client",
            "title": 'Cliente',
			"name": 'María Fuentes',
			"university": 'Jirón Cavallini N° 54'
		},
		"geometry": {
            "coordinates": [
                -76.990466,
                -12.092713
            ],
            "type": "Point"
        },
		"id": "37ed540e335130c619ed4c0ee0dc615a"
	  },
      {
		"type": "Feature",
		"properties": {
			"type": "store",
            "title": 'Tienda',
			"name": 'Pizza Raúl',
			"university": 'Av. Principal N° 23'
		},
		"geometry": {
            "coordinates": [
                -76.994685,
                -12.090887
            ],
            "type": "Point"
        },
		"id": "4bbaa1ed9c17aac1502ed5d1f9c2ca62"
	  }
	],
	"type": "FeatureCollection"
  };


// add markers to map
geojson.features.forEach(function(marker) {

    if(marker.properties.type == "client"){
        var el = document.createElement('div');
        el.className = 'markerClient';

        
    }
    if(marker.properties.type == "store"){
        var el = document.createElement('div');
        el.className = 'markerStore';
       
    }
	if(marker.properties.type == "deliver"){
        var el = document.createElement('div');
        el.className = 'markerDriver';
       
    }
  
	// make a marker for each feature and add to the map
	new mapboxgl.Marker(el)
		.setLngLat(marker.geometry.coordinates)
		.addTo(map);

	new mapboxgl.Marker(el)
		.setLngLat(marker.geometry.coordinates)
		.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
			.setHTML('<h6>' + marker.properties.title + '</h6><h2>' + marker.properties.name + '</h2>'+ '<p>' + marker.properties.university + '</p>'))
		.addTo(map);

});


// // /// //////////////////////////////////// / /// / 

