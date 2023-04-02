import { FaCode } from 'react-icons/fa'
import {
  FaGithubSquare,
  FaInstagram,
  FaTiktok,
  FaYoutubeSquare,
  FaTwitch,
  FaTwitter,
  FaRedditSquare,
} from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-md navbar-dark">
        <div className="container">
          <a href="./" className="navbar-brand">
            THC_ <FaCode />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            {/* 
            <ul className="nav navbar-nav">
              <li className="dropdown mx-2">
                <a
                  href="/"
                  // className="dropdown-toggle" removed
                  // data-bs-toggle="dropdown"
                >
                  Home Dev
                </a>
              </li >
              <li className="dropdown mx-2">
                <a
                  href="/twitch"
                >
                  Twitch
                </a>
              </li>
              <li className="dropdown mx-2">
                <a
                  href="/youtube"
                >
                  Youtube
                </a>
              </li>
              <li className="dropdown mx-2">
                <a
                  href="/socialmedia"
                >
                  Social Media
                </a>
              </li>
            </ul>
            */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
