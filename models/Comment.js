const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: String,
    author: String,
    anonymous: Boolean,
    spotId: { type: mongoose.Schema.Types.ObjectId, ref: 'Spot' },
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);

