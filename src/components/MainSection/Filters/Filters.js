import React, { useState } from 'react'
import Filter from '../../../assets/Icons/Filter/Filter'
import {
  Container,
  ItemsContainer,
  Item,
  P,
  Hr,
  SubItemsGender,
  SubItemsStatus,
  SubItemsP
} from './styles'

export const Filters = () => {

  const [gender, setGender] = useState({
    genderSelected: 'Gender',
    display: false
  })

  const [statusClicked, setStatusClicked] = useState(false)

  const handleGender = () => {
    setGender({
      ...gender,
      display: !gender.display
    })
  }

  const handleGenderChosen = (chosen) => {
    console.log(chosen);
    setGender({
      ...gender,
      genderSelected: 'ooaa'
    })
  }

  const handleStatus = () => {
    setStatusClicked(!statusClicked)
  }

  return (
    <Container>
    {console.log(gender.genderSelected)}
      <Hr />
        <ItemsContainer>
          <Item onClick={ handleGender }>
            <P>{gender.genderSelected}</P>
            <Filter />
            <SubItemsGender
              display={gender.display ? 'block' : 'none'}>
              <SubItemsP onClick={() => handleGenderChosen('Male')}>Male</SubItemsP>
              <SubItemsP>Female</SubItemsP>
              <SubItemsP>Genderless</SubItemsP>
              <SubItemsP>Unknown</SubItemsP>
            </SubItemsGender>
          </Item>
          <Item
            onClick={ handleStatus }
            margin="16px">
            <P>Status</P>
            <Filter />
            <SubItemsStatus
              display={statusClicked ? 'block' : 'none'}>
              <SubItemsP>Alive</SubItemsP>
              <SubItemsP>Dead</SubItemsP>
              <SubItemsP>Unknown</SubItemsP>
            </SubItemsStatus>
          </Item>
        </ItemsContainer>
      <Hr />
    </Container>
  )
}
