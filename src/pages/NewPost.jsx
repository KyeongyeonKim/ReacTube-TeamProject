import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { addBoard } from '../redux/modules/boardSlice';
import client from '../api/supabase';
import {
  StyledButton,
  StyledForm,
  StyledImage,
  StyledInput,
  StyledLabel,
  StyledSection,
  StyledTextarea,
  Container,
  ThumbnailBox,
  ThumbnailTitle,
  ThumbnailContent,
  NewPostTitle,
  StyledPostButton
} from 'styles/pageStyles/NewPostStyle';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [urlString, setUrlString] = useState('');
  const [videoId, setVideoId] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [userId, setUserId] = useState('');

  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();
  const urlStringRef = useRef();

  const navigate = useNavigate();
  const id = uuid();
  const dispatch = useDispatch();

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

  const onChange = (event) => {
    const {
      target: { name, value }
    } = event;
    switch (name) {
      case 'title':
        return setTitle(value);
      case 'author':
        return setAuthor(value);
      case 'content':
        return setContent(value);
      case 'urlString':
        extractVideoId(urlString);
        return setUrlString(value);
      default:
        return;
    }
  };

  const extractVideoId = (url) => {
    const regularExpression =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regularExpression);

    if (match && match[1]) {
      setVideoId(match[1]);
      generateThumbnailUrl(match[1]);
    } else {
      setVideoId('');
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

    event.preventDefault();
    if (!title) {
      alert('제목을 입력해주세요.');
      titleRef.current.focus();
    } else if (!author) {
      alert('닉네임을 입력해주세요.');
      authorRef.current.focus();
    } else if (!content) {
      alert('내용을 입력해주세요.');
      contentRef.current.focus();
    } else if (!urlString) {
      alert('유튜브 링크를 입력해주세요.');
      urlStringRef.current.focus();
    } else if (!thumbnailUrl) {
      alert('링크 확인을 해주세요!');
      urlStringRef.current.focus();
    } else {
      if (window.confirm('글을 등록하시겠습니까?')) {
        const newPost = {
          id,
          title,
          author,
          timeString,
          content,
          urlString,
          videoId,
          userId
        };

        try {
          const { error } = await client.from('content').insert([newPost]);
          if (error) {
            throw error;
          }

          dispatch(addBoard(newPost));
          alert('등록되었습니다.');
          navigate('/home');
        } catch (error) {
          console.error('등록에 실패했습니다.', error.message);
          alert('등록에 실패했습니다.');
        }
      } else {
        alert('등록이 취소되었습니다.');
      }
    }
  };

  const checkThumbnail = () => {
    const url = urlStringRef.current.value;
    if (url) {
      extractVideoId(url);
    } else {
      alert('유튜브 링크를 입력해주세요.');
    }
  };

  return (
    <Container>
      <StyledForm onSubmit={onSubmitHandler}>
        <NewPostTitle>새 동영상</NewPostTitle>
        <StyledSection>
          <StyledLabel>제목</StyledLabel>
          <StyledInput
            id={id + 'title'}
            type="text"
            name="title"
            value={title}
            ref={titleRef}
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
            value={author}
            ref={authorRef}
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
            value={content}
            ref={contentRef}
            placeholder="최대 100글자까지 작성할 수 있습니다."
            maxLength={100}
            onChange={onChange}
          />
        </StyledSection>
        <StyledSection>
          <StyledLabel>유튜브 URL</StyledLabel>
          <StyledInput
            id={id + 'url'}
            type="text"
            name="urlString"
            value={urlString}
            ref={urlStringRef}
            placeholder="URL을 입력해주세요."
            onChange={onChange}
          />
        </StyledSection>
        <StyledButton type="button" onClick={checkThumbnail}>
          링크 확인
        </StyledButton>
        {!thumbnailUrl ? (
          <ThumbnailBox>
            <ThumbnailTitle>이곳에 썸네일이 표시됩니다. </ThumbnailTitle>
            <ThumbnailContent>❌썸네일이 표시되지 않으면 사용할 수 없는 동영상 입니다.</ThumbnailContent>
          </ThumbnailBox>
        ) : (
          <StyledImage src={thumbnailUrl} alt="Thumbnail" />
        )}
        <StyledPostButton>등록</StyledPostButton>
      </StyledForm>
    </Container>
  );
};

export default NewPost;
