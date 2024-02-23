import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from 'styles/CreateStyle';

function ModifyHandler() {
  const navigate = useNavigate();

  const backToList = () => {
    navigate('/home', { replace: true });
  };

  return (
    <>
      <StyledButton className="backButton" onClick={backToList}>
        Back to List
      </StyledButton>
      <StyledButton>Modify</StyledButton>
    </>
  );
}

export default ModifyHandler;
