import React, { Component } from "react";
import Stories from "react-insta-stories";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const burakHeading = {
  heading: "Burak Deniz",
  subheading: "burakdeniz@gmail.com",
  profileImage: "https://i.imgur.com/lq0DC3a.jpg",
};

const stories2 = [
  {
    url: "https://i.imgur.com/D0H34I7.jpg",
    type: "image",
    header: burakHeading,
    duration: 10000,
  },
  {
    url: "https://i.imgur.com/x1DUWec.jpg",
    type: "image",
    header: burakHeading,
    duration: 10000,
  },
];

const StyledStorySlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .story-image {
    width: 100%;
    height: 100%;
  }

  .story-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StorySlide = () => {
  return (
    <StyledStorySlide>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <Stories
            loop
            keyboardNavigation
            defaultInterval={8000}
            stories={stories2}
            onStoryEnd={() => console.log("story ended")}
            onAllStoriesEnd={() => console.log("story ended")}
            onStoryStart={() => console.log("story ended")}
            storyContainerStyles={{
              borderRadius: 8,
              overflow: "hidden",
              margin: "auto",
              maxWidth: "360px",
            }}
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Stories
            loop
            keyboardNavigation
            defaultInterval={8000}
            stories={stories2}
            onStoryEnd={() => console.log("story ended")}
            onAllStoriesEnd={() => console.log("story ended")}
            onStoryStart={() => console.log("story ended")}
            storyContainerStyles={{
              borderRadius: 8,
              overflow: "hidden",
              margin: "0 auto",
              maxWidth: "360px",
            }}
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Stories
            loop
            keyboardNavigation
            defaultInterval={8000}
            stories={stories2}
            onStoryEnd={() => console.log("story ended")}
            onAllStoriesEnd={() => console.log("story ended")}
            onStoryStart={() => console.log("story ended")}
            storyContainerStyles={{
              borderRadius: 8,
              overflow: "hidden",
              margin: "0 auto",
              maxWidth: "360px",
            }}
            width={"100%"}
          />
        </SwiperSlide>
      </Swiper>
    </StyledStorySlide>
  );
};

export default StorySlide;
