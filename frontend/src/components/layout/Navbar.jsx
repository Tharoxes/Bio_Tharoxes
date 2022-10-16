import { FaCode } from 'react-icons/fa'

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
            aria-controls="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="nav navbar-nav">
              <li className="dropdown mx-2">
                <a
                  href="#"
                  // className="dropdown-toggle" removed
                  // data-bs-toggle="dropdown"
                >
                  Home Dev
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#About_Me">About_Me</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#Experience">Experience</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#Work">Work</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#Contact">Contact</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown mx-2">
                <a
                  href="#"
                >
                  Twitch
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">link 1</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">link 2</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown mx-2">
                <a
                  href="#"
                >
                  Youtube
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">link 1</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">link 2</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown mx-2">
                <a
                  href="#"
                >
                  Social Media
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">link 1</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">link 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
