import styled from 'styled-components';

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
  height: 95vh;
`;
export const StyledSmallContainer = styled.div`
  ${makeFlex}
  border: .2rem solid black;
  border-radius: 0.5rem;
  padding: 2vh;
  width: 50vw;
  height: 80vh;
`
export const StyledSection = styled.section`
  ${makeFlex}
  width: 100%;
`;
export const StyledLabel = styled.label`
  font-weight: bolder;
  font-size: 2vh;
`
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