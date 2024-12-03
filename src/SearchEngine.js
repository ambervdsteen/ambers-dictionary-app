import React, {useState} from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import './SearchEngine.css'
import Photos from './Photos.js'

function SearchEngine(){
const [searchTerm, setSearchTerm]= useState("");
const [searchTermResults, setSearchTermResults]=useState(null);
const [photos, setPhotos]=useState([]);



    function search(e){
        e.preventDefault();
        const apiKey="2950072abb4303db56f019dto24c1aca";
        let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${searchTerm}&key=${apiKey}`;
      
        axios.get(apiUrl).then(handleResponse)

        const apiKeyPhotos="2950072abb4303db56f019dto24c1aca"
        const apiUrlPhotos=`https://api.shecodes.io/images/v1/search?query=${searchTerm}&key=${apiKeyPhotos}`;
        axios.get(apiUrlPhotos).then(handlePhotoResponse)
    }

    function handleSearchTermChange(e){
        setSearchTerm(e.target.value);
    }

    function handleResponse(response){
        console.log(response.data.meanings[0]);
        console.log(response.data.meanings[0].definition)
        setSearchTermResults(response.data);
    }

    function handlePhotoResponse(response){
        setPhotos(response.data.photos)
    }
    



    return (
        <div className='SearchEngine'>
       <section className='SearchSection'>
           <form onSubmit={search}>
            <input type="search" onChange={handleSearchTermChange}/>
             </form> 
             </section>
             <SearchResults results={searchTermResults}/>
             <Photos photos={photos}/>

        </div>
    )
}

export default SearchEngine;