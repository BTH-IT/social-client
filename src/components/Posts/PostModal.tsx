import React from "react";
import Modal from "../Modal/Modal";
import PostDetail from "./PostDetail";

const PostModal = ({
  show,
  onClose,
  className,
}: {
  show: boolean;
  onClose: () => void;
  className?: string;
}) => {
  return (
    <Modal
      visible={show}
      onClose={onClose}
      overlay={true}
      hasIconClose={true}
      containerClassName={className}
    >
      <PostDetail></PostDetail>
    </Modal>
  );
};

export default PostModal;
