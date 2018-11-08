var layerId;

const floor_name = document.getElementById('floor_name');
const searchSubmit = document.getElementById('search-submit');
const searchTerm1 = document.getElementById('search-term1');
const searchTerm2 = document.getElementById('search-term2');

mapboxgl.accessToken = 'pk.eyJ1IjoibWtyaXNoMTIiLCJhIjoiY2ptcnZ1bzY1MjU5cjNxcGRnNzdqdDByNSJ9.1GYPjMumaaupGBDYNovR3A';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-80.73282837867737, 35.306155636780765],
    zoom: 18
});

// To display the floor name below
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

function addMarkers(res) {
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
}

map.on('load', function () {
    $.get('http://localhost:3000/getGeoJsonFloor/0').then(res => {
        layerId = 0;
        // console.log("Res ", res.layer);
        map.addLayer(res.layer);
        nameHeading(layerId);
        addMarkers(res);
    });

    $.get('http://localhost:3000/getGeoJsonPath/getAllLayer/0').then(res => {
        res.forEach(function(eLayer) {
            map.addLayer(eLayer);
        });
    });

    map.addLayer({
        "id": "route1",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -80.73264867067337,
                            35.30600898134817
                        ],
                        [
                            -80.73265403509139,
                            35.305866703435626
                        ],
                        [
                            -80.73244750499725,
                            35.305860136756685
                        ],
                        [
                            -80.73244750499725,
                            35.305715669685426
                        ]
                    ]
                }
            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#888",
            "line-width": 8
        }
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
    // console.log("ID ", id);
    $.get(`http://localhost:3000/getGeoJsonFloor/${id}`).then(res => {
        map.addLayer(res.layer);
        nameHeading(layerId);
        addMarkers(res);
    });
    // make an ajax call and replace the exisiting json with new json
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
    // console.log("Distance ", d);
}

// On Click event listener
let floor_no = document.getElementsByClassName('floors_navigate');
for (i = 0; i < floor_no.length; i++) {
    floor_no[i].addEventListener('click', func, false);
}

searchSubmit.addEventListener('click', function (e) {
    console.log("Coming here");
    let source_place = searchTerm1.value;
    let dest_place = searchTerm2.value;
    console.log("Source ", source_place);
    console.log("Destination ", dest_place);
    $.get(`http://localhost:3000/getGeoJsonPath/getRouteId?source=${source_place},
    destination=${dest_place}`).then(res => {
            map.addLayer(res);
        });
});

