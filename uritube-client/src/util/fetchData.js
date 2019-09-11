import { YOUTUBE_API_KEY } from '../config/youtubeAPI';

export const fetchData = (query, callback) => {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${query}&key=${YOUTUBE_API_KEY}&type=video`,
    { method: 'GET' }
  )
    .then(res => res.json())
    .then(res => callback(res));
};
