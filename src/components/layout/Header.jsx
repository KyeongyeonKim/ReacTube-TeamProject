import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HeaderStyle, StImg, SearchBox, SearchInput, SearchButton, StButton } from 'styles/HeaderStyles';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import logoandtitle from '../../assets/imgs/logoandtitle.png';

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
    if (!searchTerm.trim()) {
      alert('검색어를 입력해주세요!');
      return;
    }
    navigate(`/search?keyword=${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <>
      <HeaderStyle>
        <StImg src={logoandtitle} alt="Logo" onClick={() => navigate('/home')} />
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
          {!email ? (
            <>
              <Link to="/login">
                <StButton>로그인</StButton>
              </Link>
              <Link to="/signup">
                <StButton>회원가입</StButton>
              </Link>
            </>
          ) : (
            <StButton>로그아웃</StButton>
          )}
        </div>
      </HeaderStyle>
      <Outlet></Outlet>
    </>
  );
}

export default Header;
