import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import client from '../api/supabase';
import { checkUser, removeUser } from '../redux/modules/authSlice';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmail = async () => {
    try {
      const { user, session, error } = await client.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      console.log(user, session);
      alert('로그인 성공!');
      navigate('/home');
    } catch (error) {
      console.error('로그인 오류', error.message);
      alert(error.message);
    }
    setLoading(false);
  };

  const signInWithGithub = async () => {
    try {
      const { user, session, error } = await client.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: 'http://localhost:3000/home'
        }
      });
      if (error) throw error;
      console.log(user, session);
      alert('Github 로그인 성공');
      navigate('/home');
    } catch (error) {
      console.error('Github 로그인 오류', error.message);
      alert('Github 로그인 실패', error.message);
    }
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    await signInWithEmail();
    setLoading(false);
  };

  const logoutHandler = async () => {
    setLoading(true);
    try {
      const { error } = await client.auth.signOut();
      if (error) throw error;
      const { error: githubError } = await client.auth.signOut({ provider: 'github' });
      if (githubError) throw githubError;
      document.cookie = 'sb:token=; expires=Mon, 19 Feb 2024 00:00:00 GMT;path=/;';
      navigate('/home');
    } catch (error) {
      console.error('로그아웃 오류', error.message);
    }
    setLoading(false);
  };

  const resetPassword = async () => {
    try {
      const { data, error } = await client.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.href
      });
      if (error) throw error;
      console.log('비밀번호 재설정 이메일이 발송되었습니다.');
      alert('비밀번호 재설정 이메일이 발송되었습니다.');
    } catch (error) {
      console.log('비밀번호 재설정 오류', error.message);
      alert('비밀번호 재설정 요청을 처리하는 중에 오류가 발생했습니다.', error.message);
    }
  };

  return (
    <>
      <h2>로그인</h2>
      <form onSubmit={loginHandler}>
        <div>
          <input
            type="email"
            placeholder="이메일을 입력하세요."
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요."
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          로그인하기
        </button>
        <div>
          <button
            onClick={() => {
              signInWithGithub();
            }}
            disabled={loading}
          >
            GitHub로 로그인
          </button>
          <FaGithub onClick={() => signInWithGithub()} />
        </div>
        <div>
          <button onClick={() => navigate('/signup')}>회원가입 페이지로 이동</button>
        </div>
        <div>
          <div>
            <label>비밀번호를 잊어버리셨나요?</label>
            <button type="submit" onClick={resetPassword}>
              비밀번호 재설정
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
