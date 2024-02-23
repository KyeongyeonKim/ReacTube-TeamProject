import styled from 'styled-components';

export const SearchWrap = styled.div`
  padding: 1rem;
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
  margin-bottom: 30px;
  font-size: 20px;
`;
export const SearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 16px;
`;
export const Item = styled.li`
  width: calc((100% - 32px) / 3);
`;
export const Thumbnail = styled.figure`
  height: 230px;
  border-radius: 5px;
  overflow: hidden;
  background: #f1f1f1;
`;
export const ItemTitle = styled.span`
  padding-top: 5px;
  display: inline-block;
`;
