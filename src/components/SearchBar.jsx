import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <SearchWrapper onSubmit={handleSubmit}>
      <SearchContainer>
        
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="예) 서울시 강남대로"
        />
        <SearchButton type="submit">검색</SearchButton>
      </SearchContainer>
    </SearchWrapper>
  );
};

export default SearchBar;

const SearchWrapper = styled.form`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.2rem 0.1rem 1.2rem 4rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2563eb;
  }
`;
