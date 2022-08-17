import styled from "styled-components";


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
`

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  min-height: 100vh;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  align-items: center;
  justify-content: center;
`

export const LogoAndTextRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

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
`
export const RegisterFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 26px;

  div:nth-child(-n + 6) {
    display: flex;
    flex-direction: column;
    width: 45vw;
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
      width: 100%;
    };
  }

  div:nth-child(5){
    display: flex;
    flex-direction: column;
    width: 45vw;
    align-items: flex-start;
  }
`

export const RegisterButtonFormStyle = styled.button`
  height: 48px;
  width: 45vw;
  background: #3751FF;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #FFFFFF;

  &:hover {
    background: #FFFFFF;
    color: #3751FF;
    border: 1px solid #3751FF;
    cursor: pointer;
  }
`

export const RegisterButtonVoltar = styled.button`
  height: 34px;
  width: 150px;
  background: #3751FF;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #FFFFFF;
  margin-bottom: 30px;

  &:hover {
    background: #FFFFFF;
    color: #3751FF;
    border: 1px solid #3751FF;
    cursor: pointer;
  }
`

export const RegisterTitle = styled.h1`
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  color: #3751FF;
  margin: 12px 0;
`

export const Errors = styled.p`
  color: red;
  font-size: 12px;
  font-weight: bold;
  margin-top: 0;
`

export const RequiredFields = styled.p`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #9FA2B4;
  margin: 0;
`