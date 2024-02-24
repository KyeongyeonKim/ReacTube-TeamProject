import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaMagnifyingGlass } from 'react-icons/fa6';

function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInfo = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      alert('검색어를 입력해주세요!');
      return;
    }
    navigate(`/search`);
    setSearchTerm('');
  };
  return (
    <>
      <HeaderStyle>
        <StImg src="/logo.jpg" alt="Logo" onClick={() => navigate('/')} />
        <SearchBox onSubmit={handleSearchInfo}>
          <SearchInput
            value={searchTerm}
            placeholder="검색어를 입력해주세요!"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <SearchButton>
            <FaMagnifyingGlass />
          </SearchButton>
        </SearchBox>
        <div>
          <Link to="/login">
            <StButton>로그인</StButton>
          </Link>
          <Link to="/signup">
            <StButton>회원가입</StButton>
          </Link>
        </div>
      </HeaderStyle>
      <Outlet></Outlet>
    </>
  );
}

export default Header;

const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.5rem 4rem;
`;

const StImg = styled.img`
  width: 70px;
  border-radius: 20px;
  cursor: pointer;
`;

const SearchBox = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  width: 45rem;
  height: 2.5rem;
  flex-grow: 1;
  border: none;
  border-bottom: 1px solid black;
  padding: 1rem;
`;

const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0.5rem;
  cursor: pointer;
`;

const StButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 0 10px;
  color: black;

  &:hover {
    transform: scale(1.2);
    font-weight: 600;
    color: #c3acd0;
  }
`;
