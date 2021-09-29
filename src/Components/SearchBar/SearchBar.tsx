/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const MainWrapper = styled.section`
  color: #fff;
`;
export const Input = styled.input`
  color: #fff;
  font-size: 1rem;
  text-transform: capitalize;
  font-family: 'Poppins' sans-serif;
  background: #333;
  border: 0;
  outline: none;
  height: 39px;
  border-radius: 5px;
  display: block;
  width: 100%;
  padding-left: 40px;
  margin: 2.5em 0;
`;

export const SearchController = styled.div`
cursor: text;
display: flex;
place-items: center;
`;

export const Search = styled(BsSearch)`
  font-size: 20px;
  color: #fff;
`;

export const Button = styled.button`
  position: absolute;
  background: transparent;
  border: 0;
  margin-left: 10px;
`;

const SearchBar = () => {
  return (
    <>
      <MainWrapper className="inactive">
        <SearchController>
          <Button>
            <Search />
          </Button>
          <Input placeholder="Search" type="text" />
        </SearchController>
      </MainWrapper>
    </>
  );
};

export default SearchBar;
