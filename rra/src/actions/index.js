// Step 1 Pt.6
import axios from 'axios';

// //Step 1
// export const GET_DATA = "GET_DATA"; // <- type inside return 
// export const getData = () => {
//     return{ type: GET_DATA }
// }
// // ---

// Once Thunk is setup In App.js you can update your action to have a dispatch
// Above is the original Action
// It is now commented out to see as an example. Below is the same action from above updated

// Step 1 Pt.5 UPDATE n ERROR
export const UPDATE = "UPDATE"; 
export const SET_ERROR = 'SET_ERROR'; 

//Step 1
export const GET_DATA = "GET_DATA";         // <- type inside return 
export const getData = () => dispatch => { // Step 1 Pt.2 Added dispatch => 
    dispatch({ type: GET_DATA });         // Step 1 Pt.3 Replaced return w dispatch
    axios                                // Step 1 Pt.4 Make Axios - Const two new typs: UPDATE and ERROR (above)
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(res => {console.log(res); dispatch({type: UPDATE, payload: res.data})})
        .catch(err => {
            console.error(`error fetching. err:`, err);
            dispatch({type: SET_ERROR, payload: 'error fetching'})
        })
}
// ---
// Step 2!!!!!! - Add UPDATE and ERROR to REDUCER
