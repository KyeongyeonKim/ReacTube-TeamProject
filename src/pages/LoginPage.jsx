import { useState } from 'react';
import { signInWithOAuth, signOut, signInWithPassword } from '@supabase/supabase-js';
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
    const { user, session, error } = await client.auth.signInWithEmailAndPassword({ email, password });

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
          placeholder="Write your password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button onClick={() => signInWithPassword()} disabled={loading}>
          이메일, password로 로그인하기
        </button>
        <button
          onClick={() => {
            signInWithGithub();
          }}
          disabled={loading}
        >
          login with github
        </button>
        <FaGithub onClick={() => signInWithGithub()} />
        <div>
          <button onClick={() => navigate('/signup')}>Go to SignUp page</button>
        </div>
        <div>
          <button onClick={() => logoutHandler()} disabled={loading}>
            Logout
          </button>
        </div>
      </form>
    </>
  );
}
