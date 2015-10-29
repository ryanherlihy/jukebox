import Firebase from 'firebase';

let fireBaseRef = new Firebase('https://juke-hackumass.firebaseio.com/');
let savedPlaylistsRef = fireBaseRef.child('saved');

export function initSaved(saved) {
  return {
    type: 'INIT_SAVED',
    saved
  }
}

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

export function addCurrentPlaylist(playlist) {
  return {
    type: 'ADD_CURRENT_PLAYLIST',
    playlist
  }
}

export function clearSelected() {
  return {
    type: 'CLEAR_SELECTED'
  }
}

export function addLocation(location) {
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

export function fetchLocation() {
  return function(dispatch) {
    return navigator.geolocation.getCurrentPosition(function(position) {
      dispatch(addLocation(position));
    });
  }
}

export function fetchPlaylists() {
  return function(dispatch) {
    return fireBaseRef.once('value', function(snapshot) {
      dispatch(initSaved(snapshot.val().saved));
    });
  }
}

export function addSavedPlaylist(title, playlist, loc) {
  return function(dispatch) {
    savedPlaylistsRef.push({
      title: title,
      coords: {
        lat: loc.coords.latitude,
        lng: loc.coords.longitude
      },
      playlist: playlist
    });
    return dispatch(clearSelected());
  }
}
