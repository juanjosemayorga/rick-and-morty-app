import React from 'react'
import {
  Container
} from './styles'

import { Card } from './Card/Card'
import { LoadingCards } from '../LoadingCards/LoadingCards'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const characters = gql`
{
	characters(page: 1) {
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

export const ListCards = () => {

  const { loading, error, data } = useQuery(characters)

  if (loading) return <LoadingCards />
  if (error) return 'No hay datos'

  return (
    <Container>
      {
        data.characters.results.map(char => <Card key={char.id} data={char} />)
      }
    </Container>
  )
}
