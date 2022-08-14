import { colorWhite, colorBorder } from '../../consts'
import styled from "styled-components"

export const Card = styled.div(({maxWidth, height}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: maxWidth ? maxWidth : 1420,
  height: height ? height : 500,
  paddingTop: 32,
  paddingBottom: 32,
  backgroundColor: colorWhite,
  borderRadius: 8,
  border: `1px solid ${colorBorder}`
}));

export const ContainerCards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;