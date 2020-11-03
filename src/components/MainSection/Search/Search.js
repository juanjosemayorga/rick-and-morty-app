import React, { useState } from 'react'
import {
  Form,
  ContainerSearch,
  Input,
  Button
} from './styles'

import SearchLogo from '../../../assets/Search/SearchLogo'

export const Search = ({ word, setCurrentPage }) => {

  const [inputValue, setInputValue] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    word(inputValue)
    setInputValue('')
    setCurrentPage(1)
  }

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <Form>
      <ContainerSearch>
        <SearchLogo />
        <Input
          type="text"
          placeholder="Search character"
          value={inputValue}
          onChange={handleInputChange} />
      </ContainerSearch>
      <Button onClick={handleSearch}>SEARCH</Button>
    </Form>
  )
}
