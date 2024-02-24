import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import VideoCard from '../VideoCard';
import FakeYoutube from 'api/fakeYoutube';
import styled from 'styled-components';

function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos
  } = useQuery(['videos', keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  });
  return (
    <>
      <div>Videos {keyword ? `${keyword}` : '키워드 없음'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
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

export default Videos;
