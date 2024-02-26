import React, { useState } from 'react';
import client from 'api/supabase';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const signupHandler = async (event) => {
    event.preventDefault();
    try {
      const { user, error } = await client.auth.signUp({
        email,
        password
      });
      if (error) {
        console.error(error);
        alert('아이디와 비밀번호를 확인해주세요.');
      } else {
        alert('회원가입이 완료됐습니다.');
        navigate('/login');
        await client.from('auth.users').insert([{ id: user.id, email, nickname }]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Sign up </h2>
      <form onSubmit={signupHandler}>
        <div>
          <label>email </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="이메일을 입력하세요."
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <label>password </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="비밀번호를 입력하세요."
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <label>nickname </label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            placeholder="닉네임을 입력하세요."
            required
            onChange={(event) => {
              setNickname(event.target.value);
            }}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
