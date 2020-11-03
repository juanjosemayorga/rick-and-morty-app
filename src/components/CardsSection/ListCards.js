import React from 'react'
import {
  Container
} from './styles'

import { Card } from './Card/Card'
import { LoadingCards } from '../LoadingCards/LoadingCards'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { NoData } from '../NoData/NoData'

const characters = gql`
query personajes($name: String!, $gender: String!, $status: String!)
{
	characters(page: 1, filter: { name: $name, gender: $gender, status: $status }) {
    results {
      id
      name
      status
      species
      gender
      image
      origin {
        name
      }
      location {
        name
      }
    }
  }
}
`;

export const ListCards = ({ name, gender = '', status = '' }) => {

  const { loading, error, data } = useQuery(characters, {
    variables: { name, gender, status }
  })

  if (loading) return <LoadingCards />
  if (error) return <NoData />

  return (
    <Container>
      {
        data.characters.results.map(char => <Card key={char.id} data={char} />)
      }
    </Container>
  )
}
