import React from "react";
import styled from "styled-components";
interface ButtonProps {
  children: String;
  className?: String;
  primary?: true | false;
  onClick?: () => void;
}

const StyledButton = styled.button`
  border: 1px solid
    ${(props: { primary?: boolean }) =>
      props.primary ? "transparent" : "black"};

  background-color: ${(props: { primary?: boolean }) =>
    props.primary ? "rgb(0, 149, 246)" : "white"};

  border-radius: 4px;
  color: ${(props: { primary?: boolean }) =>
    props.primary ? "white" : "black"};
  cursor: pointer;
  padding: 5px 9px;
  font-weight: 600;
`;

const Button = ({ children, className, primary, onClick }: ButtonProps) => {
  return (
    <StyledButton
      className={`${className}`}
      primary={primary}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
