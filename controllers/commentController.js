const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
    const { text, author, anonymous, spotId } = req.body;
    try {
        const newComment = new Comment({ text, author, anonymous, spotId });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCommentsBySpot = async (req, res) => {
    try {
        const comments = await Comment.find({ spotId: req.params.spotId });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
