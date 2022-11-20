import Stories from "react-insta-stories";
import styled from "styled-components";
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

export interface HeaderStoryType {
  heading: string;
  subheading: string;
  profileImage: string;
}

export interface StoriesType {
  url: string;
  type: string;
  header: HeaderStoryType;
  duration?: number;
}

const StorySlide = ({ stories }: { stories: StoriesType[] }) => {
  return (
    <StyledStorySlide>
      <Stories
        loop
        keyboardNavigation
        defaultInterval={8000}
        stories={stories}
        storyContainerStyles={{
          borderRadius: 8,
          overflow: "hidden",
          margin: "0 auto",
          maxWidth: "400px",
        }}
        width={"100%"}
      />
    </StyledStorySlide>
  );
};

export default StorySlide;
