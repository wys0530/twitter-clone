import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const RightContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 88vh;
  position: sticky;
  flex-shrink: 0;
  margin-left: 2rem;
  padding: 1rem;
  //position: sticky;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 46px;
  width: 100%;
  border: 0px solid #000000;
  border-radius: 24px;
  background-color: #2f2f2f;
  color: #888888;
  padding: 0 1rem;
  gap: 0.5rem;
  box-sizing: border-box;
`;

const SubscribeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  gap: 0;
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  border-radius: 16px;
  color: white;
  border: 1px solid #2f2f2f;
  box-sizing: border-box;
`;

const SubscribeTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const SubscribeText = styled.p`
  font-size: 0.9rem;
  color: white;
  margin: 0.4rem 0;
`;

const SubscribeBtn = styled.button`
  background-color: rgb(29, 155, 240);
  color: white;
  font-weight: bold;
  padding: 9px 17px;
  border-radius: 999px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 0.5rem;
  width: fit-content;

  &:hover {
    background-color: rgb(26, 132, 202);
  }
`;

const TrendBox = styled.div`
  width: 100%;
  padding: 1rem 0rem 0rem 0rem;
  background-color: transparent;
  border-radius: 16px;
  color: white;
  border: 1px solid #2f2f2f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

const Title = styled.h3`
  margin: 0 0 1rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const TrendItem = styled.div`
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #2f3336;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;

  &:last-child {
    border-bottom: none;
    padding: 0.1rem 1rem;
  }

  &:hover {
    background-color: #1c1c1c;
    cursor: pointer;
  }
`;

const TrendTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Location = styled.p`
  font-size: 0.75rem;
  color: gray;
  margin: 0;
`;

const Topic = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.1rem 0;
  cursor: pointer;
`;

const Count = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin: 0;
`;

const Ellipsis = styled.div`
  margin-left: auto;
  font-size: 0.8rem;
  color: gray;
  cursor: pointer;
`;

const MoreText = styled.p`
  color: rgb(26, 132, 202);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0rem;
`;

const RightSideBar = () => {
  const dummyTrends = [
    {
      location: "Trending in South Korea",
      topic: "#EFUB_5기",
      count: "2,345 posts",
    },
    {
      location: "Music · Trending",
      topic: "엔시티 위시",
      count: "15k posts",
    },
    {
      location: "Trending in South Korea",
      topic: "유우시 너무",
      count: "9,012 posts",
    },
    { location: "IT · Trending", topic: "#React", count: "12.8K posts" },
    {
      location: "Trending in South Korea",
      topic: "후라이드",
      count: "2,607 posts",
    },
    { location: "Only on X", topic: "플라이업", count: "1,022 posts" },
  ];

  return (
    <RightContainer>
      <SearchBar>
        <IoSearch />
        Search
      </SearchBar>

      <SubscribeBox>
        <SubscribeTitle>Subscribe to Premium</SubscribeTitle>
        <SubscribeText>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </SubscribeText>
        <SubscribeBtn>Subscribe</SubscribeBtn>
      </SubscribeBox>
      <TrendBox>
        <Title>Trends for you</Title>
        {dummyTrends.map((trend, index) => (
          <TrendItem key={index}>
            <TrendTextBox>
              <Location>{trend.location}</Location>
              <Topic>{trend.topic}</Topic>
              <Count>{trend.count}</Count>
            </TrendTextBox>
            <Ellipsis>⋯</Ellipsis>
          </TrendItem>
        ))}

        <TrendItem>
          <MoreText>더보기</MoreText>
        </TrendItem>
      </TrendBox>
    </RightContainer>
  );
};

export default RightSideBar;
