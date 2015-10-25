export function addResults(query) {
  type: 'ADD_RESULTS',
  query
}

export function addSelected() {
  type: 'ADD_SELECTED'
}

export function addCurrentTrack(track) {
  type: 'ADD_CURRENT_TRACK',
  track
}

export function addSavedPlaylist(title) {
  type: 'ADD_SAVED_PLAYLIST',
  title
}
