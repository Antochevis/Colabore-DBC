import { colorWhite, colorBorder } from '../../consts'
import styled from "styled-components"

export const Card = styled.div(({maxWidth, padding, height, minHeight}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  maxWidth: maxWidth ? maxWidth : 1420,
  height: height ? height : '',
  minHeight: minHeight ? minHeight : 350,
  padding: padding ? padding : 0,
  background: colorWhite,
  borderRadius: 8,
  border: `1px solid ${colorBorder}`,
  overflow: 'hidden',
}));

export const ContainerCards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem 1rem;

  @media (max-width:1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width:768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerDetail = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 0.7fr 400px;
  justify-content: center;
  gap: 3rem;

  @media (max-width:768px) {
    grid-template-columns: 1fr;
  }
`;

export const CardContentSm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 2.25rem;
  && h3 {
    font-size: 3.125rem;
    font-weight: 500;
    line-height: 62.75px;
    color: #17BF14;
    padding-bottom: 2rem;
  }
  && div:nth-child(3) {
    display: flex;
    flex-direction: column;
    padding-bottom: 0.5rem;
  }
  && div:nth-child(4) {
    display: flex;
    flex-direction: column;
  }
`;