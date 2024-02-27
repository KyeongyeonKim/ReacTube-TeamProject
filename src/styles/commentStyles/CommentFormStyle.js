import styled from 'styled-components';

export const StCommentArea = styled.div`
  display: flex;
`;

export const StInputName = styled.input`
  height: 40px;
  margin: 20px 10px;
  font-family: 'nanum';
  font-size: 16px;
`;

export const StArea = styled.textarea`
  flex: 1;
  width: 70%;
  height: 80px;
  padding: 10px;
  margin: 0 20px 20px 10px;
  font-family: 'nanum';
  font-size: 18px;
`;

export const StButton = styled.button`
  height: 80px;
  margin: 0 20px 20px 0;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  background-color: white;
  font-family: 'nanum';
  font-size: 2vh;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
