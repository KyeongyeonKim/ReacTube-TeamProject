import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteBoard } from '../redux/modules/boardSlice';
import {
  Buttons,
  ModalContainer,
  ModalForm,
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledSection
} from 'styles/CreateStyle';

function DeleteModal(props) {
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const id = useLocation().state.id;
  const navigate = useNavigate();

  const target = boardItems.filter((element) => id === element.id);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const passwordRef = useRef();

  const deleteForm = () => {
    if (window.confirm('Cancel?')) {
      props.setDeleteOpen(!props.deleteOpen);
    }
  };

  const backToList = () => {
    navigate('/home', { replace: true });
  };

  const onChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password === target[0].password) {
      if (window.confirm('Really Remove This Letter?')) {
        dispatch(deleteBoard(...target));
        backToList();
      } else {
        alert('Cancelled');
      }
    } else {
      alert('Wrong password!');
      passwordRef.current.focus();
    }
  };

  return (
    <>
      <ModalContainer onClick={deleteForm} />
      <ModalForm onSubmit={onSubmitHandler}>
        <StyledSection>
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            id={id + 'password'}
            type="password"
            name="password"
            value={password}
            ref={passwordRef}
            placeholder="password"
            minLength={6}
            onChange={onChange}
          />
        </StyledSection>
        <Buttons>
          <StyledButton onClick={onSubmitHandler}>Send</StyledButton>
          <StyledButton onClick={deleteForm}>Cancel</StyledButton>
        </Buttons>
      </ModalForm>
    </>
  );
}

export default DeleteModal;
