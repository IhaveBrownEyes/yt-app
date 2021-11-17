import axios from 'axios';

const KEY = 'AIzaSyDLCjZ70GLaBMB7X9chSab_HiQY4N8Rxxw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});