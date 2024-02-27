import styled from 'styled-components';

export const makeFlex = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DeleteModalTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 3vh;
  font-family: 'nanum';
  margin-bottom: 2rem;
  padding-bottom: 1rem;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2vh;
  font-family: 'nanum';
  align-items: center;
`;

export const inputStyle = `
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 20vw;
`;
export const StyledInput = styled.input`
  ${inputStyle}
`;

export const StyledButton = styled.button`
  ${inputStyle}
  background-color: white;
  width: 6rem;
  font-family: 'nanum';
  font-size: 2vh;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: lightgray;
  }
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
  width: 40vw;
  height: 40vh;
  background-color: white;
  margin: 2rem;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: top;
`;
