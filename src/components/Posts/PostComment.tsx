import React, { useRef } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
// import "./PostComment.scss";

const StyledPostComment = styled.div`
  border-top: 2px solid rgb(239, 239, 239);
  color: rgb(142, 142, 142);
  padding: 12px 0;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;

  .post-input {
    flex: 1;
  }

  .post-comment-btn {
    color: rgb(0, 149, 246);
    font-weight: 500;
    font-size: 1.4rem;
    padding-right: 10px;
    cursor: pointer;
    &.disabled {
      opacity: 0.6;
      cursor: default;
    }
  }
`;

const PostComment = () => {
  const postBtnRef = useRef<HTMLDivElement | null>(null);

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).value) {
      (postBtnRef.current as HTMLDivElement).classList.remove("disabled");
    } else {
      (postBtnRef.current as HTMLDivElement).classList.add("disabled");
    }
  };

  return (
    <StyledPostComment>
      <Input
        placeholder="Add a comment..."
        className="post-input"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTyping(e)}
      />
      <div className="post-comment-btn disabled" ref={postBtnRef}>
        Post
      </div>
    </StyledPostComment>
  );
};

export default PostComment;
