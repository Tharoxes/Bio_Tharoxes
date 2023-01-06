import React from 'react'
import Navbar from '../components/layout/Navbar'

function Youtube() {
  return (
    <div>
      <Navbar />
      <main className='container'>
        <h1 className='highlight'>Tharoxes - Videos, News, Spiele</h1>
        <h2>aktuelles Video</h2>
        <section className='row frontvideo'>
          <div className='col-lg-8 iframe-container d-flex justify-content-center'>
            <iframe src="https://www.youtube.com/embed?listType=playlist&list=UUgYIcvH9oKHCqQNAX81f2kw" title='latest Video' allowFullScreen />
          </div>
          <div className='col-8 col-lg' id='playlist'>hello</div>
          <div className='col-4 col-lg-12' id='nextVideos'>hello</div>
        </section>
        <section id="Neuigkeiten">
          <h2>Neuigkeiten</h2>
          <div>

          </div>
        </section>
        <section id="Spiele">
          <h2>Spiele</h2>
        </section>
      </main>
    </div>
  )
}

export default Youtube
