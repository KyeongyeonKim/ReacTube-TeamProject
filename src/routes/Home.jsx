import React, { useEffect } from 'react';
import VideoList from 'components/VideoList';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <VideoList />
    </>
  );
}

export default Home;
