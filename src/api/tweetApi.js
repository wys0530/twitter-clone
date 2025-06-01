import axiosInstance from "./axiosInstance";

export const fetchTweets = () => axiosInstance.get("/tweets");
export const fetchTweetById = (userId) =>
  axiosInstance.get(`/tweets/${userId}`);
export const postTweet = (userId, content) =>
  axiosInstance.post("/tweets", { userId, content });
export const deleteTweet = (tweetId, userId) =>
  axiosInstance.delete(`/tweets/${tweetId}`, {
    headers: {
      userId,
    },
  });
