import React from 'react'
import MeaningResults from './MeaningResults';
import './SearchResults.css'

function SearchResults({results}){
    console.log(results)
    if (results){
    return (
        <div className="SearchResults">
            <section className='ResultsSection'>
            <h3>
     {results.word}
   <br/>
     phonetic: {results.phonetic}
     </h3></section>
  
     {results.meanings.map(function(meanings, index){
        return <div key={index}>
            <MeaningResults meaning={meanings}/>
            </div>;
})}        
        </div>)
    }
    else{
        return null;
    }
}

export default SearchResults;