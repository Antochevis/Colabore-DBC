import styled from "styled-components";


export const DonorsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DonorsList = styled.div`
  min-width: 420px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`

export const DonorsListTitle = styled.h3`
  display: flex;
  justify-content: center ;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid #DFE0EB;
`

export const DonorsInfos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:24px;
  border-bottom: 1px solid #DFE0EB;
  margin-bottom: 20px;
  padding-bottom: 20px;

  > img {
    width: 70px;
    clip-path: circle();
  }

  > div {
    > p {
      margin: 5px 0;
    }
  }
`
