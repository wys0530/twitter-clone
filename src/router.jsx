import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import TweetDetail from "./pages/TweetDetail";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/profile/:userId",
    element: <Profile />,
  },
  { path: "/tweet/:tweetId", element: <TweetDetail /> },
]);

export default router;
