import styled from "styled-components";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaShareSquare,
} from "react-icons/fa";

const TweetContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1.25px solid #2f3336;
  color: white;
`;

const ProfileImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #aaa;
  margin-right: 1rem;
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
  margin-bottom: 0.25rem;

  span {
    font-size: 0.9rem;
  }

  .username {
    font-weight: bold;
  }

  .userid {
    color: gray;
  }

  .dot {
    margin: 0 4px;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const InteractionRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin-top: 0.5rem;

  svg {
    color: gray;
    cursor: pointer;

    &:hover {
      color: #1d9bf0;
    }
  }
`;

const TweetItem = ({ tweet }) => {
  return (
    <TweetContainer>
      <ProfileImage />
      <TweetContent>
        <UserInfo>
          <span className="username">{tweet.username}</span>
          <span className="userid">@{tweet.username}</span>
          <span className="dot">·</span>
          <span>2h</span>
        </UserInfo>
        <Text>{tweet.content}</Text>
        <InteractionRow>
          <FaRegComment />
          <FaRetweet />
          <FaRegHeart />
          <FaShareSquare />
        </InteractionRow>
      </TweetContent>
    </TweetContainer>
  );
};

export default TweetItem;
