import styled from 'styled-components';

export const SearchWrap = styled.div`
  padding: 1rem 3rem;
  width: 100%;
`;
export const NoDataArea = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 25px;
`;
export const PageTitle = styled.h2`
  margin: 10px 0 30px;
  font-size: 20px;
  font-family: 'nanum', sans-serif;
`;
export const SearchListArea = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 16px;
`;
export const Item = styled.li`
  /* width: calc((100% - 16px) / 1); */

  @media (min-width: 640px) {
    width: calc((100% - 16px) / 2);
  }

  @media (min-width: 768px) {
    width: calc((100% - 32px) / 3);
  }

  @media (min-width: 1024px) {
    width: calc((100% - 48px) / 4);
  }
`;
export const Thumbnail = styled.figure`
  width: 100%;
  /* height: 230px; */
  border-radius: 5px;
  overflow: hidden;
  background: #f1f1f1;
  aspect-ratio: 16 / 9;

  & img {
    width: 100%;
    transition: all 0.3s;
  }

  & img:hover {
    transform: scale(1.1);
  }
`;
export const ItemTitle = styled.div`
  margin: 10px 0 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & a {
    color: inherit;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
  }
`;
export const Time = styled.span`
  margin-bottom: 10px;
  display: inline-block;
  color: #999999;
`;
export const StyledVideoCard = styled.li`
  margin-bottom: 20px;

  img {
    width: 100%;
  }

  div {
    margin-top: 10px;

    p {
      margin: 0;
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
