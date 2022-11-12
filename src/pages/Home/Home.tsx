import React from "react";
import styled from "styled-components";
import NavMobileTop from "../../components/Nav/NavMobile/NavMobileTop";
import Posts from "../../components/Posts/Posts";
import StoryAvatarSlide from "../../components/StoryAvatarSlide/StoryAvatarSlide";
import SuggestPosts from "../../components/SuggestPosts/SuggestPosts";

const StyledHome = styled.section`
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: flex-start;
  background-color: #fafafa;
  padding-bottom: 30px;

  .home {
    flex-shrink: 0;
    width: 100%;
    max-width: 470px;
    display: inline-block;
    margin-top: 16px;

    &-slide {
      background-color: white;
      border-radius: 8px;
      border: 1px solid rgb(219, 219, 219);
      padding: 16px 0;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 60px 0 90px 0;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <div className="home">
        <NavMobileTop></NavMobileTop>
        <div className="home-slide">
          <StoryAvatarSlide></StoryAvatarSlide>
        </div>
        <div className="home-posts">
          <Posts></Posts>
          <SuggestPosts></SuggestPosts>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
