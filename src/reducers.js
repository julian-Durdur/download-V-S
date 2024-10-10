const initialState = {
    videoData: null,
    downloadFormat: 'mp4'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_VIDEO_DATA':
        return { ...state, videoData: action.payload };
        case 'SET_DOWNLOAD_FORMAT':
        return { ...state, downloadFormat: action.payload };
        default:
        return state;
    }
};

export default reducer;