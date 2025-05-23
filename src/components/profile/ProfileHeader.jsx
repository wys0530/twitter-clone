import styled from "styled-components";
import { PiCalendarDots } from "react-icons/pi";

const Banner = styled.div`
  height: 200px;
  background-color: #2f3336;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: -70px;
`;

const ProfileImage = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #aaa;
  border: 4px solid black;
`;

const EditButton = styled.button`
  padding: 6px 16px;
  border-radius: 20px;
  background-color: transparent;
  border: 1.4px solid #404040;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 4rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.3rem;
  padding: 1rem;
`;

const DisplayName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const UserId = styled.span`
  color: gray;
  font-size: 0.9rem;
`;

const JoinedDate = styled.div`
  color: gray;
  font-size: 0.9rem;
  margin: 0.7rem 0 0.4rem 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 1.1rem;
  }
`;

const FollowInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: gray;

  strong {
    color: white;
  }
`;

const TabMenu = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #2f3336;
  margin-top: 0.5rem;
`;

const Wrapper = styled.div``;

const Tab = styled.div`
  text-align: center;
  padding: 0.9rem 0.3rem;
  color: ${({ active }) => (active ? "white" : "gray")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  border-bottom: ${({ active }) => (active ? "3px solid #1d9bf0" : "none")};
  cursor: pointer;
`;

const ProfileHeader = () => {
  return (
    <>
      <Wrapper>
        <Banner />
        <ProfileSection>
          <ProfileImage />
          <EditButton>Edit profile</EditButton>
        </ProfileSection>
        <UserInfo>
          <DisplayName>이퍼비</DisplayName>
          <UserId>@efub_5th_toy</UserId>
          <JoinedDate>
            <PiCalendarDots /> Joined January 2024
          </JoinedDate>
          <FollowInfo>
            <span>
              <strong>0</strong> Following
            </span>
            <span>
              <strong>0</strong> Followers
            </span>
          </FollowInfo>
        </UserInfo>
        <TabMenu>
          <Tab active>Posts</Tab>
          <Tab>Replies</Tab>
          <Tab>Highlights</Tab>
          <Tab>Articles</Tab>
          <Tab>Media</Tab>
          <Tab>Likes</Tab>
        </TabMenu>
      </Wrapper>
    </>
  );
};

export default ProfileHeader;
