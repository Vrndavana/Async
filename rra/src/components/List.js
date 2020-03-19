import React from 'react';
import {connect} from 'react-redux';

const List = props => {
    return ( 
      <>
        {props.error ? (
            <div className="error"> {props.error}</div>
            ) : (
        props.characters.map(character => <div>{character.character_name}</div>)
        )}
     </>
    );
};

const mapStateToProps = state => {
    return{
        characters: state.characters,
        error: state.error
    };
};

export default connect(mapStateToProps, {})(List);