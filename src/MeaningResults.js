import React from 'react';
import Synonyms from './Synonyms'

function MeaningResults({meaning}){
    return (
        <div className='MeaningResults'> 
            <h3> {meaning.partOfSpeech}</h3>
            <p> <strong>Definition: </strong>{meaning.definition} </p>
           <em> <p>{meaning.example}</p></em>

           <Synonyms synonyms={meaning.synonyms}/>
            <p>{meaning.antonyms}</p>
        </div>
    )
}

export default MeaningResults;