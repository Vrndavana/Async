//Step 2 - Pt.1
import {GET_DATA} from '../actions';

// Ports Ports Ports Ports 


// The Start of code in Rickducer
//Step 1
const initialState = { // InitialState 
    missions: [],  // The browser is showing no array
    isFetchingData: false, // fetching is false so only button displays
    error: ""
};
  

//Step 2 - Pt.2
export const Rickducer = (state=initialState, action) => {

    switch(action.type) {

        case GET_DATA:
        return{ ...state, isFetchingData: true};
        default: return state;   
    };
}