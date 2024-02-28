import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import client from 'api/supabase';

import { Buttons, StyledBackButton, StyledModifyButton } from 'styles/modalStyles/ModifyHandlerStyle';
import ModifyModal from './ModifyModal';

function ModifyHandler() {
  const [modifyOpen, setModifyOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const id = useLocation().state.id;
  const navigate = useNavigate();

  const videoData = boardItems.find((element) => id === element.id);

  const backToList = () => {
    navigate('/home', { replace: true });
  };

  const modifyForm = () => {
    setModifyOpen(!modifyOpen);
  };

  const getUserData = async () => {
    try {
      const auth = await client.auth.getUser();
      if (auth.data.user.id) {
        setUserId(auth.data.user.id);
      }
    } catch (error) {
      alert('Error on fetching user data');
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const idChecker = userId === videoData.userId;

  return (
    <>
      <Buttons>
        {modifyOpen ? <ModifyModal modifyOpen={modifyOpen} setModifyOpen={setModifyOpen} /> : <></>}
        <StyledBackButton className="backButton" onClick={backToList}>
          목록으로
        </StyledBackButton>
        {idChecker ? <StyledModifyButton onClick={modifyForm}>수정</StyledModifyButton> : <></>}
      </Buttons>
    </>
  );
}

export default ModifyHandler;