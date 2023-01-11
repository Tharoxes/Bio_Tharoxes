import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

const channelId = process.env.REACT_APP_YOUTUBE_CHANNEL;
const youtubeKey = process.env.REACT_APP_YOUTUBE_TOKEN;
const maxResults = 3;

function LatestVideos() {

    const [latestVideos, setLatestVideos] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const results = await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&key=${youtubeKey}`);
        console.log(results)
        const videos = results.items
        setLatestVideos(videos)
    }
    

  return (
    <div>
      {console.log('hi')}
    </div>
  )
}

export default LatestVideos
