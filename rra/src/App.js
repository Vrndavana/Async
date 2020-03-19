// Pre-Imps
import React from 'react';
import './App.css';
// Step 3
import RMForm from './components/RMForm'; 
// Step 4
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'; // Step 6 Pt.2 Add applyMiddleware into import
import {Rickducer as reducer} from './reducers/Rickducer';
//Step 6 
import thunk from 'redux-thunk';
//Step 5
const store = createStore(reducer, applyMiddleware(thunk)); // Step 6 Pt.3 Add Middleware w Thunk 

// Setting up A Form w Action/Reducer in a clean App --- Setting up Provider CreateStore Reducer Wrap 
// 1 - Clear out App
// 2 - Add Shwifty Header
// 3 - Import <RMForm/> 
// 4 - Import Provider, CreateStore, Reducer
// 5 - Const Store & Wrap App with Provider, Store, and Reducer
// 6 - Thunk & Middleware
// 7 - Go back to RMForm and utilize connect, to sync Reducer, MapStateToProps, and Actions
// This is fully set component using Form,Action,Reducer,Provider,CreateStore 
// Now to Set up the axios see notes below Export Default App 
function App() {
  return (
    <Provider store={store}>
      <div className="App">

       <header>Do you know who is the Shwiftyiest?</header>
        <RMForm/>
      </div>

    </Provider>
  );
}

export default App;

