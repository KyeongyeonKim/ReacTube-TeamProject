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
      const { data, error } = await client.auth.signUp({
        email,
        password
      });
      if (error) {
        console.error(error);
        alert('아이디와 비밀번호를 확인해주세요.');
      } else {
        alert('회원가입이 완료됐습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkLogin = async () => {
    const authInfo = await client.auth.getSession();
    const session = authInfo.data.session;
  };

  return (
    <>
      <h2>Sign up </h2>
      <form onSubmit={signupHandler}>
        <div>
          <label>email </label>
          <input
            type="string"
            id="email"
            value={email}
            placeholder="id를 입력하세요."
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
            type="string"
            id="nickname"
            value={nickname}
            placeholder="닉네임을 입력하세요."
            required
            onChange={(event) => {
              setNickname(event.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={() => navigate('/home')}>
          Sign Up
        </button>
      </form>
    </>
  );
}
