import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/common/NavBar";
import RightSideBar from "../components/common/RightSideBar";
import Layout from "../components/common/Layout";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileBackHeader from "../components/profile/ProfileBackHeader";
import ProfilePost from "../components/profile/ProfilePost";
import { fetchUserById, fetchTweets } from "../api/tweetApi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const [userTweets, setUserTweets] = useState([]);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userRes = await fetchUserById(userId);
        console.log("👉 userId (from URL):", userId);
        console.log("✅ userRes.data:", userRes.data);
        setUser(userRes.data);

        const tweetRes = await fetchTweets(); // 전체 트윗
        console.log("📦 전체 트윗:", tweetRes.data.tweets);

        const filtered = tweetRes.data.tweets.filter(
          (tweet) => tweet.userId === Number(userId)
        );

        console.log("🎯 필터링된 트윗:", filtered);
        setUserTweets(filtered);
      } catch (err) {
        console.error("유저 데이터 불러오기 실패:", err);
      }
    };

    loadUserData();
  }, [userId]);

  const handleDelete = (id) => {
    setUserTweets((prev) => prev.filter((tweet) => tweet.tweetId !== id));
  };

  return (
    <>
      <Layout>
        <NavBar />
        <Main>
          <ProfileBackHeader
            nickName={user.nickname}
            postCount={userTweets.length}
          />
          <MainContainer>
            <ProfileHeader user={user} />
            <ProfilePost tweets={userTweets} onDelete={handleDelete} />
          </MainContainer>
        </Main>
        <RightSideBar />
      </Layout>
    </>
  );
};

export default Profile;
