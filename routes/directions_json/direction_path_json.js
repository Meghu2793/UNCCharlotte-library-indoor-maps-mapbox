const express = require("express");
const router = express.Router();
const path_1 = require('../../directions/floor_0_path1.json');

function findWalkTime(d) {
    // let dist_mile = d * 0.000621371;
    // let min = (d * 20) / 2.1;
    // let sec = min * 60;
    return (((d * 20) / 2.1)) * 60;
}

function calculateDistance(param) {
    let lat1 = param.lat1;
    let lon1 = param.lon1;
    let lat2 = param.lat2;
    let lon2 = param.lon2;

    let R = 6371e3;
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    // d = d / 1000; // Distance in km
    console.log("Distance in meters", d);

    let walktime = findWalkTime(d);
    console.log("walktime ", walktime);
    return { 'distance': d, 'time': (walktime/60)};
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

router.get('/', (req, res)=> {
    console.log("List all the routes");
});

router.get('/getAllLayer/:floor_no', (req, res) => {
let floor_no = req.params.floor_no
// console.log("COming");
res.send(path_1);

});
// router.get('/distanceLatLon', (req, res) => {
//     console.log("check this IMP", req.query);
//     res.send(calculateDistance(req.query));
// });

router.get('/getcoordinates', (req, res) => {
    let sum = 0, time = 0;
    let inputcoordinates = JSON.parse(req.query.coordinates);
    console.log("Check ", inputcoordinates);
    for (let i = 0; i < inputcoordinates.length - 1; i++) {
        console.log("Element ", inputcoordinates[i]);
        let reqSend = {
            'lon1': inputcoordinates[i][0], 'lat1': inputcoordinates[i][1],
            'lon2': inputcoordinates[i + 1][0], 'lat2': inputcoordinates[i + 1][1]
        };
        let result_journey = calculateDistance(reqSend)
        console.log(result_journey);
        sum = sum + result_journey.distance;
        time = time + result_journey.time;
        // res.redirect('/distanceLatLon?coordinates='+reqSend, function(err, data, res){
        // });
    }
    console.log('Total time ', time);
    console.log('Total distance ', sum);
    res.send({ 'Distance in meters': sum, 'Time in minutes': time })
});

router.get('/getRouteId', (req, res)=> {
    console.log("Source ",req.params.source);
    console.log("Destination ", req.params.destination);
    // find the route id from the database
});

router.get('/route/:id',(req, res)=> {
    console.log("Route Id: ",req.params.route_id);
    res.send(path_1);
});

module.exports = router;