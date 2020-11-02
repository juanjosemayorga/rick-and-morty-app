import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  margin-top: 40px;
`;

export const Img = styled.img`
  animation: ${rotate} 1s linear infinite;
`;