import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import NavBar from "../components/common/NavBar";
import RightSideBar from "../components/common/RightSideBar";
import TweetForm from "../components/post/TweetForm";
import TweetItem from "../components/post/TweetItem";
import MainHeader from "../components/common/MainHeader";
import Layout from "../components/common/Layout";
import dummyTweets from "../data/dummyTweets";

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

const Home = () => {
  const [tweets, setTweets] = useState(dummyTweets);
  const location = useLocation();

  useEffect(() => {
    const deletedId = location.state?.deletedId;
    if (deletedId) {
      setTweets((prev) => prev.filter((tweet) => tweet.id !== deletedId));
    }
  }, [location.state]);

  const handleAddTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      username: "efub_5th_toy",
      content: text,
      createdAt: new Date().toISOString(),
    };
    setTweets([newTweet, ...tweets]); // 위에 새 트윗 추가
  };

  const handleDelete = (id) => {
    setTweets((prev) => prev.filter((tweet) => tweet.id !== id));
  };

  return (
    <Layout>
      <NavBar />
      <Main>
        <MainHeader />
        <MainContainer>
          <TweetForm onPost={handleAddTweet} />
          {tweets.map((tweet) => (
            <TweetItem key={tweet.id} tweet={tweet} onDelete={handleDelete} />
          ))}
        </MainContainer>
      </Main>
      <RightSideBar />
    </Layout>
  );
};

export default Home;
