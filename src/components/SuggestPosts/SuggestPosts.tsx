import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import postApi from "../../api/postApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authActions } from "../../redux/features/auth/authSlice";
import Post, { PostType } from "../Posts/Post";

const StyledSuggestPosts = styled.div`
  margin-top: 20px;
  color: #262626;

  h4 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const SuggestPosts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const [postList, setPostList] = useState<PostType[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await postApi.getAllPost();
        setPostList(res.data);
      } catch (error: any) {
        if (error.response.status === 401) {
          navigate("/login");
          dispatch(authActions.logout());
        }
      }
    }
    fetchPosts();
  }, [currentUser?._id, dispatch, navigate]);

  return (
    <StyledSuggestPosts>
      <h4>Suggested Posts</h4>
      {postList.length > 0 && postList.map((post) => <Post post={post}></Post>)}
    </StyledSuggestPosts>
  );
};

export default SuggestPosts;
