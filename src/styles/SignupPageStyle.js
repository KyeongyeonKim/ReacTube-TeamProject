import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  padding: 3rem;
  margin-bottom: 3rem;
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
  width: 60vw;
  height: 40vh;
  background-color: white;
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

export const StyledSmallContainer = styled.div`
  ${makeFlex}
  border: .2rem solid black;
  border-radius: 0.5rem;
  padding: 2vh;
  width: 80vw;
  height: 80vh;
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
export const StyledTextarea = styled.textarea`
  resize: none;
  ${inputStyle}
`;
export const StyledButton = styled.button`
  ${inputStyle}
  background-color: white;
  width: auto;
  font-family: 'nanum';
  font-size: 2vh;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
export const StyledImage = styled.img`
  border-radius: 0.5rem;
  width: 90%;
`;
export const StyledItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  border-radius: 0.5rem;
  padding: 2vh;
  width: 100%;
  gap: 1vh;
  flex-wrap: wrap;
  grid-auto-rows: 20vh;

  & h3 {
    text-align: center;
    margin-top: 2vh;
  }
`;
export const StyledItem = styled.div`
  ${makeFlex}
  padding: 1.5vh 0;

  &:hover {
    background-color: lightpink;
    cursor: pointer;
  }
`;
export const ModalContainer = styled.div`
  ${makeFlex}
  background-color: lightgray;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
export const ModalForm = styled.div`
  ${makeFlex}
  position: absolute;
  top: 0;
  z-index: initial;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  padding: 2vh;
  width: 50vw;
  height: 95vh;
  background-color: white;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: top;
`;
