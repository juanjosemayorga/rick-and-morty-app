import * as React from "react"
import {
  Svg
} from './styles.js'

function ArrowLeft(props) {
  return (
    <Svg viewBox="0 0 24 24" width={48} height={48} {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </Svg>
  )
}

export default ArrowLeft