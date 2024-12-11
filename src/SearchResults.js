import React from 'react'
import MeaningResults from './MeaningResults';
import './SearchResults.css'

function SearchResults({results}){
    if (results){
    return (
        <div className="SearchResults">
            <section>
            <h3>
     {results.word}
   <br/>
     phonetic: {results.phonetic}
     </h3>
     </section>
     <section>
     {results.meanings.map(function(meanings, index){
        return <section key={index}>
            <MeaningResults meaning={meanings}/>
            </section>;
})}        
       </section> </div>)
    }
    else{
        return null;
    }
}

export default SearchResults;