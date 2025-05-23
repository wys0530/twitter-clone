import React, { useState } from "react";
import styled from "styled-components";

import { FaEarthAmericas } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import { RiListRadio, RiCalendarScheduleLine } from "react-icons/ri";
import { FiImage } from "react-icons/fi";
import { MdOutlineGifBox } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const FormContainer = styled.div`
  margin-top: 60px;
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #2f3336;
  color: white;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #aaa;
  margin-right: 0.8rem;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Input = styled.textarea`
  @import url("https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap");

  font-family: "Gothic A1", sans-serif;
  background: transparent;
  border: none;
  resize: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  width: 100%;
  height: 50px;
  margin-bottom: 0.5rem;

  &::placeholder {
    color: gray;
  }
`;

const ReplySettings = styled.div`
  font-size: 0.85rem;
  color: #1d9bf0;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #2f3336;
  display: ${({ visible }) => (visible ? "flex" : "none")};
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
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    background-color: #1483c2;
  }
`;

const TweetForm = ({ onPost }) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (text.trim() === "") return;
    onPost(text.trim());
    setText(""); // 작성 후 비우기
    setIsFocused(false); // 포커스도 제거
  };

  return (
    <FormContainer>
      <ProfileImage />
      <ContentArea>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What is happening?!"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <ReplySettings visible={isFocused || text.trim() !== ""}>
          <FaEarthAmericas />
          <span>Everyone can reply</span>
        </ReplySettings>
        <IconsRow>
          <IconGroup>
            <FiImage />
            <MdOutlineGifBox />
            <RiListRadio />
            <BsEmojiSmile />
            <RiCalendarScheduleLine />
            <GrLocation />
          </IconGroup>
          <PostBtn disabled={text.trim() === ""} onClick={handleSubmit}>
            Post
          </PostBtn>
        </IconsRow>
      </ContentArea>
    </FormContainer>
  );
};

export default TweetForm;
