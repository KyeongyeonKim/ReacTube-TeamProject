import DetailPage from 'pages/DetailPage';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Detail() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <DetailPage />
    </>
  );
}

export default Detail;
