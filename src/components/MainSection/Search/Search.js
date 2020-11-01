import React from 'react'
import {
  Form,
  ContainerSearch,
  Input,
  Button
} from './styles'

import SearchLogo from '../../../assets/Search/SearchLogo'

export const Search = () => {
  return (
    <Form>
      <ContainerSearch>
        <SearchLogo />
        <Input type="text" placeholder="Search character" />
      </ContainerSearch>
      <Button>SEARCH</Button>
    </Form>
  )
}
