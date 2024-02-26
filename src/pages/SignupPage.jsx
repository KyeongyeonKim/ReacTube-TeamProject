import React, { useState } from 'react';
import client from 'api/supabase';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [loading, setLoading] = useState(false);
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
        alert('이메일을 확인해주세요.');
        await client.from('users').insert([{ id: user.id, email, nickname }]);
        navigate('/login');
      }
    } catch (error) {
      console.error('회원가입 오류', error.message);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
    setLoading(false);
  };

  return (
    <>
      <h2>회원가입</h2>
      <form type="submit" onSubmit={signupHandler}>
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
            placeholder="비밀번호를 입력하세요. "
            min={6}
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          *영문 대소문자, 숫자 포함 (8자 이상)
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
        <button type="submit" disabled={loading}>
          회원가입
        </button>
      </form>
      <div>
        <label>이미 계정이 있으신가요?</label>
        <button type="submit" onClick={() => navigate('/login')}>
          로그인 페이지로 이동
        </button>
      </div>
    </>
  );
}
