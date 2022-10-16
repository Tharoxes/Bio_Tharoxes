import {
  FaGithubSquare,
  FaInstagram,
  FaTiktok,
  FaYoutubeSquare,
  FaTwitch,
  FaTwitter,
  FaRedditSquare,
} from "react-icons/fa";

function SocialMediaBar() {
  return (
    <div className="social-bar">
      <a
        href="https://github.com/Tharoxes?tab=repositories"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://www.twitch.tv/tharoxes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaTwitch />
      </a>
      <a
        href="https://www.youtube.com/channel/UCgYIcvH9oKHCqQNAX81f2kw"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaYoutubeSquare />
      </a>
      <a
        href="https://www.tiktok.com/@tharoxes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaTiktok />
      </a>
      <a
        href="https://twitter.com/tharoXes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/tharoxes_d_heart/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.reddit.com/r/tharoxes/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaRedditSquare/>
      </a>
    </div>
  );
}

export default SocialMediaBar;
