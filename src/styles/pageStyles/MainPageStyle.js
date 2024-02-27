import styled from 'styled-components';

export const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkgray;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;
  background-color: white;
`;

export const StImg = styled.img`
  width: 23rem;
  height: 23rem;
  border-radius: 1rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 28rem;
  height: 20rem;
  font-size: 20px;
  font-family: 'nanum';
  gap: 1rem;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LoginButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 23rem;
  background-color: white;
  font-family: 'nanum';
  font-size: 2vh;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #b575ff;
    color: white;
  }
`;

export const SignupButtonBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;
