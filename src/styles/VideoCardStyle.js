import styled from 'styled-components';

export const StyledVideoCard = styled.li`
  margin-bottom: 20px;

  img {
    width: 100%;
  }

  div {
    margin-top: 10px;

    p {
      margin: 0;
      gap: 5px;
    }

    .title {
      font-weight: bold;
    }

    .channelTitle {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .publishedAt {
      opacity: 0.8;
      font-size: 0.875rem;
    }
  }
`;
