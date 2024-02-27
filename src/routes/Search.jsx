import SearchList from 'components/videolists/SearchList';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <SearchList />
    </>
  );
}

export default Search;
