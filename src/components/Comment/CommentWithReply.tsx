import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import postApi from "../../api/postApi";
import userApi from "../../api/userApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authActions } from "../../redux/features/auth/authSlice";
import Avatar from "../Avatar/Avatar";
import { UserType } from "../Posts/Post";
import { CommentType } from "../Posts/PostDetail";

const StyledComment = styled.div`
  font-size: 1.2rem;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  h6 {
    display: inline-block;
    font-size: 1.2rem;
  }

  .comment-react {
    cursor: pointer;

    i.bi-heart-fill {
      color: #ed4956;
    }
  }
`;

const StyledCommentContent = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
  align-items: flex-start;
`;

const StyledInteractive = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
  color: #8e8e8e;
`;

export const StyledTime = styled.div`
  font-weight: 300;
`;

export const StyledLike = styled.div`
  font-weight: 400;
  cursor: pointer;
`;

export const StyledReply = styled.div`
  font-weight: 500;
  cursor: pointer;
`;

const CommentWithReply = ({
  postId,
  comment,
}: {
  postId: string;
  comment: CommentType;
}) => {
  const [heart, setHeart] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<UserType | null>(null);
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await userApi.get(comment.userId);
        setUser(res.data);
      } catch (error: any) {
        if (error.response.status === 401) {
          navigate("/login");
          dispatch(authActions.logout());
        }
      }
    }
    fetchUser();

    if (comment.likes && comment.likes.length > 0) {
      if (comment.likes.find((like) => like === currentUser?._id)) {
        setHeart(true);
      }
    }
  }, [comment.likes, comment.userId, currentUser?._id, dispatch, navigate]);

  return (
    <StyledComment>
      <StyledCommentContent>
        <Avatar
          style={{
            width: "44px",
            height: "44px",
            flexShrink: 0,
          }}
          url={
            currentUser?.profilePicture
              ? `https://bth-social-server.netlify.app/files/${currentUser?.profilePicture}`
              : "https://img.myloview.com/stickers/default-avatar-profile-image-vector-social-media-user-icon-400-228654854.jpg"
          }
        ></Avatar>
        <div>
          <h6>{comment.username}</h6> {comment.content}
          <StyledInteractive>
            <StyledTime>{moment(comment.createdAt).fromNow()}</StyledTime>
            <StyledLike>{comment.likes.length} likes</StyledLike>
          </StyledInteractive>
        </div>
      </StyledCommentContent>
      <div
        className="comment-react"
        onClick={async () => {
          try {
            if (currentUser) {
              await postApi.likeCommentPost(
                postId,
                currentUser._id,
                comment.id
              );

              if (heart) {
                comment.likes?.splice(
                  comment.likes?.findIndex((like) => like === currentUser?._id),
                  1
                );
              } else {
                comment.likes?.push(currentUser._id);
              }
              setHeart(!heart);
            }
          } catch (error: any) {
            if (error.response.status === 401) {
              navigate("/login");
              dispatch(authActions.logout());
            }
          }
        }}
      >
        {heart ? (
          <i className="bi bi-heart-fill"></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}
      </div>
    </StyledComment>
  );
};

export default CommentWithReply;
