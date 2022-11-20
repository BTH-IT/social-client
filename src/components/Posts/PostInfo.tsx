import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostModal from "./PostModal";
import moment from "moment";
import postApi from "../../api/postApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PostType } from "./Post";
import { authActions } from "../../redux/features/auth/authSlice";

const StyledPostInteractive = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px 6px;
  margin: 4px 0 0;

  i {
    font-size: 22px;
    padding: 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  i.fill {
    &:hover {
      opacity: 1;
    }
  }

  i.bi-heart-fill {
    color: #ed4956;
  }

  .post-save {
    margin-right: -8px;
  }
`;

const StyledReact = styled.div`
  display: flex;
  align-items: center;
  margin-left: -8px;
`;

const StyledLikes = styled.div`
  margin: 0 0 8px;
  padding: 0 12px;
  font-size: 1.4rem;
  font-weight: 500;
`;

const StyledTime = styled.div`
  padding: 0 12px;
  font-size: 1rem;
  color: #8e8e8e;
  margin-bottom: 8px;
`;

const PostInfo = ({
  children,
  hasModal,
  post,
}: {
  children?: React.ReactNode;
  hasModal?: true | false;
  post: PostType;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [heart, setHeart] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const currentUser = useAppSelector((state) => state.auth.currentUser);

  useEffect(() => {
    if (post.likes && post.likes.length > 0) {
      if (post.likes.find((like) => like === currentUser?._id)) {
        setHeart(true);
      }
    }

    if (post.saved && post.saved.length > 0) {
      if (post.saved.find((save) => save === currentUser?._id)) {
        setSave(true);
      }
    }
  }, [currentUser?._id, post.likes, post.saved]);

  return (
    <>
      <StyledPostInteractive>
        <StyledReact>
          <div
            onClick={async () => {
              try {
                if (currentUser) {
                  if (post._id) {
                    await postApi.likePost(post._id, currentUser._id);
                  }

                  if (heart) {
                    post.likes?.splice(
                      post.likes?.findIndex(
                        (like) => like === currentUser?._id
                      ),
                      1
                    );
                  } else {
                    post.likes?.push(currentUser._id);
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
              <i className="bi bi-heart-fill fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
          </div>

          {document.body.clientWidth <= 1024 ? (
            <i
              className="bi bi-chat"
              style={{
                transform: "scaleX(-1)",
                display: "inline-block",
              }}
              onClick={() => {
                navigate(`/p/${post._id}`);
              }}
            ></i>
          ) : (
            <i
              className="bi bi-chat"
              style={{
                transform: "scaleX(-1)",
                display: "inline-block",
              }}
              onClick={() => {
                setShow(true);
                document.body.classList.add("stop-scrolling");
              }}
            ></i>
          )}
        </StyledReact>
        <div
          className="post-save"
          onClick={async () => {
            try {
              if (currentUser) {
                if (post._id) {
                  await postApi.savePost(post._id, currentUser._id);
                }

                if (save) {
                  post.saved?.splice(
                    post.saved?.findIndex((save) => save === currentUser?._id),
                    1
                  );
                } else {
                  post.saved?.push(currentUser._id);
                }
                setSave(!save);
              }
            } catch (error: any) {
              if (error.response.status === 401) {
                navigate("/login");
                dispatch(authActions.logout());
              }
            }
          }}
        >
          {save ? (
            <i className="bi bi-bookmark-fill fill"></i>
          ) : (
            <i className="bi bi-bookmark"></i>
          )}
        </div>
      </StyledPostInteractive>
      <StyledLikes>{post.likes?.length} likes</StyledLikes>
      {children}
      <StyledTime>{moment(post.createdAt).fromNow()}</StyledTime>
      {hasModal ? (
        <PostModal
          post={post}
          show={show}
          onClose={() => {
            setShow(false);
            document.body.classList.remove("stop-scrolling");
          }}
        ></PostModal>
      ) : null}
    </>
  );
};

export default PostInfo;
