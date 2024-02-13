import React from 'react'
import '../App.css'

function SearchData(props) {
  return (
    <div className="search_container">
          <div className='"search'>
        <h3>Search</h3>
        <input onChange={e=>{props.handleInput(e)}} className='input-type' type='search'/>
    </div>
    </div>

  )
}

export default SearchData