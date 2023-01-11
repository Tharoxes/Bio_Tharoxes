import React from 'react'
import Navbar from '../components/layout/Navbar'
import Playlists from '../components/youtube/playlists'
import LatestVideos from '../components/youtube/latestVideos'

function Youtube() {
  return (
    <div>
      <Navbar />
      <main className='container'>
        <h1 className='highlight'>Tharoxes - Videos, News, Bio</h1>
        <h2>aktuelles Video</h2>
        <section className='row frontvideo'>
          <div className='col-lg-8 iframe-container d-flex justify-content-center'>
            <iframe src="https://www.youtube.com/embed?listType=playlist&list=UUgYIcvH9oKHCqQNAX81f2kw" title='latest Video' allowFullScreen />
          </div>
          <div className='col-8 col-lg' id='playlist'> 
            <h2 className='highlight' style={{marginLeft: "32px"}}>Playlist</h2>
            <Playlists />
          </div>
          <div className='col-4 col-lg-12' id='nextVideos'><LatestVideos /></div>
        </section>
        <section id="Neuigkeiten">
          <h2 className='highlight' style={{marginTop: "30px"}}>Neuigkeiten</h2>
          <div>

          </div>
        </section>
        <section id="Biographie">
          <h2 className='highlight' style={{marginTop: "30px"}}>Player Biografie</h2>
          <p className='description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </section>
      </main>
    </div>
  )
}

export default Youtube
