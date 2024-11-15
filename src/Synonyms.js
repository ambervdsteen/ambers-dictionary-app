import React from 'react'
import './Synonyms.css'

function Synonyms ({synonyms}){
    if (synonyms){

    return (
  <ul className='Synonyms'>
            <strong>Synonyms:</strong>
{synonyms.map(function(synonyms, index){
    return(
        
        <li key={index}> {synonyms}</li>);
    })}
        </ul>
    );
  }  else{
        return null;
    }
}

export default Synonyms;