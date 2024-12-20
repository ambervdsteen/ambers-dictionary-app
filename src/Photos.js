import React from 'react';
import './Photos.css';

function Photos ({photos}){
    if (photos) {
        return(
      
        <section className='Photos'>
        <div className="row">

        {photos.map(function(photos, index){
            return (
            <div className="col-md-4 mb-4" key={index}> 
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
        return null;
    }
}


export default Photos;