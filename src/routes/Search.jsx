import React, { useEffect, useState } from 'react';
import { Item, ItemTitle, NoDataArea, PageTitle, SearchList, SearchWrap, Thumbnail } from 'styles/SearchStyle';

import { createClient } from '@supabase/supabase-js';

function Search() {
  const [data, setData] = useState();
  const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);
  const searchKeyword = '리액트'; //검색어 부분은 나중에 prams 로 작업예정

  //데이터 조회
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('video').select('*').like('title', `%${searchKeyword}%`);
        if (error) {
          throw error;
        }
        setData(data);
      } catch (error) {
        console.log('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  // console.log(data);

  return (
    <SearchWrap>
      {data && data.length > 0 ? (
        <>
          <PageTitle>"{searchKeyword}" 검색 결과 입니다.</PageTitle>
          <SearchList>
            {data?.map((el) => {
              const src = el.videoId ? `https://img.youtube.com/vi/${el.videoId}/maxresdefault.jpg` : '';
              return (
                <Item key={el.id}>
                  <Thumbnail>
                    <img src={src} alt="썸네일" />
                  </Thumbnail>
                  <ItemTitle>{el.title}</ItemTitle>
                </Item>
              );
            })}
          </SearchList>
        </>
      ) : (
        <NoDataArea>"{searchKeyword}" 검색 결과가 없습니다.</NoDataArea>
      )}
    </SearchWrap>
  );
}

export default Search;
