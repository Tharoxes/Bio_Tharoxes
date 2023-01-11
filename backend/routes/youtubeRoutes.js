const express = require('express');
const router = express.Router()

const { getTharoxesPlaylist } = require('../controllers/youtubeController')


router.get('/playlists', getTharoxesPlaylist)

module.exports = router;