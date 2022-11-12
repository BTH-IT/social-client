import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Search from "../../components/Search/Search";
import NavItem from "../../components/Nav/NavItem/NavItem";
import NavLinkItem from "../../components/Nav/NavLinkItem/NavLinkItem";
import NavToggleBarItem from "../../components/Nav/NavToggleBarItem/NavToggleBarItem";
import NavLogo from "../../components/Nav/NavLogo/NavLogo";
import Notification from "../../components/Notification/Notification";
import Create from "../../components/Create/Create";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledNav = styled.div`
  padding: 8px 12px 20px 12px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  max-width: 220px;
  transition: all 0.2s linear;
  background-color: white;
  z-index: 999;

  .nav-logo-container {
    color: black;
    text-decoration: none;
  }

  .nav-logo {
    position: relative;
    font-size: 2.4rem;
    padding: 25px 12px 16px;
    margin-bottom: 20px;
    white-space: nowrap;
    transition: all 0.2s linear;
  }

  .nav-logo-icon {
    position: absolute;
    font-size: 2.4rem;
    padding: 25px 12px 16px;
    margin-bottom: 20px;
    transition: all 0.2s linear;
  }

  .nav-container {
    flex: 1;
  }

  .nav-item.active {
    font-weight: 600;

    img {
      border-color: black;
    }
  }

  .nav-item {
    display: flex;
    align-items: center;
    padding: 12px;
    margin: 8px 0;
    text-decoration: none;
    font-size: 1.8rem;
    line-height: 24px;
    opacity: 0.8;
    color: black;
    cursor: pointer;
    border-radius: 24px;
    transition: all 0.2s ease;

    i {
      opacity: 1;
      font-size: 2.4rem;
      transition: all 0.2s ease;
    }

    &-text {
      margin-left: 16px;
      transition: all 0.2s linear;
      white-space: nowrap;
    }

    &:hover {
      background-color: #f1f5f9;
      i {
        transform: scale(1.05);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledAvatar = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid transparent;
  flex-shrink: 0;
`;

const Navbar = () => {
  const navigator = useNavigate();
  const [search, setSearch] = useState<boolean>(false);
  const [noti, setNoti] = useState<boolean>(false);
  const [create, setCreate] = useState<boolean>(false);
  const toggle: boolean = search || noti;

  return (
    <>
      <StyledNav
        style={{
          width: toggle ? "74px" : "220px",
        }}
      >
        <NavLogo toggle={toggle}></NavLogo>
        <div className="nav-container">
          <NavLinkItem
            title="Home"
            to="/"
            toggle={toggle}
            onClick={() => {
              setNoti(false);
              setSearch(false);
            }}
            hasIconActive={true}
          >
            <i className="bi bi-house-door"></i>
            <i className="bi bi-house-door-fill active"></i>
          </NavLinkItem>

          <NavToggleBarItem
            title="Search"
            toggle={toggle}
            toggleItem={search}
            onToggle={() => {
              setSearch(!search);
              setNoti(false);
            }}
          >
            <i className="bi bi-search"></i>
          </NavToggleBarItem>

          <NavLinkItem
            title="Explore"
            to="/explore"
            toggle={toggle}
            onClick={() => {
              setNoti(false);
              setSearch(false);
            }}
            hasIconActive={true}
          >
            <i className="bi bi-compass"></i>
            <i className="bi bi-compass-fill active"></i>
          </NavLinkItem>

          <NavLinkItem
            title="Messages"
            to="/inbox"
            toggle={toggle}
            onClick={() => {
              setNoti(false);
              setSearch(false);
            }}
            hasIconActive={true}
          >
            <i className="active">
              <img
                src="https://img.icons8.com/ios-glyphs/512/facebook-messenger.png"
                alt=""
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
            </i>
            <i>
              <img
                src="https://img.icons8.com/material-outlined/512/facebook-messenger.png"
                alt=""
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
            </i>
          </NavLinkItem>

          <NavToggleBarItem
            title="Notifications"
            toggle={toggle}
            toggleItem={noti}
            onToggle={() => {
              setNoti(!noti);
              setSearch(false);
            }}
          >
            {noti ? (
              <i className="bi bi-heart-fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
          </NavToggleBarItem>

          <NavItem
            title="Create"
            toggle={toggle}
            onClick={() => setCreate(true)}
          >
            {create ? (
              <i className="bi bi-plus-square-fill active"></i>
            ) : (
              <i className="bi bi-plus-square"></i>
            )}
          </NavItem>

          <NavLinkItem
            title="Profile"
            to="/:userId"
            toggle={toggle}
            onClick={() => {
              setNoti(false);
              setSearch(false);
            }}
          >
            <StyledAvatar src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"></StyledAvatar>
          </NavLinkItem>
        </div>
        <NavItem
          title="Log Out"
          toggle={toggle}
          onClick={() => navigator("/login")}
        >
          <i className="bi bi-box-arrow-right"></i>
        </NavItem>
      </StyledNav>
      <Search search={search}></Search>
      <Notification noti={noti}></Notification>
      <Create create={create} onClose={() => setCreate(!create)}></Create>
    </>
  );
};

export default Navbar;