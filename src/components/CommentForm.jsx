import React, { useState } from 'react';
import client from 'api/supabase';

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
        <label>닉네임:</label>
        <input type="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
      </div>
      <div>
        <label>댓글 내용:</label>
        <input type="comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
      </div>
      <div>
        <label>비밀번호:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">댓글 등록</button>
    </form>
  );
};

export default CommentForm;
