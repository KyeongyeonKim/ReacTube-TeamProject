import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { modifyBoard } from '../../redux/modules/boardSlice';
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
  StyledTextarea,
  ThumbnailBox,
  ThumbnailTitle,
  ThumbnailContent,
  ModifyPageTitle,
  ModifyPageContent
} from 'styles/modalStyles/ModifyModalStyle';

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

  const passwordRef = useRef();

  const dispatch = useDispatch();

  const modifyForm = () => {
    if (window.confirm('수정을 취소하시겠습니까?')) {
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
  };

  const checkThumbnail = () => {
    const url = newUrlString;
    if (url) {
      extractVideoId(url);
    } else {
      alert('유튜브 링크를 입력해주세요.');
    }
  };

  return (
    <>
      <ModalContainer onClick={modifyForm} />
      <ModalForm onSubmit={onSubmitHandler}>
        <ModifyPageTitle>게시글 수정</ModifyPageTitle>
        <ModifyPageContent>
          <StyledSection>
            <StyledLabel>제목</StyledLabel>
            <StyledInput
              id={id + 'title'}
              type="text"
              name="title"
              value={newTitle}
              placeholder="최대 20글자까지 작성할 수 있습니다."
              maxLength={20}
              onChange={onChange}
            />
          </StyledSection>
          <StyledSection>
            <StyledLabel>닉네임</StyledLabel>
            <StyledInput
              id={id + 'author'}
              type="text"
              name="author"
              value={target[0].author}
              placeholder="닉네임을 입력해주세요."
              minLength={1}
              maxLength={8}
              onChange={onChange}
            />
          </StyledSection>
          <StyledSection>
            <StyledLabel>내용</StyledLabel>
            <StyledTextarea
              id={id + 'content'}
              rows={7}
              name="content"
              value={newContent}
              placeholder="최대 100글자까지 작성할 수 있습니다."
              maxLength={1000}
              onChange={onChange}
            />
          </StyledSection>
          <StyledSection>
            <StyledLabel>유튜브 URL</StyledLabel>
            <StyledInput
              id={id + 'url'}
              type="text"
              name="urlString"
              value={newUrlString}
              placeholder="URL을 입력해주세요."
              onChange={onChange}
            />
            <StyledButton type="button" onClick={checkThumbnail}>
              링크 확인
            </StyledButton>
          </StyledSection>
        </ModifyPageContent>
        {!thumbnailUrl ? (
          <ThumbnailBox>
            <ThumbnailTitle>이곳에 썸네일이 표시됩니다. </ThumbnailTitle>
            <ThumbnailContent>❌썸네일이 표시되지 않으면 사용할 수 없는 동영상 입니다.</ThumbnailContent>
          </ThumbnailBox>
        ) : (
          <StyledImage src={thumbnailUrl} alt="Thumbnail" />
        )}
        <Buttons>
          <StyledButton onClick={onSubmitHandler}>등록</StyledButton>
          <StyledButton onClick={modifyForm}>취소</StyledButton>
        </Buttons>
      </ModalForm>
    </>
  );
}

export default ModifyModal;
