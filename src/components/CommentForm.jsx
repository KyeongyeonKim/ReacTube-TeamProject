import React, { useState } from 'react';
import client from 'api/supabase';
import { StCommentArea, StInputName, StArea, StButton } from 'styles/CommentFormStyle';

const CommentForm = ({ videoId }) => {
  const [comment, setComment] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert the comment into the database
    const { data, error } = await client.from('comments').insert({ comment, nickname, password, videoId });

    if (error) {
      console.error('Error inserting comment:', error.message);
    } else {
      console.log('Comment inserted successfully:', data);

      setComment('');
      setPassword('');
      setNickname('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label>닉네임:</label> */}
        <StInputName
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        {/* <label>비밀번호:</label> */}
        <StInputName
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <StCommentArea>
        {/* <label>댓글 내용:</label> */}
        <StArea
          placeholder="댓글을 남겨주세요!"
          maxLength={300}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <StButton type="submit">댓글 등록</StButton>
      </StCommentArea>
    </form>
  );
};

export default CommentForm;
