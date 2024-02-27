import styled from 'styled-components';

export const StDiv = styled.div`
  width: 90%;
  margin: 20px 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
`;

export const StP = styled.p`
  line-height: 1.5;
`;

export const StButton = styled.button`
  width: 50px;
  margin-top: 10px;
  margin-right: 10px;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export const StInput = styled.input`
  height: 25px;
  margin: 20px 10px 20px 0;
  font-family: 'nanum';
  font-size: 12px;
`;
