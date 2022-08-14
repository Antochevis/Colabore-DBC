import styled from "styled-components";

export const CardContent = styled.div`
  width: 100%;
  && img {
    width: 100%;
    height: 8rem;
    object-fit: cover;
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