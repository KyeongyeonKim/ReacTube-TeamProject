import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import client from '../api/supabase';
import { checkUser, removeUser } from '../redux/modules/authSlice';
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
          <StyledButton onClick={() => navigate('/signup')}>회원가입 페이지로 이동</StyledButton>
        </div>
        <div>
          <label>비밀번호를 잊어버리셨나요?</label>
          <StyledButton type="submit" onClick={resetPassword}>
            비밀번호 재설정
          </StyledButton>
        </div>
      </Buttons>
    </Container>
  );
}
