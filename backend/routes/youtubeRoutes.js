const express = require('express');
const router = express.Router()

const { getTharoxesPlaylist } = require('../controllers/youtubeController')


router.get('/youtube', getTharoxesPlaylist)

module.exports = router