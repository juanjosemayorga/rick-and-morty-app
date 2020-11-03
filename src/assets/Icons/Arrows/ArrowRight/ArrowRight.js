import * as React from "react"
import {
  Svg
} from './styles.js'

function ArrowRight(props) {
  return (
    <Svg viewBox="0 0 24 24" width={48} height={48} {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </Svg>
  )
}

export default ArrowRight