const express = require('express');
const router = express.Router()
const {google}  = require('googleapis');
const youtube = google.youtube('v3')

const { getTharoxesPlaylist } = require('../controllers/youtubeController')

// google/youtube request
youtube.playlists.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    channelId: 'UCgYIcvH9oKHCqQNAX81f2kw' 
  }).then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err)
  })


router.get('/youtube', getTharoxesPlaylist)

module.exports = router