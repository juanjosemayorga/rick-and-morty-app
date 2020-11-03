import React from 'react'
import NOTHING from '../../assets/Images/sad_face.jpg'

import {
  Container,
  Img,
  H3,
  P
} from './styles'

export const NoData = () => {
  return (
    <Container>
      <Img src={NOTHING} alt="No data" />
      <H3>uuups... we didn't find what you were looking for</H3>
      <P>Why don't you try looking for something else?</P>
    </Container>
  )
}
