import {
  FETCHING_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  gotSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        fetchingSmurfs: true,
        error: null
      };
    case GET_SMURFS_SUCCESS:
      return {
        fetchingSmurfs: false,
        gotSmurfs: true,
        smurfs: action.payload,
        error: null
      };
    case GET_SMURFS_FAILURE:
      return {
        fetchingSmurfs: false,
        gotSmurfs: false,
        error: action.payload
      };
    case ADD_SMURF:
      return {
        gotSmurfs: true,
        addingSmurf: true,

        smurfs: [action.payload, ...state.smurfs]
      };
    default:
      return state;
  }
};

export default reducer;
