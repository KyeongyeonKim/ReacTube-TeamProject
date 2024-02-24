import React from 'react';
import { formatAgo } from 'util/date';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  return (
    <StyledVideoCard>
      <li
        onClick={() => {
          navigate(`videos/detail/${video.id.videoId}}`, { state: { video } });
        }}
      >
        <img src={thumbnails.medium.url} alt={title} />
        <div>
          <p className="title">{title}</p>
          <p className="channelTitle">{channelTitle}</p>
          <p className="publishedAt">{formatAgo(publishedAt, 'ko')}</p>
        </div>
      </li>
    </StyledVideoCard>
  );
}

const StyledVideoCard = styled.li`
  margin-bottom: 20px;

  img {
    width: 100%;
  }

  div {
    margin-top: 10px;

    p {
      margin: 0;
    }

    .title {
      font-weight: bold;
    }

    .channelTitle {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .publishedAt {
      opacity: 0.8;
      font-size: 0.875rem;
    }
  }
`;

export default VideoCard;
