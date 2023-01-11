const {google}  = require('googleapis');
const youtube = google.youtube('v3');


const getTharoxesPlaylist = (req, res) => {
    res.send('youtube/playlist');
    // google/youtube request
    youtube.playlists.list({
        key: process.env.YOUTUBE_TOKEN,
        part: 'snippet',
        channelId: 'UCgYIcvH9oKHCqQNAX81f2kw' 
    }).then((response) => {
        const data = response.data.items
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })
}



module.exports = {
    getTharoxesPlaylist,
}