const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    name: String,
    category: String, // Romantic, Serene, Creative
    description: String,
    coordinates: {
        type: { type: String, default: 'Point' },
        coordinates: [Number], // [lng, lat]
    },
    images: [String],
    ratings: {
        vibe: Number,
        uniqueness: Number,
        safety: Number,
        crowd: Number,
    },
    stories: [String],
}, { timestamps: true });

SpotSchema.index({ coordinates: '2dsphere' });

module.exports = mongoose.model('Spot', SpotSchema);