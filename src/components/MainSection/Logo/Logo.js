import React from 'react'
import LOGO from '../../../assets/rick_and_morty.svg'
import {
  IMG,
  FIGURE
} from './styles'

export const Logo = () => {
  return (
    <FIGURE>
      <IMG src={LOGO} alt="Rick and Morty Logo"/>
    </FIGURE>
  )
}
