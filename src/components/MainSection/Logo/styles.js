import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
`;

const color = keyframes`
    0%, 100% {
    fill: #effad3;
  }
  50% {
    fill: #A8DDA8;
  }
`;

export const SVG = styled.svg`
  width: 423px;
  animation:
    ${scale} 3s ease-in-out infinite;
  /* transition: 0.3s; */
  /* &:hover {
    width: 487px;
  } */
  /* &:hover g {
    fill: #A8DDA8;
  } */
`;

export const G = styled.g`
  animation: ${color} 3s linear infinite;
`;