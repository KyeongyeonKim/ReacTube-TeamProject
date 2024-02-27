import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { modifyBoard } from '../redux/modules/boardSlice';
import client from 'api/supabase';
import {
  Buttons,
  ModalContainer,
  ModalForm,
  StyledButton,
  StyledImage,
  StyledInput,
  StyledLabel,
  StyledSection,
  StyledTextarea
} from 'styles/CreateStyle';

function ModifyModal(props) {
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const id = useLocation().state.id;

  const target = boardItems.filter((element) => id === element.id);
  console.log(target);

  const [newTitle, setNewTitle] = useState(target[0].title);
  const [newContent, setNewContent] = useState(target[0].content);
  const [newUrlString, setNewUrlString] = useState(target[0].urlString);
  const [newVideoId, setNewVideoId] = useState(target[0].videoId);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  const dispatch = useDispatch();

  const modifyForm = () => {
    if (window.confirm('Cancel your modification?')) {
      props.setModifyOpen(!props.modifyOpen);
    }
  };

  const onChange = (event) => {
    const {
      target: { name, value }
    } = event;
    switch (name) {
      case 'title':
        return setNewTitle(value);
      case 'password':
        return setPassword(value);
      case 'content':
        return setNewContent(value);
      case 'urlString':
        extractVideoId(newUrlString);
        return setNewUrlString(value);
      default:
        return;
    }
  };

  const extractVideoId = (url) => {
    const regularExpression =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regularExpression);

    if (match && match[1]) {
      setNewVideoId(match[1]);
      generateThumbnailUrl(match[1]);
    } else {
      setNewVideoId('');
      setThumbnailUrl('');
    }
  };

  const generateThumbnailUrl = (id) => {
    const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    setThumbnailUrl(thumbnailUrl);
  };

  const onSubmitHandler = async (event) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const date = today.getDate().toString().padStart(2, '0');
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const seconds = today.getSeconds().toString().padStart(2, '0');
    const timeString = `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;

    const isTitleModified = newTitle === target[0].title;
    const isContentModified = newContent === target[0].content;

    event.preventDefault();
    if (password === target[0].password) {
      if (isTitleModified && isContentModified) {
        alert('수정된 내용이 없습니다!');
      } else {
        if (window.confirm('게시글을 수정하시겠습니까?')) {
          const newPost = {
            id: target[0].id,
            title: newTitle,
            author: target[0].author,
            password: target[0].password,
            timeString,
            content: newContent,
            urlString: newUrlString,
            videoId: newVideoId
          };

          try {
            const { error } = await client.from('content').update(newPost).eq('id', id);
            if (error) {
              throw error;
            }
            dispatch(modifyBoard(newPost));
            alert('수정되었습니다!');
            props.setModifyOpen(!props.modifyOpen);
          } catch (error) {
            console.error('게시물 수정 중 오류가 발생', error.message);
            alert('게시물 수정 중 오류가 발생했습니다.');
          }
        } else {
          alert('수정이 취소되었습니다.');
        }
      }
    } else {
      alert('비밀번호가 일치하지 않습니다!');
      passwordRef.current.focus();
    }
  };

  return (
    <>
      <ModalContainer onClick={modifyForm} />
      <ModalForm onSubmit={onSubmitHandler}>
        <StyledSection>
          <StyledLabel>Title</StyledLabel>
          <StyledInput
            id={id + 'title'}
            type="text"
            name="title"
            value={newTitle}
            placeholder="Title → Less than 20 char"
            maxLength={20}
            onChange={onChange}
          />
        </StyledSection>
        <StyledSection>
          <StyledLabel>Author</StyledLabel>
          <StyledInput
            id={id + 'author'}
            type="text"
            name="author"
            value={target[0].author}
            placeholder="Author"
            minLength={1}
            maxLength={8}
            onChange={onChange}
          />
        </StyledSection>
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
        <StyledSection>
          <StyledLabel>Content</StyledLabel>
          <StyledTextarea
            id={id + 'content'}
            rows={7}
            name="content"
            value={newContent}
            placeholder="Content → Less than 100 char"
            maxLength={1000}
            onChange={onChange}
          />
        </StyledSection>
        <StyledSection>
          <StyledLabel>Youtube URL</StyledLabel>
          <StyledInput
            id={id + 'url'}
            type="text"
            name="urlString"
            value={newUrlString}
            placeholder="URL"
            onChange={onChange}
          />
          {!thumbnailUrl ? <></> : <StyledImage src={thumbnailUrl} alt="Thumbnail" />}
        </StyledSection>
        <Buttons>
          <StyledButton onClick={onSubmitHandler}>Send</StyledButton>
          <StyledButton onClick={modifyForm}>Cancel</StyledButton>
        </Buttons>
      </ModalForm>
    </>
  );
}

export default ModifyModal;
