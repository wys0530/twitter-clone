import styled from "styled-components";

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getTimeAgo } from "../../time";
import DeleteModal from "./DeleteModal";

import { AiOutlineRetweet } from "react-icons/ai";
import { IoHeartOutline, IoBookmarkOutline } from "react-icons/io5";
import { RiChat1Line, RiShare2Line, RiDeleteBin5Line } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";

const TweetContainer = styled.div`
  display: flex;
  padding: 1rem;
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
  position: relative;
`;

const EllipsisWrapper = styled.div`
  position: relative;
  margin-left: auto;
`;

const ShowMenu = styled.div`
  background: black;
  border: 1px solid #2f3336;
  padding: 8px 12px;
  border-radius: 8px;
  shape-outside: 1px white;
  color: #e90b0b;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  box-shadow: 0 0 0.4rem rgba(255, 255, 255, 0.8);
  top: 120%;
  right: 0;
`;

const TweetItem = ({ tweet, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const currentUser = 2;
  const isOwner = tweet.userId === currentUser;

  const handleEllipsisClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setShowMenu(false);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(tweet.tweetId); // 상위에서 전달된 삭제 함수 호출
    setShowModal(false);
  };

  return (
    <>
      <TweetContainer
        onClick={() => navigate(`/tweet/${tweet.tweetId}`, { state: tweet })}
        style={{ cursor: "pointer" }}
      >
        <ProfileImage
          onClick={(e) => {
            e.stopPropagation(); // 트윗 클릭 이벤트 막기
            navigate(`/profile/${tweet.userId}`);
          }}
          style={{ cursor: "pointer" }}
        />
        <TweetContent>
          <UserInfo>
            <span className="username">{tweet.nickname}</span>
            <span className="userid">{tweet.handle}</span>
            <span className="dot">·</span>
            <span className="time">{getTimeAgo(tweet.createdAt)}</span>
            <EllipsisWrapper>
              <Ellipsis onClick={handleEllipsisClick}>⋯</Ellipsis>
              {isOwner && showMenu && (
                <>
                  <ShowMenu onClick={handleDeleteClick}>
                    <RiDeleteBin5Line />
                    Delete
                  </ShowMenu>
                </>
              )}
            </EllipsisWrapper>
          </UserInfo>

          <Text>{tweet.content}</Text>
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

      {showModal && (
        <DeleteModal
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
};

export default TweetItem;
