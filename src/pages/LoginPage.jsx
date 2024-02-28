import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import client from '../api/supabase';
import { Resend } from 'resend';
import { checkUser } from '../redux/modules/authSlice';
import {
  Container,
  StyledForm,
  LoginTitle,
  StyledSection,
  StyledInput,
  StyledLabel,
  StyledButton,
  Buttons,
  LoginButton
} from 'styles/pageStyles/LoginPageStyle';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const signInWithEmail = async () => {
    try {
      const { data, error } = await client.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      dispatch(checkUser(data.session.access_token));
      alert('로그인 성공!');
      navigate('/home');
    } catch (error) {
      console.error('로그인 오류', error.message);
      alert(error.message);
    }
    setLoading(false);
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    await signInWithEmail();
    setLoading(false);
  };

  return (
    <Container>
      <StyledForm onSubmit={loginHandler}>
        <LoginTitle>로그인</LoginTitle>
        <StyledSection>
          <StyledLabel>이메일 </StyledLabel>
          <StyledInput
            type="email"
            placeholder="이메일을 입력하세요."
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </StyledSection>
        <StyledSection>
          <StyledLabel>비밀번호 </StyledLabel>
          <StyledInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </StyledSection>
        <Buttons>
          <LoginButton type="submit" disabled={loading}>
            로그인하기
          </LoginButton>
        </Buttons>
      </StyledForm>
      <Buttons>
        <div>
          <label>계정이 없으신가요?</label>
          <StyledButton onClick={() => navigate('/signup')}>회원가입 페이지로 이동</StyledButton>
        </div>
      </Buttons>
    </Container>
  );
}
