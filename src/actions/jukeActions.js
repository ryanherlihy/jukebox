export function addResults(results) {
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

export function addLocation(location) {
  console.log('hello');
  return {
    type: 'ADD_LOCATION',
    location
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

export function getLocation() {
  return function(dispatch) {
    return navigator.geolocation.getCurrentPosition(function(position) {
      dispatch(addLocation(position));
    })
  }

}
