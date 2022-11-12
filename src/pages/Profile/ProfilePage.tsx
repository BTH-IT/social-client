import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

const StyledProfilePage = styled.div`
  max-width: 935px;
  width: 100%;
  margin: 0 auto 30px;
  padding: 30px 20px 0 20px;
  background-color: #fafafa;
  .profile {
    &-top {
      display: flex;
      align-items: center;
      gap: 50px;
      margin-bottom: 44px;

      @media screen and (max-width: 786px) {
        gap: 25px;
        margin-bottom: 22px;
      }
    }

    &-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      cursor: pointer;
      flex-shrink: 0;

      @media screen and (max-width: 786px) {
        width: 100px;
        height: 100px;
      }

      @media screen and (max-width: 526px) {
        width: 75px;
        height: 75px;
      }
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    &-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 2rem;
      flex: 1;
      @media screen and (max-width: 786px) {
        font-size: 1.6rem;
      }

      @media screen and (max-width: 526px) {
        font-size: 1.2rem;
      }

      &_container {
        display: flex;
        align-items: center;
        gap: 20px;

        @media screen and (max-width: 526px) {
          gap: 10px;
        }
      }
    }

    &-username {
      font-size: 3rem;
      font-weight: 300;
      @media screen and (max-width: 786px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 526px) {
        font-size: 1.4rem;
      }
    }

    &-btn-edit {
      font-size: 1.6rem;
      @media screen and (max-width: 786px) {
        font-size: 1.2rem;
      }

      @media screen and (max-width: 526px) {
        font-size: 0.8rem;
      }
    }

    &-stats {
      display: flex;
      align-items: center;
      gap: 20px;

      @media screen and (max-width: 526px) {
        gap: 10px;
        font-size: 0.8rem;
      }
    }

    &-bottom {
      border-top: 1px solid rgb(219, 219, 219);
    }

    &-nav {
      display: flex;
      justify-content: center;
      gap: 20px;

      @media screen and (max-width: 526px) {
        gap: 10px;
      }

      &_item {
        padding: 20px;
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: 500;
        display: flex;
        gap: 10px;
        border-top: 1px solid transparent;
        transition: all 0.1s linear;
        color: black;
        text-decoration: none;

        @media screen and (max-width: 526px) {
          padding: 10px;
          font-size: 1.2rem;
        }
      }

      &_item.active {
        border-color: black;
      }
    }

    &-btn {
      display: flex;
      align-items: center;
      gap: 10px;

      &-check {
        font-size: 1.6rem;
        padding: 4px 16px;
        border: 1px solid black;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 786px) {
    margin-bottom: 90px;
    padding: 20px 10px 0 10px;
  }
`;

export const StyledChangePhoto = styled.div`
  background-color: white;
  border-radius: 6px;
  h2 {
    padding: 32px 32px 16px 32px;
    border-bottom: 1px solid rgb(219, 219, 219);
    font-size: 2rem;
  }

  div {
    padding: 20px 0;
    border-bottom: 1px solid rgb(219, 219, 219);
    font-size: 1.8rem;
    text-align: center;
    cursor: pointer;
    opacity: 0.8;
  }

  div:last-child {
    border: none;
  }
`;

const ProfilePage = () => {
  const [showModalPhoto, setShowModalPhoto] = useState<boolean>(false);
  const [showModalCheck, setShowModalCheck] = useState<boolean>(false);
  const isCurrentUser = true;
  const navigator = useNavigate();

  return (
    <>
      <StyledProfilePage>
        <div className="profile-top">
          <div
            className="profile-image"
            onClick={() => setShowModalPhoto(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              alt=""
              className="profile-img"
            />
          </div>
          <div className="profile-info">
            <div className="profile-info_container">
              <span className="profile-username">bienthanhhung</span>
              {isCurrentUser ? (
                <Button
                  className="profile-btn-edit"
                  onClick={() => {
                    console.log("ss");
                    navigator("/accounts/edit");
                  }}
                >
                  Edit profile
                </Button>
              ) : (
                <div className="profile-btn">
                  <Button className="profile-btn-edit">Message</Button>
                  <i
                    onClick={() => setShowModalCheck(true)}
                    className="bi bi-person-check-fill profile-btn-check"
                  ></i>
                </div>
              )}
            </div>
            <div className="profile-stats">
              <div className="profile-posts">
                <b>0</b> posts
              </div>
              <div className="profile-followers">
                <b>19</b> followers
              </div>
              <div className="profile-followings">
                <b>20</b> followings
              </div>
            </div>
            <div className="profile-detail">
              <h5 className="profile-name">Bien Thanh Hung</h5>
              <div className="profile-desc">bien-thanh-hung.netlify.app</div>
            </div>
          </div>
        </div>
        <div className="profile-bottom">
          <div className="profile-nav">
            <NavLink
              end
              to="/:userId"
              className={({ isActive }) =>
                isActive ? `profile-nav_item active` : `profile-nav_item`
              }
            >
              <i className="bi bi-grid-3x3"></i>
              Posts
            </NavLink>

            <NavLink
              end
              to="/:userId/saved"
              className={({ isActive }) =>
                isActive ? `profile-nav_item active` : `profile-nav_item`
              }
            >
              <i className="bi bi-bookmark"></i>
              Saved
            </NavLink>

            <NavLink
              end
              to="/:userId/reels"
              className={({ isActive }) =>
                isActive ? `profile-nav_item active` : `profile-nav_item`
              }
            >
              <i className="bi bi-collection-play"></i>
              Reels
            </NavLink>
          </div>
          <Outlet></Outlet>
        </div>
      </StyledProfilePage>
      <Modal
        overlay={true}
        onClose={() => setShowModalPhoto(false)}
        visible={showModalPhoto}
      >
        <StyledChangePhoto>
          <h2>Change Profile Photo</h2>
          <div>Upload Photo</div>
          <div>Remove Current Photo</div>
          <div onClick={() => setShowModalPhoto(false)}>Cancel</div>
        </StyledChangePhoto>
      </Modal>

      <Modal
        overlay={true}
        onClose={() => setShowModalCheck(false)}
        visible={showModalCheck}
      >
        <StyledChangePhoto>
          <h2>Unfollow?</h2>
          <div>Unfollow</div>
          <div onClick={() => setShowModalCheck(false)}>Cancel</div>
        </StyledChangePhoto>
      </Modal>
    </>
  );
};

export default ProfilePage;
