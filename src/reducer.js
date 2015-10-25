import Firebase from 'firebase';

let fireBaseRef = new Firebase('https://juke-hackumass.firebaseio.com/');
let savedPlaylistsRef = fireBaseRef.child('saved');



const INITIAL_STATE = {
  currentLocation: {},
  results: [],
  selected: {
    playlist: []
  },
  saved: [],
  currentTrack: null
};

export default function(state = INITIAL_STATE, action) {

  fireBaseRef.on('value', function(snapshot) {
    state.saved = snapshot.val().saved
  }, function(errorObject) {
    console.log('Failure to retrieve data');
  });

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
      savedPlaylistsRef.push(
        {
          title: action.title,
          playlist: state.selected
        }
      );
      return Object.assign({
        selected: {
          location: state.location,
          playlist: []
        }
      });
    case 'ADD_LOCATION':
      console.log('here');
      return Object.assign({
        currentLocation: action.location
      });
  }
  return state;
}
