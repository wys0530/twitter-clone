import styled from "styled-components";
import { getTimeAgo } from "../../time";

import { AiOutlineRetweet } from "react-icons/ai";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import { RiChat1Line, RiShare2Line } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";

const TweetContainer = styled.div`
  display: flex;
  padding: 1rem 1.3rem;
  border-bottom: 1.25px solid #2f3336;
  color: white;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #aaa;
  margin-right: 0.8rem;
`;

const TweetContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.1rem;

  span {
    font-size: 0.9rem;
  }

  .username {
    font-weight: bold;
    font-size: 1.05rem;
  }

  .userid {
    color: gray;
  }

  .dot {
    margin: 0 1px;
    color: gray;
  }

  .time {
    color: gray;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 0.4rem 0;
  //display: flex;
  text-align: left;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const InteractionRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;

  svg {
    font-size: 18px;

    color: gray;
    cursor: pointer;

    &:hover {
      color: #1d9bf0;
    }
  }
`;

const Group = styled.div`
  display: flex;
  gap: 20px;
`;

const Ellipsis = styled.div`
  margin-left: auto;
  font-size: 1rem;
  font-weight: bold;
  color: gray;
  cursor: pointer;
`;

const ReplyItem = ({ reply }) => {
  return (
    <TweetContainer>
      <ProfileImage />
      <TweetContent>
        <UserInfo>
          <span className="username">{reply.username}</span>
          <span className="userid">@{reply.username}</span>
          <span className="dot">·</span>
          <span className="time">{getTimeAgo(reply.createdAt)}</span>
          <Ellipsis>⋯</Ellipsis>
        </UserInfo>

        <Text>{reply.content}</Text>
        <InteractionRow>
          <RiChat1Line style={{ transform: "scaleX(-1)" }} />
          <AiOutlineRetweet />
          <IoHeartOutline />
          <IoMdStats />
          <Group>
            <IoBookmarkOutline />
            <RiShare2Line />
          </Group>
        </InteractionRow>
      </TweetContent>
    </TweetContainer>
  );
};

export default ReplyItem;
