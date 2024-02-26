import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  border-bottom: 0.1rem solid gray;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StImg = styled.img`
  width: 13rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const SelectBox = styled.div`
  padding: 0.5rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBox = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  width: 45rem;
`;

export const SearchInput = styled.input`
  width: auto;
  height: 2.5rem;
  flex-grow: 1;
  border: none;
  border-bottom: 1px solid black;
  padding: 1rem;
`;

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0.5rem;
  cursor: pointer;
`;

export const StButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 0 10px;
  color: black;

  &:hover {
    transform: scale(1.2);
    font-weight: 600;
    color: #c3acd0;
  }
`;
