import Navbar from "../components/layout/Navbar";

const parentEndpoint = 'localhost';

function Twitch() {

  return (
    <div>
      <Navbar />
      <main className="container">
        <div className="row justify-content-center align-center">
          <h1 className='highlight'>Twitch - VoD, Spiele, Streamingplan</h1>
          <div className="col-auto">
            <iframe id='twitch_embed' title='screen' src={`https://player.twitch.tv/?channel=tharoxes&parent=${parentEndpoint}`} frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="888"></iframe>
          </div>

          <div className="row justify-content-left align-left">
            <div class="col-xl-1 offset-xl-1"></div>
            <div className="col-lg-4 col-md-5 col-sm-6">
              <h3 className="highlight">Streamer Bio</h3>
              <h4 className="description">Welcome Ladies and Gentlemen,</h4>
              <span className="description">Tharoxes, mein Name und sorge für die Unterhaltung. In Genshin könnt ihr mit euren Chars flexen, Story und Events werden durchgespielt und ein Hustle im Abyss und TCG. Abseits bin ich Fan von der Kingdom Heats-, Final Fantasy- und Persona-Reihe. Privat kenn ich mich in Shootern wie (Rainbow Six Siege, Valorant, Escape of Tarkov, etc.).  </span>
            </div>

          </div>
        </div>
        <section>
          <h2 className="highlight titleGame">Video-on-Demand</h2>
        </section>
        <section>
          <h2 className="highlight titleGame">Spiele</h2>
        </section>
        <section>
          <h2  className="highlight titleGame">Streamingplan</h2>
        </section>
      </main>
    </div>
  )
}

export default Twitch
