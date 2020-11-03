import styled from 'styled-components'

export const Container = styled.div`
  width: 242px;
`;

export const Hr = styled.hr`
  opacity: 0.16;
  border: solid 1px #231f20;
`;

export const ItemsContainer = styled.div`
  height: 48px;
  display: flex;
  flex-direction: row;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 72px 40px;
  align-items: center;
  width: 113px;
  height: 48px;
  margin-left: ${props => props.margin};
  &:hover {
    cursor: pointer;
  }
  &:hover > P {
    color: #A8DDA8;
  }
`;

export const P = styled.p`
  display: flex;
  align-items: center;
  width: 72px;
  height: 48px;
  font-size: 16px;
  font-weight: normal;
  color: #EFFAD3;
  padding-left: 6px;
`;

export const SubItemsGender = styled.div`
  display: ${props => props.display};
  margin-top: 2px;
  width: 113px;
  height: 40px;
  background-color: white;
  box-shadow: 0 9px 13px 0 rgba(255, 255, 255, 0.26);
`;

export const SubItemsStatus = styled.div`
  display: ${props => props.display};
  margin-top: 2px;
  width: 113px;
  height: 40px;
  box-shadow: 0 9px 13px 0 rgba(255, 255, 255, 0.26);
`;

export const SubItemsP = styled.p`
  display: flex;
  padding-top: 10px;
  padding-left: 16px;
  align-items: flex-start;
  width: 113px;
  height: 49px;
  background-color: white;
  &:hover {
    background-color: #EEEEEE;
    cursor: pointer;
  }
`;