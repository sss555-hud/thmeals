import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className='search'>
      <input type="text" placeholder='Search for a Meal...'/>
      <button>🔍</button>
      <p>Total Meals: 303</p>
      <p>Total Ingredients: 575</p>
      <p>Images: 303</p>
    </div>
  )
}

export default Search
