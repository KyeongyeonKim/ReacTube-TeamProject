import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import VideoCard from './VideoCard';
import Youtube from 'util/youtube';
import { Videos, Container, SerchResultTitle, LoadingArea } from 'styles/VideoListStyle';
import Spinner from 'assets/imgs/Spinner.gif';

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
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </Videos>
        </>
      )}
    </Container>
  );
}

export default YoutubeVideoList;
