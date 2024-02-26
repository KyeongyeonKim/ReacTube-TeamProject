import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteBoard } from '../redux/modules/boardSlice';
import { StyledDeleteButton } from 'styles/DeleteHandlerStyles';

function DeleteHandler() {
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const dispatch = useDispatch();

  const id = useLocation().state.id;
  const navigate = useNavigate();

  const backToList = () => {
    navigate('/home', { replace: true });
  };

  const target = boardItems.filter((element) => id === element.id);

  const deleteHandler = () => {
    if (window.confirm('Really Remove This Letter?')) {
      dispatch(deleteBoard(...target));
      backToList();
    }
  };

  return (
    <>
      <StyledDeleteButton className="deleteButton" onClick={deleteHandler}>
        삭제
      </StyledDeleteButton>
    </>
  );
}

export default DeleteHandler;
