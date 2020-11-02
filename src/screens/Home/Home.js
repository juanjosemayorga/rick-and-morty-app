import React, { useState } from 'react'
import { Container } from './styles'

import { MainSection } from '../../components/MainSection/MainSection'
import { ListCards } from '../../components/CardsSection/ListCards'

export const Home = () => {

  const [userSearch, setUserSearch] = useState('')

  return (
    <Container>
      <MainSection word={setUserSearch} />
      <ListCards name={userSearch}/>
    </Container>
  )
}
