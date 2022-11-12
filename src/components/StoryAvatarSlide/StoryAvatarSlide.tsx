import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Create from "../Create/Create";
import { useState } from "react";

const StyledCreateStory = styled.div`
  text-align: center;

  i {
    font-size: 4.1rem;

    @media screen and (max-width: 526px) {
      font-size: 3.2rem;
    }
  }
`;

const StoryAvatarSlide = () => {
  const [create, setCreate] = useState<boolean>(false);

  return (
    <>
      <Swiper
        spaceBetween={1}
        slidesPerView={4}
        navigation
        modules={[Navigation]}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <StyledCreateStory onClick={() => setCreate(true)}>
            <i className="bi bi-plus-circle-dotted"></i>
            <span className="story-name">Create Story</span>
          </StyledCreateStory>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/stories/123/123" className="avatar-link">
            <Avatar story></Avatar>
            <span className="story-name">Hung</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/stories/123/123" className="avatar-link">
            <Avatar story></Avatar>
            <span className="story-name">Hung</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/stories/123/123" className="avatar-link">
            <Avatar story></Avatar>
            <span className="story-name">Hung</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/stories/123/123" className="avatar-link">
            <Avatar story></Avatar>
            <span className="story-name">Hung</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/stories/123/123" className="avatar-link">
            <Avatar story></Avatar>
            <span className="story-name">Hung</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/stories/123/123" className="avatar-link">
            <Avatar story></Avatar>
            <span className="story-name">Hung</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/stories/123/123" className="avatar-link">
            <Avatar story></Avatar>
            <span className="story-name">Hung</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/stories/123/123" className="avatar-link">
            <Avatar story></Avatar>
            <span className="story-name">Hung</span>
          </Link>
        </SwiperSlide>
      </Swiper>
      <Create create={create} onClose={() => setCreate(!create)}></Create>
    </>
  );
};

export default StoryAvatarSlide;
