var points = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "Title": "Entrance 1 - floor 0"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.73194861412047,
                    35.306131559041425
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Title": "G 48"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.73195934295654,
                    35.30597614800595
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Title": "Peet's Cafe"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.73270499706268,
                    35.30570034740518
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Title": "Stairs 1 - Floor 0"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.73264867067337,
                    35.30600898134817
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Title": "Stairs 2 - Floor 0"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.73146045207977,
                    35.30576163650881
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Title": "Graduate Silent Study Room"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.73185205459595,
                    35.30562811375911
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Title": "Coffee Vending Machine"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.73245018720627,
                    35.30570910299424
                ]
            }
        }
    ]
}

mapboxgl.accessToken = 'pk.eyJ1IjoibWtyaXNoMTIiLCJhIjoiY2ptcnZ1bzY1MjU5cjNxcGRnNzdqdDByNSJ9.1GYPjMumaaupGBDYNovR3A';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-80.73282837867737, 35.306155636780765],
    zoom: 18
});

map.on('load', function () {
    map.addLayer({
        'id': 'lines',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -80.73282837867737,
                                    35.306155636780765
                                ],
                                [
                                    -80.73188155889511,
                                    35.306160014550784
                                ],
                                [
                                    -80.73187083005905,
                                    35.30593674797769
                                ],
                                [
                                    -80.73194861412047,
                                    35.30593674797769
                                ],
                                [
                                    -80.7319512963295,
                                    35.305862325649734
                                ],
                                [
                                    -80.73133438825607,
                                    35.30585357007723
                                ],
                                [
                                    -80.73133170604706,
                                    35.30551647981565
                                ],
                                [
                                    -80.732042491436,
                                    35.30551866871799
                                ],
                                [
                                    -80.73203712701797,
                                    35.30548802407994
                                ],
                                [
                                    -80.73213368654251,
                                    35.30548364627354
                                ],
                                [
                                    -80.73213368654251,
                                    35.30545300162224
                                ],
                                [
                                    -80.73225438594818,
                                    35.30545519052628
                                ],
                                [
                                    -80.73225438594818,
                                    35.30548145737026
                                ],
                                [
                                    -80.73272109031677,
                                    35.30548802407994
                                ],
                                [
                                    -80.73272377252579,
                                    35.30558214685988
                                ],
                                [
                                    -80.73277741670609,
                                    35.30558652466094
                                ],
                                [
                                    -80.73278278112411,
                                    35.30565219164832
                                ],
                                [
                                    -80.7328525185585,
                                    35.30565438054696
                                ],
                                [
                                    -80.73284983634949,
                                    35.30584481450379
                                ],
                                [
                                    -80.73286324739456,
                                    35.30588859236153
                                ],
                                [
                                    -80.73284447193146,
                                    35.305919236847856
                                ],
                                [
                                    -80.73288202285767,
                                    35.30600460356999
                                ],
                                [
                                    -80.73286861181259,
                                    35.306118425726034
                                ],
                                [
                                    -80.73282837867737,
                                    35.306155636780765
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "Name": "Peetes Cafe",
                            "level": 0
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -80.73284983634949,
                                    35.30581854777777
                                ],
                                [
                                    -80.73259502649307,
                                    35.305814169989276
                                ],
                                [
                                    -80.73258697986603,
                                    35.30548583517677
                                ],
                                [
                                    -80.73272109031677,
                                    35.30548802407994
                                ],
                                [
                                    -80.73272913694382,
                                    35.30558433576043
                                ],
                                [
                                    -80.73277473449706,
                                    35.30559090246174
                                ],
                                [
                                    -80.73278278112411,
                                    35.30565438054696
                                ],
                                [
                                    -80.73285788297653,
                                    35.3056609472426
                                ],
                                [
                                    -80.73284983634949,
                                    35.30582949224797
                                ],
                                [
                                    -80.73284983634949,
                                    35.30581854777777
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#50e4df",
                            "fill-opacity": 0.5,
                            "Title": "Entrance 1 - Floor 0",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73199152946472,
                                        35.30610967018124
                                    ],
                                    [
                                        -80.73188424110413,
                                        35.30610967018124
                                    ],
                                    [
                                        -80.73188424110413,
                                        35.306155636780765
                                    ],
                                    [
                                        -80.73199152946472,
                                        35.306155636780765
                                    ],
                                    [
                                        -80.73199152946472,
                                        35.30610967018124
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#50e4df",
                            "fill-opacity": 0.5,
                            "Title": "G48",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73204517364502,
                                        35.30593674797769
                                    ],
                                    [
                                        -80.73187083005905,
                                        35.30593674797769
                                    ],
                                    [
                                        -80.73187083005905,
                                        35.30601117023718
                                    ],
                                    [
                                        -80.73204517364502,
                                        35.30601117023718
                                    ],
                                    [
                                        -80.73204517364502,
                                        35.30593674797769
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#50e4df",
                            "fill-opacity": 0.5,
                            "Title": "Women's RestRoom",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.7322034239769,
                                        35.306026492458564
                                    ],
                                    [
                                        -80.73212295770645,
                                        35.306026492458564
                                    ],
                                    [
                                        -80.73212295770645,
                                        35.30605932578038
                                    ],
                                    [
                                        -80.7322034239769,
                                        35.30605932578038
                                    ],
                                    [
                                        -80.7322034239769,
                                        35.306026492458564
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#50e4df",
                            "fill-opacity": 0.5,
                            "Title ": "Family RestRoom",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.7321846485138,
                                        35.30596082577502
                                    ],
                                    [
                                        -80.73214709758759,
                                        35.30596082577502
                                    ],
                                    [
                                        -80.73214709758759,
                                        35.306019925792626
                                    ],
                                    [
                                        -80.7321846485138,
                                        35.306019925792626
                                    ],
                                    [
                                        -80.7321846485138,
                                        35.30596082577502
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#50e4df",
                            "fill-opacity": 0.5,
                            "Title": "Mens RestRoom",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73220878839493,
                                        35.30593018130445
                                    ],
                                    [
                                        -80.73212027549744,
                                        35.30593018130445
                                    ],
                                    [
                                        -80.73212027549744,
                                        35.30595644799421
                                    ],
                                    [
                                        -80.73220878839493,
                                        35.30595644799421
                                    ],
                                    [
                                        -80.73220878839493,
                                        35.30593018130445
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#50e4df",
                            "fill-opacity": 0.5,
                            "Title": "Writing Resource Center, G 32",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73273986577988,
                                        35.30598490356517
                                    ],
                                    [
                                        -80.73268353939056,
                                        35.30598490356517
                                    ],
                                    [
                                        -80.73268353939056,
                                        35.30603743690065
                                    ],
                                    [
                                        -80.73273986577988,
                                        35.30603743690065
                                    ],
                                    [
                                        -80.73273986577988,
                                        35.30598490356517
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#50e4df",
                            "fill-opacity": 0.5,
                            "Title": "G 31",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73273986577988,
                                        35.3059214257393
                                    ],
                                    [
                                        -80.7326889038086,
                                        35.3059214257393
                                    ],
                                    [
                                        -80.7326889038086,
                                        35.30597833689585
                                    ],
                                    [
                                        -80.73273986577988,
                                        35.30597833689585
                                    ],
                                    [
                                        -80.73273986577988,
                                        35.3059214257393
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#555555",
                            "fill-opacity": 0.5,
                            "Title": "G 33",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73274791240692,
                                        35.30604619245326
                                    ],
                                    [
                                        -80.73267549276352,
                                        35.30604619245326
                                    ],
                                    [
                                        -80.73267549276352,
                                        35.3060943479756
                                    ],
                                    [
                                        -80.73274791240692,
                                        35.3060943479756
                                    ],
                                    [
                                        -80.73274791240692,
                                        35.30604619245326
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#555555",
                            "fill-opacity": 0.5,
                            "Title": "University Speaking Center G 35",
                            "fill-color": "#F7455D",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73251724243164,
                                        35.30602430357
                                    ],
                                    [
                                        -80.73238849639893,
                                        35.30602430357
                                    ],
                                    [
                                        -80.73238849639893,
                                        35.306087781315156
                                    ],
                                    [
                                        -80.73251724243164,
                                        35.306087781315156
                                    ],
                                    [
                                        -80.73251724243164,
                                        35.30602430357
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#555555",
                            "fill-opacity": 0.5,
                            "Title": "G34",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73251724243164,
                                        35.305947692431914
                                    ],
                                    [
                                        -80.73238581418991,
                                        35.305947692431914
                                    ],
                                    [
                                        -80.73238581418991,
                                        35.306013359126126
                                    ],
                                    [
                                        -80.73251724243164,
                                        35.306013359126126
                                    ],
                                    [
                                        -80.73251724243164,
                                        35.305947692431914
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#555555",
                            "fill-opacity": 0.5,
                            "Title": "G 36",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73237776756287,
                                        35.306017736903854
                                    ],
                                    [
                                        -80.73233485221863,
                                        35.306017736903854
                                    ],
                                    [
                                        -80.73233485221863,
                                        35.30608340354122
                                    ],
                                    [
                                        -80.73237776756287,
                                        35.30608340354122
                                    ],
                                    [
                                        -80.73237776756287,
                                        35.306017736903854
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#555555",
                            "fill-opacity": 0.5,
                            "Title": "G 37",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73237508535385,
                                        35.3059433146504
                                    ],
                                    [
                                        -80.73233485221863,
                                        35.3059433146504
                                    ],
                                    [
                                        -80.73233485221863,
                                        35.306013359126126
                                    ],
                                    [
                                        -80.73237508535385,
                                        35.306013359126126
                                    ],
                                    [
                                        -80.73237508535385,
                                        35.3059433146504
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "marker-color": "#7e7e7e",
                            "marker-size": "medium",
                            "marker-symbol": "library",
                            "Title": "Entrance 1 - floor 0",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -80.73194861412047,
                                35.306131559041425
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "marker-color": "#7e7e7e",
                            "marker-size": "medium",
                            "marker-symbol": "circle",
                            "Title": "G 48",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -80.73195934295654,
                                35.30597614800595
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "marker-color": "#7e7e7e",
                            "marker-size": "medium",
                            "marker-symbol": "cafe",
                            "Title": "Peet's Cafe",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -80.73270499706268,
                                35.30570034740518
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73266744613647,
                                        35.30596082577502
                                    ],
                                    [
                                        -80.73262989521027,
                                        35.30596082577502
                                    ],
                                    [
                                        -80.73262989521027,
                                        35.306074647992666
                                    ],
                                    [
                                        -80.73266744613647,
                                        35.306074647992666
                                    ],
                                    [
                                        -80.73266744613647,
                                        35.30596082577502
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "marker-color": "#7e7e7e",
                            "marker-size": "medium",
                            "marker-symbol": "circle-stroked",
                            "Title": "Stairs 1 - Floor 0",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -80.73264867067337,
                                35.30600898134817
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#555555",
                            "fill-opacity": 0.5,
                            "Title": "Facility Management Service",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73203444480896,
                                        35.305857947863586
                                    ],
                                    [
                                        -80.73195397853851,
                                        35.305857947863586
                                    ],
                                    [
                                        -80.73195397853851,
                                        35.305903914606134
                                    ],
                                    [
                                        -80.73203444480896,
                                        35.305903914606134
                                    ],
                                    [
                                        -80.73203444480896,
                                        35.305857947863586
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke": "#555555",
                            "stroke-width": 2,
                            "stroke-opacity": 1,
                            "fill": "#555555",
                            "fill-opacity": 0.5,
                            "Title": "Stairs 2 - Floor 0",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -80.73152750730515,
                                        35.305724425272864
                                    ],
                                    [
                                        -80.73134243488312,
                                        35.305724425272864
                                    ],
                                    [
                                        -80.73134243488312,
                                        35.305811981094934
                                    ],
                                    [
                                        -80.73152750730515,
                                        35.305811981094934
                                    ],
                                    [
                                        -80.73152750730515,
                                        35.305724425272864
                                    ]
                                ]
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "marker-color": "#7e7e7e",
                            "marker-size": "medium",
                            "marker-symbol": "",
                            "Title": "Stairs 2 - Floor 0",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -80.73146045207977,
                                35.30576163650881
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "marker-color": "#7e7e7e",
                            "marker-size": "medium",
                            "marker-symbol": "",
                            "Title": "Graduate Silent Study Room",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -80.73185205459595,
                                35.30562811375911
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "marker-color": "#7e7e7e",
                            "marker-size": "medium",
                            "marker-symbol": "",
                            "Title": "Coffee Vending Machine",
                            "level": 0
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -80.73245018720627,
                                35.30570910299424
                            ]
                        }
                    }
                ]
            }
        },
    });
});
points.features.forEach(function (marker) {
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
    // el.id = 'pointer_marker'

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.Title + '</h3>'))
        .addTo(map);
});
// });

let func = function (e) {
    map.removeLayer('lines');
    $('.marker').remove();
    // make an ajax call and replace the exisiting json with new json
}

let floor_no = document.getElementsByClassName('floors_navigate');
for (i = 0; i < floor_no.length; i++) {
    floor_no[i].addEventListener('click', func, false);
}

