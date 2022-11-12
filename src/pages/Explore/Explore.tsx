import React from "react";
import styled from "styled-components";
import PostGrid from "../../components/PostGrid/PostGrid";

const StyledExplore = styled.div`
  max-width: 935px;
  width: 100%;
  margin: 0 auto 30px;
  padding: 30px 20px 0 20px;

  @media screen and (max-width: 786px) {
    margin-bottom: 90px;
  }
`;

const Explore = () => {
  return (
    <StyledExplore>
      <PostGrid></PostGrid>
    </StyledExplore>
  );
};

export default Explore;
