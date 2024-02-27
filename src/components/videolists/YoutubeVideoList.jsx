import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import VideoCard from './VideoCard';
import Youtube from 'api/youtube';
import { Videos, Container, SerchResultTitle, LoadingArea } from 'styles/searchStyles/VideoListStyle';
import Spinner from 'assets/imgs/Spinner.gif';
import { LazyLoadedImage } from 'components/LazyLoadedImage';

function YoutubeVideoList() {
  const [visibleIndices, setVisibleIndices] = useState([]);
  const imageRefs = useRef([]);
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos
  } = useQuery(['videos', keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });

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
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [videos]);

  return (
    <Container>
      {isLoading && (
        <LoadingArea>
          <img src={Spinner} alt="로딩중입니다." />
        </LoadingArea>
      )}
      {error && <p>검색 중 에러가 발생했습니다.</p>}
      {videos && (
        <>
          <SerchResultTitle>{`"${keyword}" 유튜브 검색 결과입니다.`}</SerchResultTitle>
          <Videos>
            {videos.map((video, index) => {
              const thumbnails = video.snippet.thumbnails;
              return (
                <div key={video.id} ref={(e) => (imageRefs.current[index] = e)}>
                  <VideoCard video={video}>
                    {visibleIndices.includes(index) && <LazyLoadedImage src={thumbnails.medium.url} alt={'썸네일'} />}
                  </VideoCard>
                </div>
              );
            })}
          </Videos>
        </>
      )}
    </Container>
  );
}

export default YoutubeVideoList;
