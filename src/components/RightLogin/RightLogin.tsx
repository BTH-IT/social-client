import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";

const StyledRightLogin = styled.form`
  padding: 10px 20px;
  border: 1px solid rgb(219, 219, 219);
  background-color: white;
  max-width: 350px;
  width: 100%;

  .form-heading {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 20px;
  }

  .form-input {
    margin-bottom: 10px;
    border: 1px solid rgb(219, 219, 219);
  }

  .form-btn {
    width: 100%;
    height: 45px;
    margin: 10px 0;
  }

  span {
    font-size: 1.6rem;
    display: flex;
    gap: 10px;
    .link {
      text-decoration: none;
      color: rgb(0, 149, 246);
      font-weight: 500;
    }
  }
`;

const RightLogin = () => {
  return (
    <StyledRightLogin>
      <h2 className="form-heading">𝘽𝙏𝙃 𝙎𝙤𝙘𝙞𝙖𝙡</h2>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Email"
          id="email"
          className="form-input"
          type="email"
        ></Input>
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          placeholder="Password"
          id="password"
          className="form-input"
          type="password"
        ></Input>
      </div>
      <Button primary className="form-btn">
        Log in
      </Button>
      <span>
        Don't have an account?
        <Link to="/signup" className="link">
          Sign Up
        </Link>
      </span>
    </StyledRightLogin>
  );
};

export default RightLogin;
