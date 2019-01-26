import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Jeremy', duration: '4:05' },
    { title: 'Once', duration: '3:30' },
    { title: 'Daughter', duration: '4:24' },
    { title: 'Even Flow', duration: '5:22' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}

// Exporting like this means any other file in the project has access
// to our combined set of reducers.
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});