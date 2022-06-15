import React, {useState} from 'react';
import SearchResult from './SearchResult';

const Search = () => {
    const [img, setImg] = useState("");
    return (
        <>
            <div className="search-section">
                <h1>Search Any Image</h1>
                <input type="text" className='search-field' placeholder='TYPE HERE' value={img} onChange={(e)=> setImg(e.target.value)} />
                <br/>
                { img === "" ? null : <SearchResult name={img} /> }
            </div>
        </>
    )
}

export default Search;
