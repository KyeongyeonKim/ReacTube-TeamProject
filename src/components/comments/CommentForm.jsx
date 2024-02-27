import React, { useEffect, useState } from 'react';
import client from 'api/supabase';
import { StCommentArea, StInputName, StArea, StButton } from 'styles/commentStyles/CommentFormStyle';

const CommentForm = ({ videoId }) => {
  const [comment, setComment] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const auth = await client.auth.getUser();
        if (auth.data.user.email) {
          setEmail(auth.data.user.email);
          console.log(email);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    getUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const date = today.getDate().toString().padStart(2, '0');
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const seconds = today.getSeconds().toString().padStart(2, '0');
    const timeString = `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;

    // Insert the comment into the database
    const { data, error } = await client
      .from('comments')
      .insert({ comment, nickname: email, password, videoId, created_at: timeString });

    if (error) {
      console.error('Error inserting comment:', error.message);
    } else {
      console.log('Comment inserted successfully:', data);

      setComment('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <StInputName
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StInputName
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <StCommentArea>
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