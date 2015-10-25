

const INITIAL_STATE = {
  currentLocation: {},
  results: [],
  selected: {
    playlist: []
  },
  saved: [],
  currentTrack: null,
  currentPlaylist: null
};

export default function(state = INITIAL_STATE, action) {


  switch (action.type) {
    case 'INIT_SAVED':
      return Object.assign({}, state, {
        saved: action.saved
      });
    case 'ADD_RESULTS':
      return Object.assign({}, state, {
        results: action.results
      });
    case 'ADD_SELECTED':
      return Object.assign({}, state, {
        selected: {
          playlist: state.selected.playlist.concat(
            state.currentTrack
          )
        },
        currentTrack: null
      });
    case 'ADD_CURRENT_TRACK':
      return Object.assign({}, state, {
        currentTrack: action.track
      });
    case 'ADD_CURRENT_PLAYLIST':
      return Object.assign({}, state, {
        currentPlaylist: action.playlist
      });
    case 'CLEAR_SELECTED':
      return Object.assign({
        selected: {
          playlist: []
        }
      });
    case 'ADD_LOCATION':
      return Object.assign({
        currentLocation: action.location
      });
  }
  return state;
}
