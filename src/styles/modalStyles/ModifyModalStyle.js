import styled from 'styled-components';

export const makeFlex = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const ModifyPageTitle = styled.div`
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
  font-size: 2vh;
  width: 8vw;
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
  width: 40%;
`;
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  padding: 3rem;
  margin-bottom: 3rem;
  background-color: lightgray;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
`;

export const ModifyPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalForm = styled.div`
  ${makeFlex}
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: initial;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  padding: 3vh;
  width: 65vw;
  height: 90vh;
  background-color: white;
  margin: 2rem;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: top;
`;

export const ThumbnailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  max-width: 589px;
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
