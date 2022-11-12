import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";

const StyledSearch = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  position: fixed;
  z-index: 2;
  background-color: white;
  transform: translateX(-100%);
  transition: all 0.2s linear;
  border-radius: 0 20px 20px 0;

  .search-input {
    padding: 8px 12px 20px 12px;
    margin-bottom: 24px;

    h4 {
      font-size: 2.4rem;
      padding: 12px 14px 36px 24px;
      margin: 8px 0;
    }
  }

  .search-recent {
    width: 100%;
    border-top: 2px solid rgb(219, 219, 219);
    padding-top: 12px;
  }
`;

const Search = ({ search }: { search: boolean }) => {
  return (
    <StyledSearch
      style={{
        transform: search ? "translateX(75px)" : "",
      }}
    >
      <div className="search-input">
        <h4>Search</h4>
        <Input placeholder="Search" hasIcon primary></Input>
      </div>
      <div className="search-recent">recent</div>
    </StyledSearch>
  );
};

export default Search;
