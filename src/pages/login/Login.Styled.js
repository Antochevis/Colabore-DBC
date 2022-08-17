import styled from "styled-components";
import { colorPrimary } from '../../consts'

export const BackgroundPage = styled.div`
  background: linear-gradient(to bottom right, #2A69BB, #B43E94);
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;

  > div:first-child {
    width: 50vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const LogoAndText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 10px;

  img {
    width: 150px;
    margin-bottom: 12px;
  }

  h2 {
    color: #A4A6B3;
    opacity: 0.7;
    letter-spacing: 0.4px;
    font-size: 32px;
    line-height: 24px;
  }
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 100vh;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  align-items: center;
  justify-content: center;

  > h3 {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: #9FA2B4;
    margin: 0;
  }

  > div {
    display: flex;
    gap: 5px;
    margin-top: 20px;
    align-items: center;

    > p {
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.3px;
      color: #9FA2B4;
    }
  }
`

export const Signup = styled.small`
  color: ${colorPrimary};
  font-weight: 600;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 32px;
  width: 45vw;

  div:nth-child(-n + 2) {
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 70px;

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
    };
  }
  
  div:nth-child(3) {
    display: flex;
    flex-direction: column;
    width: 316px;
    align-items: flex-start;

    > p {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #9FA2B4;
      margin: 0;
    }
  }

`

export const Errors = styled.p`
  color: red;
  font-size: 12px;
  font-weight: bold;
  margin-top: 0;
`