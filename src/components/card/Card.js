import { colorWhite, colorBorder } from '../../consts'
import styled from "styled-components"

export const Card = styled.div(({maxWidth, height, padding}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  maxWidth: maxWidth ? maxWidth : 1420,
  height: height ? height : 500,
  padding: padding ? padding : 0,
  backgroundColor: colorWhite,
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