import React, { useEffect, useState } from 'react';
import { Item, ItemTitle, NoDataArea, PageTitle, SearchListArea, SearchWrap, Thumbnail } from 'styles/SearchStyle';
import client from 'api/supabase';
import { Link, useSearchParams } from 'react-router-dom';

const SearchList = () => {
  const [data, setData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('keyword');

  //데이터 조회
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await client.from('video').select('*').like('title', `%${searchKeyword}%`);
        if (error) {
          throw error;
        }
        setData(data);
      } catch (error) {
        console.log('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [searchKeyword]);

  // console.log(data);

  return (
    <SearchWrap>
      {data && data.length > 0 ? (
        <>
          <PageTitle>"{searchKeyword}" 검색 결과 입니다.</PageTitle>
          <SearchListArea>
            {data?.map((el) => {
              const src = el.videoId ? `https://img.youtube.com/vi/${el.videoId}/maxresdefault.jpg` : '';
              return (
                <Item key={el.id}>
                  <Thumbnail>
                    <Link to={`/detail/${el.videoId}`}>
                      <img src={src} alt="썸네일" />
                    </Link>
                  </Thumbnail>
                  <ItemTitle>
                    <Link to={`/detail/${el.videoId}`}>{el.title}</Link>
                  </ItemTitle>
                </Item>
              );
            })}
          </SearchListArea>
        </>
      ) : (
        <NoDataArea>"{searchKeyword}" 검색 결과가 없습니다.</NoDataArea>
      )}
    </SearchWrap>
  );
};

export default SearchList;
