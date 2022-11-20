import { debounce } from "debounce";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import userApi from "../../api/userApi";
import { useAppDispatch } from "../../app/hooks";
import { authActions } from "../../redux/features/auth/authSlice";
import Avatar from "../Avatar/Avatar";
import Input from "../Input/Input";
import { UserType } from "../Posts/Post";

const StyledSearch = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  position: fixed;
  z-index: 2;
  background-color: white;
  transform: translateX(-100%);
  transition: all 0.2s linear;
  border-radius: 0 20px 20px 0;

  .search-input {
    padding: 8px 12px 20px 12px;
    margin-bottom: 24px;

    h4 {
      font-size: 2.4rem;
      padding: 12px 14px 36px 24px;
      margin: 8px 0;
    }

    .input {
      input {
        padding: 12px 32px 12px 16px;
      }
    }
  }

  .search-suggest {
    width: 100%;
    border-top: 2px solid rgb(219, 219, 219);
    padding: 6px 0;

    .no-data {
      font-size: 2rem;
      font-weight: 500;
      text-align: center;
      opacity: 0.6;
    }
  }
`;

const StyledAvatarInfo = styled.div`
  a {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 4px;
    cursor: pointer;
    transition: all 0.2s linear;
    padding: 12px;
    text-decoration: none;
    color: black;

    span {
      font-size: 1.8rem;
      font-weight: 500;
      margin: 0;
    }

    &:hover {
      background-color: #f3f4f6;
    }
  }
`;

const AvatarInfo = ({ user }: { user: UserType }) => {
  return (
    <StyledAvatarInfo>
      <Link to={`/${user._id}`}>
        <Avatar
          url={
            user?.profilePicture
              ? `https://bth-social-server.netlify.app/files/${user?.profilePicture}`
              : "https://img.myloview.com/stickers/default-avatar-profile-image-vector-social-media-user-icon-400-228654854.jpg"
          }
        ></Avatar>
        <span className="story-name">{user?.username}</span>
      </Link>
    </StyledAvatarInfo>
  );
};

const Search = ({ search }: { search: boolean }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [userList, setUserList] = useState<UserType[]>([]);
  const [filterList, setFilterList] = useState<UserType[]>([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await userApi.getAll();
        setUserList(res.data);
      } catch (error: any) {
        if (error.response.status === 401) {
          navigate("/login");
          dispatch(authActions.logout());
        }
      }
    }

    fetchUsers();
  }, [dispatch, navigate]);

  const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setFilterList([]);
    } else {
      setFilterList(
        userList.filter((user) => user.username.includes(e.target.value))
      );
    }
  }, 500);

  return (
    <StyledSearch
      style={{
        transform: search ? "translateX(75px)" : "",
      }}
    >
      <div className="search-input">
        <h4>Search</h4>
        <Input
          placeholder="Search"
          hasIcon
          primary
          className="input"
          onChange={handleChange}
        >
          <i className="bi bi-search"></i>
        </Input>
      </div>
      <div className="search-suggest">
        {filterList.length > 0 ? (
          filterList.map((user) => (
            <AvatarInfo user={user} key={user._id}></AvatarInfo>
          ))
        ) : (
          <div className="no-data">No Data</div>
        )}
      </div>
    </StyledSearch>
  );
};

export default Search;
