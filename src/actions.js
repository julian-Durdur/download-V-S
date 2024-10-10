import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Remplacer par votre clé API

export const fetchVideoData = (url) => async (dispatch) => {
try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${url.split('v=')[1]}&key=${API_KEY}&part=snippet`);
    dispatch({ type: 'FETCH_VIDEO_DATA', payload: response.data.items[0] });
} catch (error) {
    console.error('Erreur lors de la récupération des données vidéo:', error);
}
};

export const setDownloadFormat = (format) => ({
type: 'SET_DOWNLOAD_FORMAT',
payload: format
});