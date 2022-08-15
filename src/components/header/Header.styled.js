import styled from "styled-components";
import { colorWhite } from '../../consts'

export const HeaderContainer = styled.header`
  background: linear-gradient(to bottom right, #2A69BB, #B43E94);
  color: ${colorWhite};
  height: 5rem;
  && > div {
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    margin: 0 auto;
    justify-content: space-between;
    max-width: 1300px;
  }
  && div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  && div:last-child {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: bold;
  }
  && img {
    width: 44px;
    clip-path: circle();
  }
  && button:hover {
    background: #0000001a;
    cursor: pointer;
  }
`; 