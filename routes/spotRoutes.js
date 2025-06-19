const express = require('express');
const router = express.Router();
const spotController = require('../controllers/spotController');

router.get('/', spotController.getNearbySpots);
router.get('/:id', spotController.getSpotById);
router.post('/', spotController.createSpot);

module.exports = router;