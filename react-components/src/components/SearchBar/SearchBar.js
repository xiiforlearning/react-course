import React from 'react'

function SearchBar() {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <img src="./assets/search-solid.svg" width="16px" alt="" />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
