/* 1. Create Node enviornment
    2. Define a API and render html as response
    3. Create APIS for first floor and second floor
    4. Make ajax call in front end to fetch them */
const express = require('express');
const port = process.env.port || 3000;
const path = require('path');
const server = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const floor_plan_json = require('./routes/floor_plan_json');

// Body parser middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(cors());

server.use('/getGeoJsonFloor',floor_plan_json);

function findWalkTime (d){

}

server.get('/distanceLatLon', (req, res) => {
    let dist1 = req.body.dist1;
    let dist2 = req.body.dist2;
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
    let walktime = findWalkTime(d);
    console.log("Distance ", d);

    res.json(d);
});

server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
});