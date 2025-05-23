import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ProfileBackHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  width: 600px;
  border: 1.25px solid #2f3336;
  border-bottom: none;
  box-sizing: border-box;
  background-color: transparent;
  color: white;
  font-weight: bold;
  padding-left: 1rem;
  gap: 1.5rem;
  font-size: 20px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const DisplayName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const PostCount = styled.span`
  font-size: 0.8rem;
  color: gray;
  font-weight: normal;
`;

const ProfileBackHeader = () => {
  return (
    <>
      <ProfileBackHeaderContainer>
        <NavLink to="/" style={{ color: "white" }}>
          <IoArrowBack />
        </NavLink>
        <TextBox>
          <DisplayName>이퍼비</DisplayName>
          <PostCount>2 posts</PostCount>
        </TextBox>
      </ProfileBackHeaderContainer>
    </>
  );
};

export default ProfileBackHeader;
