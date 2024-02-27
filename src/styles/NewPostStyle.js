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
`;

export const StyledForm = styled.form`
  ${makeFlex}
  border: .2rem solid black;
  border-radius: 0.5rem;
  padding: 4vh;
  width: 62vw;
  height: 110vh;
  background-color: white;
`;

export const NewPostTitle = styled.div`
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
  width: 12vh;
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
    background-color: #b575ff;
    color: white;
  }
`;
export const StyledImage = styled.img`
  border-radius: 0.5rem;
  width: 60%;
`;

export const ThumbnailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 589px;
  height: 100%;
  max-height: 331px;
  background-color: lightgray;
  gap: 1rem;
  flex-grow: 1;
`;

export const ThumbnailTitle = styled.div`
  font-family: 'nanum';
`;

export const ThumbnailContent = styled.div`
  font-family: 'nanum';
`;

export const StyledPostButton = styled.button`
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 200px;
  background-color: white;
  font-family: 'nanum';
  font-size: 2vh;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: #b575ff;
    color: white;
  }
`;
