// controllers/spotController.js
const Spot = require('../models/Spot');

exports.getNearbySpots = async (req, res) => {
    const { lat, lng } = req.query;
    try {
        const spots = await Spot.find({
            coordinates: {
                $near: {
                    $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
                    $maxDistance: 5000,
                },
            },
        });
        res.json(spots);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSpotById = async (req, res) => {
    try {
        const spot = await Spot.findById(req.params.id);
        res.json(spot);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createSpot = async (req, res) => {
    const { name, category, description, coordinates, images, ratings, stories } = req.body;
    try {
        const newSpot = new Spot({
            name,
            category,
            description,
            coordinates: {
                type: 'Point',
                coordinates: coordinates
            },
            images,
            ratings,
            stories
        });
        await newSpot.save();
        res.status(201).json(newSpot);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};