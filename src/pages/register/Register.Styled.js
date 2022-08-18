import styled from "styled-components";
import { colorPrimary } from "../../consts";

export const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    width: 100vw;
  }
  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    padding: 0 1rem;
    background: #ffffff;
    @media(max-width: 1200px) {
      width: 100vw;
      padding: 0 1rem;
    }
  }
    @media(max-width: 1200px) {
      && form {
        width: 100%;
      }
      && button {
        width: 100%;
      }
    }
`;

export const BackgroundRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50vw;
  background: linear-gradient(to bottom right, #2A69BB, #B43E94);
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LogoAndTextRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-top: 10px;

  && img {
    width: 70px
  }

  && h2 {
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
  gap: 1.625rem;

  && > div:nth-child(1) {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 2rem;
    height: 5rem;
    @media (max-width: 1200px) {
    flex-direction: column;
  }
  }
  && > div:nth-child(1) > div {
    width: 100%;
    height: 5rem;
  }
  && > div:nth-child(2) {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 2rem;
    height: 5rem;
    @media (max-width: 1200px) {
    flex-direction: column;
    margin-top: 5rem;
  }
  }
  && > div:nth-child(2) > div {
    width: 100%;
    height: 5rem;
  }
  && > div:nth-child(2) > div > div {
    width: 100%;
    height: 5rem;
  }

    > div:nth-child(-n + 2) {
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

  div:nth-child(3) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 6rem;
    gap: 6px;
    margin-top: 2rem;
    @media (max-width: 1200px) {
    margin-top: 6rem;
  }

    label, p {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #9FA2B4;
    }
  }

  && section {
    background: #FCFDFE;
    border: 1px dashed black;
    height: 5rem;
    border-radius: 8px;
    width: 100%;
  }

  && section:hover {
    cursor: pointer;
    background: #f5f5f5fb;
  }

  && section > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100% !important;
  }

  && section img {
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
  margin-top: 1.625rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;