import React from "react";
import styled from "styled-components";
interface InputProps {
  hasIcon?: true | false;
  placeholder: string;
  className?: string;
  primary?: true | false;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  type?: string | "text";
}

const StyledInput = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 6px;
    font-size: 1.6rem;
    padding: ${(props: { primary?: boolean }) =>
      props.primary ? "12px 16px" : ""};
    background-color: ${(props: { primary?: boolean }) =>
      props.primary ? "#efefef" : "transparent"};
    color: rgb(38, 38, 38);
    font-weight: 200;
    display: block;
    padding: 10px;
  }

  i {
    color: rgb(38, 38, 38);
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    opacity: 0.6;
    cursor: pointer;
    font-size: 1.4rem;
  }
`;

const Input = ({
  hasIcon,
  placeholder,
  className,
  primary,
  onChange,
  id,
  type,
}: InputProps) => {
  return (
    <StyledInput className={`${className}`} primary={primary}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e);
          }
        }}
        id={id}
      />
      {hasIcon ? <i className="bi bi-x-circle-fill"></i> : null}
    </StyledInput>
  );
};

export default Input;
