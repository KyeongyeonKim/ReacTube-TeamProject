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

export const LoginTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1.7rem;
  font-family: 'nanum';
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid grey;
`;

export const StyledForm = styled.form`
  ${makeFlex}
  border: .2rem solid black;
  border-radius: 0.5rem;
  padding: 2vh;
  width: 50vw;
  height: 40vh;
  background-color: white;
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
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.1rem;
  font-family: 'nanum';
  align-items: center;
`;
export const StyledLabel = styled.label`
  display: flex;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
  justify-content: center;
  font-size: 1.1rem;
  width: 8vh;
`;
export const inputStyle = `
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 23rem;
`;
export const StyledInput = styled.input`
  ${inputStyle}
  margin-right: 70px;
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
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export const LoginButton = styled.button`
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
  margin-top: 30px;
  margin-left: 20px;

  &:hover {
    background-color: #b575ff;
    color: white;
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
