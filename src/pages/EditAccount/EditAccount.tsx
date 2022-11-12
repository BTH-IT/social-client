import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Modal from "../../components/Modal/Modal";
import { StyledChangePhoto } from "../Profile/ProfilePage";

const StyledEditAccount = styled.div`
  max-width: 935px;
  width: 100%;
  margin: 0 auto 30px;
  padding: 30px 20px 0 20px;
  background-color: #fafafa;

  @media screen and (max-width: 786px) {
    margin-bottom: 90px;
  }
  .edit {
    &-form {
      width: 100%;
      height: 100%;
      background-color: white;
      border: 1px solid rgb(219, 219, 219);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      padding: 0px 20px 30px 20px;
    }

    &-avatar {
      display: flex;
      gap: 20px;
      padding-top: 44px;
      align-items: center;

      &_name {
        font-size: 2.4rem;
      }
    }

    &-image {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      cursor: pointer;
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    &-name,
    &-username,
    &-password,
    &-bio,
    &-email,
    &-phone,
    &-gender {
      width: 100%;
      max-width: 500px;
      font-size: 2rem;
    }

    &-label {
      margin-bottom: 10px;
      display: block;
    }

    &-input {
      input {
        border: 1px solid rgb(219, 219, 219);
        transition: all 0.2s linear;

        &:focus {
          border-color: black;
        }
      }
    }

    &-textarea {
      resize: none;
      display: block;
      width: 100% !important;
      border: 1px solid rgb(219, 219, 219);
      outline: none;
      transition: all 0.2s linear;
      border-radius: 6px;
      font-size: 2rem;
      padding: 10px;

      &:focus {
        border-color: black;
      }
    }

    &-select {
      width: 100%;
      padding: 10px;
      border-radius: 6px;
      cursor: pointer;
      outline: none;
      font-size: 1.6rem;
      border: 1px solid rgb(219, 219, 219);
    }
  }
`;

const EditAccount = () => {
  const [showModalPhoto, setShowModalPhoto] = useState<boolean>(false);

  return (
    <>
      <StyledEditAccount>
        <form className="edit-form">
          <div className="edit-avatar">
            <div className="edit-image" onClick={() => setShowModalPhoto(true)}>
              <img
                src="https://images.unsplash.com/photo-1668056114373-6798f930420b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=397&q=80"
                alt=""
                className="edit-img"
              />
            </div>
            <div className="edit-avatar_name">bienthanhhung</div>
          </div>
          <div className="edit-name">
            <label htmlFor="name" className="edit-label">
              Name
            </label>
            <Input id="name" placeholder="Name" className="edit-input"></Input>
          </div>
          <div className="edit-username">
            <label htmlFor="username" className="edit-label">
              Username
            </label>
            <Input
              id="username"
              placeholder="username"
              className="edit-input"
            ></Input>
          </div>
          <div className="edit-password">
            <label htmlFor="password" className="edit-label">
              Password
            </label>
            <Input
              id="password"
              placeholder="password"
              className="edit-input"
              type="password"
            ></Input>
          </div>
          <div className="edit-bio">
            <label htmlFor="bio" className="edit-label">
              Bio
            </label>
            <textarea
              name="bio"
              id="bio"
              className="edit-textarea"
              placeholder="Typing your bio..."
            ></textarea>
          </div>
          <div className="edit-email">
            <label htmlFor="email" className="edit-label">
              Email
            </label>
            <Input
              id="email"
              placeholder="Email"
              className="edit-input"
              type="email"
            ></Input>
          </div>
          <div className="edit-phone">
            <label htmlFor="phone" className="edit-label">
              Phone number
            </label>
            <Input
              id="phone"
              placeholder="phone"
              className="edit-input"
            ></Input>
          </div>
          <div className="edit-gender">
            <label htmlFor="gender" className="edit-label">
              Gender
            </label>
            <select name="gender" id="gender" className="edit-select">
              <option value="" defaultValue="" hidden>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <Button primary>Submit</Button>
        </form>
      </StyledEditAccount>
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
    </>
  );
};

export default EditAccount;
