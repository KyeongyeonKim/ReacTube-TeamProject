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
  SelectBox,
  SearchContainer
} from 'styles/HeaderStyles';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import logoandtitle from '../../assets/imgs/logoandtitle.png';
import client from 'api/supabase';

const searchOptions = [
  { value: 'reactube', label: 'reactube' },
  { value: 'youtube', label: 'youtube' }
];

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
  }, [email]);
  const [selectedSearchOption, setSelectedSearchOption] = useState(searchOptions[0]);
  const [youtubeResults, setYoutubeResults] = useState([]);

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

  useEffect(() => {
    console.log('YouTube 검색 결과:', youtubeResults);
  }, [youtubeResults]);

  return (
    <>
      <HeaderStyle>
        <StImg src={logoandtitle} alt="Logo" onClick={() => navigate('/home')} />
        <SearchContainer>
          <SelectBox>
            <Select
              value={selectedSearchOption}
              onChange={handleChangeSearchOption}
              options={searchOptions}
              isSearchable={false}
            />
          </SelectBox>
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
      <Outlet />
    </>
  );
}

export default Header;
