export function addResults(results) {
  console.log('addresults', results);
  return {
    type: 'ADD_RESULTS',
    results
  }
}

export function addSelected() {
  return {
    type: 'ADD_SELECTED'
  }
}

export function addCurrentTrack(track) {
  return {
    type: 'ADD_CURRENT_TRACK',
    track
  }
}

export function addSavedPlaylist(title) {
  return {
    type: 'ADD_SAVED_PLAYLIST',
    title
  }
}

export function fetchTracks(query) {
  return function(dispatch) {
    return $.ajax({
      url: 'https://api.spotify.com/v1/search',
      data: {
        q: query,
        type: 'track'
      },
      success: function (response) {
        dispatch(addResults(response.tracks.items));
      }
    });
  }
}
