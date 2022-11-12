import React from "react";
import styled from "styled-components";
import LeftLogin from "../../components/LeftLogin/LeftLogin";
import RightLogin from "../../components/RightLogin/RightLogin";

const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 20px;
  background-color: #fafafa;
`;

const Login = () => {
  return (
    <StyledLogin>
      <LeftLogin></LeftLogin>
      <RightLogin></RightLogin>
    </StyledLogin>
  );
};

export default Login;
