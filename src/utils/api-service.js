import axios from 'axios';

class SpotifyService {
  constructor(token) {
    let service = axios.create({
      baseURL: 'https://api.spotify.com/v1/',
      timeout: 1000,
      headers: {'Authorization': 'Bearer '+ token}
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }
  
  getCurrentlyPlaying( callback) {
    return this.service.get('/me/player/currently-playing').then(
      (response) => callback(response.status, response.data)
    );
  }
}

export default SpotifyService;