import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import client from 'api/supabase';
import { StyledDeleteButton } from 'styles/modalStyles/DeleteHandlerStyles';
import DeleteModal from './DeleteModal';

function DeleteHandler() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [authorId, setAuthorId] = useState('');
  const [userId, setUserId] = useState('');

  const id = useLocation().state.id;

  const fetchData = async () => {
    const { data, error } = await client.from('content').select('*');
    if (error) throw error;

    const videoData = data.find((element) => id === element.id);
    setAuthorId(videoData.userId);
  };

  const deleteForm = () => {
    setDeleteOpen(!deleteOpen);
  };

  const getUserData = async () => {
    const { data } = await client.auth.getUser();
    setUserId(data.user.id);
  };

  useEffect(() => {
    fetchData();
    getUserData();
  }, []);

  const idChecker = userId === authorId;

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
