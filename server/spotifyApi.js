import SpotifyWebApi from "spotify-web-api-node";
// Module(s)
import config from "./config/authConfig.js";

const spotifyApi = new SpotifyWebApi(config.spotify);

class SpotifyAuth {
  constructor() {
    this.accessToken = null;
    this.expiration = 0;
  }

  testAuth = () => {
    
  }
}
