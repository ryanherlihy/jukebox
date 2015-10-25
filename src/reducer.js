const INITIAL_STATE = {
  results: [],
  selected: {
    title: '',
    playlist: []
  },
  saved: [],
  currentTrack: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_RESULTS':
      return Object.assign({}, state, {
        fetchTracks(action.query)
      })
    case 'ADD_SELECTED':
      return Object.assign({}, state, {
        selected: {
          playlist: state.selected.playlist.concat(
            state.currentTrack;
          )
        },
        currentTrack: null
      })
    case 'ADD_CURRENT_TRACK':
      return Object.assign({}, state, {
        currentTrack: action.track
      })
    case 'ADD_SAVED_PLAYLIST':
      return Object.assign({
        saved: {
          title: action.title,
          playlist: state.saved.concat(state.selected)
        },
        selected: {
          playlist: []
        }
      })
  }
}

function fetchTracks(query) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: query,
      type: 'track'
    },
    success: function (response) {
      return response.tracks.items;
    }
  });
}
