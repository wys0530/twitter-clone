import axiosInstance from "./axiosInstance";

export const fetchTweets = () => axiosInstance.get("/tweets");
export const fetchTweetById = (id) => axiosInstance.get(`/tweets/${id}`);
export const postTweet = (userId, content) =>
  axiosInstance.post("/tweets", { userId, content });
export const deleteTweet = (tweetId, userId, password) =>
  axiosInstance.delete(`/tweets/${tweetId}`, {
    headers: {
      userId,
      password,
    },
  });
