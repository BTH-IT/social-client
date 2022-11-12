import { useState } from "react";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import Modal from "../Modal/Modal";
import PostFeature from "./PostFeature";

const StyledPostHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;

  .post-heading-info {
    display: flex;
    align-items: center;
    gap: 10px;
    h6 {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  i {
    font-size: 2rem;
    padding: 6px;
    cursor: pointer;
  }
`;

const PostHeading = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <StyledPostHeading>
        <div className="post-heading-info">
          <Avatar
            style={{
              width: "44px",
              height: "44px",
            }}
          ></Avatar>
          <h6>bienthanhhung</h6>
        </div>
        <div onClick={() => setShow(true)}>
          <i className="bi bi-three-dots"></i>
        </div>
      </StyledPostHeading>
      <Modal visible={show} onClose={() => setShow(false)} overlay={true}>
        <PostFeature onClose={() => setShow(false)}></PostFeature>
      </Modal>
    </>
  );
};

export default PostHeading;
