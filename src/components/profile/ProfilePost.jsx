import styled from "styled-components";
import dummyTweets from "../../data/dummyTweets"; // 트윗 리스트 가져오기
import TweetItem from "../post/TweetItem";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfilePost = () => {
  const currentUser = "@mungsu";

  const myTweets = dummyTweets.filter((tweet) => tweet.handle === currentUser);

  const handleDelete = (id) => {
    setTweets((prev) => prev.filter((tweet) => tweet.userId !== id));
  };

  return (
    <PostContainer>
      {myTweets.map((tweet) => (
        <TweetItem key={tweet.tweetId} tweet={tweet} onDelete={handleDelete} />
      ))}
    </PostContainer>
  );
};

export default ProfilePost;
