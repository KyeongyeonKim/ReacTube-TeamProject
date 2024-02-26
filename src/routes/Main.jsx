import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/login')}>Go to Login page</button>
    </>
  );
}

export default Main;
