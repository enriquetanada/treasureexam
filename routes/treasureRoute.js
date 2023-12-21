const express = require('express');
const treasureController = require('../controller/treasureController');


const router = express.Router();

router
    .route('/')
    .get(treasureController.getAllTreasures)
    .post(treasureController.findTreasure);

router
    .route('/create')
    .post(treasureController.createTreasure)


module.exports = router;