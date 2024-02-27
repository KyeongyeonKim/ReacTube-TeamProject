import styled from 'styled-components';

export const ButtonArea = styled.div`
  display: flex;
  justify-content: end;
  margin: 1rem 3.5rem auto auto;
`;

export const AddVideoButton = styled.button`
  padding: 1vh;
  margin: 1vh;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  width: 42vw;
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

export const Container = styled.div`
  width: auto;
  height: auto;
  padding: 1rem 3rem;
`;

export const Videos = styled.div`
  width: auto;
  height: auto;
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  gap: 2px;

  @media (min-width: 640px) {
    gap: 2px 4px;
  }
`;

export const StyledVideoCard = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.8rem;

  img {
    width: 100%;
  }

  div {
    margin-top: 10px;

    p {
      margin: 0.3rem;
    }

    .title {
      font-weight: bold;
      font-size: 20px;
    }

    .author {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .timeString {
      opacity: 0.8;
      font-size: 0.875rem;
    }
  }
  &:hover {
    background-color: lightpink;
    cursor: pointer;
  }
`;

export const SerchResultTitle = styled.div`
  background-color: lightgray;
  padding: 1rem;
  font-family: 'nanum';
  font-size: 2vh;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;

export const LoadingArea = styled.div`
  position: fixed;
  background: #eeeeee5e;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
