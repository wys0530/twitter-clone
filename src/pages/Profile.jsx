import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/common/NavBar";
import RightSideBar from "../components/common/RightSideBar";
import Layout from "../components/common/Layout";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileBackHeader from "../components/profile/ProfileBackHeader";
import ProfilePost from "../components/profile/ProfilePost";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
  width: 600px;
  height: 100%;
  border-left: 1.25px solid #2f3336;
  border-right: 1.25px solid #2f3336;
  color: white;
  box-sizing: border-box;

  //스크롤바 숨기기
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const Profile = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <Main>
          <ProfileBackHeader />
          <MainContainer>
            <ProfileHeader />
            <ProfilePost />
          </MainContainer>
        </Main>
        <RightSideBar />
      </Layout>
    </>
  );
};

export default Profile;
