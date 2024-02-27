import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import VideoCard from './VideoCard';
import Youtube from 'util/youtube';
import { Videos, Container, SerchResultTitle } from 'styles/VideoListStyle';

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
    <Container>
      <SerchResultTitle>{`"${keyword}" 유튜브 검색 결과입니다.`}</SerchResultTitle>
      {isLoading && <p>로딩 중 입니다...</p>}
      {error && <p>검색 중 에러가 발생했습니다.</p>}
      {videos && (
        <Videos>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </Videos>
      )}
    </Container>
  );
}

export default YoutubeVideoList;
