import React from 'react';

const SearchResult = ({name}) => {
    const image = `https://source.unsplash.com/random/400x300/?${name}`;
  return (
      <>
    <div>
        <img src={image} alt="random-image" />
    </div>
    </>
  )
}

export default SearchResult; 
