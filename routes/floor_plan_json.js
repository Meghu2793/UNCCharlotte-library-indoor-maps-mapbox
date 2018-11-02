const express = require("express");
const router = express.Router();

const floors0_json = require('../geoJson_FLoors/floor_0.json');
const floors1_json = require('../geoJson_FLoors/floor_1.json');
const floors2_json = require('../geoJson_FLoors/floor_2.json');
const floors3_json = require('../geoJson_FLoors/floor_3.json');
const floors5_json = require('../geoJson_FLoors/floor_5.json');

router.get("/0", function (req, res) {
    res.json(floors0_json);
});

router.get('/1', function (req, res) {
    res.json(floors1_json);
});

router.get('/2', function (req, res) {
    res.json(floors2_json);
});

router.get('/3', function (req, res) {
    res.json(floors3_json);
});

router.get('/5', function (req, res) {
    res.json(floors5_json);
});

module.exports = router;