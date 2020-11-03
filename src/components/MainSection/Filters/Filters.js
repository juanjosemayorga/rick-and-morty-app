import React from 'react'
import { Gender } from './Gender/Gender'
import { Status } from './Status/Status'
import {
  Container
} from './styles.js'

export const Filters = () => {
  return (
    <Container>
      <Gender />
      <Status />
    </Container>
  )
}
