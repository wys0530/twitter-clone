import styled from "styled-components";
import NavBar from "../components/common/NavBar";
import RightSideBar from "../components/common/RightSideBar";
import TweetForm from "../components/post/TweetForm";
import TweetItem from "../components/post/TweetItem";
import MainHeader from "../components/common/MainHeader";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 93vh;
  overflow: visible;
  //padding: 1rem;
  //margin: 1rem;
  //box-sizing: border-box;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
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

// const TweetListContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   overflow-y: auto;
// `;

const Home = () => {
  const dummyTweets = [
    {
      id: 1,
      username: "elonmusk",
      content: "What Earth looks like in radio frequency...",
    },
    {
      id: 2,
      username: "efub_5th_toy",
      content: "EFUB 5기 최고",
    },
    {
      id: 3,
      username: "efub_5th_toy",
      content: "EFUB 5기 최고",
    },
    {
      id: 4,
      username: "efub_5th_toy",
      content: "ggEFUB 5기 최고",
    },
    {
      id: 5,
      username: "efub_5th_toy",
      content: "EFUB 5기 최고",
    },
    {
      id: 6,
      username: "efub_5th_toy",
      content: "6 EFUB 5기 최고",
    },
    {
      id: 7,
      username: "efub_5th_toy",
      content: "akwlakr? EFUB 5기 최고 n하하",
    },
    { id: 8, username: "efub_5th_toy", content: "마지막/ EFUB 5기 최고" },
  ];

  return (
    <Layout>
      <NavBar />
      <Main>
        <MainHeader />
        <MainContainer>
          <TweetForm />
          {dummyTweets.map((tweet) => (
            <TweetItem key={tweet.id} tweet={tweet} />
          ))}
        </MainContainer>
      </Main>
      <RightSideBar />
    </Layout>
  );
};

export default Home;
