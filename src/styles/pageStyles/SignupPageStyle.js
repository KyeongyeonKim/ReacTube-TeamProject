import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  padding: 3rem;
  margin-bottom: 3rem;
  margin-left: 5rem;
`;

export const makeFlex = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;
export const StyledForm = styled.form`
  ${makeFlex}
  border: .2rem solid black;
  border-radius: 0.5rem;
  padding: 2vh;
  width: 50vw;
  height: 45vh;
  background-color: white;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: 45rem;
  height: 13rem;
`;

export const SignupTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 3vh;
  font-family: 'nanum';
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid grey;
`;

export const StyledSection = styled.section`
  display: flex;
  width: 100%;
  font-size: 2vh;
  font-family: 'nanum';
  align-items: center;
`;

export const StyledLabel = styled.label`
  font-weight: bolder;
  align-items: center;
  justify-content: center;
  justify-content: center;
  font-size: 2vh;
  width: 12vh;
`;
export const inputStyle = `
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 30vw;
`;
export const StyledInput = styled.input`
  ${inputStyle}
`;

export const StyledButton = styled.button`
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  background-color: white;
  width: auto;
  font-family: 'nanum';
  font-size: 2vh;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export const SignupButton = styled.button`
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
  margin-top: 20px;
  margin-left: 20px;

  &:hover {
    background-color: #b575ff;
    color: white;
  }
`;

export const WrongPassword = styled.div`
  margin-right: 16rem;
  font-family: 'nanum';
`;
