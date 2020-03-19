//Pre-Imps
import React from 'react';
// Step 6 - Final Step before Axios hit 
import {connect} from 'react-redux'; 
import {getData} from '../actions';

const RMForm = props => {

    const handleChange = e => {e.preventDefault(); props.getData();};

    // Step 6 Pt.2 - Changed Button to IsFetching - This step can be done right be done once you need to come back to MapStateToProps
    // originial was just button
    return (
        <>
          {props.isFetchingData ? (<div>**Fetching** </div>) : (<button onClick={handleChange}> Squonch! </button>)  }
        </>
    )
};

const mapStateToProps = state => {   // <- Part 6 Pt.3 - mapStateToProps 
    return{
      isFetchingData: state.isFetchingData
    };
  };

export default connect(mapStateToProps,{getData})(RMForm)
// export default RMForm <- original 