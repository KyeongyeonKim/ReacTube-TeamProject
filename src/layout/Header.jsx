import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import {
  HeaderStyle,
  StImg,
  SearchBox,
  SearchInput,
  SearchButton,
  StButton,
  SearchContainer
} from 'styles/layoutstyles/HeaderStyles';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import logoandtitle from '../assets/imgs/logoandtitle.png';
import client from 'api/supabase';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/modules/authSlice';

const searchOptions = [
  { value: 'reactube', label: 'reactube' },
  { value: 'youtube', label: 'youtube' }
];

function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const auth = await client.auth.getUser();
        if (auth.data.user.email) {
          setEmail(auth.data.user.email);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    getUserData();
  }, [email]);
  const [selectedSearchOption, setSelectedSearchOption] = useState(searchOptions[0]);

  const handleSearchInfo = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      alert('검색어를 입력해주세요!');
      return;
    }

    if (selectedSearchOption.value === 'reactube') {
      navigate(`/search?keyword=${searchTerm}`);
    } else if (selectedSearchOption.value === 'youtube') {
      navigate(`/search/${searchTerm}`);
    }

    setSearchTerm('');
  };

  const handleChangeSearchOption = (selectedOption) => {
    setSelectedSearchOption(selectedOption);
  };

  const logoutHandler = async () => {
    setLoading(true);
    dispatch(removeUser(token));

    const { error } = await client.auth.signOut();

    if (error) {
      console.error('로그아웃 오류가 발생했습니다.', error.message);
    } else {
      document.cookie = 'sb:token=; expires=Mon, 19 Feb 2024 00:00:00 GMT;path=/;';
      navigate('/login');
    }
    setLoading(false);
  };
  return (
    <>
      <HeaderStyle>
        <StImg src={logoandtitle} alt="Logo" onClick={() => navigate('/home')} />
        {token ? (
          <SearchContainer>
            <Select
              value={selectedSearchOption}
              onChange={handleChangeSearchOption}
              options={searchOptions}
              isSearchable={false}
            />
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
          </SearchContainer>
        ) : (
          <></>
        )}
        <div>
          {!token ? (
            <>
              <Link to="/login">
                <StButton>로그인</StButton>
              </Link>
              <Link to="/signup">
                <StButton>회원가입</StButton>
              </Link>
            </>
          ) : (
            <StButton onClick={() => logoutHandler()}>로그아웃</StButton>
          )}
        </div>
      </HeaderStyle>
      <Outlet />
    </>
  );
}

export default Header;
