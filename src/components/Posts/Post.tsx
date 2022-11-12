import React, { useState } from "react";
import Comment from "../Comment/Comment";
import PostComment from "./PostComment";
import PostHeading from "./PostHeading";
import PostInfo from "./PostInfo";
import PostSlide from "./PostSlide";
import styled from "styled-components";

const StyledPost = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid rgb(219, 219, 219);
  margin-top: 15px;

  .post-slide {
    width: 100%;
    height: 100%;
  }

  .post-content {
    padding: 0 12px;
  }

  .post-desc {
    font-size: 1.4rem;
    h6 {
      font-size: 1.4rem;
      display: inline-block;
    }
  }

  .post-show-comment {
    font-weight: 400;
    font-size: 1.4rem;
    color: #8e8e8e;
    cursor: pointer;
    margin: 4px 0;
    display: block;
  }
`;

const Post = () => {
  return (
    <>
      <StyledPost>
        <PostHeading></PostHeading>

        <div className="post-slide">
          <PostSlide width="100%" height="600px"></PostSlide>
        </div>

        <PostInfo hasModal>
          <div className="post-content">
            <div className="post-desc">
              <h6>bienthanhhung</h6> need a wallpaper?
            </div>
            <span className="post-show-comment">View all 10 comments</span>
            <div className="post-comments">
              <Comment></Comment>
            </div>
          </div>
        </PostInfo>

        <PostComment></PostComment>
      </StyledPost>
    </>
  );
};

export default Post;
