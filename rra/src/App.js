// Pre-Imps
import React from 'react';
import './App.css';
// Step 3
import RMForm from './components/RMForm'; 
// Step 4
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Rickducer as reducer} from './reducers/Rickducer';
//Step 5
const store = createStore(reducer)

// Setting up A Form w Action/Reducer in a clean App --- Setting up Provider CreateStore Reducer Wrap 
// 1 - Clear out App
// 2 - Add Shwifty Header
// 3 - Import <RMForm/> 
// 4 - Import Provider, CreateStore, Reducer
// 5 - Const Store & Wrap App with Provider, Store, and Reducer 
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

