import styled from "styled-components";
import React, { useState } from "react";

const ReplyBox = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
  padding: 1rem 1.5rem;

  border-bottom: 1.5px solid #2f3336;
  box-sizing: border-box;
`;

const ReplyInput = styled.input`
  background: transparent;
  border: none;
  color: white;
  flex: 1;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: gray;
  }
`;

const ReplyBtn = styled.button`
  background-color: #1d9bf0;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 6px 14px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-size: 0.9rem;

  &:hover {
    background-color: #1483c2;
  }
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: #aaa;
`;

const Replayform = ({ onPost }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;
    onPost(text.trim());
    setText(""); // 작성 후 비우기
  };

  return (
    <ReplyBox>
      <ProfileImg />
      <ReplyInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Post your reply"
      />
      <ReplyBtn disabled={text.trim() === ""} onClick={handleSubmit}>
        Reply
      </ReplyBtn>
    </ReplyBox>
  );
};

export default Replayform;
