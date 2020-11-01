import React from 'react'
import {
  CardContainer,
  Figure,
  Img,
  Name,
  StatusAndSpecies,
  Gender
} from './styles'

export const Card = ({ data: { name, status, species, gender, image } }) => {
  return (
    <CardContainer>
      <Figure>
        <Img src={image} />
      </Figure>
      <Name>{name}</Name>
      <StatusAndSpecies>{`${status} - ${species}`}</StatusAndSpecies>
      <Gender>{gender}</Gender>
    </CardContainer>
  )
}
