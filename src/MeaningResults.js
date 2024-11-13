import React from 'react';

function MeaningResults({meaning}){
    console.log(meaning)
    return (
        <div className='MeaningResults'> 
            <h3> {meaning.partOfSpeech}</h3>
            <p>{meaning.definition} </p>
           <em> <p>{meaning.example}</p></em>
            <p>{meaning.synonyms}</p>
            <p>{meaning.antonyms}</p>
        </div>
    )
}

export default MeaningResults;