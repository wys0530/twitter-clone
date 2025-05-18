import styled from "styled-components";
import {
  FaGlobeAsia,
  FaRegImage,
  FaRegSmile,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const FormContainer = styled.div`
  margin-top: 50px;
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #2f3336;
  color: white;
`;

const ProfileImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #aaa;
  margin-right: 1rem;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Input = styled.textarea`
  background: transparent;
  border: none;
  resize: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  width: 100%;
  height: 80px;
  margin-bottom: 0.5rem;

  &::placeholder {
    color: gray;
  }
`;

const Settings = styled.div`
  font-size: 0.85rem;
  color: #1d9bf0;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
`;

const IconsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 0.7rem;

  svg {
    color: #1d9bf0;
    cursor: pointer;
    font-size: 1.1rem;
  }
`;

const PostBtn = styled.button`
  background-color: #1d9bf0;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #1483c2;
  }
`;

const TweetForm = () => {
  return (
    <FormContainer>
      <ProfileImage />
      <ContentArea>
        <Input placeholder="What is happening?!" />
        <Settings>
          <FaGlobeAsia />
          <span>Everyone can reply</span>
        </Settings>
        <IconsRow>
          <IconGroup>
            <FaRegImage />
            <FaRegSmile />
            <FaCalendarAlt />
            <IoLocationOutline />
          </IconGroup>
          <PostBtn>Post</PostBtn>
        </IconsRow>
      </ContentArea>
    </FormContainer>
  );
};

export default TweetForm;
