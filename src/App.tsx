import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./layouts/Main/Main";
import Home from "./pages/Home/Home";
import PostDetailPage from "./pages/PostDetail/PostDetailPage";
import "./App.scss";
import Messenger from "./pages/Messenger/Messenger";
import ProfilePage from "./pages/Profile/ProfilePage";
import PostGrid from "./components/PostGrid/PostGrid";
import Explore from "./pages/Explore/Explore";
import EditAccount from "./pages/EditAccount/EditAccount";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import StoriesPage from "./pages/Stories/StoriesPage";
import NotificationPage from "./pages/Notification/NotificationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/inbox" element={<Messenger />}></Route>
          <Route path="/:userId/" element={<ProfilePage />}>
            <Route path="/:userId/" element={<PostGrid />}></Route>
            <Route path="/:userId/saved" element={<PostGrid />}></Route>
            <Route path="/:userId/reels" element={<PostGrid />}></Route>
          </Route>
          <Route path="/accounts/edit" element={<EditAccount />}></Route>
          <Route path="/p/:postId" element={<PostDetailPage />}></Route>
          <Route
            path="/accounts/notification"
            element={<NotificationPage />}
          ></Route>
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/stories/:userId/:storyId"
          element={<StoriesPage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
