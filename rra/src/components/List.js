import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions';

const List = props => {
    console.log('All Props',props)


    return ( 
      <>
        {props.error ? (
            <div className="error"> {props.error}</div>
            ) : (
        props.characters.map(character => 
        <div className='Characters'>
            {character.name} <br></br>
            {character.species} <span></span>
            {character.gender} <span></span>
            {character.status} <span></span>
           
            
        </div>
        )
        )}
     </>
    );
};

const mapStateToProps = state => {
    return{
        characters: state.characters,
        error: state.error,
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, {getData})(List); // <- FORGOT TO ADD getData !!!