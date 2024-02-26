import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import VideoCard from './VideoCard';
import Youtube from 'util/youtube';
import styled from 'styled-components';

function YoutubeVideoList() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos
  } = useQuery(['videos', keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });
  return (
    <>
      <div>{`"${keyword}" 유튜브 검색 결과입니다.`}</div>
      {isLoading && <p>로딩 중 입니다...</p>}
      {error && <p>검색 중 에러가 발생했습니다.</p>}
      {videos && (
        <VideoList>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </VideoList>
      )}
    </>
  );
}

const VideoList = styled.ul`
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

export default YoutubeVideoList;
