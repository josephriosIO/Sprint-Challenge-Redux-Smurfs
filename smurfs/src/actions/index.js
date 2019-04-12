import axios from "axios";
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";
export const ADD_SMURF = "ADD_SMURF";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => async dispatch => {
  dispatch({
    type: FETCHING_SMURFS
  });
  try {
    const res = await axios.get("http://localhost:3333/smurfs");
    console.log(res);
    dispatch({
      type: GET_SMURFS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_SMURFS_FAILURE,
      payload: "OOPS"
    });
  }
};
