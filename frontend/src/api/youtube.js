import axios from "axios";

const KEY = process.env.YOUTUBE_TOKEN;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    channelId: "UCgYIcvH9oKHCqQNAX81f2kw",
    key: KEY
  }

})