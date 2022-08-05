import React from 'react';
import "./styles.scss"


const SearchBar = ({ characterSearch, setCharacterSearch }) => {
  return (
    <div className='search'>
      <input
      type="text"
      value={characterSearch}
      name={characterSearch}
      placeholder="Search...."
      onChange={(e)=>setCharacterSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBar