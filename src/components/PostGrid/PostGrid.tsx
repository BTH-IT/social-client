import React from "react";
import styled from "styled-components";

const StyledPostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10px;
  cursor: pointer;

  .profile-grid {
    &_item {
      width: 100%;
      height: 293px;
      transition: all 0.2s ease;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  @media screen and (max-width: 526px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 426px) {
    grid-template-columns: repeat(1, auto);
  }
`;

const PostGrid = () => {
  return (
    <StyledPostGrid>
      <div className="profile-grid_item">
        <img
          src="https://images.unsplash.com/photo-1668069574922-bca50880fd70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div className="profile-grid_item">
        <img
          src="https://images.unsplash.com/photo-1668069574922-bca50880fd70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div className="profile-grid_item">
        <img
          src="https://images.unsplash.com/photo-1668069574922-bca50880fd70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div className="profile-grid_item">
        <img
          src="https://images.unsplash.com/photo-1668069574922-bca50880fd70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div className="profile-grid_item">
        <img
          src="https://images.unsplash.com/photo-1668069574922-bca50880fd70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
    </StyledPostGrid>
  );
};

export default PostGrid;
