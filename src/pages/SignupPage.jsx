import React, { useState } from 'react';
import client from 'api/supabase';
import { useNavigate } from 'react-router-dom';
import { SlEye } from 'react-icons/sl';
import { Resend } from 'resend';
import {
  StyledForm,
  Container,
  StyledSection,
  StyledLabel,
  StyledInput,
  StyledButton,
  SignupTitle,
  SignupButton,
  StyledContent,
  WrongPassword
} from 'styles/pageStyles/SignupPageStyle';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');
  const [showPassword, setShowPassword] = useState('false');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const passwordChangeHandler = (value) => {
    setPassword(value);
    setPasswordMatch(value === passwordConfirm);
  };

  const passwordConfirmChangeHandler = (value) => {
    setPasswordConfirm(value);
    setPasswordMatch(value === password);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signupHandler = async (event) => {
    event.preventDefault();

    await new Promise((resolve) => setTimeout(resolve, 5000));

    if (password !== passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
    try {
      const { user, error } = await client.auth.signUp({
        email,
        password
      });
      if (error) {
        console.error(error);
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      } else {
        alert('회원가입이 완료됐습니다. 이메일을 확인해주세요.');
        sendConfirmationEmail(email);
        await client.from('users').insert([{ email, password }]);
        navigate('/login');
      }
    } catch (error) {
      console.error('회원가입 오류', error.message);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
    setLoading(false);
  };

  const sendConfirmationEmail = async (email) => {
    const resend = new Resend('REACT_APP_RESEND_API_KEY');
    try {
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: '이메일 확인 요청',
        text: '회원가입을 완료하려면 이메일을 확인하세요.',
        tags: [
          {
            name: 'category',
            value: 'confirm-mail'
          }
        ]
      });
    } catch (error) {
      console.error('이메일 전송 오류', error);
    }
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
                type={showPassword ? 'password' : 'text'}
                id="password"
                value={password}
                placeholder="비밀번호를 입력하세요. (8자 이상, 영문 대소문자, 숫자 포함)"
                min={8}
                required
                onChange={(event) => {
                  passwordChangeHandler(event.target.value);
                }}
              />
              <SlEye onClick={() => toggleShowPassword()} />
            </StyledSection>
            <StyledSection>
              <StyledLabel>비밀번호 확인 </StyledLabel>
              <StyledInput
                type="password"
                id="passwordConfirm"
                value={passwordConfirm}
                placeholder="동일한 비밀번호를 입력하세요."
                min={8}
                required
                onChange={(event) => {
                  passwordConfirmChangeHandler(event.target.value);
                }}
              />
            </StyledSection>
            {!passwordMatch && <WrongPassword style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</WrongPassword>}
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
