import styled from "styled-components";
import dummyTweets from "../../data/dummyTweets"; // 트윗 리스트 가져오기
import TweetItem from "../post/TweetItem";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfilePost = ({ tweets, onDelete }) => {
  const [myTweets, setMyTweets] = useState([]);
  const currentUser = "2";

  useEffect(() => {
    setMyTweets(tweets);
  }, [tweets]);

  return (
    <PostContainer>
      {myTweets.map((tweet) => (
        <TweetItem key={tweet.tweetId} tweet={tweet} onDelete={onDelete} />
      ))}
    </PostContainer>
  );
};

export default ProfilePost;
