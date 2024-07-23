import React from 'react'

const Searchitem = () => {
  return (
    
    <form className="searchForm" onChange={(e) => (e.preventDefault())}>

        <label htmlFor="search">
            search
        </label>
        <input 
        id='search'
        role='searchform'
        placeholder='Search'
        type="text" />
    </form>

  )
}

export default Searchitem