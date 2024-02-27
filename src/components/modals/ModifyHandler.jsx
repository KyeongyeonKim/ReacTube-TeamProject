import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Buttons, StyledBackButton, StyledModifyButton } from 'styles/modalStyles/ModifyHandlerStyle';
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
      <Buttons>
        {modifyOpen ? <ModifyModal modifyOpen={modifyOpen} setModifyOpen={setModifyOpen} /> : <></>}
        <StyledBackButton className="backButton" onClick={backToList}>
          목록으로
        </StyledBackButton>
        <StyledModifyButton onClick={modifyForm}>수정</StyledModifyButton>
      </Buttons>
    </>
  );
}

export default ModifyHandler;
