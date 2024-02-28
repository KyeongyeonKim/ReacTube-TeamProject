import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteBoard } from '../../redux/modules/boardSlice';
import client from '../../api/supabase';
import {
  Buttons,
  ModalContainer,
  ModalForm,
  StyledButton,
  DeleteModalTitle
} from 'styles/modalStyles/DeleteModalStyle';

function DeleteModal(props) {
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const id = useLocation().state.id;
  const navigate = useNavigate();

  const target = boardItems.filter((element) => id === element.id);
  const dispatch = useDispatch();

  const deleteForm = () => {
    props.setDeleteOpen(!props.deleteOpen);
  };

  const backToList = () => {
    navigate('/home', { replace: true });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { error } = await client.from('content').delete().eq('id', id);
      if (error) {
        throw error;
      }
      dispatch(deleteBoard(...target));
      backToList();
      alert('게시물이 삭제되었습니다.');
    } catch (error) {
      console.error('게시물 삭제 중 오류가 발생', error.message);
      alert('게시물 삭제 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <ModalContainer onClick={deleteForm} />
      <ModalForm onSubmit={onSubmitHandler}>
        <DeleteModalTitle>삭제하시겠습니까?</DeleteModalTitle>
        <Buttons>
          <StyledButton onClick={onSubmitHandler}>확인</StyledButton>
          <StyledButton onClick={deleteForm}>취소</StyledButton>
        </Buttons>
      </ModalForm>
    </>
  );
}

export default DeleteModal;
