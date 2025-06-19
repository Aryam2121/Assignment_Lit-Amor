const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/', commentController.addComment);
router.get('/:spotId', commentController.getCommentsBySpot);

module.exports = router;
