import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import client from 'api/supabase';
import * as St from '../layout/HeaderStyle';

function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const auth = await client.auth.getUser();
        if (auth.data.user.email) {
          setEmail(auth.data.user.email);
          console.log(email);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    getUserData();
    return () => {};
  }, [email]);

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
      <St.HeaderStyle>
        <St.StImg src="/logo.jpg" alt="Logo" onClick={() => navigate('/')} />
        <St.SearchBox onSubmit={handleSearchInfo}>
          <St.SearchInput
            value={searchTerm}
            placeholder="검색어를 입력해주세요!"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <St.SearchButton>
            <FaMagnifyingGlass />
          </St.SearchButton>
        </St.SearchBox>
        <div>
          {!email ? (
            <>
              <Link to="/login">
                <St.StButton>로그인</St.StButton>
              </Link>
              <Link to="/signup">
                <St.StButton>회원가입</St.StButton>
              </Link>
            </>
          ) : (
            <St.StButton>로그아웃</St.StButton>
          )}
        </div>
      </St.HeaderStyle>
      <Outlet></Outlet>
    </>
  );
}

export default Header;
