import React from 'react'
import Navbar from '../components/layout/Navbar'

function Youtube() {
  return (
    <div>
      <Navbar />
      <main className='container'>
        <h1>Tharoxes - Videos, News, Spiele</h1>
        <section id="Videos">
          <h2>aktuelle Videos</h2>
          <div>
            
          </div>
        </section>
        <section id="Neuigkeiten">
          <h2>Neuigkeiten</h2>
        </section>
        <section id="Spiele">
          <h2>Spiele</h2>
        </section>
      </main>
    </div>
  )
}

export default Youtube
