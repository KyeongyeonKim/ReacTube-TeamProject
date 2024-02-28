import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import client from 'api/supabase';

import { Buttons, StyledBackButton, StyledModifyButton } from 'styles/modalStyles/ModifyHandlerStyle';
import ModifyModal from './ModifyModal';

function ModifyHandler() {
  const [modifyOpen, setModifyOpen] = useState(false);
  const [authorId, setAuthorId] = useState('');
  const [userId, setUserId] = useState('');

  const id = useLocation().state.id;
  const navigate = useNavigate();

  const fetchData = async () => {
    const { data, error } = await client.from('content').select('*');
    if (error) throw error;

    const videoData = data.find((element) => id === element.id);
    setAuthorId(videoData.userId);
  };

  const backToList = () => {
    navigate('/home', { replace: true });
  };

  const modifyForm = () => {
    setModifyOpen(!modifyOpen);
  };

  const getUserData = async () => {
    const { data: { user } } = await client.auth.getUser();
    setUserId(user.id);
  };

  useEffect(() => {
    fetchData();
    getUserData();
  }, []);

  const idChecker = userId === authorId;

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
