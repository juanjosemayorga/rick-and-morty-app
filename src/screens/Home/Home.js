import React, { useState } from 'react'
import { Container } from './styles'

import { MainSection } from '../../components/MainSection/MainSection'
import { ListCards } from '../../components/CardsSection/ListCards'

export const Home = () => {

  const [userSearch, setUserSearch] = useState('')
  const [genderChosen, setGenderChosen] = useState('')
  const [statusChosen, setStatusChosen] = useState('')

  return (
    <Container>
      <MainSection
        genderChosen={setGenderChosen}
        statusChosen={setStatusChosen}
        word={setUserSearch} />
      <ListCards
        gender={genderChosen}
        status={statusChosen}
        name={userSearch}/>
    </Container>
  )
}
