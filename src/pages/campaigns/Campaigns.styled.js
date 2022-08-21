import styled from "styled-components"
import { colorPrimary, colorPrimaryDark } from "../../consts";

export const FilterMeta = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    && button {
      width: 200px;
      height: 25px;
    }
  }
`;

export const UserCampaignFilter = styled.div`
    display: flex;
    height: 3.125rem;
    align-items: end;
    width: 100%;
  && button.left {
    border-top-left-radius: 8px;
  }
  && button.right {
    border-top-right-radius: 8px;
  }
  && button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    width: 240px;
    border: 1px solid #f4f4f4;
    height: 40px;
    background: #FFFFFF;
    border-bottom: 0px;
    @media(max-width: 768px) {
      width: 165px;
    }
  }
  && button:hover, button.active {
    height: 50px;
    color: #ffffff;
    background: ${colorPrimary};
    border-color: var(--color-blue);
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    cursor: pointer;
  }
`;

export const ActiveTittle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  background: linear-gradient(0deg, #F7F8FC 85%, #FFFFFF 100%);
  border-top: 1px solid #f4f4f4;
`;

export const FilterTags = styled.div`
position: relative;
padding-bottom: 1.5rem;
 && input {
  background: #FCFDFE;
  width: 100%;
  border: 1px solid #F0F1F7;
  border-radius: 8px;
  height: 3rem;
  padding: 0.8rem 1rem;
  color: #4B506D;
 }
 && input:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px #2A69BB;
 }
 && svg {
  color: ${colorPrimary};
  font-size: 1.5rem;
  position: absolute;
  top: 0.7rem;
  right: 1rem;
 }
 && svg:hover {
  cursor: pointer;
 }
`;

export const TagsContainer = styled.div`
  && > div {
    display: flex;
    gap: 5px;
    margin-top: 0.5rem;
  }
  && > div > div > span {
    background: #2A69BB;
    color: white;
    padding: 0 8px;
    border-radius: 8px;
  }
  && > div > div > span > span:hover {
   cursor: pointer;
  }
`;