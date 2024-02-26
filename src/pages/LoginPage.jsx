import { useState } from 'react';
import { signIn, signOut } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import client from '../api/supabase';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGithub = async () => {
    const { user, session, error } = await client.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/home'
      }
    });
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { user, session, error } = await client.auth.signIn({ email, password });

    if (error) {
      alert(error.message);
    } else {
      alert('로그인 성공!');
      navigate('/home');
    }
    setLoading(false);
  };

  const logoutHandler = async () => {
    setLoading(true);
    const { error } = await client.auth.signOut();

    if (error) {
      console.error('로그아웃 오류가 발생했습니다.', error.message);
    } else {
      document.cookie = 'sb:token=; expires=Mon, 19 Feb 2024 00:00:00 GMT;path=/;';
      navigate('/login');
    }
    setLoading(false);
  };

  return (
    <>
      <h2>Sign in </h2>
      <form onSubmit={loginHandler}>
        <input
          type="email"
          placeholder="이메일을 입력하세요."
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit" disabled={loading}>
          이메일, password로 로그인하기
        </button>
        <button
          onClick={() => {
            signInWithGithub();
          }}
          disabled={loading}
        >
          GitHub로 로그인
        </button>
        <FaGithub onClick={() => signInWithGithub()} />
        <div>
          <button onClick={() => navigate('/signup')}>회원가입 페이지로 이동</button>
        </div>
        <div>
          <button onClick={() => logoutHandler()} disabled={loading}>
            로그아웃
          </button>
        </div>
      </form>
    </>
  );
}
