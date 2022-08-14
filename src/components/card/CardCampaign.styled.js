import styled from "styled-components";
import { colorPrimary, colorPrimaryDark } from '../../consts' 

export const CardContent = styled.div`
  width: 100%;
  && img {
    width: 100%;
    height: 8rem;
    object-fit: cover;
  }
  && > div:nth-child(2) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  && > div:nth-child(2) div {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }
  && button {
    border: none;
    background: none;
    font-weight: 600;
    color: ${colorPrimary};
  }
  button:hover {
    color: ${colorPrimaryDark};
    cursor: pointer;
  }
  && > div {
    padding: 0.625rem;
  }
  && footer {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  && footer div {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 0.5rem;
  }
  && footer div:nth-child(1) {
    border-bottom: 1px solid black;
  }
`;