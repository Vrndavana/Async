//Step 2 - Pt.1
import {GET_DATA, UPDATE, SET_ERROR} from '../actions'; // UPDATE, ERROR added Step 2 pt.2

// Ports Ports Ports Ports (Focus on Step 1 ports come later)


// The Start of code in Rickducer
//Step 1
const initialState = { // InitialState 
    characters: [],  // The browser is showing no array
    isFetchingData: false, // fetching is false so only button displays
    error: ""
};
  

//Step 2 - Pt.2
export const Rickducer = (state=initialState, action) => {

    switch(action.type) {

        case GET_DATA:
        return{ ...state, isFetchingData: true};

        case UPDATE:
        return{ ...state, characters: action.payload, isFetchingData: false};

        case SET_ERROR:
        return{ ...state, isFetchingData: false, error: action.payload};

        default: return state;   
    };
}