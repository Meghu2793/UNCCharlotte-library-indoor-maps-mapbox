var layerId;

const floor_name = document.getElementById('floor_name');

mapboxgl.accessToken = 'pk.eyJ1IjoibWtyaXNoMTIiLCJhIjoiY2ptcnZ1bzY1MjU5cjNxcGRnNzdqdDByNSJ9.1GYPjMumaaupGBDYNovR3A';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-80.73282837867737, 35.306155636780765],
    zoom: 18
});

function nameHeading(layerId) {
    console.log('Layer_Id ', layerId);
    switch (parseInt(layerId)) {
        case 0: floor_name.innerText = 'Ground Floor (0)'.toLocaleUpperCase();
            break;
        case 1: floor_name.innerText = 'Main Floor (1)'.toLocaleUpperCase();
            break;
        case 2: floor_name.innerText = 'Second Floor (2)'.toLocaleUpperCase();
            break;
        case 3: floor_name.innerText = 'Third Floor (3)'.toLocaleUpperCase();
            break;
        case 5: floor_name.innerText = 'Fifth Floor (5)'.toLocaleUpperCase();
            break;
        case 6: floor_name.innerText = 'Sixth Floor (6)'.toLocaleUpperCase();
            break;
        case 7: floor_name.innerText = 'Seventh Floor (7)'.toLocaleUpperCase();
            break;
        case 8: floor_name.innerText = 'Eigth Floor (8)'.toLocaleUpperCase();
            break;
        case 9: floor_name.innerText = 'Nineth Floor (9)'.toLocaleUpperCase();
            break;
        case 10: floor_name.innerText = 'Tenth Floor (10)'.toLocaleUpperCase();
            break;
    }
}

function addMarkers(res){
    res.points.features.forEach(function (marker) {
        // create a HTML element for each feature
        // let mainDiv = document.createElement('div');
        var el = document.createElement('div');
        el.className = 'marker';
        let p = document.createElement('p');
        p.className = 'label';
        p.innerText = marker.properties.Title;
        el.appendChild(p);
        // mainDiv.appendChild(el);
        // mainDiv.appendChild(p);

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.Title + '</h3>'))
            .addTo(map);
    });

    // res.layer.source.data.features.forEach(function (featur){
    //     var el1 = document.createElement('div');
    //     // el1.innerText = featur.properties.title;
    //     el1.style.background = 'red';

    //     new mapboxgl.Marker(el1)
    //         //.setLngLat(featur.geometry.coordinates[0])
    //         .addTo(map);
    // });
}

map.on('load', function () {
    $.get('http://localhost:3000/getGeoJsonFloor/0').then(res => {
        layerId = 0;
        // console.log("Res ", res.layer);
        map.addLayer(res.layer);
        nameHeading(layerId);
        addMarkers(res);
    });
});


let func = function (e) {
    var id = e.target.id;
    if (map.getLayer(`floor_${layerId}`)) {
        map.removeLayer(`floor_${layerId}`);
    }
    if (map.getSource(`floor_${layerId}`)) {
        map.removeSource(`floor_${layerId}`);
    }
    layerId = id;
    $('.marker').remove();
    console.log("ID ", id);
    $.get(`http://localhost:3000/getGeoJsonFloor/${id}`).then(res => {
        map.addLayer(res.layer);
        nameHeading(layerId);
        
        addMarkers(res);
    });
    // make an ajax call and replace the exisiting json with new json
}

let floor_no = document.getElementsByClassName('floors_navigate');
for (i = 0; i < floor_no.length; i++) {
    floor_no[i].addEventListener('click', func, false);
}

function findDistance(dist1, dist2) {
    let lat1 = dist1.lat;
    let lon1 = dist1.lon;

    let lat2 = dist2.lat;
    let lon2 = dist2.lon;

    let R = 6371e3;
    let φ1 = lat1.toRadians();
    let φ2 = lat2.toRadians();
    let Δφ = (lat2 - lat1).toRadians();
    let Δλ = (lon2 - lon1).toRadians();

    let a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let d = R * c;
    console.log("Distance ", d);
}

