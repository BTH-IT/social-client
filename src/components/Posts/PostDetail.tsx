import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import CommentWithReply, { StyledTime } from "../Comment/CommentWithReply";
import PostComment from "./PostComment";
import PostHeading from "./PostHeading";
import PostInfo from "./PostInfo";
import PostSlide from "./PostSlide";

const StyledInteractive = styled.div`
  border-top: 1px solid rgb(219, 219, 219);
`;

const StyledPostContentDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 482px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 0 4px 4px 0;
  background-color: white;
`;

const StyledStatus = styled.div`
  padding: 16px;
  font-size: 1.4rem;
  border-top: 1px solid rgb(219, 219, 219);
  flex: 1;
  height: 100%;
  max-height: 409px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .status-content {
    .status-content-desc {
      display: flex;
      gap: 10px;
      align-items: center;
      h6 {
        font-size: 1.4rem;
        display: inline-block;
      }
    }
  }

  .status-comments {
    margin-top: 16px;
  }
`;

const StyledPostDetail = styled.div`
  display: flex;
  justify-content: center;

  .post-detail-image {
    width: 400px;
    height: calc(100vh - 100px);
    border-radius: 4px 0 0 4px;
    overflow: hidden;
  }
`;

const PostDetail = () => {
  return (
    <StyledPostDetail>
      <div className="post-detail-image">
        <PostSlide width="100%" height="100%"></PostSlide>
      </div>
      <StyledPostContentDetail>
        <div className="post-detail-content-heading">
          <PostHeading></PostHeading>
        </div>
        <StyledStatus>
          <div className="status-content">
            <div className="status-content-desc">
              <Avatar
                style={{
                  width: "44px",
                  height: "44px",
                }}
              ></Avatar>
              <div>
                <h6>bienthanhhung</h6> need a wallpaper?
                <StyledTime>1w</StyledTime>
              </div>
            </div>
          </div>
          <div className="status-comments">
            <CommentWithReply></CommentWithReply>
            <CommentWithReply></CommentWithReply>
            <CommentWithReply></CommentWithReply>
            <CommentWithReply></CommentWithReply>
            <CommentWithReply></CommentWithReply>
            <CommentWithReply></CommentWithReply>
          </div>
        </StyledStatus>
        <StyledInteractive>
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            <PostInfo></PostInfo>
          </div>
          <PostComment></PostComment>
        </StyledInteractive>
      </StyledPostContentDetail>
    </StyledPostDetail>
  );
};

export default PostDetail;
