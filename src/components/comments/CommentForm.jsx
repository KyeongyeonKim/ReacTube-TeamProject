import React, { useEffect, useState } from 'react';
import client from 'api/supabase';
import { StCommentArea, StInputName, StArea, StButton } from 'styles/commentStyles/CommentFormStyle';

const CommentForm = ({ videoId }) => {
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const auth = await client.auth.getUser();
        if (auth.data.user) {
          setUserId(auth.data.user.id);
          setEmail(auth.data.user.email);
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
      .insert({ nickname: email, comment, created_at: timeString, videoId, userId });

    if (error) {
      console.error('Error inserting comment:', error.message);
    } else {
      console.log('Comment inserted successfully:', data);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <StInputName
          type="text"
          placeholder="닉네임"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
