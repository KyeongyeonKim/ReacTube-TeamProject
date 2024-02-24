import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from 'styles/CreateStyle';
import ModifyModal from './ModifyModal';

function ModifyHandler() {
  const [modifyOpen, setModifyOpen] = useState(false);

  const navigate = useNavigate();

  const backToList = () => {
    navigate('/home', { replace: true });
  };

  const modifyForm = () => {
    setModifyOpen(!modifyOpen);
  };

  return (
    <>
      {modifyOpen ? <ModifyModal modifyOpen={modifyOpen} setModifyOpen={setModifyOpen} /> : <></>}
      <StyledButton className="backButton" onClick={backToList}>
        Back to List
      </StyledButton>
      <StyledButton onClick={modifyForm}>Modify</StyledButton>
    </>
  );
}

export default ModifyHandler;
