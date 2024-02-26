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
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
