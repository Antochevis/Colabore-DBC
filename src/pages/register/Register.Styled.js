import styled from "styled-components";
import { colorPrimary } from "../../consts";


export const BackgroundRegister = styled.div`
  background: linear-gradient(to bottom right, #2A69BB, #B43E94);
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;

  > div:last-child {
    width: 50vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  min-height: 100vh;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  align-items: center;
  justify-content: center;
`;

export const LogoAndTextRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-top: 10px;

  img {
    width: 70px
  }

  h2 {
    color: #A4A6B3;
    opacity: 0.7;
    letter-spacing: 0.4px;
    font-size: 19px;
    line-height: 24px;
    margin: 0;
  }
`;

export const RegisterFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 26px;

  div:nth-child(-n + 3) {
    display: flex;
    width: 45vw;
    gap: 6px;
    height: 70px;

    > div:nth-child(-n + 2) {
      display: flex;
      flex-direction: column;

      label {
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        color: #9FA2B4;
      }

      input {
        background: #FCFDFE;
        border: 1px solid #F0F1F7;
        border-radius: 8px;
        height: 42px;
        padding: 11px 16px;
        color: #4B506D;
        width: 100%;
      }
    }
  }

  div:nth-child(3) {
    height: 30px
  }

  div:nth-child(4) {
    display: flex;
    flex-direction: column;
    width: 45vw;
    align-items: flex-start;
    gap: 6px;

    label, p {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #9FA2B4;
    }
  }

  section {
    background: #FCFDFE;
    border: 1px dashed black;
    height: 5rem;
    border-radius: 8px;
  }

  section:hover {
    cursor: pointer;
    background: #f5f5f5fb;
  }

  section > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100% !important;
  }

  section img {
    width: 4rem;
    clip-path: circle();
  }
`;

export const RegisterTitle = styled.h1`
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  color: black;
  margin: 12px 0;
`;

export const Errors = styled.p`
  color: red;
  font-size: 12px;
  font-weight: bold;
  margin-top: 0;
`;

export const BackToLogin = styled.small`
  color: ${colorPrimary};
  font-weight: 600;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;