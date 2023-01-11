import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const channelId = process.env.REACT_APP_YOUTUBE_CHANNEL;
const youtubeKey = process.env.REACT_APP_YOUTUBE_TOKEN;
const maxResults = 50;

function Playlists() {

  const [playlists, setPlaylist] = useState([])
  
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {

    const results = await axios(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=${maxResults}&key=${youtubeKey}`
    );
    const p = results.data.items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      publishedAt: item.snippet.publishedAt,
    }))
    setPlaylist(p)
    //console.log(p);

  }

  return (
    <ul>
      {playlists.map((playlist) => (
        <li className='highlight' key={playlist.id}><a href='https://www.youtube.com/@Tharoxes/playlists' target='_blank' rel='noreferrer'>{playlist.title}</a>
        </li>))
      }
    </ul>
  )
}

export default Playlists
