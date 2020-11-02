import React, { useState } from 'react'
import {
  CardContainer,
  Figure,
  Img,
  Name,
  StatusAndSpecies,
  Gender,
  Hr,
  MoreDataContainer,
  StaticText,
  DynamicText
} from './styles'

export const Card = ({ data: { name, status, species, gender, image, origin, location } }) => {

  const [expanded, setExpanded] = useState(false)

  const handleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <CardContainer height={expanded ? "422px" : "312px"} onClick={ handleExpanded }>
      <Figure>
        <Img src={image} />
      </Figure>
      <Name>{name}</Name>
      <StatusAndSpecies>{`${status} - ${species}`}</StatusAndSpecies>
      <Gender>{gender}</Gender>
        <Hr />
      <MoreDataContainer>
        <StaticText>Origin:</StaticText>
        <DynamicText>{origin.name}</DynamicText>
        <StaticText>Location:</StaticText>
        <DynamicText>{location.name}</DynamicText>
      </MoreDataContainer>
    </CardContainer>
  )
}
