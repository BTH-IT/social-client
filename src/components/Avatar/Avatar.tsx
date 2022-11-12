import React from "react";
import styled from "styled-components";
interface AvatarProps {
  style?: React.CSSProperties;
  story?: true | false;
}

const StyledAvatar = styled.div`
  margin: ${(props: { story?: boolean }) => (props.story ? "0 auto" : "")};
  border-radius: 50%;
  width: 56px;
  height: 56px;
  position: relative;
  background-clip: padding-box;
  border: solid 3px transparent;
  z-index: 1;

  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    border: solid 1px white;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    margin: -3px;
    border-radius: inherit;
    background: radial-gradient(rgba(0, 0, 0, 0.15) 60%, transparent 0),
      radial-gradient(white 65%, transparent 0),
      linear-gradient(to top right, orange, deeppink);
  }

  @media screen and (max-width: 526px) {
    width: 44px !important;
    height: 44px !important;
  }
`;

const Avatar = ({ style, story }: AvatarProps) => {
  return (
    <StyledAvatar className="avatar" style={style} story={story}>
      <img
        src="https://images.unsplash.com/photo-1667053508464-eb11b394df83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        alt=""
        className="avatar-img"
      />
    </StyledAvatar>
  );
};

export default Avatar;
