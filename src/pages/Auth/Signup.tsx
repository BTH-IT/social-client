import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";

const StyledSignUp = styled.form`
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

const StyledSingUpPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Signup = () => {
  return (
    <StyledSingUpPage>
      <StyledSignUp>
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
          <Label htmlFor="name">Full Name</Label>
          <Input
            placeholder="Full Name"
            id="name"
            className="form-input"
          ></Input>
        </div>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            placeholder="Username"
            id="username"
            className="form-input"
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
          Sign Up
        </Button>
        <span>
          Have an account?
          <Link to="/login" className="link">
            Log In
          </Link>
        </span>
      </StyledSignUp>
    </StyledSingUpPage>
  );
};

export default Signup;
