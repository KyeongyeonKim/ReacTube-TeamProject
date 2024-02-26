import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { HeaderStyle, StImg, SearchBox, SearchInput, SearchButton, StButton } from 'styles/HeaderStyles';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import logoandtitle from '../../assets/imgs/logoandtitle.png';

const searchOptions = [
  { value: 'reactube', label: 'reactube' },
  { value: 'youtube', label: 'youtube' }
];

function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
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
        <div>
          <Link to="/login">
            <StButton>로그인</StButton>
          </Link>
          <Link to="/signup">
            <StButton>회원가입</StButton>
          </Link>
        </div>
      </HeaderStyle>
      <Outlet />
    </>
  );
}

export default Header;
