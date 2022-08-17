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
  && > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  && button {
    border: none;
    background: none;
    font-weight: 700;
    color: ${colorPrimary};
  }
  button:hover {
    color: ${colorPrimaryDark};
    cursor: pointer;
    text-decoration: underline;
  }
  && > div {
    padding: 0.625rem;
  }
  && footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0rem 0.5rem;
  }
  && footer div {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 0rem;
  }
  && footer div:nth-child(2) {
    padding: 0;
    height: 2px;
    background: linear-gradient(to bottom right, #2A69BB 0%, #B43E94 100%);
  }
`;