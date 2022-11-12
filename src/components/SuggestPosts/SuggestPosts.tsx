import React from "react";
import styled from "styled-components";
import Posts from "../Posts/Posts";

const StyledSuggestPosts = styled.div`
  margin-top: 20px;
  color: #262626;

  h4 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const SuggestPosts = () => {
  return (
    <StyledSuggestPosts>
      <h4>Suggested Posts</h4>
      <Posts></Posts>
    </StyledSuggestPosts>
  );
};

export default SuggestPosts;
