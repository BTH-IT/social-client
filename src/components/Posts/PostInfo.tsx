import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostModal from "./PostModal";

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
}: {
  children?: React.ReactNode;
  hasModal?: true | false;
}) => {
  const navigator = useNavigate();
  const [heart, setHeart] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <StyledPostInteractive>
        <StyledReact>
          <div onClick={() => setHeart(!heart)}>
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
                navigator("/p/:id");
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
        <div className="post-save" onClick={() => setSave(!save)}>
          {save ? (
            <i className="bi bi-bookmark-fill fill"></i>
          ) : (
            <i className="bi bi-bookmark"></i>
          )}
        </div>
      </StyledPostInteractive>
      <StyledLikes>2930 likes</StyledLikes>
      {children}
      <StyledTime>2 day ago</StyledTime>
      {hasModal ? (
        <PostModal
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
