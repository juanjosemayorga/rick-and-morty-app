import React from 'react'
import PORTAL from '../../assets/Images/portal.png'

import {
  Container,
  Img
} from './styles'

export const LoadingCards = () => {
  return (
    <Container>
      <Img src={PORTAL} alt="loading" />
    </Container>
  )
}
