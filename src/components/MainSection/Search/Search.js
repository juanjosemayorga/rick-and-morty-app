import React from 'react'
import SearchLogo from '../../../assets/Search/SearchLogo'

export const Search = () => {
  return (
    <form>
      <div>
        <SearchLogo />
        <input type="text" placeholder="Search character" />
      </div>
      <button>SEARCH</button>
    </form>
  )
}
