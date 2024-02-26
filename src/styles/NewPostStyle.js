import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  padding: 2rem;
  margin-bottom: 3rem;
`;

export const makeFlex = `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledForm = styled.form`
  ${makeFlex}
  border: .2rem solid black;
  border-radius: 0.5rem;
  padding: 2vh;
  width: 60vw;
  height: 95vh;
  background-color: white;
`;
export const StyledSection = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
`;
export const StyledLabel = styled.label`
  font-weight: bolder;
  align-items: center;
  font-size: 2vh;
`;

export const inputStyle = `
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 42vw;
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
