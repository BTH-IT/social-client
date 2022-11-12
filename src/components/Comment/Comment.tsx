import React, { useState } from "react";
import styled from "styled-components";

const StyledComment = styled.div`
  font-size: 1.2rem;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h6 {
    display: inline;
    font-size: 1.2rem;
  }

  .comment-react {
    cursor: pointer;

    i.fill {
      color: #ed4956;
    }
  }
`;

const Comment = () => {
  const [heart, setHeart] = useState<boolean>(false);

  return (
    <StyledComment>
      <div>
        <h6>bienthanhhung</h6> good job
      </div>
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

export default Comment;
