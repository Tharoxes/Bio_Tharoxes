import Navbar from "../components/layout/Navbar"
function Twitch() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <h1>Twitch - VoD, Spiele, Streamingplan</h1>
        <section>
          <h2>Video-on-Demand</h2>
        </section>
        <section>
          <h2>Spiele</h2>
        </section>
        <section>
          <h2>Streamingplan</h2>
        </section>
      </main>
    </div>
  )
}

export default Twitch
