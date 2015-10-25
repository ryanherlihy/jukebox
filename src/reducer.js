const INITIAL_STATE = {
  results: [],
  selected: {
    title: '',
    playlist: []
  },
  saved: [],
  currentTrack: null
};

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {
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
    case 'ADD_SAVED_PLAYLIST':
      return Object.assign({
        saved: state.saved.concat(state.selected),
        selected: {
          playlist: []
        }
      });
  }
  return state;
}
