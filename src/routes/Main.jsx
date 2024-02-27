import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageLayout,
  Container,
  StImg,
  Content,
  Texts,
  LoginButtonBox,
  Button,
  SignupButtonBox
} from 'styles/MainPageStyle';
import logo from 'assets/imgs/logo.jpg';
import { useSelector } from 'react-redux';

function Main() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {navigate("/home")} 
  }, []);

  return (
    <PageLayout>
      <Container>
        <StImg src={logo} alt="Logo" />
        <Content>
          <Texts>
            <p>개발 유튜브 영상 공유 & 추천</p>
            <p>함께 만들어가는 영상 커뮤니티</p>
            <p>리액튜브에서 시작하세요.</p>
          </Texts>
          <SignupButtonBox>
            <Button onClick={() => navigate('/signup')}>회원가입하기</Button>
          </SignupButtonBox>
          <Texts>
            <p>이미 가입하셨나요?</p>
          </Texts>
          <LoginButtonBox>
            <Button onClick={() => navigate('/login')}>로그인하기</Button>
          </LoginButtonBox>
        </Content>
      </Container>
    </PageLayout>
  );
}

export default Main;
