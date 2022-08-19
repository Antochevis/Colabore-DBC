import styled from "styled-components"

export const FilterMeta = styled.div`
  display: flex;
  gap: 2rem;
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
  padding: 1.5rem 0;
  gap: 2rem;
  && button {
    font-weight: 600;
    height: 2rem;
    width: 12.5rem;
    background: white;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  }
  && button:hover {
    cursor: pointer;
    background: #ffffff29;
  }
`;

export const ActiveTittle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
`;