import React, { useState } from 'react'
import {
  CardContainer,
  Figure,
  Img,
  Name,
  StatusAndSpecies,
  Status,
  Space,
  Gender,
  Hr,
  MoreDataContainer,
  StaticText,
  DynamicText
} from './styles'

export const Card = ({ data: { name, status, species, gender, image, origin, location } }) => {

  const [expanded, setExpanded] = useState(false)

  const getStatusColor = status => {
    if (status === 'Alive') {
      return 'green'
    }
    if (status === 'Dead') {
      return 'red'
    }
    if (status === 'unknown') {
      return '#232F34'
    }
  }

  const handleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <CardContainer height={expanded ? "422px" : "312px"} onClick={ handleExpanded }>
      <Figure>
        <Img src={image} />
      </Figure>
      <Name>{name}</Name>
      <StatusAndSpecies>
        <Status color={getStatusColor(status)}>{status}</Status>
        <Space>-</Space>
        <p>{species}</p>
      </StatusAndSpecies>
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
