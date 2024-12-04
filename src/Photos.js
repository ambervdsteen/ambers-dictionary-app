import React from 'react';
import './Photos.css';

function Photos ({photos}){
    if (photos) {
        return(

        <section className='Photos'>
        <div className='row'>
        {photos.map(function(photos, index){

            return (
     
            <div className='col-4' key={index}> 
            <a href={photos.src.original} target='_blank' rel='noopener noreferrer'>
            <img src={photos.src.landscape} className='img-fluid' alt='imagedict'/>
            </a>
            </div>
        
            );
        })}

    </div>
    </section>

    );
  }  else{
        return ("sorry we're having trouble finding photos for you");
    }
}


export default Photos;