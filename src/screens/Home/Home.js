import React from 'react'
import {
  Container
} from './styles'

import { MainSection } from '../../components/MainSection/MainSection'
import { ListCards } from '../../components/CardsSection/ListCards'

export const Home = () => {
  return (
    <Container>
      <MainSection />
      <ListCards />
    </Container>
  )
}
