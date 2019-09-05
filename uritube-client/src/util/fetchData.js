import { YOUTUBE_API_KEY } from '../config/youtubeAPI';

export const fetchData = ({ query, max = 10, key = YOUTUBE_API_KEY }, callback) => {
  // TODO
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&key=${key}&type=video`,
    { method: 'GET' }
  )
    .then(res => res.json())
    .then(res => callback(res));
};
