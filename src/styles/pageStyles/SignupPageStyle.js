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
  padding-bottom: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: 45rem;
  max-width: 80%;
`;

export const SignupTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1.7rem;
  font-family: 'nanum';
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid grey;
`;

export const StyledSection = styled.section`
  display: flex;
  width: 100%;
  font-size: 1.1rem;
  font-family: 'nanum';
  align-items: center;
`;

export const StyledLabel = styled.label`
  font-weight: bolder;
  align-items: center;
  justify-content: center;
  justify-content: center;
  font-size: 1.1rem;
  width: 12vh;
`;
export const inputStyle = `
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: calc(100% - 160px);
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
  font-size: 1.1rem;
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
  font-size: 1.1rem;
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
  position: absolute;
  bottom: 0;
  left: 140px;
  font-family: 'nanum';
`;
