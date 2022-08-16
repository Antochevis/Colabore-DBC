import styled from "styled-components";

export const ContainerAddCampaign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 947px;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  border-radius: 8px;

  > h2 {
    font-weight: 700;
    font-size: 19px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.4px;
    color: #000000;
    opacity: 0.7;
    margin: 34px;
  }

  > div:last-child {
    margin: 20px 0;
  }
`

export const RegisterCampaign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;

  gap: 24px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 883px;

    > label {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #9FA2B4;
    }

    > input {
      background: #FCFDFE;
      border: 1px solid #F0F1F7;
      border-radius: 8px;
      height: 42px;
      padding: 11px 16px;
      color: #4B506D;
    }

    > select {
      background: #FCFDFE;
      border: 1px solid #F0F1F7;
      border-radius: 8px;
      height: 42px;
      padding: 11px 16px;
      color: #4B506D;
    }
  }
`
