import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { deleteTweet } from "../api/tweetApi";

import NavBar from "../components/common/NavBar";
import RightSideBar from "../components/common/RightSideBar";
import Layout from "../components/common/Layout";
import DetailBackHeader from "../components/post/DetailBackHeader";
import Replayform from "../components/post/Replyform";
import ReplyItem from "../components/post/ReplyItem";
import DeleteModal from "../components/post/DeleteModal";

import { RiChat1Line, RiShare2Line, RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoHeartOutline, IoBookmarkOutline } from "react-icons/io5";
import { IoMdStats } from "react-icons/io";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

const TweetContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem 1.3rem 0 1.3rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 0;
  box-sizing: border-box;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: #aaa;
`;

const UserName = styled.div`
  font-size: 1.05rem;
  font-weight: bold;
`;

const UserId = styled.div`
  font-size: 0.9rem;
  color: gray;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  margin-left: 1rem;
`;

const Ellipsis = styled.div`
  margin-left: auto;
  font-size: 1rem;
  font-weight: bold;
  color: gray;
  cursor: pointer;
`;

const Timestamp = styled.div`
  color: gray;
  font-size: 14.5px;
  margin: 0.5rem 0;
  display: flex;
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
  padding: 0.6rem 0;
  border-top: 1.5px solid #2f3336;
  border-bottom: 1.5px solid #2f3336;
  box-sizing: border-box;

  svg {
    font-size: 22px;

    color: gray;
    cursor: pointer;

    &:hover {
      color: #1d9bf0;
    }
  }
`;

const Statistic = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.7rem 0;
  border-top: 1.5px solid #2f3336;
  color: gray;
  cursor: pointer;
  gap: 0.7rem;
  box-sizing: border-box;

  span {
    font-size: 13px;
  }

  svg {
    font-size: 18px;
  }

  &:hover {
    svg,
    span {
      color: #1d9bf0;
    }
  }
`;

const formatFullTime = (dateString) => {
  const date = new Date(dateString);

  const time = date.toLocaleTimeString("en", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const fullDate = date.toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `${time} · ${fullDate}`;
};

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

const TweetDetail = () => {
  const { state: tweet } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [replies, setReplies] = useState([]);
  const navigate = useNavigate();
  const currentUser = 2;

  const isOwner = tweet.userId === currentUser;

  const handleAddReply = (text) => {
    const newReply = {
      id: replies.length + 1,
      username: "멍수",
      content: text,
      createdAt: new Date().toISOString(),
    };
    setReplies([newReply, ...replies]);
  };

  if (!tweet) return <div>트윗을 찾을 수 없습니다.</div>;

  const handleEllipsisClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setShowMenu(false);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteTweet(tweet.tweetId, currentUser);
      setShowModal(false);
      navigate("/", { state: { deletedId: tweet.tweetId } });
    } catch (err) {
      console.error("트윗 삭제 실패:", err);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <Layout>
      <NavBar />
      <Main>
        <DetailBackHeader>Post</DetailBackHeader>
        <MainContainer>
          <TweetContent>
            <UserInfo>
              <ProfileImage
                onClick={(e) => {
                  e.stopPropagation(); // 트윗 클릭 이벤트 막기
                  navigate(`/profile/${tweet.userId}`);
                }}
                style={{ cursor: "pointer" }}
              />
              <ProfileText>
                <UserName>{tweet.nickname}</UserName>
                <UserId>{tweet.handle}</UserId>
              </ProfileText>
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
            <Timestamp>{formatFullTime(tweet.createdAt)}</Timestamp>

            <Statistic>
              <IoMdStats />
              <span>View post engagements</span>
            </Statistic>
            <InteractionRow>
              <RiChat1Line style={{ transform: "scaleX(-1)" }} />
              <AiOutlineRetweet />
              <IoHeartOutline />
              <IoBookmarkOutline />
              <RiShare2Line />
            </InteractionRow>
          </TweetContent>
          <Replayform onPost={handleAddReply} />

          {replies.map((reply) => (
            <ReplyItem key={reply.id} reply={reply} />
          ))}
        </MainContainer>
      </Main>
      <RightSideBar />

      {showModal && (
        <DeleteModal
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </Layout>
  );
};

export default TweetDetail;
