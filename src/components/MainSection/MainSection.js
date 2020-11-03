import React from 'react'
import {
  Container
} from './styles'

import { Filters } from './Filters/Filters'
import Logo from './Logo/Logo'
import { Search } from './Search/Search'

export const MainSection = ({ word, genderChosen, statusChosen }) => {
  return (
    <Container>
      <Logo />
      <Search word={word}/>
      <Filters
        genderChosen={genderChosen}
        statusChosen={statusChosen} />
    </Container>
  )
}
