import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";

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

  &-react {
    cursor: pointer;

    i.fill {
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

const CommentWithReply = () => {
  const [heart, setHeart] = useState<boolean>(false);

  return (
    <StyledComment>
      <StyledCommentContent>
        <Avatar
          style={{
            width: "44px",
            height: "44px",
            flexShrink: 0,
          }}
        ></Avatar>
        <div>
          <h6>bienthanhhung</h6> need a wallpaper? heheheheheh adsawd a adsawd
          asdawd asdawd sada
          <StyledInteractive>
            <StyledTime>1w</StyledTime>
            <StyledLike>2 likes</StyledLike>
            <StyledReply>Reply</StyledReply>
          </StyledInteractive>
        </div>
      </StyledCommentContent>
      <div className="comment-react" onClick={() => setHeart(!heart)}>
        {heart ? (
          <i className="bi bi-heart-fill fill"></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}
      </div>
    </StyledComment>
  );
};

export default CommentWithReply;
