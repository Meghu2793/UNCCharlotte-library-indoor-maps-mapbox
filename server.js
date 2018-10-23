/* 1. Create Node enviornment
    2. Define a API and render html as response
    3. Create APIS for first floor and second floor
    4. Make ajax call in front end to fetch them */
const express = require('express');
const port = process.env.port || 5000;
const path = require('path');
const server = express();

server.get('/getGeoJsonFloor-1', function (req, res) {
    // res.sendfile('index.html', {root: path.join(__dirname, './')});
});

server.get('/getGeoJsonFloor-2', function (req, res) {
    // res.sendfile('index.html', {root: path.join(__dirname, './')});
});

server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
});