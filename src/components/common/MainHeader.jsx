import styled from "styled-components";
import { TbSettings } from "react-icons/tb";

const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 600px;
  border: 1.25px solid #2f3336;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.694);
  backdrop-filter: blur(10px);
  position: absolute;
  z-index: 999;
`;

const TabGroup = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 560px;
`;

const MainHeaderLeft = styled.div`
  display: flex;
  padding: 15px 0;
  font-weight: 600;
  border-bottom: 5px solid rgb(29, 155, 240);
`;

const MainHeaderRight = styled.div`
  display: flex;
  padding: 15px 0;
  color: gray;
  font-weight: 600;
  border-bottom: 4px solid transparent;
`;

const Settings = styled(TbSettings)`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 23px;
  margin: 0 18.5px;
`;

const MainHeader = () => {
  return (
    <MainHeaderContainer>
      <TabGroup>
        <MainHeaderLeft>For you</MainHeaderLeft>
        <MainHeaderRight>Following</MainHeaderRight>
      </TabGroup>
      <Settings />
    </MainHeaderContainer>
  );
};

export default MainHeader;
