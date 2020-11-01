import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 800px;
  height: 40px;
  border: solid 3px #effad3;
  border-radius: 24px;
  transition: 0.2s;
  &:hover {
    border: solid 3px #a8dda8;
    box-shadow:0px 0px 8px 1px #a8dda8;
  }
`;

export const Input = styled.input`
  width: 700px;
  background-color: transparent;
  font-size: 1.2rem;
  color: white;
  border: 0;
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, .7)
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 36px;
  border-radius: 35px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
  background-color: #28abb9;
  align-self: flex-end;
  border: none;
  margin-top: 16px;
  color: white;
  font-size: 18px;
  font-weight: medium;
  font-family: 'Rubik', sans-serif;
  transition: 0.15s;
  &:hover {
    background-color: #A8DDA8;
    color: #2D6187;
    font-size: 18px;
    font-weight: medium;
    font-family: 'Rubik', sans-serif;
  }
  &:focus {
    outline: none;
  }
`;