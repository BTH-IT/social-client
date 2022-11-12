import React from "react";
import styled from "styled-components";
import PostGrid from "../../components/PostGrid/PostGrid";
import Post from "../../components/Posts/Post";
import PostDetail from "../../components/Posts/PostDetail";

const StyledPostDetailPage = styled.div`
  padding: 40px 20px 0 20px;
  background-color: #fafafa;

  @media screen and (max-width: 786px) {
    padding-top: 20px;
    padding-bottom: 90px;
  }
`;

const StyledPostDetailSeparate = styled.div`
  margin-top: 48px;
  border-top: 1px solid rgb(219, 219, 219);
`;

const StyledMorePost = styled.div`
  padding-top: 60px;

  .more-post-heading {
    color: rgb(38, 38, 38);
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

const StyledPostDetailPC = styled.div`
  @media screen and (max-width: 786px) {
    display: none;
  }
`;

const StyledPostDetailMobile = styled.div`
  @media screen and (min-width: 786px) {
    display: none;
  }
`;

const PostDetailPage = () => {
  return (
    <StyledPostDetailPage>
      <StyledPostDetailPC>
        <PostDetail></PostDetail>
      </StyledPostDetailPC>

      <StyledPostDetailMobile>
        <Post></Post>
      </StyledPostDetailMobile>

      <StyledPostDetailSeparate></StyledPostDetailSeparate>

      <StyledMorePost>
        <div className="more-post-heading">
          More posts from <b>bienthanhhung</b>
        </div>
        <PostGrid></PostGrid>
      </StyledMorePost>
    </StyledPostDetailPage>
  );
};

export default PostDetailPage;
