import React, {useState} from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';

function SearchEngine(){
const [searchTerm, setSearchTerm]= useState("");
const [searchTermResults, setSearchTermResults]=useState("null");

function handleResponse(response){
    console.log(response.data.meanings[0]);
    setSearchTermResults(response.data.meaning);
}

    function search(e){
        e.preventDefault();
        const apiKey="2950072abb4303db56f019dto24c1aca";
        let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${searchTerm}&key=${apiKey}`;
      
    
        axios.get(apiUrl).then(handleResponse)
    }

    function handleSearchTermChange(e){
        setSearchTerm(e.target.value);
    }

    return (
        <div>
           <form onSubmit={search}>
            <input type="search" onChange={handleSearchTermChange}/>
             </form> 
             <SearchResults results={searchTermResults}/>
        </div>
    )
}

export default SearchEngine;