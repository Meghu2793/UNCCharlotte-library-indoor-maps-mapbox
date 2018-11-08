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
const direction_path = require('./routes/directions_json/direction_path_json');

// Body parser middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(cors());

server.use('/getGeoJsonFloor', floor_plan_json);
server.use('/getGeoJsonPath', direction_path);

server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
});