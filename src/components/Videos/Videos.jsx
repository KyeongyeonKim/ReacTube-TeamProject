import React from 'react';
import './Videos.css';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos
  } = useQuery(['videos', keyword], async () => {
    return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`);
  });
  return <div>Videos {keyword ? `${keyword}` : '키워드 없음'}</div>;
}

export default Videos;
