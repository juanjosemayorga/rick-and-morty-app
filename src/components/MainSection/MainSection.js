import React from 'react'
import {
  Container
} from './styles'

import { Filters } from './Filters/Filters'
import Logo from './Logo/Logo'
import { Search } from './Search/Search'

export const MainSection = ({ word, genderChosen, statusChosen, setCurrentPage }) => {
  return (
    <Container>
      <Logo />
      <Search
        word={word}
        setCurrentPage={setCurrentPage}
        />
      <Filters
        setCurrentPage={setCurrentPage}
        genderChosen={genderChosen}
        statusChosen={statusChosen} />
    </Container>
  )
}
