import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 344px;
  height: ${props => props.height};
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(239, 250, 211, 0.4);
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 16px;
  overflow: hidden;
  transition: 0.1s;
  &:hover {
    box-sizing: content-box;
    border: solid 2px #EFFAD3;
  }
`;

export const Figure = styled.figure`
  width: 344px;
  height: 194px;
  margin: 0;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

export const Img = styled.img`
  width: 344px;
  height: 194px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  object-fit: cover;
`;

export const Name = styled.p`
  display: flex;
  align-items: flex-end;
  width: 344px;
  height: 44px;
  margin-bottom: 8px;
  font-family: 'Work Sans', sans-serif;
  font-size: 21px;
  font-weight: bold;
  color: #232f43;
  text-align: start;
  text-indent: 16px;
`;

export const StatusAndSpecies = styled.div`
  display: flex;
  align-items: flex-end;
  width: 344px;
  height: 32px;
  font-family: 'Work Sans', sans-serif;
  font-size: 17px;
  font-weight: normal;
  color: #232f34;
  text-align: start;
`;

export const Status = styled.p`
  color: ${props => props.color};
  text-indent: 16px;
  font-weight: 500;
`;

export const Space = styled.p`
  margin-left: 6px;
  margin-right: 6px;
`;

export const Gender = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 344px;
  height: 26px;
  font-family: 'Work Sans', sans-serif;
  font-size: 15px;
  font-weight: normal;
  color: #232f34;
  padding-right: 16px;
`;

export const Hr = styled.hr`
  margin: 16px;
  opacity: .2;
`;

export const MoreDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, 40px);
`;

export const StaticText = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  font-family: 'Work Sans', sans-serif;
  font-size: 15px;
  font-weight: normal;
  color: #232f43;
  text-align: start;
  text-indent: 16px;
`;

export const DynamicText = styled.p`
  display: flex;
  height: 40px;
  margin-bottom: 0;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  font-size: 15px;
  font-weight: normal;
  color: #232f43;
  text-align: start;
`;