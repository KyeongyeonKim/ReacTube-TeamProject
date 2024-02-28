import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import client from 'api/supabase';

import { StyledDeleteButton } from 'styles/modalStyles/DeleteHandlerStyles';
import DeleteModal from './DeleteModal';

function DeleteHandler() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const id = useLocation().state.id;

  const videoData = boardItems.find((element) => id === element.id);

  const deleteForm = () => {
    setDeleteOpen(!deleteOpen);
  };

  const getUserData = async () => {
    const { data: { user } } = await client.auth.getUser();
    setUserId(user.id);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const idChecker = userId === videoData.userId;

  return (
    <>
      {deleteOpen ? <DeleteModal deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen} /> : <></>}

      {idChecker ? (
        <StyledDeleteButton className="deleteButton" onClick={deleteForm}>
          삭제
        </StyledDeleteButton>
      ) : (
        <></>
      )}
    </>
  );
}

export default DeleteHandler;
