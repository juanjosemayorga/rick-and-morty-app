import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 48px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 48px;
`;

export const ArrowContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 8px;
  transition: 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.16);
  }
`;

export const Number = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  color: #effad3;
  width: 48px;
  height: 48px;
  margin: 0;
`;