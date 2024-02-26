import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { addBoard } from '../redux/modules/boardSlice';
import {
  StyledButton,
  StyledForm,
  StyledImage,
  StyledInput,
  StyledLabel,
  StyledSection,
  StyledTextarea
} from 'styles/CreateStyle';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [urlString, setUrlString] = useState('');
  const [videoId, setVideoId] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const titleRef = useRef();
  const authorRef = useRef();
  const passwordRef = useRef();
  const contentRef = useRef();
  const urlStringRef = useRef();

  const navigate = useNavigate();
  const id = uuid();
  const dispatch = useDispatch();

  const onChange = (event) => {
    const {
      target: { name, value }
    } = event;
    switch (name) {
      case 'title':
        return setTitle(value);
      case 'author':
        return setAuthor(value);
      case 'password':
        return setPassword(value);
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

  const onSubmitHandler = (event) => {
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
      alert('Title is Empty!');
      titleRef.current.focus();
    } else if (!author) {
      alert('No author!');
      authorRef.current.focus();
    } else if (!password) {
      alert('No password!');
      passwordRef.current.focus();
    } else if (!content) {
      alert('No content!');
      contentRef.current.focus();
    } else if (!urlString) {
      alert('No Youtube!');
      urlStringRef.current.focus();
    } else {
      if (window.confirm('Register Your Message?')) {
        const newPost = {
          id,
          title,
          author,
          password,
          timeString,
          content,
          urlString,
          videoId
        };

        dispatch(addBoard(newPost));

        alert('Registered!');
        navigate('/home');
      } else {
        alert('Cancelled');
      }
    }
  };

  const checkThumbnail = () => {
    const url = urlStringRef.current.value;
    if (url) {
      extractVideoId(url);
    } else {
      alert('URL is empty!');
    }
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledSection>
        <StyledLabel>Title</StyledLabel>
        <StyledInput
          id={id + 'title'}
          type="text"
          name="title"
          value={title}
          ref={titleRef}
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
          value={author}
          ref={authorRef}
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
          placeholder="password → More than 6 char"
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
          value={content}
          ref={contentRef}
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
          value={urlString}
          ref={urlStringRef}
          placeholder="URL"
          onChange={onChange}
        />
        <StyledButton type="button" onClick={checkThumbnail}>
          링크 확인
        </StyledButton>
        {!thumbnailUrl ? <></> : <StyledImage src={thumbnailUrl} alt="Thumbnail" />}
      </StyledSection>
      <StyledButton>등록</StyledButton>
    </StyledForm>
  );
};

export default NewPost;
