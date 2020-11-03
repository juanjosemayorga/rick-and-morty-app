import React from 'react'
import { Gender } from './Gender/Gender'
import { Status } from './Status/Status'
import {
  Container
} from './styles.js'

export const Filters = ({ genderChosen, statusChosen, setCurrentPage }) => {
  return (
    <Container>
      <Gender
        genderChosen={genderChosen}
        setCurrentPage={setCurrentPage}
        />
      <Status
        statusChosen={statusChosen}
        setCurrentPage={setCurrentPage}
        />
    </Container>
  )
}
