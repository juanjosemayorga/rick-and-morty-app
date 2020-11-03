import React, { useState } from 'react'
import { Container } from './styles'

import { MainSection } from '../../components/MainSection/MainSection'
import { ListCards } from '../../components/CardsSection/ListCards'
import { PaginationComponent } from '../../components/Pagination/PaginationComponent'

export const Home = () => {

  const [userSearch, setUserSearch] = useState('')
  const [genderChosen, setGenderChosen] = useState('')
  const [statusChosen, setStatusChosen] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Container>
      <MainSection
        setCurrentPage={setCurrentPage}
        genderChosen={setGenderChosen}
        statusChosen={setStatusChosen}
        word={setUserSearch} />
      <ListCards
        gender={genderChosen}
        status={statusChosen}
        name={userSearch}
        page={currentPage}
        />
      <PaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
    </Container>
  )
}
