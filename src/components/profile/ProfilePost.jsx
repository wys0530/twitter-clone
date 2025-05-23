import styled from "styled-components";
import dummyTweets from "../../data/dummyTweets"; // 트윗 리스트 가져오기
import TweetItem from "../post/TweetItem";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfilePost = () => {
  const currentUser = "efub_5th_toy";

  const myTweets = dummyTweets.filter(
    (tweet) => tweet.username === currentUser
  );

  const handleDelete = (id) => {
    setTweets((prev) => prev.filter((tweet) => tweet.id !== id));
  };

  return (
    <PostContainer>
      {myTweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} onDelete={handleDelete} />
      ))}
    </PostContainer>
  );
};

export default ProfilePost;
