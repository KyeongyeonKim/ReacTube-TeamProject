import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 50rem;
`;

export const StyledBackButton = styled.button`
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 10vw;
  background-color: white;
  font-family: 'nanum';
  font-size: 2vh;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export const StyledModifyButton = styled.button`
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 6vw;
  background-color: white;
  font-family: 'nanum';
  font-size: 2vh;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
