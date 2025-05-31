import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://toy-tweet.kro.kr/",
  headers: {
    //콘텐츠 타입 넣기기
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
