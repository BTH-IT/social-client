import { createBrowserHistory } from "history";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StorySlide from "../../components/StorySlide/StorySlide";

const StyledStoriesPage = styled.div`
  background-color: #1a1a1a;
  width: 100vw;
  height: 100vh;
  position: relative;

  .story {
    &-logo {
      position: absolute;
      top: 10px;
      left: 20px;
      font-size: 3rem;
      color: white;
      text-decoration: none;
    }

    &-close {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 3rem;
      color: white;
      cursor: pointer;
    }
  }
`;

const StoriesPage = () => {
  const history = createBrowserHistory();
  return (
    <StyledStoriesPage>
      <Link to="/" className="story-logo">
        𝘽𝙏𝙃 𝙎𝙤𝙘𝙞𝙖𝙡
      </Link>
      <div className="story-close" onClick={() => history.back()}>
        <i className="bi bi-x-lg"></i>
      </div>
      <StorySlide></StorySlide>
    </StyledStoriesPage>
  );
};

export default StoriesPage;
