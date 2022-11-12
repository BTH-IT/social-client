import React from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

const StyledCreate = styled.div`
  width: 50vw;
  background-color: white;
  border-radius: 10px;

  .create-heading {
    font-size: 2.4rem;
    text-align: center;
    padding: 12px 0;
    border-bottom: 1px solid rgb(219, 219, 219);
  }

  .create-post {
    padding: 24px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    i {
      font-size: 12rem;
    }

    label {
      font-size: 1.6rem;
      font-weight: 600;
      background-color: rgb(0, 149, 246);
      cursor: pointer;
      color: white;
      border-radius: 4px;
      padding: 5px 9px;
    }
  }

  @media screen and (max-width: 526px) {
    width: 80vw;
  }
`;

const Create = ({
  create,
  onClose,
}: {
  create: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      visible={create}
      onClose={onClose}
      overlay={true}
      hasIconClose={true}
    >
      <StyledCreate>
        <h2 className="create-heading">Create new post</h2>
        <div className="create-post">
          <i className="bi bi-images"></i>
          <label htmlFor="image">Select from computer</label>
          <input type="file" id="image" name="image" hidden />
        </div>
      </StyledCreate>
    </Modal>
  );
};

export default Create;
