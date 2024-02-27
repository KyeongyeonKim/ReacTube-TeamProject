import React, { useEffect, useRef, useState } from 'react';
import { Item, ItemTitle, NoDataArea, PageTitle, SearchListArea, SearchWrap, Thumbnail } from 'styles/SearchStyle';
import client from 'api/supabase';
import { Link, useSearchParams } from 'react-router-dom';
import { LazyLoadedImage } from './LazyLoadedImage';

const SearchList = () => {
  const [data, setData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('keyword');

  const [visibleIndices, setVisibleIndices] = useState([]);
  const imageRefs = useRef([]);

  //데이터 조회
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await client.from('content').select('*').like('title', `%${searchKeyword}%`);
        if (error) {
          throw error;
        }
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        alert('검색 중 에러가 발생하였습니다. 잠시 후 다시 시도해주세요.');
      }
    };

    fetchData();
  }, [searchKeyword]);

  // console.log(data);

  //IntersectionObserver : 대상요소와 최상위 문서의 뷰포트가 서로 교차하는 영역이 달라지는 경우를 비동기적으로 감지
  //supabase에서 가져온 data 의 값이 변경될 때 실행
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = imageRefs.current.indexOf(entry.target);
          setVisibleIndices((prevVisibleIndices) => [...prevVisibleIndices, index]);
        }
      });
    });

    imageRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [data]);

  return (
    <SearchWrap>
      {data && data.length > 0 ? (
        <>
          <PageTitle>"{searchKeyword}" 검색 결과 입니다.</PageTitle>
          <SearchListArea>
            {data?.map((el, index) => {
              const src = el.videoId ? `https://img.youtube.com/vi/${el.videoId}/maxresdefault.jpg` : '';
              return (
                <Item key={el.id}>
                  <Thumbnail ref={(e) => (imageRefs.current[index] = e)}>
                    {visibleIndices.includes(index) && (
                      <Link to={`/detail/${el.id}`}>
                        <LazyLoadedImage src={src} alt={'썸네일'} />
                      </Link>
                    )}
                  </Thumbnail>
                  <ItemTitle>
                    <Link to={`/detail/${el.id}`}>{el.title}</Link>
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
