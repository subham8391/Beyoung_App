import React from 'react'

function SearchBar() {
  return (
    <div className='searchbar-section'>
      <div className="searchbar-container">
        <div className="search-bar">
        <input type="search" placeholder='Search..' />
        </div>
        <button className='search-btn'>Search</button>
      </div>
    </div>
  )
}

export default SearchBar