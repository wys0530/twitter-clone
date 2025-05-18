import styled from "styled-components";

const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
  height: 50px;
  width: 600px;
  border: 1.25px solid #2f3336;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.694);
  backdrop-filter: blur(10px);
  position: absolute;
`;

const MainHeaderLeft = styled.div`
  display: flex;
  padding: 10px 0;
  font-weight: 600;
  border-bottom: 5px solid rgb(29, 155, 240);
`;

const MainHeaderRight = styled.div`
  display: flex;
  padding: 10px 0;
  color: gray;
  font-weight: 600;
  border-bottom: 4px solid transparent;
`;

const MainHeader = () => {
  return (
    <MainHeaderContainer>
      <MainHeaderLeft>For you</MainHeaderLeft>
      <MainHeaderRight>Following</MainHeaderRight>
    </MainHeaderContainer>
  );
};

export default MainHeader;
