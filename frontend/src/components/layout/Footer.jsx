import {
  FaGithubSquare,
  FaInstagram,
  FaTiktok,
  FaYoutubeSquare,
  FaTwitch,
  FaTwitter,
  FaRedditSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div>
        <h2>tharoxes.dev</h2>
      </div>
      <div>
        <a href="#">Impressum</a>
        <a href="#">Datenschutzerklärung</a>
        <a href="#">Changelog</a>
        <a href="#">Fehler Melden</a>
        <a href="#">Cookies Löschen</a>
      </div>
      <div>
        <a href="Twitch"><FaTwitch/> Tharoxes</a>
        <a href="Youtube"><FaYoutubeSquare />Tharoxes</a>
        <a href="Twitter"><FaTwitter />Tharoxes</a>
        <a href="Instagram"><FaInstagram />Tharoxes</a>
        <a href="Github"><FaGithubSquare />Tharoxes</a>
        <a href="TikTok"><FaTiktok />Tharoxes</a>
        <a href="Reddit"><FaRedditSquare />Tharoxes</a>
        {/*<a href="Mighty Networks">Tharoxes</a>*/}
        {/*<a href="Substack">Tharoxes</a>*/}
      </div>
    </div>
  )
}

export default Footer
