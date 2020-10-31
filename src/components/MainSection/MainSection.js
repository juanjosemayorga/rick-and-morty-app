import React from 'react'
import { Filters } from './Filters/Filters'
import { Logo } from './Logo/Logo'
import { Search } from './Search/Search'

export const MainSection = () => {
  return (
    <div>
      <Logo />
      <Search />
      <Filters />
    </div>
  )
}
