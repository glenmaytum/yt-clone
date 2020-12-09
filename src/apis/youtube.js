import axios from "axios"

const KEY = "AIzaSyAd02vx2vChHds2md840utXOWAl35KWbMw"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});