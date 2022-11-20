import React, { useRef, useState } from "react";
import styled from "styled-components";
import { debounce } from "debounce";
import postApi from "../../api/postApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authActions } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

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
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 6px;
    font-size: 1.6rem;
    padding: 12px 16px;
    color: rgb(38, 38, 38);
    font-weight: 200;
    display: block;
    padding: 10px;
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

export interface CommentType {
  username: string;
  content: string;
  parentId?: string;
  userId: string;
}

const PostComment = ({ postId }: { postId: string }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const postBtnRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [content, setContent] = useState<string>("");

  const handleTyping = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).value) {
      (postBtnRef.current as HTMLDivElement).classList.remove("disabled");
    } else {
      (postBtnRef.current as HTMLDivElement).classList.add("disabled");
    }

    setContent((e.target as HTMLInputElement).value);
  }, 100);

  const handlePostComment = async () => {
    if (!content) return;

    if (currentUser?.username && currentUser?._id) {
      const data = {
        username: currentUser.username,
        content: content,
        parentId: undefined,
        userId: currentUser._id,
      };

      try {
        await postApi.commentPost(postId, data);
        (inputRef.current as HTMLInputElement).value = "";
        setContent("");
      } catch (error: any) {
        if (error.response.status === 401) {
          navigate("/login");
          dispatch(authActions.logout());
        }
      }
    }
  };

  return (
    <StyledPostComment>
      <input
        placeholder="Add a comment..."
        className="post-input"
        onChange={handleTyping}
        ref={inputRef}
      />
      <div
        className="post-comment-btn disabled"
        ref={postBtnRef}
        onClick={handlePostComment}
      >
        Post
      </div>
    </StyledPostComment>
  );
};

export default PostComment;
