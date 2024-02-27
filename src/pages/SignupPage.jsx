import React, { useState } from 'react';
import client from 'api/supabase';
import { useNavigate } from 'react-router-dom';
import {
  StyledForm,
  Container,
  StyledSection,
  StyledLabel,
  StyledInput,
  StyledButton,
  SignupTitle,
  SignupButton,
  StyledContent
} from 'styles/pageStyles/SignupPageStyle';

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
    <Container>
      <>
        <StyledForm type="submit" onSubmit={signupHandler}>
          <SignupTitle>회원가입</SignupTitle>
          <StyledContent>
            <StyledSection>
              <StyledLabel>이메일 </StyledLabel>
              <StyledInput
                type="email"
                id="email"
                value={email}
                placeholder="이메일을 입력하세요."
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </StyledSection>
            <StyledSection>
              <StyledLabel>비밀번호 </StyledLabel>
              <StyledInput
                type="password"
                id="password"
                value={password}
                placeholder="비밀번호를 입력하세요. (8자 이상, 영문 대소문자, 숫자 포함)"
                min={6}
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </StyledSection>
            <StyledSection>
              <StyledLabel>닉네임 </StyledLabel>
              <StyledInput
                type="text"
                id="nickname"
                value={nickname}
                placeholder="닉네임을 입력하세요."
                required
                onChange={(event) => {
                  setNickname(event.target.value);
                }}
              />
            </StyledSection>
          </StyledContent>
          <SignupButton type="submit" disabled={loading}>
            회원가입
          </SignupButton>
        </StyledForm>
        <div>
          <label>이미 계정이 있으신가요?</label>
          <StyledButton type="submit" onClick={() => navigate('/login')}>
            로그인 페이지로 이동
          </StyledButton>
        </div>
      </>
    </Container>
  );
}
