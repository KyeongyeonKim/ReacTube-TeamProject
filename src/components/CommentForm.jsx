import React, { useState } from 'react';

function CommentForm({ onSubmit }) {
  const [nickname, setNickname] = useState('');
  const [comment, setComment] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ nickname, comment, password });
    setNickname('');
    setComment('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>닉네임:</label>
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
      </div>
      <div>
        <label>댓글 내용:</label>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} required />
      </div>
      <div>
        <label>비밀번호:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">댓글 남기기</button>
    </form>
  );
}

export default CommentForm;
