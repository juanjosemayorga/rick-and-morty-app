import * as React from "react"
import {
  Svg
} from './styles'

function Filter(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M7 10l5 5 5-5z"
        fill="#effad3"
        fillRule="evenodd"
        opacity={0.54}
      />
    </Svg>
  )
}

export default Filter
