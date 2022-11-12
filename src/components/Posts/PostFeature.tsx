import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface FeaturePostProps {
  onClose: () => void;
}

const StyledFeaturePost = styled.div`
  border: none;
  background-color: white;
  border-radius: 6px;
  width: 400px;
  font-weight: 500;
  font-size: 1.6rem;
  color: #262626;

  div,
  a {
    text-align: center;
    padding: 14px 0;
    border-top: 1px solid rgb(219, 219, 219);
    border-bottom: 1px solid rgb(219, 219, 219);
    opacity: 0.8;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    display: block;
  }

  li:last-child {
    border-bottom: none;
  }

  li:first-child {
    border-top: none;
  }

  @media screen and (max-width: 526px) {
    width: 250px;
  }
`;

const PostFeature = ({ onClose }: FeaturePostProps) => {
  return (
    <StyledFeaturePost onClick={onClose}>
      <div>Unfollow</div>
      <div>Add to favorites</div>
      <Link to="/p/1231">Go to post</Link>
      <div>Copy link</div>
      <div>Cancel</div>
    </StyledFeaturePost>
  );
};

export default PostFeature;
