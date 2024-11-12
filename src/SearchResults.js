import React from 'react'

function SearchResults({results}){
    if ({results}){
    return (
        <div className="SearchResults">
            <h3>
        you searched for {{results}.word}
            </h3>
        </div>
    )}
    else{
        return null;
    }
}

export default SearchResults;