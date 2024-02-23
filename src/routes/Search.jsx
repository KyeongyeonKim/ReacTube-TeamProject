import React from 'react';
import { Item, ItemTitle, NoDataArea, PageTitle, SearchList, SearchWrap, Thumbnail } from 'styles/SearchStyle';

function Search() {
  return (
    <SearchWrap>
      <PageTitle>"검색어" 검색 결과 입니다.</PageTitle>
      <SearchList>
        <Item>
          <Thumbnail>
            <img src="" alt="썸네일" />
          </Thumbnail>
          <div>타이틀</div>
        </Item>
        <Item>
          <Thumbnail>
            <img src="" alt="썸네일" />
          </Thumbnail>
          <div>타이틀</div>
        </Item>
        <Item>
          <Thumbnail>
            <img src="" alt="썸네일" />
          </Thumbnail>
          <div>타이틀</div>
        </Item>
        <Item>
          <Thumbnail>
            <img src="" alt="썸네일" />
          </Thumbnail>
          <ItemTitle>타이틀이 나오는 영역입니다.</ItemTitle>
        </Item>
      </SearchList>
      {/* <NoDataArea>검색 결과가 없습니다.</NoDataArea> */}
    </SearchWrap>
  );
}

export default Search;
