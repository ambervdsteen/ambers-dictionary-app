import React, {useState} from 'react';

function SearchEngine(){
const [searchTerm, setSearchTerm]= useState("");

    function search(e){
        e.preventDefault();
        alert(`Looking up ${searchTerm}`);
    }

    function handleSearchTermChange(e){
        setSearchTerm(e.target.value);
    }

    return (
        <div>
           <form onSubmit={search}>
            <input type="search" onChange={handleSearchTermChange}/>
             </form> 
        </div>
    )
}

export default SearchEngine;